import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` is './' so the built site works both at a domain root and in a
// github.io subpath (e.g. fandilaii.github.io/portfolio). Adjust if deploying
// to a fixed subpath with client-side routing.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { port: 5173 },
})
