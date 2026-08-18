import { useEffect, useState } from 'react'
import { onSectionClick } from '../lib/scrollToSection.js'
import { TransitionLink } from '../lib/transitionNav.jsx'
import useScrollMetrics from '../hooks/useScrollMetrics.js'
import LangSwitcher from './LangSwitcher.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { useT } from '../i18n/index.jsx'

// Fixed top bar. Section links call scrollToSection rather than a real href —
// under BrowserRouter a bare `#work` anchor would still work, but routing it
// through scrollToSection keeps behaviour identical whether the link fires
// from the home page or (via TransitionLink) after navigating back to it.
//
// Below 450px the inline link row doesn't fit comfortably (brand + 4 links +
// lamp switch + lang switcher + CTA), so .nav__links itself becomes a
// collapsible dropdown behind a hamburger toggle — same markup, same
// ThemeToggle/LangSwitcher instances, CSS just relayouts the container. No
// duplicated nav for mobile to keep in sync.
export default function Nav({ variant = 'home' }) {
  const { profile, ui } = useT()
  const { direction, atTop } = useScrollMetrics()
  const hidden = direction === 'down' && !atTop
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // Lock background scroll while the dropdown is open, and let Escape close
  // it — same conventions LangGate uses for its overlay.
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  // A link click should close the menu immediately — onSectionClick already
  // scrolls, this just layers the dropdown-close on top of whatever handler
  // (or lack of one, for TransitionLink) the link already has.
  const closeAnd = (fn) => (e) => { close(); fn?.(e) }

  return (
    <header className={`nav ${hidden ? 'nav--hidden' : ''}`}>
      <div className="shell nav__inner">
        <TransitionLink
          to="/"
          className="nav__brand mono-label"
          aria-label={`${ui.nav.home} — ${profile.name}`}
          onClick={closeAnd(variant === 'home' ? onSectionClick('top') : undefined)}
        >
          <span className="nav__dot" /> Fandi&nbsp;Lai
        </TransitionLink>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>

        <nav id="nav-links" className={`nav__links mono-label ${open ? 'nav__links--open' : ''}`}>
          {variant === 'home' ? (
            <>
              <a href="#work" onClick={closeAnd(onSectionClick('work'))}>{ui.nav.work}</a>
              <a href="#index" onClick={closeAnd(onSectionClick('index'))}>{ui.nav.resume}</a>
              <a href="#about" onClick={closeAnd(onSectionClick('about'))}>{ui.nav.about}</a>
              <div className="nav__utility">
                <ThemeToggle />
                <LangSwitcher />
              </div>
              <a href="#contact" onClick={closeAnd(onSectionClick('contact'))} className="nav__cta">{ui.nav.contact}</a>
            </>
          ) : (
            <>
              <TransitionLink to="/" state={{ scrollTo: 'work' }} onClick={close}>{ui.nav.allWork}</TransitionLink>
              <div className="nav__utility">
                <ThemeToggle />
                <LangSwitcher />
              </div>
              <a href={`mailto:${profile.email}`} className="nav__cta" onClick={close}>{ui.nav.email}</a>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
