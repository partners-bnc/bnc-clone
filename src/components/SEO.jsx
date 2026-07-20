import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'BNC Global'
const BASE_URL = 'https://www.bncglobal.in'
const DEFAULT_DESCRIPTION = 'BNC Global provides specialized Risk, Financial & Management Consulting, Accounting Outsourcing, Virtual CFO, and Advisory services globally.'
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  jsonLd,
}) {
  const location = useLocation()
  const currentPath = canonical || location.pathname
  const fullCanonicalUrl = currentPath.startsWith('http')
    ? currentPath
    : `${BASE_URL}${currentPath.startsWith('/') ? '' : '/'}${currentPath}`

  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `Risk & Management Consulting | ${SITE_NAME}`

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle

    // Helper to set or create meta tags
    const setMeta = (attrName, attrVal, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attrName, attrVal)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Helper to set canonical link
    const setCanonical = (href) => {
      let element = document.querySelector('link[rel="canonical"]')
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', 'canonical')
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }

    // 2. Set Meta Tags
    setMeta('name', 'description', description)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:url', fullCanonicalUrl)
    setMeta('property', 'og:image', ogImage)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)

    // 3. Set Canonical Link
    setCanonical(fullCanonicalUrl)

    // 4. Set JSON-LD Schema
    let scriptTag = document.querySelector('script[id="json-ld-schema"]')
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.setAttribute('id', 'json-ld-schema')
        scriptTag.setAttribute('type', 'application/ld+json')
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(jsonLd)
    } else if (scriptTag) {
      scriptTag.remove()
    }
  }, [fullTitle, description, fullCanonicalUrl, ogType, ogImage, jsonLd])

  return null
}
