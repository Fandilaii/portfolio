import useInView from '../hooks/useInView.js'

// Heading mask reveal: each line sits in an overflow-hidden box and slides up
// from below it, staggered. Takes an array of lines because the headings
// already carry deliberate line breaks — no text parsing or guessing.
//
// The lines are joined with a space for the accessible name so assistive tech
// reads one clean heading rather than disconnected fragments.
export default function MaskLines({
  lines,
  as: Tag = 'span',
  className = '',
  stagger = 90,
  delay = 0,
}) {
  const [ref, inView] = useInView({ threshold: 0.25 })

  return (
    <Tag ref={ref} className={`mask ${className}`.trim()} aria-label={lines.join(' ')}>
      {lines.map((line, i) => (
        <span className="mask__line" key={i} aria-hidden="true">
          <span
            className={`mask__inner ${inView ? 'in' : ''}`}
            style={{ transitionDelay: `${delay + i * stagger}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  )
}
