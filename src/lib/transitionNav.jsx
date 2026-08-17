import { createContext, forwardRef, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { useNavigate, Link } from 'react-router-dom'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'

// Route transitions, best-effort in three tiers:
//
//   1. View Transitions API — the browser snapshots both states and morphs
//      between them. Elements sharing a `view-transition-name` (the card's
//      phone mock and its title) animate from their old box to their new one,
//      so a card appears to *become* the case study rather than being replaced.
//   2. No View Transitions -> the hand-rolled ink wipe.
//   3. Reduced motion -> navigate immediately.
//
// React batches state updates, so the navigation is wrapped in flushSync:
// startViewTransition needs the DOM mutated synchronously inside its callback
// or it snapshots the old state twice and nothing moves.

const COVER_MS = 220 // must match --t-cover in motion.css

const Ctx = createContext({ covering: false, navigateWithTransition: () => {} })

// Elements tagged for the morph. Cleared afterwards so a name is never present
// on two elements at once, which silently disables the transition.
function tagMorph(el) {
  if (!el) return () => {}
  const mock = el.querySelector('[data-morph="mock"]')
  const title = el.querySelector('[data-morph="title"]')
  if (mock) mock.style.viewTransitionName = 'case-mock'
  if (title) title.style.viewTransitionName = 'case-title'
  return () => {
    if (mock) mock.style.viewTransitionName = ''
    if (title) title.style.viewTransitionName = ''
  }
}

export function TransitionProvider({ children }) {
  const [covering, setCovering] = useState(false)
  const navigate = useNavigate()
  const reduced = usePrefersReducedMotion()
  const busy = useRef(false)

  const navigateWithTransition = useCallback(
    (to, options, morphEl) => {
      if (reduced) {
        navigate(to, options)
        return
      }

      if (document.startViewTransition) {
        const untag = tagMorph(morphEl)
        const vt = document.startViewTransition(() => {
          flushSync(() => navigate(to, options))
        })
        // `ready` rejects whenever the transition is skipped — a backgrounded
        // tab, or another transition starting first. The update callback still
        // runs, so navigation is never lost, but the rejection needs a handler
        // or it surfaces as an unhandled promise rejection in the console.
        vt.ready.catch(() => {})
        vt.finished.catch(() => {}).finally(untag)
        return
      }

      // Fallback: cover, navigate underneath, uncover.
      if (busy.current) return
      busy.current = true
      setCovering(true)
      window.setTimeout(() => {
        navigate(to, options)
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

// Drop-in replacement for <Link>. `morph` opts this link into the shared-element
// transition: the closest element carrying [data-morph] children is handed to
// the view transition as the thing to morph from.
export const TransitionLink = forwardRef(function TransitionLink(
  { to, state, children, onClick, morph = false, ...rest },
  ref
) {
  const navigateWithTransition = useTransitionNavigate()

  const handle = (e) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    navigateWithTransition(to, state ? { state } : undefined, morph ? e.currentTarget : null)
  }

  return (
    <Link to={to} state={state} onClick={handle} ref={ref} {...rest}>
      {children}
    </Link>
  )
})
