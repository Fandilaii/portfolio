import { onSectionClick } from '../lib/scrollToSection.js'
import { TransitionLink } from '../lib/transitionNav.jsx'
import useScrollMetrics from '../hooks/useScrollMetrics.js'
import LangSwitcher from './LangSwitcher.jsx'
import { useT } from '../i18n/index.jsx'

// Fixed top bar. Section links call scrollToSection rather than setting the
// hash — under HashRouter the hash is the route, so `href="#work"` would blank
// the page.
export default function Nav({ variant = 'home' }) {
  const { profile, ui } = useT()
  const { direction, atTop } = useScrollMetrics()
  const hidden = direction === 'down' && !atTop

  return (
    <header className={`nav ${hidden ? 'nav--hidden' : ''}`}>
      <div className="shell nav__inner">
        <TransitionLink
          to="/"
          className="nav__brand mono-label"
          aria-label={`${ui.nav.home} — ${profile.name}`}
          onClick={variant === 'home' ? onSectionClick('top') : undefined}
        >
          <span className="nav__dot" /> Fandi&nbsp;Lai
        </TransitionLink>

        <nav className="nav__links mono-label">
          {variant === 'home' ? (
            <>
              <a href="#work" onClick={onSectionClick('work')}>{ui.nav.work}</a>
              <a href="#index" onClick={onSectionClick('index')}>{ui.nav.resume}</a>
              <a href="#about" onClick={onSectionClick('about')}>{ui.nav.about}</a>
              <LangSwitcher />
              <a href="#contact" onClick={onSectionClick('contact')} className="nav__cta">{ui.nav.contact}</a>
            </>
          ) : (
            <>
              <TransitionLink to="/" state={{ scrollTo: 'work' }}>{ui.nav.allWork}</TransitionLink>
              <LangSwitcher />
              <a href={`mailto:${profile.email}`} className="nav__cta">{ui.nav.email}</a>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
