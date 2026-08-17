import { useParams, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Mock from '../components/Mock.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import MaskLines from '../components/MaskLines.jsx'
import { TransitionLink } from '../lib/transitionNav.jsx'
import { useT } from '../i18n/index.jsx'

// One template, three data entries. Problem → Approach → Solution → Impact.
export default function CaseStudy() {
  const { slug } = useParams()
  const { caseStudies, ui } = useT()
  const study = caseStudies.find((s) => s.slug === slug)
  const i = caseStudies.findIndex((s) => s.slug === slug)
  if (!study) return <Navigate to="/" replace />
  const next = caseStudies[(i + 1) % caseStudies.length]

  return (
    <>
      <Nav variant="case" />
      <main className="cs">
        {/* Header */}
        <header className="cs-hero">
          <div className="shell">
            <TransitionLink to="/" state={{ scrollTo: 'work' }} className="cs-back mono-label">{ui.caseStudy.back}</TransitionLink>
            <div className="cs-hero__meta mono-label">
              <span>{study.index}</span><span>/</span><span>{study.company}</span>
              <span>/</span><span>{study.timeline}</span>
            </div>
            {/* vt-title / vt-mock receive the shared-element morph from the card */}
            <MaskLines as="h1" className="cs-hero__title display vt-title" lines={[study.title]} />
            <p className="cs-hero__tagline">{study.tagline}</p>

            <div className="cs-hero__figure">
              <div className="vt-mock"><Mock kind={study.slug} /></div>
              <div className="cs-hero__accent">
                <span className="cs-hero__accent-val display">
                  <CountUp value={study.accentMetric.value} />
                  {study.accentMetric.suffix && <span>{study.accentMetric.suffix}</span>}
                </span>
                <span className="mono-label">{study.accentMetric.label}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Meta rails */}
        <section className="shell cs-rails">
          <div className="cs-rail">
            <span className="mono-label">{ui.caseStudy.role}</span>
            <p>{study.role}</p>
          </div>
          <div className="cs-rail">
            <span className="mono-label">{ui.caseStudy.timeline}</span>
            <p>{study.timeline}</p>
          </div>
          <div className="cs-rail cs-rail--scope">
            <span className="mono-label">{ui.caseStudy.scope}</span>
            <ul className="cs-scope">
              {study.scope.map((s) => <li className="tag" key={s}>{s}</li>)}
            </ul>
          </div>
        </section>

        {/* Problem / Approach */}
        <section className="shell cs-block">
          <Reveal className="cs-pa">
            <div className="cs-pa__col">
              <span className="mono-label cs-kicker">{ui.caseStudy.problem}</span>
              <p className="cs-lede">{study.problem}</p>
            </div>
            <div className="cs-pa__col">
              <span className="mono-label cs-kicker">{ui.caseStudy.approach}</span>
              <p className="cs-lede">{study.approach}</p>
            </div>
          </Reveal>
        </section>

        {/* Solutions */}
        <section className="shell cs-block">
          <span className="mono-label cs-kicker">{ui.caseStudy.shipped}</span>
          <div className="cs-solutions">
            {study.solutions.map((s, idx) => (
              <Reveal className="cs-sol" key={idx} delay={idx * 70}>
                <span className="cs-sol__num display">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="cs-sol__head display">{s.head}</h3>
                <p className="cs-sol__body">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="cs-impact">
          <div className="shell">
            <span className="mono-label cs-kicker">{ui.caseStudy.impact}</span>
            <div className="cs-impact__grid">
              {study.impact.map((m, idx) => (
                <Reveal className="cs-impact__cell" key={idx} delay={idx * 70}>
                  <span className="cs-impact__val display">
                    <CountUp value={m.value} />
                    {m.suffix && <span className="accent">{m.suffix}</span>}
                  </span>
                  <span className="cs-impact__label mono-label">{m.label}</span>
                </Reveal>
              ))}
            </div>
            <p className="cs-closing">{study.closing}</p>
          </div>
        </section>

        {/* Next */}
        <TransitionLink to={`/work/${next.slug}`} className="cs-next">
          <div className="shell cs-next__inner">
            <span className="mono-label">{ui.caseStudy.next} — {next.index}</span>
            <MaskLines as="span" className="cs-next__title display" lines={[next.title]} />
            <span className="cs-next__arrow display">→</span>
          </div>
        </TransitionLink>
      </main>
      <Footer />
    </>
  )
}
