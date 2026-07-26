import { useEffect, useRef } from 'react'
import useScrollMetrics from '../hooks/useScrollMetrics.js'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'

// Infinite mono ticker. The list is duplicated so the CSS translate loops
// seamlessly. Scrolling speeds it up; it eases back to base when you stop.
export default function Marquee({ items, reverse = false }) {
  const row = [...items, ...items]
  const trackRef = useRef(null)
  const { velocity } = useScrollMetrics()
  const reduced = usePrefersReducedMotion()
  const boost = useRef(1)

  useEffect(() => {
    if (reduced) return
    const track = trackRef.current
    if (!track) return

    // Scroll velocity pushes the rate up; it decays back toward 1x.
    const target = Math.min(6, 1 + Math.abs(velocity) * 0.12)
    if (target > boost.current) boost.current = target

    let raf = 0
    const decay = () => {
      boost.current += (1 - boost.current) * 0.06
      track.style.animationDuration = `${(32 / boost.current).toFixed(2)}s`
      if (Math.abs(boost.current - 1) > 0.01) raf = requestAnimationFrame(decay)
    }
    raf = requestAnimationFrame(decay)
    return () => cancelAnimationFrame(raf)
  }, [velocity, reduced])

  return (
    <div className="marquee" aria-hidden="true">
      <div
        className={`marquee__track ${reverse ? 'marquee__track--rev' : ''}`}
        ref={trackRef}
      >
        {row.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <span className="marquee__sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
