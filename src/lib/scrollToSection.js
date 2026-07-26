// In-page navigation helper.
//
// This app uses HashRouter, so the URL hash IS the route. A plain
// `href="#work"` would be read by the router as the path "/work", which
// matches no route and unmounts the whole page. So section links must never
// touch the hash — they scroll directly instead.
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
