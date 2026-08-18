// In-page navigation helper.
//
// This app uses BrowserRouter with clean paths. Section links still route
// through here rather than a bare `href="#work"` so the scroll behavior
// (smooth, top special-cased) stays identical wherever it's triggered from.
export function scrollToSection(id) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Convenience for onClick handlers on <a> elements.
export function onSectionClick(id) {
  return (e) => {
    e.preventDefault()
    scrollToSection(id)
  }
}
