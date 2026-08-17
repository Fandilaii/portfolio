import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages has no server-side routing: a request for /work/finku-fingpt
// hits no file and returns 404. Pages serves 404.html for those, so shipping a
// copy of index.html under that name lets the SPA boot and route client-side.
// This is what makes clean URLs possible without a hash.
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const out = resolve(__dirname, 'dist')
      copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  // Must be '/' now the site lives at a domain root. A relative './' base would
  // resolve assets against the current path, so /work/<slug> would look for
  // /work/assets/... and load nothing.
  base: '/',
  server: { port: 5173 },
})
