import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

// Central motion kill switch. JS-driven animations (counters, magnetic hover,
// page transitions) can't be stopped by a CSS media query, so they read this.
export default function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia(QUERY).matches
      : false
  )

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia(QUERY)
    const onChange = () => setReduced(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}
