import useScrollMetrics from '../hooks/useScrollMetrics.js'
import useVelocitySkew from '../hooks/useVelocitySkew.js'

// Vermillion progress bar pinned directly under the nav. When the nav
// auto-hides (same rule as Nav.jsx) the bar moves up to the top edge. Also the mount
// point for the page-wide velocity signal, since it is always rendered.
export default function ScrollProgress() {
  const { progress, direction, atTop } = useScrollMetrics()
  const navHidden = direction === 'down' && !atTop
  useVelocitySkew()
  return (
    <div className={`progress ${navHidden ? 'progress--top' : ''}`} aria-hidden="true">
      <div className="progress__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
