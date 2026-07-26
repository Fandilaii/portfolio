import { useEffect, useRef } from 'react'
import { LOCALES, useLocale } from '../i18n/index.jsx'

// First-visit language picker. Shown only when no choice has ever been stored.
//
// The prompt is trilingual and each option is written in its own language, so
// it reads regardless of what the visitor speaks. The browser-detected language
// is pre-focused and badged, making the common path a single click — and the
// page already renders in that language behind the panel, so confirming it
// causes no visible change.
export default function LangGate() {
  const { needsChoice, chooseLocale, suggested } = useLocale()
  const panelRef = useRef(null)
  const restoreRef = useRef(null)

  useEffect(() => {
    if (!needsChoice) return
    restoreRef.current = document.activeElement

    // Focus the suggested option so Enter alone completes the task.
    const panel = panelRef.current
    const opts = panel?.querySelectorAll('button') ?? []
    const preferred = panel?.querySelector('[data-suggested="true"]') ?? opts[0]
    preferred?.focus()

    // Lock background scroll while the dialog owns the screen.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') {
        // Escape is an exit, not a trap — accept the detected language.
        chooseLocale(suggested)
        return
      }
      if (e.key !== 'Tab' || opts.length === 0) return
      // Simple focus trap: only the option buttons are focusable in here.
      const first = opts[0]
      const last = opts[opts.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      if (restoreRef.current instanceof HTMLElement) restoreRef.current.focus()
    }
  }, [needsChoice, chooseLocale, suggested])

  if (!needsChoice) return null

  return (
    <div className="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <div className="gate__panel" ref={panelRef}>
        <span className="gate__eyebrow mono-label">
          <span className="gate__dot" aria-hidden="true" /> Fandi&nbsp;Lai
        </span>

        <h2 className="gate__title display" id="gate-title">
          <span lang="en">Choose your language</span>
          <span lang="id">Pilih bahasa</span>
          <span lang="ja">言語を選択</span>
        </h2>

        <div className="gate__opts">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              lang={l.code}
              data-suggested={l.code === suggested}
              className="gate__opt"
              onClick={() => chooseLocale(l.code)}
            >
              <span className="gate__code display">{l.label}</span>
              <span className="gate__name">{l.name}</span>
              {l.code === suggested && (
                <span className="gate__badge mono-label" lang="en">Detected</span>
              )}
              <span className="gate__arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </div>

        <p className="gate__note mono-label" lang="en">
          You can switch any time from the nav.
        </p>
      </div>
    </div>
  )
}
