import { LOCALES, useLocale } from '../i18n/index.jsx'

// Three hard-bordered segments in the nav. A radiogroup rather than a select so
// all options stay visible — with only three, hiding them behind a dropdown
// costs a click and gains nothing.
export default function LangSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="lang" role="radiogroup" aria-label="Language">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          type="button"
          role="radio"
          aria-checked={locale === l.code}
          aria-label={l.name}
          className={`lang__opt mono-label ${locale === l.code ? 'lang__opt--on' : ''}`}
          onClick={() => setLocale(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
