import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import SelectedWork from '../components/SelectedWork.jsx'
import About from '../components/About.jsx'
import WorkIndex from '../components/WorkIndex.jsx'
import Footer from '../components/Footer.jsx'
import { useT } from '../i18n/index.jsx'

export default function Home() {
  const { state } = useLocation()
  const { tickerItems } = useT()

  // Returning from a case study with `state.scrollTo` jumps to that section.
  useEffect(() => {
    if (!state?.scrollTo) return
    const el = document.getElementById(state.scrollTo)
    if (el) el.scrollIntoView({ block: 'start' })
  }, [state])

  return (
    <>
      <Nav variant="home" />
      <main>
        <Hero />
        <Marquee items={tickerItems} />
        <SelectedWork />
        <About />
        <WorkIndex />
      </main>
      <Footer />
    </>
  )
}
