import useInView from '../hooks/useInView.js'

// Abstracted, in-code UI mockups. These are deliberately schematic — they
// evoke each product's interaction model without impersonating a real
// screenshot. Drop real captures into /public and swap these later.

function Phone({ children, label }) {
  // The screen contents cascade in once the phone scrolls into view — the
  // `mock--play` class is what motion.css hangs all the timings off.
  const [ref, inView] = useInView({ threshold: 0.35 })
  return (
    <div className={`mock ${inView ? 'mock--play' : ''}`} role="img" aria-label={label} ref={ref}>
      <div className="mock__notch" />
      <div className="mock__screen">{children}</div>
    </div>
  )
}

function Bar({ w = '100%', h = 10, accent = false, style }) {
  return (
    <span
      className={`mk-bar ${accent ? 'mk-bar--accent' : ''}`}
      style={{ width: w, height: h, ...style }}
    />
  )
}

function Finku() {
  return (
    <Phone label="Finku — FinGPT async upload and chat, schematic">
      <div className="mk-row mk-row--between">
        <Bar w="42%" h={12} />
        <span className="mk-dot" />
      </div>
      {/* floating upload card, "processing" state */}
      <div className="mk-card mk-card--accent">
        <div className="mk-row mk-row--between">
          <Bar w="46%" h={9} />
          <span className="mk-spinner" />
        </div>
        <Bar w="80%" h={7} style={{ marginTop: 10, opacity: 0.6 }} />
        <div className="mk-progress"><span /></div>
      </div>
      {/* chat bubbles */}
      <div className="mk-bubble mk-bubble--in"><Bar w="70%" h={7} /><Bar w="90%" h={7} style={{ marginTop: 6 }} /></div>
      <div className="mk-bubble mk-bubble--me"><Bar w="60%" h={7} accent /></div>
      <div className="mk-bubble mk-bubble--in"><Bar w="85%" h={7} /><Bar w="55%" h={7} style={{ marginTop: 6 }} /></div>
      <div className="mk-inputbar"><Bar w="60%" h={8} style={{ opacity: 0.4 }} /><span className="mk-send" /></div>
    </Phone>
  )
}

function KoinWorks() {
  return (
    <Phone label="KoinWorks — registration form with inline validation, schematic">
      <Bar w="55%" h={14} />
      <Bar w="80%" h={7} style={{ marginTop: 8, opacity: 0.5 }} />
      {/* fields, one validated */}
      <div className="mk-field"><Bar w="30%" h={6} style={{ opacity: 0.5 }} /><div className="mk-input"><Bar w="55%" h={7} /><span className="mk-check">✓</span></div></div>
      <div className="mk-field"><Bar w="24%" h={6} style={{ opacity: 0.5 }} /><div className="mk-input"><Bar w="68%" h={7} /><span className="mk-check">✓</span></div></div>
      <div className="mk-field"><Bar w="34%" h={6} style={{ opacity: 0.5 }} /><div className="mk-input mk-input--active"><Bar w="40%" h={7} /><span className="mk-caret" /></div></div>
      <button className="mk-btn">Verify account</button>
      <div className="mk-uplift mono">+245%</div>
    </Phone>
  )
}

function Mandiri() {
  return (
    <Phone label="Mandiri Taspen — SME banking home with balance and actions, schematic">
      <div className="mk-row mk-row--between">
        <Bar w="34%" h={9} />
        <span className="mk-avatar" />
      </div>
      <div className="mk-balance">
        <Bar w="40%" h={7} style={{ opacity: 0.55 }} />
        <Bar w="66%" h={20} style={{ marginTop: 8 }} />
      </div>
      <div className="mk-actions">
        <span /><span /><span /><span />
      </div>
      <div className="mk-list">
        <div className="mk-listrow"><span className="mk-ico" /><Bar w="50%" h={7} /><Bar w="18%" h={7} accent /></div>
        <div className="mk-listrow"><span className="mk-ico" /><Bar w="42%" h={7} /><Bar w="20%" h={7} /></div>
        <div className="mk-listrow"><span className="mk-ico" /><Bar w="56%" h={7} /><Bar w="16%" h={7} /></div>
        <div className="mk-listrow"><span className="mk-ico" /><Bar w="38%" h={7} /><Bar w="22%" h={7} /></div>
        <div className="mk-listrow"><span className="mk-ico" /><Bar w="48%" h={7} /><Bar w="15%" h={7} /></div>
      </div>
      <div className="mk-rating mono">★ 4.5</div>
    </Phone>
  )
}

const MAP = { 'finku-fingpt': Finku, 'koinworks-registration': KoinWorks, 'mandiri-taspen': Mandiri }

export default function Mock({ kind }) {
  const C = MAP[kind] || Finku
  return <C />
}
