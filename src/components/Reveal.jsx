import useInView from '../hooks/useInView.js'

// Scroll reveal. `stagger` cascades the element's direct children instead of
// moving the block as one piece — the per-child delays come from nth-child
// rules in motion.css, so no extra wrapper elements are introduced and flex /
// grid layouts stay intact.
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  stagger = false,
  ...rest
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`${stagger ? 'stagger' : 'reveal'} ${inView ? 'in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
