import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll on route change — unless the destination asked to land on a
// specific section (see Home), in which case that effect owns the scroll.
export default function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (state?.scrollTo) return
    window.scrollTo(0, 0)
  }, [pathname, state])
  return null
}
