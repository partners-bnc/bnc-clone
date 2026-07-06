# SKILL: Cloning the BnC Global (Wix) Site into React with Playwright

This guide explains how to clone pages from the live site into this React + Vite app,
using the **Playwright MCP** browser to read the real rendered page (fonts, colors,
content, images) and rebuild it as clean React components.

## Source (original) site

- **Base URL:** `https://www.bncglobal.in`
- Country pages live under (note the site's original typo `countires`):
  - `https://www.bncglobal.in/countires-we-serve/australia`
  - `https://www.bncglobal.in/countires-we-serve/canada`
  - `https://www.bncglobal.in/countires-we-serve/saudi-arabia`
  - `https://www.bncglobal.in/countires-we-serve/uae`
- Other pages: `/virtual-cfo`, `/bnc-global-services`, `/about-us`, `/contact-8`,
  `/careers`, `/elevate`, `/privacy-policy`

> Only clone sites you own or are authorized to clone.

---

## 0. Prerequisites

- Node.js + npx (check: `node --version && npx --version`)
- The dev server running so you can compare local vs live:
  ```bash
  npm run dev        # serves on http://localhost:5173 (or next free port, e.g. 5174)
  ```

---

## 1. Is Playwright MCP installed?

Playwright MCP gives the AI agent a real browser to navigate the live site, take
screenshots, read computed styles, and extract content/images.

### Check
In the Kiro CLI chat, run:
```
/mcp
```
- If you see `playwright` with **Status: ✓ Initialized** → it's installed. Skip to Step 3.
- If it's missing or shows an error → follow Step 2 to install it.

You can also check from a terminal:
```bash
kiro-cli mcp list
```

---

## 2. Install Playwright MCP (only if NOT installed)

### 2a. Add the server config
Create/merge this file at the **workspace** scope so it travels with the project:

`.kiro/settings/mcp.json`
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@playwright/mcp@latest",
        "--browser", "chromium",
        "--viewport-size", "1440x900"
      ],
      "timeout": 120000
    }
  }
}
```
Notes:
- Do **not** add `--headless` if you want to watch the browser work.
- Use `--browser chrome` instead of `chromium` to drive your installed Chrome.
- Global scope alternative: `~/.kiro/settings/mcp.json`.

### 2b. Pre-warm the package and install the browser binary
```bash
npx -y @playwright/mcp@latest --help        # downloads the MCP package
npx -y playwright install chromium           # installs the browser it drives
```
If the server later says a browser is missing, run the command it prints, e.g.:
```bash
npx -y @playwright/mcp@latest install-browser chrome-for-testing
```

### 2c. Activate
MCP servers load at **session startup**. Restart `kiro-cli chat` (from this folder so the
workspace config is picked up), then run `/mcp` and confirm `playwright` is `✓ Initialized`.

---

## 3. Clone a page — step by step

Do this once per page. Example uses the UAE page; swap the URL/slug for others.

### Step 1 — Open the live page
Navigate the Playwright browser to the target, e.g.
`https://www.bncglobal.in/countires-we-serve/uae`.

### Step 2 — Trigger lazy content
Wix lazy-loads images/sections on scroll. Scroll top→bottom, then back to top, before
extracting. (Scroll in ~600px steps with a short delay, then `scrollTo(0,0)`.)

### Step 3 — Extract content in document order
Walk the DOM and collect every visible heading / paragraph / list item / span with its
text, vertical position (`top`), computed **font family**, size, weight, and color.
Save the result to a temp JSON file (e.g. `uae-extract.json`) to keep it out of chat context.

Also capture the **section background color bands** (full-width elements ≥150px tall with a
non-transparent background) to learn the section palette.

> Wix tip: the visible headline is usually a nested `<span>`, while `<h1>`/`<h2>` are hidden
> SEO tags. Read the **visible span's** computed font, not the semantic heading, or you'll
> get the wrong font (this is why our headings must be Madefor Display, not Corben serif).

