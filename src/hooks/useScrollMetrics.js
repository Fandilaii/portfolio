import { useEffect, useRef, useState } from 'react'

// One rAF-throttled scroll listener shared by the progress bar, the auto-hiding
// nav, and the marquee's velocity coupling. Keeping it to a single listener
// avoids stacking handlers that each force layout on every scroll event.
//
// Returns: progress 0..1, direction 'up' | 'down', velocity (px/frame, signed),
// atTop, and the raw y scroll position (for consumers like BackToTop that
// need an absolute px threshold rather than a document-relative fraction —
// `progress` alone would show/hide inconsistently between a long home page
// and a much shorter case-study page).
export default function useScrollMetrics() {
  const [metrics, setMetrics] = useState({
    progress: 0,
    direction: 'up',
    velocity: 0,
    atTop: true,
    y: 0,
  })
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastY.current = window.scrollY

    const read = () => {
      ticking.current = false
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      const delta = y - lastY.current
      lastY.current = y

      setMetrics((prev) => {
        const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
        // Ignore sub-pixel jitter when deciding direction.
        const direction = Math.abs(delta) < 1 ? prev.direction : delta > 0 ? 'down' : 'up'
        return { progress, direction, velocity: delta, atTop: y < 8, y }
      })
    }

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(read)
    }

    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return metrics
}
