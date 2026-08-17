import Reveal from './Reveal.jsx'
import MaskLines from './MaskLines.jsx'
import { TransitionLink } from '../lib/transitionNav.jsx'
import { useT } from '../i18n/index.jsx'

// The complete career timeline. Rows with a `slug` link through to their
// deep-dive case study; the current role is flagged.
function Row({ w, ui }) {
  const inner = (
    <>
      <span className="wrow__role">
        {w.role}
        {w.current && <span className="wrow__now mono-label">{ui.index.now}</span>}
      </span>
      <span className="wrow__company display">{w.company}</span>
      <span className="wrow__dates mono-label">{w.dates}</span>
      <p className="wrow__note">
        {w.note}
        {w.slug && <span className="wrow__link mono-label">{ui.index.readCase}</span>}
      </p>
    </>
  )

  return w.slug ? (
    <TransitionLink className="wrow wrow--linked" to={`/work/${w.slug}`}>{inner}</TransitionLink>
  ) : (
    <div className="wrow" tabIndex={0}>{inner}</div>
  )
}

export default function WorkIndex() {
  const { workIndex, education, ui } = useT()

  return (
    <section className="section" id="index">
      <div className="shell">
        <div className="section-head">
          <span className="mono-label">{ui.index.eyebrow}</span>
          <MaskLines as="h2" lines={ui.index.heading} />
          <span className="idx">{ui.index.idx}</span>
        </div>

        <ul className="wlist">
          {workIndex.map((w, i) => (
            <Reveal as="li" key={`${w.company}-${w.dates}`} delay={i * 50}>
              <Row w={w} ui={ui} />
            </Reveal>
          ))}
        </ul>

        <div className="edu px">
          <span className="mono-label">{ui.index.education}</span>
          <p className="edu__line">
            <strong>{education.degree}</strong>, {education.school}
            <span className="edu__years mono-label"> · {education.years}</span>
          </p>
          <p className="edu__note mono-label">{education.note}</p>
        </div>
      </div>
    </section>
  )
}
