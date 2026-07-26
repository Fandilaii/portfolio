import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import { TransitionProvider } from './lib/transitionNav.jsx'
import { LocaleProvider } from './i18n/index.jsx'
import LangGate from './components/LangGate.jsx'

// HashRouter keeps deep links working on static hosts (github.io) with no
// server-side rewrite config.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <LocaleProvider>
      <LangGate />
      <TransitionProvider>
        <ScrollToTop />
        <ScrollProgress />
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Routes>
      </TransitionProvider>
      </LocaleProvider>
    </HashRouter>
  </React.StrictMode>
)
