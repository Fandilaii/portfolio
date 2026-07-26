import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import * as en from './locales/en.js'
import * as id from './locales/id.js'
import * as ja from './locales/ja.js'

const BUNDLES = { en, id, ja }
export const LOCALES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'id', label: 'ID', name: 'Bahasa Indonesia' },
  { code: 'ja', label: 'JP', name: '日本語' },
]

const STORAGE_KEY = 'fl-locale'
const Ctx = createContext(null)

function readSaved() {
  if (typeof window === 'undefined') return null
  try {
    const saved = window.localStorage?.getItem(STORAGE_KEY)
    return saved && BUNDLES[saved] ? saved : null
  } catch { return null } // private mode / storage disabled
}

// Best guess from the browser, used to pre-select an option in the first-run
// picker so the common case is a single click.
function detectBrowser() {
  if (typeof navigator === 'undefined') return 'en'
  const nav = (navigator.languages?.[0] || navigator.language || 'en').toLowerCase()
  if (nav.startsWith('id')) return 'id'
  if (nav.startsWith('ja')) return 'ja'
  return 'en'
}

export function LocaleProvider({ children }) {
  const saved = readSaved()
  const suggested = detectBrowser()
  // Render in the detected language behind the picker, so choosing it is a
  // no-op and the page never flashes from one language to another.
  const [locale, setLocaleState] = useState(saved ?? suggested)
  // Only ask when we have never been told.
  const [needsChoice, setNeedsChoice] = useState(saved === null)

  const setLocale = useCallback((code) => {
    if (!BUNDLES[code]) return
    setLocaleState(code)
    try { window.localStorage?.setItem(STORAGE_KEY, code) } catch { /* private mode */ }
  }, [])

  // Confirming from the first-run picker both sets and dismisses.
  const chooseLocale = useCallback((code) => {
    setLocale(code)
    setNeedsChoice(false)
  }, [setLocale])

  // Keep the document language in sync — screen readers pick pronunciation from
  // this, and `ja` also switches the font stack via CSS. Title and description
  // move too: they are what search and AI screeners read first.
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dataset.lang = locale

    const meta = BUNDLES[locale].ui.meta
    document.title = meta.title
    const set = (sel, val) => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute('content', val)
    }
    set('meta[name="description"]', meta.description)
    set('meta[property="og:title"]', meta.title)
    set('meta[property="og:description"]', meta.description)
  }, [locale])

  const value = useMemo(
    () => ({ locale, setLocale, chooseLocale, needsChoice, suggested, t: BUNDLES[locale] }),
    [locale, setLocale, chooseLocale, needsChoice, suggested]
  )
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

// Active locale bundle: profile, ui, caseStudies, workIndex, skills, …
export function useT() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useT must be used inside <LocaleProvider>')
  return ctx.t
}

export function useLocale() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>')
  return ctx
}
