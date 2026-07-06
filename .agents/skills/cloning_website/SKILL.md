---
name: cloning_website
description: Guides the agent step-by-step on how to clone pages from the live Wix site (https://www.bncglobal.in) into React + Tailwind pages for Antigravity using browser/Chrome DevTools MCP.
---

# Cloning Live Site Pages into React Components for Antigravity

This skill guide provides step-by-step instructions on how to use browser capabilities (such as the Chrome DevTools MCP server or Playwright subagents) to audit, download assets, and clone pages from the original Wix website (`https://www.bncglobal.in`) into the local React application with pixel-perfect accuracy.

---

## Step 1: Open and Audit the Live Page

1. Navigate your browser tool to the target live page on `https://www.bncglobal.in` (e.g., `https://www.bncglobal.in/countires-we-serve/canada` or `https://www.bncglobal.in/elevate`).
2. Wix lazy-loads images and sections. Ensure the browser is scrolled from top to bottom in small increments (around 600px each step with a brief delay) to trigger all lazy-load hooks and render all images.
3. Scroll back to the top (`window.scrollTo(0,0)`) before analyzing the DOM.

---

## Step 2: Extract Content & Styles

1. Run an evaluation script to capture all visible texts, font sizes, weights, families, colors, and layout rectangles:
   ```javascript
   () => {
     const allElements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span, a'));
     const results = [];
     allElements.forEach((el) => {
       const txt = el.innerText.trim();
       if (!txt) return;
       const style = window.getComputedStyle(el);
       const rect = el.getBoundingClientRect();
       if (rect.width < 5 || rect.height < 5) return;
       results.push({
         tag: el.tagName,
         text: txt,
         fontFamily: style.fontFamily,
         fontSize: style.fontSize,
         fontWeight: style.fontWeight,
         color: style.color,
         rect: { left: rect.left, top: rect.top, width: rect.width, height: rect.height }
       });
     });
     return results;
   }
   ```
2. Save this parsed text log to a temporary scratch file to keep it out of the main conversation context.
3. Identify section backgrounds by filtering for full-width containers (`width > 1000px`) that have solid background colors (e.g., `#1D67CD` or `#00305B`).

> [!IMPORTANT]
> **Wix Font Quirk:** Headline text is often wrapped inside a nested `<span>` with a computed font family like `Wix Madefor Display` or `Wix Madefor Text`. The outer semantic heading tag (`H1`/`H2`) may inherit fallback fonts. Always inspect the computed styles of the *inner text span* to determine the exact font.

---

## Step 3: Extract and Download High-Resolution Assets

1. Retrieve the list of all image URLs on the page:
   ```javascript
   () => Array.from(new Set(Array.from(document.querySelectorAll('img')).map(img => img.src)))
   ```
2. **Convert AVIF to Web-Safe Formats:** Wix CDN serves URLs containing `/v1/fill/.../enc_avif/...`. To download high-resolution PNG or JPG assets that render correctly in the local bundle:
   - Replace `enc_avif` with `enc_auto` in the URL.
   - Run a Node.js utility script in the background to fetch these images and save them directly to the `src/assets` folder.
   - Prefix asset filenames by country or page area (e.g. `can_hero1.jpg`, `aus_cta.png`) to keep them organized.

---

## Step 4: Rebuild the Layout Structure

1. **Multi-Tab Layouts:** Check if the live page implements tabs (Wix Multi-State Containers). Rebuild these in React using simple `useState` tab togglers. Ensure that changing tabs displays the respective descriptions and assets.
2. **Typography Mapping:**
   - Headings/Hero Titles: Use `font-display font-extrabold` (Wix Madefor Display).
   - Paragraphs/Copy: Use `font-avenir` (Wix Madefor Text).
3. **Margins & Spacing:** Keep container widths restricted to `max-w-[1122px]` (centered via `mx-auto`) to match Wix's grid boundaries.

---

## Step 5: Routing & Registration

1. Map the new route inside `src/App.jsx`.
2. For countries, place the dedicated route *above* the dynamic fallback:
   ```jsx
   <Route path="countires-we-serve/canada" element={<Canada />} />
   <Route path="countires-we-serve/:countrySlug" element={<CountryDetail />} />
   ```
3. Update dropdown lists inside `src/components/Header.jsx` to direct links to the new route.

---

## Step 6: Verification

1. Run `npm run build` to confirm the production build completes with no unmapped assets or compile issues.
2. Navigate to your local page and visually inspect each section against the live site, making sure all images are loaded (`naturalWidth > 0`) and fonts are correctly computed.
