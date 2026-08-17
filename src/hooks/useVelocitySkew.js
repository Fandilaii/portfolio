import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from './usePrefersReducedMotion.js'

// Writes scroll velocity to the --sv custom property, easing back to rest.
//
// One rAF loop and one custom property for the whole page: CSS decides what to
// do with the number, so adding another velocity-reactive element costs no JS.
export default function useVelocitySkew({ max = 1, damp = 0.12 } = {}) {
  const reduced = usePrefersReducedMotion()
  const raf = useRef(0)

  useEffect(() => {
    if (reduced) {
      document.documentElement.style.setProperty('--sv', '0')
      return
    }

    let last = window.scrollY
    let current = 0
    let target = 0
    let idle = 0

    const loop = () => {
      const y = window.scrollY
      // Normalise px/frame into roughly -1..1 before clamping.
      target = Math.max(-max, Math.min(max, (y - last) / 55))
      last = y

      current += (target - current) * damp
      document.documentElement.style.setProperty('--sv', current.toFixed(4))

      // Park the loop once motion has settled; any scroll restarts it.
      if (Math.abs(current) < 0.001 && Math.abs(target) < 0.001) {
        if (++idle > 30) { raf.current = 0; return }
      } else {
        idle = 0
      }
      raf.current = requestAnimationFrame(loop)
    }

    const kick = () => { if (!raf.current) raf.current = requestAnimationFrame(loop) }

    kick()
    window.addEventListener('scroll', kick, { passive: true })
    return () => {
      cancelAnimationFrame(raf.current)
      raf.current = 0
      window.removeEventListener('scroll', kick)
      document.documentElement.style.setProperty('--sv', '0')
    }
  }, [reduced, max, damp])
}
