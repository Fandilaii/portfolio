import { onSectionClick } from '../lib/scrollToSection.js'
import useInView from '../hooks/useInView.js'
import { useT } from '../i18n/index.jsx'

// Big CTA with each character lifting in. aria-label keeps the link's
// accessible name intact rather than exposing it letter by letter.
function CtaChars({ lines, inView }) {
  let n = 0
  return lines.map((line, li) => (
    <span className="fcta__line" key={li} aria-hidden="true">
      {[...line].map((ch, i) => (
        <span
          className={`fchar ${inView ? 'in' : ''}`}
          key={i}
          style={{ transitionDelay: `${n++ * 34}ms` }}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  ))
}

export default function Footer() {
  const year = new Date().getFullYear()
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3 })
  const { profile, ui } = useT()

  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <span className="mono-label footer__eyebrow">{ui.footer.eyebrow}</span>

        <a
          className="footer__cta display"
          href={`mailto:${profile.email}`}
          ref={ctaRef}
          aria-label={ui.footer.ctaAria}
        >
          <CtaChars lines={ui.footer.cta} inView={ctaInView} />
        </a>

        <div className="footer__rails">
          <a className="footer__rail" href={`mailto:${profile.email}`}>
            <span className="mono-label">{ui.footer.email}</span>
            <span className="footer__rail-val">{profile.email}</span>
          </a>
          <a className="footer__rail" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            <span className="mono-label">{ui.footer.linkedin}</span>
            <span className="footer__rail-val">{profile.linkedin} <span className="footer__ext">↗</span></span>
          </a>
          <a className="footer__rail" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
            <span className="mono-label">{ui.footer.phone}</span>
            <span className="footer__rail-val">{profile.phone}</span>
          </a>
          <div className="footer__rail">
            <span className="mono-label">{ui.footer.basedIn}</span>
            <span className="footer__rail-val">{profile.location}</span>
          </div>
        </div>

        <div className="footer__base mono-label">
          <span>© {year} Fandi Lai</span>
          <a href="#top" onClick={onSectionClick('top')} className="footer__top">{ui.footer.backToTop}</a>
          <span>{ui.footer.built}</span>
        </div>
      </div>
    </footer>
  )
}
