---
name: cloning_website
description: Guides the Antigravity agent step-by-step on how to clone pages from the live Wix site (https://www.bncglobal.in) into React + Tailwind pages using browser/Chrome DevTools MCP.
---

# Antigravity Skill Guide: Wix Site Cloning

This guide is specifically designed for the **Antigravity** agentic assistant to clone pages from the live BNC Global Wix website (`https://www.bncglobal.in`) into the local React + Tailwind codebase.

---

## 1. Antigravity Operation Flow

When a user requests to clone a page, Antigravity must follow this operational plan:

1. **Enter Planning Mode:** Research the live page structure and draft a detailed `implementation_plan.md` outlining the sections, typography, colors, and asset list. Wait for explicit user approval before execution.
2. **Setup Task Tracking:** Create or update `task.md` with checkable items for each section and verification steps. Mark them as `[/]` (in progress) and `[x]` (completed) as you code.
3. **Download Assets:** Use the custom Node.js downloader script to pull graphics and tables to `src/assets`.
4. **Draft Component:** Write clean React page components matching the audited CSS layout.
5. **Verify & Walkthrough:** Build the bundle with `npm run build`, navigate local headless Chrome to inspect visual rendering, and document findings in `walkthrough.md`.

---

## 2. Browser Auditing & Style Scraping

Use the Chrome DevTools MCP tools to inspect the live elements on `https://www.bncglobal.in`.

### Text and Font Audit
Run this script to retrieve text nodes and style properties:
```javascript
() => {
  const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span, a'));
  return elements.map(el => {
    const style = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return {
      tag: el.tagName,
      text: el.innerText.trim(),
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      color: style.color,
      rect: { left: rect.left, top: rect.top, width: rect.width, height: rect.height }
    };
  }).filter(e => e.text.length > 0);
}
```

### Font Selection Rules & Wix Style Override Bug
*   **Wix Style Override Bug (CRITICAL):** Wix's computed styles sometimes report text elements as using `corben, serif` (or fallback fonts) when they are visually rendered using the global sans-serif theme font (**Wix Madefor Display** / `font-display font-extrabold`). 
    *   *Rule:* ALWAYS visually verify heading fonts against the live site screenshots. Do not blindly trust computed `font-family` property values if they contradict the visual layout.
*   **Titles & Headings:** Most display headings should map to **Wix Madefor Display** (`font-display font-extrabold`). Use `font-serif` (Corben) only if the text is explicitly a styled serif font on the live page.
*   **Paragraph Body:** Use `font-sans` (Wix Madefor Text/Avenir) for general descriptions.
*   **Color Palette:** Synced header blue `#00305B`, primary blue `#1D67CD`, accent light blue `#A3D9F6`, mint backgrounds `#F5FFF7`, and text-on-blue `#BFD9ED`.

---

## 3. High-Resolution Asset Retrieval

Wix CDN uses AVIF format by default. Antigravity must fetch high-res PNG or JPG alternatives to ensure seamless cross-browser rendering:
1. Extract page image URLs.
2. Replace `/enc_avif/...` in wixstatic CDN URLs with `/enc_auto/...`.
3. Save downloaded assets directly to `src/assets` and import them using ES6 imports.

---

## 4. Layout Math & Centering Constraints

*   **Standard Content Grid:** Restrict general page layouts to a max width of `max-w-[1122px]` (centered via `mx-auto`) to match BNC standard page columns.
*   **Wix 1360px Grid Strip:** For full-bleed/staggered sections (like Hero banners with overlapping columns), the container should wrap to exactly `max-w-[1360px] px-4 md:px-0 mx-auto`.
*   **Staggered Overlapping Columns:**
    *   Wix layout columns are often `63.3%` (`860.9px`) of the `1360px` container.
    *   Left column (image): width `w-full md:w-[63.3%]`, positioned absolutely at `left-0`.
    *   Right column (navy text box): width `w-full md:w-[63.3%]`, positioned absolutely at `right-0`, shifted down vertically (e.g. `top-[80px]`).
    *   *Text Padding:* Use exact padding (e.g. `md:pl-[140px] md:pr-16`) inside the overlapping box to align the inner text exactly with the center of the page grid.
*   **Multi-State & Tabs Architecture:**
    *   Implement tabs as interactive React state togglers (`const [activeTab, setActiveTab] = useState(0)`).
    *   For wrapping tab buttons, use a responsive flex grid (e.g. `grid grid-cols-2 md:grid-cols-4 gap-4`).
