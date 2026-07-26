# Deploying to fandilaii.github.io/portfolio

The site is a static Vite build. `vite.config.js` uses `base: './'`, so assets resolve
correctly whether served at a domain root or under the `/portfolio` subpath. Routing uses
`HashRouter`, so deep links (e.g. `/#/work/koinworks-registration`) work with no server config.

## Option A — GitHub Actions (recommended, no local git deploy)

1. Create a repo named **`portfolio`** under your GitHub account (`fandilaii`).
2. Push this folder to it:
   ```bash
   cd D:/ClaudeCode/portfolio
   git init && git add . && git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/fandilaii/portfolio.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every push to `main`.
5. Live at **https://fandilaii.github.io/portfolio/**.

## Option B — one-command manual deploy (`gh-pages`)

After the repo exists and `origin` is set:
```bash
npm run deploy
```
This builds `dist/` and pushes it to the `gh-pages` branch. Then set
**Settings → Pages → Source = "Deploy from a branch" → `gh-pages` / root**.

## Local preview of the production build
```bash
npm run build && npm run preview
```

> Note: nothing here has been pushed anywhere — creating the repo and pushing is left to you,
> since it publishes the site publicly. The build and both deploy paths are ready to go.
