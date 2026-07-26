# Archive — original portfolio (v1)

The first version of this site was a hand-written static site (plain HTML, CSS
and JS) served at `fandilaii.github.io/portfolio` until July 2026. It was
replaced by the current React + Vite build, but nothing was deleted.

## Where it lives

| | |
|---|---|
| **Branch** | [`archive/v1-static-site`](../../tree/archive/v1-static-site) |
| **Tag** | [`v1-static-site`](../../releases/tag/v1-static-site) |
| **Download** | [zip of the full snapshot](../../archive/refs/tags/v1-static-site.zip) |

Both point at commit `682816d` ("Overhaul mobile responsiveness and typography"),
the final state of the old site. It is also an ancestor of `main`, so the history
is reachable from the current branch — the tag and branch just make it easy to
find and protect it from garbage collection.

## What's in it

```
index.html, style.css, script.js
work/koinworks/     work/mandiri-taspen/     work/isiruma/     work/goers/
assets/  (22 images, ~1.9 MB)
```

### The case-study imagery is the valuable part

The `assets/` directory holds real screenshots and process artefacts that are
**not** reproduced in the current site — the rebuilt case studies use schematic
in-code mockups instead:

- **KoinWorks** — `kw-kyc-process`, `kw-kyc-detail`, `kw-account-revamp`,
  `kw-design-proposal`, `kw-homepage-variants`, `kw-account`, `kw-homepage-title`
- **Mandiri Taspen** — `mt-empathy`, `mt-research`, `mt-solutions`, `mt-final`,
  `mt-timeline`
- **isiruma** — `is-userflow`, `is-userflow2`, `is-screens`, `is-screens2`,
  `is-timeline`

The old site also carried a **Goers** case study, which the current site covers
only as a timeline entry.

## Restoring a file

```bash
git checkout v1-static-site -- assets/kw-kyc-process.jpg
```

Or browse the whole thing on the branch link above.
