import { useEffect, useRef, useState } from 'react'
import Mock from './Mock.jsx'
import CountUp from './CountUp.jsx'
import { useTransitionNavigate } from '../lib/transitionNav.jsx'
import { useT } from '../i18n/index.jsx'

// Pinned, scroll-driven showcase for the selected work. The stage sticks while
// the page scrolls through a tall track; each slice of that track belongs to
// one case. The active case is expanded on the right with a progress line that
// fills as its slice is scrolled, and its screen is shown on the left.
//
// Desktop only. SelectedWork falls back to the card grid on small or short
// viewports and under reduced motion, so nothing here needs a mobile layout.
export default function WorkStage({ studies }) {
  const trackRef = useRef(null)
  const pinRef = useRef(null)
  const [active, setActive] = useState(0)
  const navigateWithTransition = useTransitionNavigate()
  const { ui } = useT()
  const n = studies.length

  // Geometry shared by the scroll reader and the click-to-jump handler.
  const geometry = () => {
    const track = trackRef.current
    const pin = pinRef.current
    const top = parseFloat(getComputedStyle(pin).top) || 0
    return { track, top, span: Math.max(1, track.offsetHeight - pin.offsetHeight) }
  }

  useEffect(() => {
    let raf = 0
    const measure = () => {
      raf = 0
      const { track, top, span } = geometry()
      const p = Math.min(0.9999, Math.max(0, (top - track.getBoundingClientRect().top) / span))
      const idx = Math.floor(p * n)
      // Written straight to a custom property: the progress line updates every
      // frame without re-rendering React. Only a change of case re-renders.
      track.style.setProperty('--p', (p * n - idx).toFixed(4))
      setActive(idx)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [n])

  const jump = (i) => {
    const { track, top, span } = geometry()
    const y = track.getBoundingClientRect().top + window.scrollY - top + (span * (i + 0.04)) / n
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const open = (slug) => (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    // The pin holds both [data-morph] elements (only the active case carries
    // them), so the screen and title morph into the case-study page.
    navigateWithTransition(`/work/${slug}`, undefined, pinRef.current)
  }

  const current = studies[active]

  return (
    <div className="wstage" ref={trackRef} style={{ '--n': n }}>
      <div className="wstage__pin" ref={pinRef}>
        <i className="wstage__dot wstage__dot--tl" aria-hidden="true" />
        <i className="wstage__dot wstage__dot--tr" aria-hidden="true" />
        <i className="wstage__dot wstage__dot--bl" aria-hidden="true" />
        <i className="wstage__dot wstage__dot--br" aria-hidden="true" />

        <a
          className="wstage__visual"
          href={`/work/${current.slug}`}
          onClick={open(current.slug)}
          aria-label={`${ui.work.readCase}: ${current.title}`}
        >
          {studies.map((s, i) => (
            <div
              className={`wstage__shot ${i === active ? 'is-on' : ''} ${i < active ? 'is-past' : ''}`}
              key={s.slug}
              aria-hidden="true"
              {...(i === active ? { 'data-morph': 'mock' } : {})}
            >
              <Mock kind={s.slug} cover={s.cover} />
            </div>
          ))}
          <span className="wstage__count mono-label" aria-hidden="true">
            {current.index} / {String(n).padStart(2, '0')}
          </span>
        </a>

        <ol className="wstage__list">
          {studies.map((s, i) => {
            const on = i === active
            return (
              <li className={`wstage__item ${on ? 'is-on' : ''}`} key={s.slug}>
                <span className="wstage__bar" aria-hidden="true"><span /></span>
                <button
                  type="button"
                  className="wstage__head"
                  onClick={() => jump(i)}
                  aria-expanded={on}
                >
                  <span className="wstage__idx mono-label">{s.index}</span>
                  <span
                    className="wstage__title display"
                    {...(on ? { 'data-morph': 'title' } : {})}
                  >
                    {s.title}
                  </span>
                </button>

                <div className="wstage__panel" {...(on ? {} : { inert: '' })}>
                  <div className="wstage__panel-in">
                    <p className="wstage__meta mono-label">
                      <span>{s.company}</span>
                      <span>{s.timeline}</span>
                    </p>
                    <p className="wstage__tagline">{s.tagline}</p>
                    <div className="wstage__foot">
                      <div className="ccard__metric">
                        <span className="ccard__metric-val display">
                          {on && <CountUp value={s.accentMetric.value} />}
                          {s.accentMetric.suffix && <span className="accent">{s.accentMetric.suffix}</span>}
                        </span>
                        <span className="ccard__metric-label mono-label">{s.accentMetric.label}</span>
                      </div>
                      <a className="btn btn--primary wstage__cta" href={`/work/${s.slug}`} onClick={open(s.slug)}>
                        {ui.work.readCase} <span className="btn__arrow">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
