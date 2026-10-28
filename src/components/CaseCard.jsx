import { useEffect, useRef } from 'react'
import Mock from './Mock.jsx'
import CountUp from './CountUp.jsx'
import { TransitionLink } from '../lib/transitionNav.jsx'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'
import { useT } from '../i18n/index.jsx'

// A selected-work card. Hard-bordered, hover lifts the accent, and the phone
// mock drifts against scroll (parallax) plus tilts toward the pointer.
export default function CaseCard({ study, flip = false }) {
  const wrapRef = useRef(null)
  const cardRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const { ui } = useT()

  // Pointer tilt only. Scroll parallax is handled declaratively by the `.px`
  // scroll-timeline in motion.css, which animates `translate` — a separate
  // property from `transform`, so the two compose instead of overwriting each
  // other, and the parallax runs on the compositor rather than this handler.
  useEffect(() => {
    if (reduced) return
    const wrap = wrapRef.current
    const card = cardRef.current
    if (!wrap || !card) return
    if (!window.matchMedia?.('(pointer: fine)').matches) return

    let raf = 0
    const apply = (x, y) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        wrap.style.transform = x || y ? `rotateX(${y}deg) rotateY(${x}deg)` : ''
      })
    }

    const onPointerMove = (e) => {
      const r = card.getBoundingClientRect()
      apply(
        ((e.clientX - (r.left + r.width / 2)) / r.width) * 9,
        -((e.clientY - (r.top + r.height / 2)) / r.height) * 9
      )
    }
    const onPointerLeave = () => apply(0, 0)

    card.addEventListener('pointermove', onPointerMove)
    card.addEventListener('pointerleave', onPointerLeave)
    return () => {
      cancelAnimationFrame(raf)
      card.removeEventListener('pointermove', onPointerMove)
      card.removeEventListener('pointerleave', onPointerLeave)
      wrap.style.transform = ''
    }
  }, [reduced])

  return (
    <TransitionLink
      to={`/work/${study.slug}`}
      className={`ccard ${flip ? 'ccard--flip' : ''}`}
      morph
    >
      {/* cardRef measures the visual panel — that's what parallax/tilt act on */}
      <div className="ccard__visual" ref={cardRef}>
        {/* data-morph pairs these with the case-study page for the shared-element
            view transition — the mock and title fly to their new positions. */}
        <div className="ccard__mockwrap px" ref={wrapRef} data-morph="mock">
          <Mock kind={study.slug} cover={study.cover} />
        </div>
      </div>

      <div className="ccard__body">
        <div className="ccard__top mono-label">
          <span className="ccard__idx">{study.index}</span>
          <span>{study.company}</span>
          <span className="ccard__time">{study.timeline}</span>
        </div>

        <h3 className="ccard__title display" data-morph="title">{study.title}</h3>
        <p className="ccard__tagline">{study.tagline}</p>

        <div className="ccard__foot">
          <div className="ccard__metric">
            <span className="ccard__metric-val display">
              <CountUp value={study.accentMetric.value} />
              {study.accentMetric.suffix && <span className="accent">{study.accentMetric.suffix}</span>}
            </span>
            <span className="ccard__metric-label mono-label">{study.accentMetric.label}</span>
          </div>
          <span className="ccard__cta mono-label">
            {ui.work.readCase} <span className="ccard__arrow">→</span>
          </span>
        </div>
      </div>
    </TransitionLink>
  )
}
