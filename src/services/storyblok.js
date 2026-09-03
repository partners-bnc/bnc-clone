const TOKEN = import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN || import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN || 'NANaTrJ4WxiDfcUjeR2dmwtt'
const VERSION = import.meta.env.VITE_STORYBLOK_CONTENT_VERSION || 'published'
const API_BASE = 'https://api.storyblok.com/v2/cdn'

/**
 * Fetch a single story by its slug or path
 * @param {string} slug - e.g. 'home' or 'blog/verra-or-gold-standard'
 * @returns {Promise<object|null>}
 */
export async function getStoryBySlug(slug) {
  try {
    const cleanSlug = slug.replace(/^\/+/, '')
    const url = `${API_BASE}/stories/${cleanSlug}?token=${TOKEN}&version=${VERSION}&cv=${Date.now()}`
    const res = await fetch(url)
    if (!res.ok) {
      if (res.status === 404) return null
      throw new Error(`Failed to fetch story ${slug}: ${res.status} ${res.statusText}`)
    }
    const data = await res.json()
    return data.story
  } catch (err) {
    console.error(`[Storyblok Service] Error fetching story ${slug}:`, err)
    return null
  }
}

/**
 * Fetch all stories in a folder or starting with a prefix
 * @param {object} options
 * @param {string} options.startsWith - e.g. 'blog/'
 * @param {number} [options.perPage=25]
 * @param {number} [options.page=1]
 * @returns {Promise<{ stories: Array, total: number }>}
 */
export async function getStories({ startsWith = '', perPage = 25, page = 1 } = {}) {
  try {
    const params = new URLSearchParams({
      token: TOKEN,
      version: VERSION,
      per_page: perPage.toString(),
      page: page.toString(),
      cv: Date.now().toString(),
    })
    if (startsWith) {
      params.append('starts_with', startsWith)
    }

    const res = await fetch(`${API_BASE}/stories?${params.toString()}`)
    if (!res.ok) {
      throw new Error(`Failed to fetch stories: ${res.status} ${res.statusText}`)
    }
    const total = parseInt(res.headers.get('total') || '0', 10)
    const data = await res.json()
    return {
      stories: data.stories || [],
      total: total || data.stories?.length || 0,
    }
  } catch (err) {
    console.error('[Storyblok Service] Error fetching stories:', err)
    return { stories: [], total: 0 }
  }
}

/**
 * Resolves an image URL from Storyblok (supports asset objects, CDN URLs, and relative paths)
 * @param {string|object} image
 * @returns {string}
 */
export function resolveImageUrl(image) {
  if (!image) return ''
  const url = typeof image === 'object' ? image.filename || image.url || '' : image
  if (typeof url !== 'string' || !url.trim()) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) {
    return url
  }
  return url.startsWith('/') ? url : `/${url}`
}

