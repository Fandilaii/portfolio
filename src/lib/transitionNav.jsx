import { createContext, forwardRef, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'

// Hand-rolled route transitions.
//
// React Router has no exit animation of its own, so a link click is
// intercepted: cover the screen, navigate underneath the cover, then uncover.
// That yields a true exit -> enter sequence. Browser back/forward bypasses this
// and simply renders instantly, which is fine and must not break.

const COVER_MS = 220 // must match --t-cover in motion.css

const Ctx = createContext({ covering: false, navigateWithTransition: () => {} })

export function TransitionProvider({ children }) {
  const [covering, setCovering] = useState(false)
  const navigate = useNavigate()
  const reduced = usePrefersReducedMotion()
  const busy = useRef(false)

  const navigateWithTransition = useCallback(
    (to, options) => {
      if (reduced) {
        navigate(to, options)
        return
      }
      if (busy.current) return
      busy.current = true
      setCovering(true)

      window.setTimeout(() => {
        navigate(to, options)
        // Let the new route paint before lifting the cover.
        window.setTimeout(() => {
          setCovering(false)
          busy.current = false
        }, 60)
      }, COVER_MS)
    },
    [navigate, reduced]
  )

  const value = useMemo(() => ({ covering, navigateWithTransition }), [covering, navigateWithTransition])

  return (
    <Ctx.Provider value={value}>
      {children}
      <div className={`wipe ${covering ? 'wipe--on' : ''}`} aria-hidden="true" />
    </Ctx.Provider>
  )
}

export function useTransitionNavigate() {
  return useContext(Ctx).navigateWithTransition
}

// Drop-in replacement for <Link> that plays the transition. Modified clicks
// (new tab, middle click) fall through to normal link behaviour. forwardRef so
// it stays a true drop-in — callers can measure it like any other Link.
export const TransitionLink = forwardRef(function TransitionLink(
  { to, state, children, onClick, ...rest },
  ref
) {
  const navigateWithTransition = useTransitionNavigate()

  const handle = (e) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    navigateWithTransition(to, state ? { state } : undefined)
  }

  return (
    <Link to={to} state={state} onClick={handle} ref={ref} {...rest}>
      {children}
    </Link>
  )
})
