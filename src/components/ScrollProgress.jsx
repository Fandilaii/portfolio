import useScrollMetrics from '../hooks/useScrollMetrics.js'

// Thin vermillion progress bar pinned directly under the nav.
export default function ScrollProgress() {
  const { progress } = useScrollMetrics()
  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
