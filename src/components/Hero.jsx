import { useT } from '../i18n/index.jsx'
import { onSectionClick } from '../lib/scrollToSection.js'
import CountUp from './CountUp.jsx'
import MaskLines from './MaskLines.jsx'
import Reveal from './Reveal.jsx'
import useMagnetic from '../hooks/useMagnetic.js'
import useInView from '../hooks/useInView.js'

// The five-second test. A recruiter should be able to answer three questions
// without scrolling: what does this person do, are they senior, and is it
// relevant? So: role + domain stated plainly, proof as oversized numerals,
// one primary CTA, and contact reachable immediately.
//
// Entrance motion is deliberately capped (~800ms) so none of that is gated
// behind animation.

function KineticWord({ text, delay = 0 }) {
  return (
    <span className="kw" aria-hidden="true">
      {text.split('').map((ch, i) => (
        <span className="kw__c" key={i} style={{ animationDelay: `${delay + i * 45}ms` }}>
          {ch}
        </span>
      ))}
    </span>
  )
}

function Stat({ stat }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  return (
    <div className="hero__stat" ref={ref}>
      <div className="hero__stat-val display">
        <CountUp value={stat.value} />
        {stat.suffix && <span className="hero__stat-suffix accent">{stat.suffix}</span>}
      </div>
      <span className={`hero__stat-rule ${inView ? 'in' : ''}`} aria-hidden="true" />
      <div className="hero__stat-label mono-label">{stat.label}</div>
    </div>
  )
}

export default function Hero() {
  const ctaRef = useMagnetic({ strength: 0.28, max: 12 })
  const { profile, heroStats, shippedAt, ui } = useT()

  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero__top">
          <span className="hero__status mono-label">
            <span className="hero__pulse" aria-hidden="true" />
            {ui.hero.available}
          </span>
          <span className="hero__loc mono-label">{profile.location} · {ui.hero.remote}</span>
        </div>

        <h1 className="hero__name display" aria-label={profile.name}>
          <KineticWord text="FANDI" />
          <br />
          <KineticWord text="LAI" delay={240} />
          <span className="hero__reg" aria-hidden="true">®</span>
        </h1>

        <MaskLines
          as="p"
          className="hero__role display"
          lines={ui.hero.roleLines}
          delay={420}
        />

        <div className="hero__lede">
          <p className="hero__intro">
            {ui.hero.introBefore}
            <span className="hero__hl">{ui.hero.introHighlight}</span>
            {ui.hero.introAfter}
          </p>

          <div className="hero__actions">
            <a
              href="#work"
              onClick={onSectionClick('work')}
              className="btn btn--primary"
              ref={ctaRef}
            >
              {ui.hero.cta} <span className="btn__arrow">→</span>
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn--ghost">
              {profile.email}
            </a>
          </div>
        </div>
      </div>

      <div className="shell hero__shipped">
        <span className="hero__shipped-label mono-label">{ui.hero.shippedAt}</span>
        <Reveal as="ul" className="hero__shipped-list" stagger>
          {shippedAt.map((c) => (
            <li className="hero__shipped-item display" key={c}>{c}</li>
          ))}
        </Reveal>
      </div>

      <div className="hero__stats">
        <div className="shell hero__stats-grid">
          {heroStats.map((s, i) => (
            <Stat stat={s} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
