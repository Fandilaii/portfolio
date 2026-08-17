import Reveal from './Reveal.jsx'
import MaskLines from './MaskLines.jsx'
import { useT } from '../i18n/index.jsx'

// About + skills. The lede deliberately does not restate the hero — the hero
// makes the claim, this explains how the work gets done.
export default function About() {
  const { profile, skills, ui } = useT()

  return (
    <section className="section about" id="about">
      <div className="shell">
        <div className="section-head">
          <span className="mono-label">{ui.about.eyebrow}</span>
          <MaskLines as="h2" lines={ui.about.heading} />
          <span className="idx">{ui.about.idx}</span>
        </div>

        <div className="about__grid">
          <Reveal className="about__bio">
            <p className="about__lede">{profile.intro}</p>
            <p className="about__body">{profile.longIntro}</p>
            <p className="about__body">{profile.ownership}</p>
          </Reveal>

          <div className="about__skills px">
            {skills.map((s, i) => (
              <Reveal className="skillblock" key={s.group} delay={i * 70}>
                <span className="skillblock__group mono-label">{s.group}</span>
                <Reveal as="ul" className="skillblock__tags" stagger>
                  {s.items.map((it) => (
                    <li className="tag" key={it}>{it}</li>
                  ))}
                </Reveal>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
