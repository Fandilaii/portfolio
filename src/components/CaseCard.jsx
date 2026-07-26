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

  // Scroll parallax — the mock drifts a little slower than the page.
  useEffect(() => {
    if (reduced) return
    const wrap = wrapRef.current
    const card = cardRef.current
    if (!wrap || !card) return

    let raf = 0
    let tilt = { x: 0, y: 0 }

    const update = () => {
      raf = 0
      const r = card.getBoundingClientRect()
      // -1 (below viewport) .. 1 (above viewport)
      const centre = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight
      const drift = Math.max(-26, Math.min(26, -centre * 42))
      wrap.style.transform =
        `translate3d(0, ${drift.toFixed(1)}px, 0) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }

    const onPointerMove = (e) => {
      const r = card.getBoundingClientRect()
      tilt = {
        x: ((e.clientX - (r.left + r.width / 2)) / r.width) * 9,
        y: -((e.clientY - (r.top + r.height / 2)) / r.height) * 9,
      }
      onScroll()
    }
    const onPointerLeave = () => { tilt = { x: 0, y: 0 }; onScroll() }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    if (window.matchMedia?.('(pointer: fine)').matches) {
      card.addEventListener('pointermove', onPointerMove)
      card.addEventListener('pointerleave', onPointerLeave)
    }
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      card.removeEventListener('pointermove', onPointerMove)
      card.removeEventListener('pointerleave', onPointerLeave)
      wrap.style.transform = ''
    }
  }, [reduced])

  return (
    <TransitionLink
      to={`/work/${study.slug}`}
      className={`ccard ${flip ? 'ccard--flip' : ''}`}
    >
      {/* cardRef measures the visual panel — that's what parallax/tilt act on */}
      <div className="ccard__visual" ref={cardRef}>
        <div className="ccard__mockwrap" ref={wrapRef}>
          <Mock kind={study.slug} />
        </div>
      </div>

      <div className="ccard__body">
        <div className="ccard__top mono-label">
          <span className="ccard__idx">{study.index}</span>
          <span>{study.company}</span>
          <span className="ccard__time">{study.timeline}</span>
        </div>

        <h3 className="ccard__title display">{study.title}</h3>
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
