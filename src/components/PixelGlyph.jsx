import useInView from '../hooks/useInView.js'

// Small pixel-art marks drawn from a 7x7 grid of squares. The squares drop in
// one by one, in a shuffled order, when the glyph scrolls into view.
const GLYPHS = {
  // Pointer arrow
  design: ['X......', 'XX.....', 'XXX....', 'XXXX...', 'XXXXX..', 'XX.X...', 'X...X..'],
  // Four component frames
  tools: ['XXX.XXX', 'X.X.X.X', 'XXX.XXX', '.......', 'XXX.XXX', 'X.X.X.X', 'XXX.XXX'],
  // Rising bars
  growth: ['......X', '......X', '....X.X', '....X.X', '..X.X.X', '..X.X.X', 'X.X.X.X'],
  // Bank building
  industries: ['...X...', '..XXX..', '.XXXXX.', 'XXXXXXX', '.X.X.X.', '.X.X.X.', 'XXXXXXX'],
}

export const GLYPH_ORDER = ['design', 'tools', 'growth', 'industries']

export default function PixelGlyph({ name }) {
  const [ref, inView] = useInView({ threshold: 0.6 })
  const rows = GLYPHS[name]
  if (!rows) return null

  const cells = []
  rows.forEach((row, y) => {
    ;[...row].forEach((ch, x) => {
      if (ch !== 'X') return
      // Cheap deterministic shuffle so the order looks random but never
      // changes between renders.
      const order = (x * 37 + y * 101 + x * y * 13) % 23
      cells.push(
        <i
          key={`${x}-${y}`}
          className="pg__c"
          style={{ gridColumn: x + 1, gridRow: y + 1, '--d': `${order * 22}ms` }}
        />
      )
    })
  })

  return (
    <span className={`pg ${inView ? 'in' : ''}`} ref={ref} aria-hidden="true">
      {cells}
    </span>
  )
}
