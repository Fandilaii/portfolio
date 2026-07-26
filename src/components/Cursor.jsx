import { useEffect, useRef, useState } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'

// Custom cursor: a precise dot plus a ring that lags behind it. Mounts only on
// fine-pointer devices, and never under reduced motion — the native cursor is
// always left intact on touch.
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (reduced) return
    if (!window.matchMedia?.('(pointer: fine)').matches) return
    setEnabled(true)
  }, [reduced])

  useEffect(() => {
    if (!enabled) return

    const pos = { x: innerWidth / 2, y: innerHeight / 2 }
    const ringPos = { ...pos }
    let raf = 0
    let visible = false

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (!visible) {
        visible = true
        document.body.classList.add('has-cursor')
      }
      // Grow over anything interactive.
      const t = e.target
      const interactive = t instanceof Element && t.closest('a, button, [tabindex]:not([tabindex="-1"])')
      ring.current?.classList.toggle('cursor__ring--active', !!interactive)
    }

    const onLeave = () => {
      visible = false
      document.body.classList.remove('has-cursor')
    }

    const loop = () => {
      // Ring eases toward the dot for a trailing feel.
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      if (dot.current) dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      if (ring.current) ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.body.classList.remove('has-cursor')
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <>
      <div className="cursor__ring" ref={ring} aria-hidden="true" />
      <div className="cursor__dot" ref={dot} aria-hidden="true" />
    </>
  )
}
