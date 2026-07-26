import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView.js'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'

// Animates the numbers inside a metric string pulled straight from content.js.
//
// Handled forms: "245%", "7+", "50+", "+245%", "−20%", "3", "30",
// and the arrow form "3.2 → 4.5" / "20 → 4".
//
// Arrow metrics animate BETWEEN their two values — "3.2 → 4.5" counts up from
// 3.2, "20 → 4" counts down from 20 — which reads far better than starting
// every number at zero.
//
// Accessibility: the animating text is aria-hidden and the true final value is
// exposed once in a visually-hidden span, so screen readers announce "245%"
// rather than every intermediate frame.

const NUM = /[-−+]?\d+(?:\.\d+)?/g

// Decimal places in the source string decide the display precision, so "3.2"
// never renders as "3" mid-flight or "3.2000001" at rest.
function decimalsOf(str) {
  const dot = str.indexOf('.')
  return dot === -1 ? 0 : str.length - dot - 1
}

function parse(value) {
  const matches = value.match(NUM)
  if (!matches) return null

  const isArrow = value.includes('→') && matches.length >= 2
  const targetRaw = isArrow ? matches[1] : matches[0]
  const startRaw = isArrow ? matches[0] : null

  // "−" (U+2212) is not parseable by Number; normalise to ASCII "-".
  const toNum = (s) => Number(s.replace('−', '-'))

  const target = toNum(targetRaw)
  if (!Number.isFinite(target)) return null

  return {
    isArrow,
    target,
    from: isArrow ? toNum(startRaw) : 0,
    decimals: decimalsOf(targetRaw),
    targetRaw,
  }
}

const easeOut = (t) => 1 - Math.pow(1 - t, 3)

export default function CountUp({ value, duration = 1400, className = '', as: Tag = 'span' }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const reduced = usePrefersReducedMotion()
  const spec = parse(value)
  const [display, setDisplay] = useState(() => (spec && !reduced ? null : value))

  useEffect(() => {
    if (!spec || reduced || !inView) return

    let raf = 0
    const t0 = performance.now()
    const { from, target, decimals, targetRaw } = spec

    const frame = (now) => {
      const t = Math.min(1, (now - t0) / duration)
      const n = from + (target - from) * easeOut(t)
      // Swap only the animated number back into the original string, so
      // prefixes/suffixes ("+", "%", "★", "→") survive untouched.
      setDisplay(value.replace(targetRaw, n.toFixed(decimals)))
      if (t < 1) raf = requestAnimationFrame(frame)
      else setDisplay(value) // snap to the exact source string
    }

    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduced, value, duration]) // eslint-disable-line react-hooks/exhaustive-deps

  // Unparseable or reduced-motion: render the value plainly.
  if (!spec || reduced) {
    return <Tag ref={ref} className={className}>{value}</Tag>
  }

  return (
    <Tag ref={ref} className={className}>
      <span aria-hidden="true">{display ?? (spec.isArrow ? value.replace(spec.targetRaw, spec.from.toFixed(spec.decimals)) : value.replace(spec.targetRaw, (0).toFixed(spec.decimals)))}</span>
      <span className="sr-only">{value}</span>
    </Tag>
  )
}
