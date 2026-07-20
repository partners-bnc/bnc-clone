import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE_URL = 'https://www.bncglobal.in'
const currentDate = new Date().toISOString().split('T')[0]

const routes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/virtual-cfo', priority: '0.9', changefreq: 'monthly' },
  { path: '/bnc-global-services', priority: '0.9', changefreq: 'monthly' },
  { path: '/create-or-manage-your-gcc-in-india', priority: '0.9', changefreq: 'monthly' },
  { path: '/about-us', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact-8', priority: '0.8', changefreq: 'monthly' },
  { path: '/careers', priority: '0.8', changefreq: 'weekly' },
  { path: '/cybersecurity', priority: '0.8', changefreq: 'monthly' },
  { path: '/accounting', priority: '0.8', changefreq: 'monthly' },
  { path: '/accounts-outsourcing', priority: '0.8', changefreq: 'monthly' },
  { path: '/accounting-policy-preparation-services', priority: '0.8', changefreq: 'monthly' },
  { path: '/ar-ap', priority: '0.8', changefreq: 'monthly' },
  { path: '/audit-support-service', priority: '0.8', changefreq: 'monthly' },
  { path: '/bank-card-reconciliations', priority: '0.8', changefreq: 'monthly' },
  { path: '/bookeeping', priority: '0.8', changefreq: 'monthly' },
  { path: '/business-analysis', priority: '0.8', changefreq: 'monthly' },
  { path: '/capital-budgeting', priority: '0.8', changefreq: 'monthly' },
  { path: '/control-account-reconciliations', priority: '0.8', changefreq: 'monthly' },
  { path: '/controller-services', priority: '0.8', changefreq: 'monthly' },
  { path: '/cost-analysis', priority: '0.8', changefreq: 'monthly' },
  { path: '/customer-vendor-reconciliation', priority: '0.8', changefreq: 'monthly' },
  { path: '/digital-stock-asset-verification', priority: '0.8', changefreq: 'monthly' },
  { path: '/finance-advisory', priority: '0.8', changefreq: 'monthly' },
  { path: '/financial-statment-preparation-services', priority: '0.8', changefreq: 'monthly' },
  { path: '/income-tax-service-soutsourcing', priority: '0.8', changefreq: 'monthly' },
  { path: '/internal-control', priority: '0.8', changefreq: 'monthly' },
  { path: '/inventory-management', priority: '0.8', changefreq: 'monthly' },
  { path: '/outsouced-tax-preparation', priority: '0.8', changefreq: 'monthly' },
  { path: '/pay', priority: '0.8', changefreq: 'monthly' },
  { path: '/payroll-processing', priority: '0.8', changefreq: 'monthly' },
  { path: '/quickbooks', priority: '0.8', changefreq: 'monthly' },
  { path: '/services-under-virtual-cfo', priority: '0.8', changefreq: 'monthly' },
  { path: '/specific-cfo-services', priority: '0.8', changefreq: 'monthly' },
  { path: '/virtual-accounting', priority: '0.8', changefreq: 'monthly' },
  { path: '/working-capital-management-services', priority: '0.8', changefreq: 'monthly' },
  { path: '/xero-accounting', priority: '0.8', changefreq: 'monthly' },
  { path: '/year-end', priority: '0.8', changefreq: 'monthly' },
  { path: '/about-us/meet-our-team', priority: '0.8', changefreq: 'monthly' },
  { path: '/countires-we-serve/australia', priority: '0.8', changefreq: 'monthly' },
  { path: '/countires-we-serve/canada', priority: '0.8', changefreq: 'monthly' },
  { path: '/countires-we-serve/saudi-arabia', priority: '0.8', changefreq: 'monthly' },
  { path: '/countires-we-serve/uae', priority: '0.8', changefreq: 'monthly' },
  { path: '/elevate', priority: '0.7', changefreq: 'monthly' },
  { path: '/transforming-professionals', priority: '0.7', changefreq: 'monthly' },
  { path: '/communities', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
]

function generateSitemapXml() {
  const urlsXml = routes
    .map(
      (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`
}

const outputPath = path.resolve(__dirname, '../public/sitemap.xml')
fs.writeFileSync(outputPath, generateSitemapXml(), 'utf8')
console.log(`[SEO] Sitemap successfully generated at: ${outputPath}`)
