import { useTheme } from '../theme/index.jsx'

// A literal lamp switch rather than a text pill: light mode = lamp on
// (paddle up, accent-lit), dark mode = lamp off (paddle down, neutral). Drawn
// entirely in CSS — no icon import — so it stays inside the same "typographic
// glyphs and CSS-drawn shapes" system as the rest of the site (nav dot, hero
// pulse). role="switch" + aria-checked is the correct ARIA pattern for a
// two-state on/off control, more accurate here than a push-button's
// aria-pressed.
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      className="lamp-switch"
      onClick={toggleTheme}
      aria-label={`Lamp is ${isLight ? 'on' : 'off'} — switch to ${isLight ? 'dark' : 'light'} mode`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <span className="lamp-switch__plate" aria-hidden="true">
        <span className="lamp-switch__paddle" />
      </span>
    </button>
  )
}
