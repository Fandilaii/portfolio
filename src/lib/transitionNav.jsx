import { createContext, forwardRef, useCallback, useContext, useLayoutEffect, useMemo, useRef } from 'react'
import { flushSync } from 'react-dom'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import gsap from 'gsap'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'
import { useT } from '../i18n/index.jsx'

// Route transitions, driven by one GSAP timeline so they behave the same in
// every browser (the View Transitions API this replaced is missing or partial
// on a lot of phones):
//
//   1. Ink columns rise from the bottom in a stagger and cover the page, with
//      the destination's name in the middle.
//   2. The route changes underneath, already scrolled to where it should be.
//   3. The columns leave through the top and the new page is revealed.
//
// When the link is a case card, the card's phone is lifted into a fixed
// "ghost" above the curtain and flown to where the case study's phone sits,
// so the screen you tapped is the one you land on. Back/forward navigation
// can't be delayed, so it plays the reveal half only.
//
// Everything animates transform only. Phones get fewer columns and shorter
// durations; reduced motion navigates immediately.

const COLS = 5

const Ctx = createContext({ navigateWithTransition: () => {} })

const isSmall = () => window.matchMedia('(max-width: 700px)').matches

// React batches updates and passive effects, so place the scroll here rather
// than waiting for ScrollToTop/Home: the page must be in position before the
// curtain lifts. 'instant' overrides the document's smooth scrolling.
function placeScroll(options) {
  const id = options?.state?.scrollTo
  const el = id && document.getElementById(id)
  if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' })
  else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

export function TransitionProvider({ children }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { caseStudies } = useT()
  const reduced = usePrefersReducedMotion()

  const rootRef = useRef(null)
  const labelRef = useRef(null)
  const ghostRef = useRef(null)
  const busy = useRef(false)
  const selfNav = useRef(false)
  const lastPath = useRef(pathname)

  const cols = () => rootRef.current.querySelectorAll('.pt__col')

  const labelFor = useCallback(
    (to) => {
      const slug = typeof to === 'string' && to.startsWith('/work/') ? to.slice(6) : null
      const study = slug && caseStudies.find((s) => s.slug === slug)
      return study ? `${study.index} / ${study.company}` : 'Fandi Lai'
    },
    [caseStudies]
  )

  // Lift the tapped phone into the fixed ghost layer, at the same place.
  const liftGhost = (morphEl) => {
    const src = morphEl?.querySelector('[data-morph="mock"] .mock')
    const ghost = ghostRef.current
    if (!src || !ghost) return null
    const r = src.getBoundingClientRect()
    if (!r.width || r.bottom < 0 || r.top > window.innerHeight) return null
    const clone = src.cloneNode(true)
    clone.classList.add('pt__ghost-mock')
    ghost.replaceChildren(clone)
    gsap.set(ghost, { x: 0, y: 0, scaleX: 1, scaleY: 1, left: r.left, top: r.top, width: r.width, height: r.height, autoAlpha: 1 })
    return r
  }

  // Fly the ghost to the destination's phone, then hand over to the real one.
  const landGhost = (from, duration) => {
    const ghost = ghostRef.current
    const target = document.querySelector('.vt-mock .mock')
    const clear = () => {
      if (target) target.style.visibility = ''
      gsap.set(ghost, { autoAlpha: 0 })
      ghost.replaceChildren()
    }
    if (!target) return clear()
    const t = target.getBoundingClientRect()
    target.style.visibility = 'hidden'
    gsap.to(ghost, {
      x: t.left - from.left,
      y: t.top - from.top,
      scaleX: t.width / from.width,
      scaleY: t.height / from.height,
      duration,
      ease: 'power3.inOut',
      onComplete: clear,
    })
  }

  const reveal = (tl, small) => {
    const out = small ? 0.48 : 0.6
    tl.to(labelRef.current, { yPercent: -120, duration: 0.26, ease: 'power3.in' })
      .to(cols(), { yPercent: -101, duration: out, ease: 'power4.inOut', stagger: small ? 0.045 : 0.05 }, '-=0.2')
      .set(rootRef.current, { autoAlpha: 0 })
      .add(() => { busy.current = false })
    return tl
  }

  const navigateWithTransition = useCallback(
    (to, options, morphEl) => {
      if (reduced || !rootRef.current) {
        selfNav.current = true
        navigate(to, options)
        return
      }
      if (busy.current) return
      busy.current = true

      const small = isSmall()
      const cover = small ? 0.42 : 0.5
      const from = liftGhost(morphEl)
      labelRef.current.textContent = labelFor(to)

      const tl = gsap.timeline()
      tl.set(rootRef.current, { autoAlpha: 1 })
        .set(cols(), { yPercent: 101 })
        .set(labelRef.current, { yPercent: 120 })
        .to(cols(), { yPercent: 0, duration: cover, ease: 'power4.inOut', stagger: small ? 0.045 : 0.05 })
        .to(labelRef.current, { yPercent: 0, duration: 0.45, ease: 'power3.out' }, `-=${cover * 0.55}`)
        .add(() => {
          selfNav.current = true
          flushSync(() => navigate(to, options))
          placeScroll(options)
          if (from) landGhost(from, small ? 0.7 : 0.8)
        })
        // A beat for the new page to paint (and its images to decode) before
        // the curtain starts to lift.
        .to({}, { duration: 0.1 })
      reveal(tl, small)
    },
    [navigate, reduced, labelFor]
  )

  // Back/forward and any navigation that didn't come through here: the route
  // has already changed, so cover before the first paint and play the reveal.
  useLayoutEffect(() => {
    if (lastPath.current === pathname) return
    lastPath.current = pathname
    if (selfNav.current) { selfNav.current = false; return }
    if (reduced || busy.current || !rootRef.current) return
    busy.current = true
    labelRef.current.textContent = labelFor(pathname)
    gsap.set(rootRef.current, { autoAlpha: 1 })
    gsap.set(cols(), { yPercent: 0 })
    gsap.set(labelRef.current, { yPercent: 0 })
    reveal(gsap.timeline({ delay: 0.12 }), isSmall())
  }, [pathname, reduced, labelFor])

  const value = useMemo(() => ({ navigateWithTransition }), [navigateWithTransition])

  return (
    <Ctx.Provider value={value}>
      {children}
      <div className="pt" ref={rootRef} aria-hidden="true">
        <div className="pt__cols">
          {Array.from({ length: COLS }, (_, i) => <span className="pt__col" key={i} />)}
        </div>
        <div className="pt__label"><span className="pt__label-mask"><span className="pt__label-in mono-label" ref={labelRef} /></span></div>
      </div>
      <div className="pt__ghost" ref={ghostRef} aria-hidden="true" />
    </Ctx.Provider>
  )
}

export function useTransitionNavigate() {
  return useContext(Ctx).navigateWithTransition
}

// Drop-in replacement for <Link>. `morph` opts this link into the shared-phone
// flight: the link is searched for a [data-morph="mock"] phone to lift.
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
