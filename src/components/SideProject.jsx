import Reveal from './Reveal.jsx'
import MaskLines from './MaskLines.jsx'
import CountUp from './CountUp.jsx'
import { useT } from '../i18n/index.jsx'

// One tile face, drawn on the same 40×54 grid the Mahjong 101 page uses so the
// preview reads as a crop of the real thing.
const DOTS5 = [[11, 13, '#1f5fa8'], [29, 13, '#1a7d4f'], [20, 27, '#d0342b'], [11, 41, '#1a7d4f'], [29, 41, '#1f5fa8']]
const FACES = {
  d5: DOTS5.map(([x, y, c]) => (
    <g key={`${x}-${y}`}>
      <circle cx={x} cy={y} r="6" fill={c} />
      <circle cx={x} cy={y} r="3.3" fill="none" stroke="#fffdf6" strokeWidth="1.3" />
    </g>
  )),
  rR: <text x="20" y="37" fill="#d0342b">中</text>,
  rG: <text x="20" y="37" fill="#1a7d4f">發</text>,
  wE: <text x="20" y="37" fill="#1e2a33">東</text>,
}

function Tile({ face }) {
  return (
    <span className="sp-tile">
      <svg viewBox="0 0 40 54" aria-hidden="true">{FACES[face]}</svg>
    </span>
  )
}

// Personal projects that live outside the React app. Each card is a plain <a>
// because the target is a standalone static page in public/, not a route.
export default function SideProject() {
  const { sideProjects, ui } = useT()

  return (
    <section className="section" id="side">
      <div className="shell">
        <div className="section-head">
          <span className="mono-label">{ui.side.eyebrow}</span>
          <MaskLines as="h2" lines={ui.side.heading} />
          <span className="idx">{ui.side.idx}</span>
        </div>

        <div className="cgrid">
          {sideProjects.map((p) => (
            <Reveal key={p.href}>
              <a className="ccard" href={p.href}>
                {/* The game's own felt-and-ivory palette stays literal in both
                    themes, the same way the phone mocks do: it's a picture of
                    another product, not site chrome. */}
                <div className="ccard__visual sp-felt" aria-hidden="true">
                  <div className="sp-hand">
                    {['wE', 'd5', 'rR', 'rG'].map((f) => <Tile key={f} face={f} />)}
                  </div>
                </div>

                <div className="ccard__body">
                  <div className="ccard__top mono-label">
                    <span className="ccard__idx">{p.tag}</span>
                    <span className="ccard__time">{p.meta}</span>
                  </div>

                  <h3 className="ccard__title display">{p.title}</h3>
                  <p className="ccard__tagline">{p.tagline}</p>

                  <div className="ccard__foot">
                    <div className="ccard__metric">
                      <span className="ccard__metric-val display"><CountUp value={p.metric.value} /></span>
                      <span className="ccard__metric-label mono-label">{p.metric.label}</span>
                    </div>
                    <span className="ccard__cta mono-label">
                      {ui.side.cta} <span className="ccard__arrow">→</span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
