import CaseCard from './CaseCard.jsx'
import WorkStage from './WorkStage.jsx'
import useMediaQuery from '../hooks/useMediaQuery.js'
import Reveal from './Reveal.jsx'
import MaskLines from './MaskLines.jsx'
import { useT } from '../i18n/index.jsx'

export default function SelectedWork() {
  const { caseStudies, ui } = useT()
  // The pinned stage needs room and motion. Small or short viewports, and
  // anyone who asked for reduced motion, get the plain card grid.
  const staged = useMediaQuery(
    '(min-width: 980px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)'
  )

  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="mono-label">{ui.work.eyebrow}</span>
          <MaskLines as="h2" lines={ui.work.heading} />
          <span className="idx">{ui.work.idx}</span>
        </div>

        {staged ? (
          <WorkStage studies={caseStudies} />
        ) : (
          <div className="cgrid">
            {caseStudies.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <CaseCard study={s} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
