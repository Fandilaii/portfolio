import { useEffect, useMemo, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'

// Splits text into word tokens. Intl.Segmenter handles languages without
// spaces (Japanese); the whitespace split is the fallback.
function tokenize(text) {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: 'word' })
    return [...seg.segment(text)].map((s) => ({ text: s.segment, word: !!s.isWordLike }))
  }
  return text.split(/(\s+)/).map((t) => ({ text: t, word: /\S/.test(t) }))
}

// Text that lights up word by word as it is scrolled through the viewport.
// Scroll position is written to `--sp` (0..1) and each word derives its own
// opacity from that in CSS, so there is one style write per frame and no
// React re-render. Without JS, or under reduced motion, `--sp` stays at 1 and
// the text is simply fully visible.
export default function ScrubText({ text, as: Tag = 'p', className = '' }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()
  const tokens = useMemo(() => tokenize(text), [text])
  const count = tokens.filter((t) => t.word).length

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduced) {
      el.style.setProperty('--sp', 1)
      return
    }
    let raf = 0
    const measure = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the top edge enters at 88% of the viewport, 1 once the block's
      // bottom edge has risen to the middle.
      const p = (vh * 0.88 - r.top) / (vh * 0.38 + r.height)
      el.style.setProperty('--sp', Math.min(1, Math.max(0, p)).toFixed(4))
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
  }, [reduced, text])

  let i = 0
  return (
    <Tag ref={ref} className={`scrub ${className}`.trim()} style={{ '--n': count }}>
      {tokens.map((t, k) =>
        t.word ? (
          <span className="scrub__w" key={k} style={{ '--i': i++ }}>{t.text}</span>
        ) : /\S/.test(t.text) ? (
          // Punctuation lights with the word before it.
          <span className="scrub__w" key={k} style={{ '--i': Math.max(0, i - 1) }}>{t.text}</span>
        ) : (
          t.text
        )
      )}
    </Tag>
  )
}
