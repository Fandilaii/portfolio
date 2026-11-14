import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'

const PITCH = 26 // distance between squares
const BASE = 5 // resting square size
const REACH = 150 // pointer influence radius

// A field of small squares that light up and swell around the pointer, then
// settle. One wave sweeps across when the field first scrolls into view so it
// reads as alive before anyone touches it. Purely decorative.
export default function DotField() {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const css = getComputedStyle(document.documentElement)
    const accent = css.getPropertyValue('--accent').trim() || '#ff4a1c'

    let w = 0
    let h = 0
    let cols = 0
    let rows = 0
    let energy = new Float32Array(0)
    let raf = 0
    let pointer = null
    let sweep = -1 // x position of the intro wave, -1 when idle
    let last = 0

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const ox = (w - (cols - 1) * PITCH) / 2
      const oy = (h - (rows - 1) * PITCH) / 2
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const e = energy[y * cols + x]
          const size = BASE + e * 7
          const cx = ox + x * PITCH
          const cy = oy + y * PITCH
          ctx.globalAlpha = 1
          ctx.fillStyle = 'rgba(245, 242, 234, 0.16)'
          ctx.fillRect(cx - size / 2, cy - size / 2, size, size)
          if (e > 0.01) {
            ctx.globalAlpha = Math.min(1, e)
            ctx.fillStyle = accent
            ctx.fillRect(cx - size / 2, cy - size / 2, size, size)
          }
        }
      }
      ctx.globalAlpha = 1
    }

    const tick = (t) => {
      raf = 0
      const dt = Math.min(48, t - (last || t))
      last = t
      const ox = (w - (cols - 1) * PITCH) / 2
      const oy = (h - (rows - 1) * PITCH) / 2
      if (sweep >= 0) {
        sweep += dt * 1.3
        if (sweep > w + REACH) sweep = -1
      }
      let live = sweep >= 0
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x
          const cx = ox + x * PITCH
          const cy = oy + y * PITCH
          let target = 0
          if (pointer) {
            const d = Math.hypot(cx - pointer.x, cy - pointer.y)
            if (d < REACH) target = (1 - d / REACH) ** 2
          }
          if (sweep >= 0) {
            const d = Math.abs(cx - sweep)
            if (d < 70) target = Math.max(target, (1 - d / 70) * 0.75)
          }
          // Rise fast, fall slowly, so the pointer leaves a short trail.
          const k = target > energy[i] ? 0.35 : 0.06
          energy[i] += (target - energy[i]) * k
          if (energy[i] > 0.01) live = true
          else energy[i] = 0
        }
      }
      draw()
      if (live || pointer) raf = requestAnimationFrame(tick)
      else last = 0
    }
    const kick = () => {
      if (!raf && !reduced) raf = requestAnimationFrame(tick)
    }

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.max(1, Math.floor(w / PITCH))
      rows = Math.max(1, Math.floor(h / PITCH))
      energy = new Float32Array(cols * rows)
      draw()
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      pointer = { x: e.clientX - r.left, y: e.clientY - r.top }
      kick()
    }
    const onLeave = () => {
      pointer = null
      kick()
    }

    resize()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null
    ro?.observe(canvas)

    let io = null
    if (!reduced) {
      canvas.addEventListener('pointermove', onMove)
      canvas.addEventListener('pointerleave', onLeave)
      if (typeof IntersectionObserver !== 'undefined') {
        io = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return
            sweep = 0
            kick()
            io.disconnect()
          },
          { threshold: 0.5 }
        )
        io.observe(canvas)
      }
    }

    return () => {
      cancelAnimationFrame(raf)
      ro?.disconnect()
      io?.disconnect()
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [reduced])

  return <canvas className="dotfield" ref={ref} aria-hidden="true" />
}
