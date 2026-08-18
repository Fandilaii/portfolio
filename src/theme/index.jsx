import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'fl-theme'
const QUERY = '(prefers-color-scheme: dark)'
const Ctx = createContext(null)

function readSaved() {
  if (typeof window === 'undefined') return null
  try {
    const saved = window.localStorage?.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : null
  } catch { return null } // private mode / storage disabled
}

function systemPrefersDark() {
  return typeof window !== 'undefined' && window.matchMedia?.(QUERY).matches
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => readSaved() ?? (systemPrefersDark() ? 'dark' : 'light'))

  // Until the visitor makes an explicit choice, keep following the OS theme
  // live — same live-listener pattern as usePrefersReducedMotion. The instant
  // setTheme is called, this effect's dependency on `hasChoice` unsubscribes it.
  useEffect(() => {
    if (readSaved() !== null) return
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia(QUERY)
    const onChange = (e) => setThemeState(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const setTheme = useCallback((next) => {
    if (next !== 'light' && next !== 'dark') return
    setThemeState(next)
    try { window.localStorage?.setItem(STORAGE_KEY, next) } catch { /* private mode */ }
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try { window.localStorage?.setItem(STORAGE_KEY, next) } catch { /* private mode */ }
      return next
    })
  }, [])

  // The inline head script already set this before first paint when a choice
  // was stored; this keeps it in sync for every subsequent change (including
  // the live system-preference case, which the head script never sees).
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useTheme() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
