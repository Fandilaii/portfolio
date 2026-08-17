# Deploying to fandilai.id

The site is a static Vite build served by GitHub Pages from the `fandilaii/portfolio`
repo, on the custom domain **fandilai.id**.

Routing uses `BrowserRouter` for clean paths (`/work/finku-fingpt`). GitHub Pages
has no server-side rewrites, so the build emits `404.html` as a byte-identical
copy of `index.html` (see the `spaFallback` plugin in `vite.config.js`) — Pages
serves that for unknown paths and the SPA routes client-side.

## One-time setup

### 1. DNS at the registrar (Hostinger)

Apex records pointing at GitHub Pages:

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  fandilaii.github.io
```

Optional but recommended IPv6:

```
AAAA  @    2606:50c0:8000::153
AAAA  @    2606:50c0:8001::153
AAAA  @    2606:50c0:8002::153
AAAA  @    2606:50c0:8003::153
```

Delete any parking/placeholder A record Hostinger added at `@`, or it will
compete with these.

### 2. GitHub repo settings

- **Settings → Pages → Source** = **GitHub Actions** (not "deploy from a branch").
- **Settings → Pages → Custom domain** = `fandilai.id`. `public/CNAME` is committed
  so the deploy re-asserts it on every build.
- Tick **Enforce HTTPS** once the certificate is issued. It can take up to an hour
  after DNS propagates; the checkbox stays greyed out until then.

### 3. Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/`.

```bash
git push origin main
```

## Local

```bash
npm run dev                  # http://localhost:5173
npm run build && npm run preview
```

## Verifying after a deploy

- `https://fandilai.id` loads and redirects to HTTPS.
- A **deep link pasted fresh** — `https://fandilai.id/work/finku-fingpt` — loads
  directly. This is the one that breaks if `404.html` goes missing.
- Pasting the URL into Slack/LinkedIn shows the share card.
- First visit shows the language picker; EN and ID both switch.

## Archive

The previous hand-written site is preserved — see [ARCHIVE.md](ARCHIVE.md).
