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

### Font Selection Rules for Antigravity
*   **Titles & Headings:** Wix pages wrap display headings in nested `<span>` elements using **Wix Madefor Display** (`font-display font-extrabold`). Do NOT fall back to `corben/serif` unless explicitly audited as such.
*   **Paragraph Body:** Use `font-avenir` (`Wix Madefor Text`) for general descriptions.
*   **Color Palette:** Synced header blue `#00305B`, primary blue `#1D67CD`, accent light blue `#A3D9F6`, mint backgrounds `#F5FFF7`, and text-on-blue `#BFD9ED`.

---

## 3. High-Resolution Asset Retrieval

Wix CDN uses AVIF format by default. Antigravity must fetch high-res PNG or JPG alternatives to ensure seamless cross-browser rendering:
1. Extract page image URLs.
2. Replace `/enc_avif/...` in wixstatic CDN URLs with `/enc_auto/...`.
3. Save downloaded assets directly to `src/assets` and import them using ES6 imports.

---

## 4. Multi-State & Tabs Architecture

Wix pages often rely on multi-state boxes for complex regulatory details (e.g. tax rules, due dates, categories).
*   Implement these as interactive React state togglers (`const [activeTab, setActiveTab] = useState(0)`).
*   For tabs lists that wrap, use a responsive flex grid (e.g. `grid grid-cols-2 md:grid-cols-4 gap-4`) to present the selector buttons cleanly.
*   Keep content layout widths restricted to `max-w-[1122px]` (centered via `mx-auto`) to preserve live grid alignments.
