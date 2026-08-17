import useScrollMetrics from '../hooks/useScrollMetrics.js'
import useVelocitySkew from '../hooks/useVelocitySkew.js'

// Thin vermillion progress bar pinned directly under the nav. Also the mount
// point for the page-wide velocity signal, since it is always rendered.
export default function ScrollProgress() {
  const { progress } = useScrollMetrics()
  useVelocitySkew()
  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
