import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import { TransitionProvider } from './lib/transitionNav.jsx'
import { LocaleProvider } from './i18n/index.jsx'
import { ThemeProvider } from './theme/index.jsx'
import LangGate from './components/LangGate.jsx'

// BrowserRouter gives clean paths (/work/finku-fingpt). Deep links survive on
// GitHub Pages because the build emits a 404.html copy of index.html — see the
// spaFallback plugin in vite.config.js.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
      <LocaleProvider>
      <LangGate />
      <TransitionProvider>
        <ScrollToTop />
        <ScrollProgress />
        <Cursor />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Routes>
      </TransitionProvider>
      </LocaleProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
