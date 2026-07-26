import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from './usePrefersReducedMotion.js'

// Magnetic hover: the element leans toward the pointer, then springs back.
// Pointer-device only, and inert under reduced motion.
export default function useMagnetic({ strength = 0.32, max = 14 } = {}) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    if (!window.matchMedia?.('(pointer: fine)').matches) return

    let raf = 0
    const apply = (x, y) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = x || y ? `translate3d(${x}px, ${y}px, 0)` : ''
      })
    }

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      apply(
        Math.max(-max, Math.min(max, dx * strength)),
        Math.max(-max, Math.min(max, dy * strength))
      )
    }
    const onLeave = () => apply(0, 0)

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      el.style.transform = ''
    }
  }, [strength, max, reduced])

  return ref
}
