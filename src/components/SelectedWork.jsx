import CaseCard from './CaseCard.jsx'
import Reveal from './Reveal.jsx'
import MaskLines from './MaskLines.jsx'
import { useT } from '../i18n/index.jsx'

export default function SelectedWork() {
  const { caseStudies, ui } = useT()

  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="mono-label">{ui.work.eyebrow}</span>
          <MaskLines as="h2" lines={ui.work.heading} />
          <span className="idx">{ui.work.idx}</span>
        </div>

        <div className="cgrid">
          {caseStudies.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <CaseCard study={s} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
