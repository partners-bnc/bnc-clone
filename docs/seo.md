# Public page delivery and SEO

Use Node 24 and npm ci. npm run build prepares the public route catalogue, builds the application and uses bundled Chromium to write real HTML for each public route. npm run test:seo verifies the generated metadata, canonical URLs, schemas, sitemap, redirects and readable mobile content with JavaScript disabled.

The build fails if an expected public route does not render or a required content fetch fails. It does not publish empty shells as a fallback. Chromium is a build dependency, not a production API function. For supported local Chromium installations set PRERENDER_CHROME_PATH; otherwise the bundled serverless binary is used.

Vercel serves the generated .html files with clean URLs. Unknown URLs use dist/404.html with HTTP 404; do not reintroduce a catch-all rewrite to index.html. The checked-in vercel.json is maintained by prepare-seo from the route catalogue. Preserve API functions and explicitly declared account routes when updating deployment settings.

VITE_SITE_URL can override the production origin for a deliberate domain change. Do not use a preview hostname as the canonical production origin.

Sitemap lastmod uses actual article dates when available and is omitted for undated static content. llms.txt and FAQ markup are not prerequisites for indexing or AI citations.

After deployment, verify URL Inspection, selected canonicals, CDN bot access, real redirects/status codes and field Core Web Vitals. Build verification does not measure ranking or production indexing.

Business follow-up: confirm legal entity, office relationships, author credentials, real social profiles, published fees/timelines and evidenced case studies before adding those facts. No pricing, certifications, customer outcomes or legal claims have been invented.

Published Storyblok articles are fetched at build time with the configured delivery token and included in HTML and sitemap. In the browser, article and listing requests read current published Storyblok content first; the build snapshot is used only during prerendering or if the CMS request fails. A live 404 is authoritative and does not restore an unpublished article from the snapshot. Draft mode never uses published snapshots. The article's structured data is refreshed with the loaded content, including its author. Configure a Storyblok publish/unpublish deployment webhook to regenerate static HTML and the sitemap for crawlers and visitors without JavaScript. Without that webhook, those static files update on the next deployment, while browser visitors receive current published content on page load. Old misspelled slugs redirect permanently. Review overlapping accounting/CFO page intent using Search Console before consolidating content.
