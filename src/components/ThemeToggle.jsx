import { useTheme } from '../theme/index.jsx'

// A single compact toggle rather than a segmented pair (unlike LangSwitcher):
// light/dark is inherently a binary flip, not a set of peer choices, so one
// button showing the current state is the more idiomatic pattern here — and
// it costs less nav width, which matters since the mobile nav is already
// tight with LangSwitcher and the Contact button.
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle mono-label"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle__dot" aria-hidden="true" />
      {isDark ? 'DARK' : 'LIGHT'}
    </button>
  )
}