### Step 4 — Understand the layout
- Are the "tabs" real tab panels (swap content) or **anchor links** on one long stacked page?
  Check the tab element: if it's an `<a>` and every ancestor is `position: static/relative`
  (not `sticky`/`fixed`) and all content is present stacked → it's a **single long page with
  an anchor menu**. Rebuild it stacked (do NOT hide content behind JS tabs), with a **static**
  anchor nav. (The UAE page is this type.)
- Take a full-page screenshot as a visual reference.

### Step 5 — Download the images
Wix serves images from `static.wixstatic.com/media/...` in AVIF. To get browser-friendly
PNGs at the exact displayed crop/size, take each image URL from the extraction and replace
`enc_avif` with `enc_auto`, then download. Use a small Node script:

```js
// scripts/dl-<page>.mjs
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const raw = {
  uae_hero:  'https://static.wixstatic.com/media/<id>~mv2.png/v1/.../enc_auto/name.png',
  // ...map every image to a clean asset name
};

const outDir = path.resolve('src/assets');
await mkdir(outDir, { recursive: true });
for (const [name, url] of Object.entries(raw)) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.bncglobal.in/' } });
  await writeFile(path.join(outDir, name + '.png'), Buffer.from(await res.arrayBuffer()));
  console.log('OK', name, res.headers.get('content-type'));
}
```
Run: `node scripts/dl-<page>.mjs`. Name assets by page prefix (`uae_*`, `sa_*`, etc.).

### Step 6 — Build the component
Create `src/pages/<Page>.jsx` following the existing template conventions (see below).
Import images from `../assets`. Reuse patterns from `Australia.jsx` / `Canada.jsx`
(tab layout) or `UAE.jsx` (stacked + anchor nav) / `SaudiArabia.jsx` (marketing layout),
whichever matches the live structure.

### Step 7 — Register the route
In `src/App.jsx`, import the page and add a route **before** the dynamic fallback:
```jsx
import UAE from './pages/UAE'
// ...
<Route path="countires-we-serve/uae" element={<UAE />} />
{/* keep this LAST */}
<Route path="countires-we-serve/:countrySlug" element={<CountryDetail />} />
```
Add the link to the "Countries we serve" dropdown in `src/components/Header.jsx` if missing.

### Step 8 — Verify against live
- Reload the local page (`http://localhost:5174/countires-we-serve/uae`).
- Check `0 console errors`.
- Confirm all sections/images present and no broken images (`naturalWidth > 0`).
- Confirm headings compute to **Wix Madefor Display** (no `corben`/serif).
- Screenshot local vs live and compare hero + key sections.
- Run `npm run build` to catch compile errors.

### Step 9 — Clean up temp files
Delete extraction JSON, screenshots, and `scripts/` download helpers when done.
The Playwright MCP writes to a `.playwright-mcp/` folder — remove it too.

---

## Project conventions (match these)

**Fonts** (Tailwind v4 theme in `src/index.css`):
- Headings: `font-display font-extrabold` → **Wix Madefor Display** (self-hosted).
- Body: `font-avenir` (mapped to Wix Madefor Text).
- Do **NOT** use `font-serif` (Corben) for these pages — the live headings are the bold
  sans-serif Madefor Display. (Corben is only for pages that genuinely use it.)

**Palette:**
- Navy `#0B2F5B` / `#00305B`, primary blue `#1D67CD`, light blue accent `#A3D9F6`,
  mint background `#F5FFF7`, body text on blue `#BFD9ED`.

**Layout:**
- Content width `max-w-[1122px]`, centered, `px-6 lg:px-0`.
- CTAs link to `/contact-8`.
- Global `<Layout />` provides the sticky Header (`h-[115px]`) and Footer — pages render
  only their own content. For anchor scrolling, offset by the header height
  (e.g. `scroll-mt-40` + subtract ~160px in `scrollTo`).

**Fidelity note:**
These are clean semantic rebuilds, not pixel Wix clones. Content baked into Wix images
(tax tables, diagrams, service cards) is preserved as downloaded images shown inline;
surrounding text/layout is rebuilt as real React/HTML. Some source fonts (e.g. Proxima Nova)
aren't licensed here, so we substitute the Madefor family.
