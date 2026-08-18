import { onSectionClick } from '../lib/scrollToSection.js'
import useScrollMetrics from '../hooks/useScrollMetrics.js'
import { useT } from '../i18n/index.jsx'

// Fixed bottom-right, fades in once you've scrolled past roughly one screen.
// Not direction-coupled like the nav's hide-on-scroll-down: this button's
// whole job is getting back up regardless of which way you just scrolled, so
// hiding it on scroll-down would hide it exactly when it's wanted.
//
// Reuses the same scrollToSection('top') helper as the footer's text link and
// the nav brand, and the shared useScrollMetrics listener rather than adding
// a second scroll handler — see that hook's header comment.
export default function BackToTop() {
  const { ui } = useT()
  const { y } = useScrollMetrics()
  const visible = y > window.innerHeight * 0.9

  return (
    <a
      href="#top"
      onClick={onSectionClick('top')}
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      aria-label={ui.footer.backToTop}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span className="back-to-top__arrow" aria-hidden="true">↑</span>
    </a>
  )
}
