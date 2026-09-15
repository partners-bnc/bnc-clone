import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, ArrowRight, Search, BookOpen, AlertCircle, Globe } from 'lucide-react'
import SEO from '../components/SEO'
import { getStories, resolveImageUrl } from '../services/storyblok'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    async function loadBlogData() {
      setLoading(true)
      setError(null)
      try {
        const postsData = await getStories({ startsWith: 'blog/' })
        // Filter out folder stories or non-post stories
        const validPosts = (postsData.stories || []).filter(
          (s) => !s.is_folder && s.content && s.content.component === 'blog_post'
        )
        setPosts(validPosts)
      } catch (err) {
        console.error('Error loading blog content:', err)
        setError('Failed to load blog insights. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadBlogData()
  }, [])

  // Extract unique categories
  const categories = ['All', ...new Set(posts.map((p) => p.content?.category).filter(Boolean))]

  // Filter posts based on search query and category
  const filteredPosts = posts.filter((post) => {
    const title = post.content?.title || post.name || ''
    const excerpt = post.content?.meta_desc || post.content?.excerpt || ''
    const category = post.content?.category || ''
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title="Insights & Blog | BNC Global"
        description="Expert insights, risk management strategies, accounting intelligence, and ESG advisory from BNC Global."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Loading state */}
        {loading && (
          <div className="space-y-8 animate-pulse">
            <div className="h-96 bg-slate-200 rounded-3xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-80 bg-slate-200 rounded-2xl" />
              ))}
            </div>
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="rounded-2xl bg-red-50 border border-red-200 p-8 text-center my-12">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">Unable to load blog</h3>
            <p className="text-red-700 max-w-md mx-auto">{error}</p>
          </div>
        )}

        {/* Loaded Content */}
        {!loading && !error && (
          <>
            {/* BNC Global Ties with Saudi Arabia — Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B2F5B] via-[#0D3A6B] to-[#00305B] text-white p-8 sm:p-12 lg:p-16 mb-12 shadow-2xl border border-[#0B2F5B]/40">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#1D67CD]/10 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#1D67CD]/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D67CD]/15 border border-[#A3D9F6]/30 text-[#A3D9F6] text-xs font-semibold tracking-wider uppercase mb-6">
                  <Globe className="w-3.5 h-3.5" />
                  Global Partnerships
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display leading-[1.15]">
                  BNC Global Ties with Saudi Arabia
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-sans font-normal">
                  With over 15 years of operations, 500+ projects, and 50+ clients across 8 cities, BNC Global is a trusted partner in Saudi Arabia — driving growth aligned with Saudi Vision 2030.
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <Link
                    to="/countries-we-serve/saudi-arabia"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1D67CD] hover:bg-[#1552a8] text-white font-semibold transition-all shadow-lg hover:shadow-[#1D67CD]/25 active:scale-95"
                  >
                    Explore Our Presence
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="border-l border-[#1D67CD]/40 pl-6 py-1">
                    <div className="text-sm sm:text-base font-bold text-[#A3D9F6] tracking-wider uppercase">
                      15+ Years
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                      In Saudi Arabia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Articles Section */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D67CD] mb-2 block">
                    All Publications
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
                    Latest Insights & Articles
                  </h2>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1D67CD] focus:border-transparent transition-all"
                    />
                  </div>

                  {categories.length > 1 && (
                    <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            selectedCategory === category
                              ? 'bg-white text-[#0B2F5B] shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Blog Post Grid */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                  <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">No articles found</h3>
                  <p className="text-sm text-slate-500">
                    {searchQuery ? 'Try clearing your search filters.' : 'New articles will be published soon.'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => {
                    const content = post.content || {}
                    const title = content.title || post.name
                    const excerpt = content.meta_desc || content.excerpt || ''
                    const category = content.category
                    const author = content.author
                    const readTime = content.read_time
                    const date = content.date || post.first_published_at
                    const slug = post.slug

                    return (
                      <article
                        key={post.uuid || post.id}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:border-[#1D67CD]/50"
                      >
                        {content.cover_image_url && (
                          <Link to={`/blog/${slug}`} className="block relative h-48 overflow-hidden bg-slate-100">
                            <img
                              src={resolveImageUrl(content.cover_image_url)}
                              alt={title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                if (content.cover_image_url.startsWith('/')) {
                                  e.target.src = `https://bnc-blog.netlify.app${content.cover_image_url}`
                                }
                              }}
                            />
                          </Link>
                        )}

                        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              {category && (
                                <span className="text-xs font-bold uppercase tracking-wider text-[#1D67CD] bg-blue-50 px-2.5 py-1 rounded-md">
                                  {category}
                                </span>
                              )}
                              {readTime && (
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> {readTime} min read
                                </span>
                              )}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1D67CD] transition-colors font-display mb-3 leading-snug line-clamp-2">
                              <Link to={`/blog/${slug}`}>{title}</Link>
                            </h3>

                            {excerpt && (
                              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                {excerpt}
                              </p>
                            )}
                          </div>

                          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                            <div className="flex items-center gap-3">
                              {author && (
                                <span className="flex items-center gap-1 font-medium text-slate-700">
                                  <User className="w-3.5 h-3.5 text-slate-400" /> {author}
                                </span>
                              )}
                              {date && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                  {new Date(date).toLocaleDateString(undefined, {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                  })}
                                </span>
                              )}
                            </div>

                            <Link
                              to={`/blog/${slug}`}
                              className="text-[#1D67CD] group-hover:text-[#0B2F5B] font-semibold inline-flex items-center gap-1"
                            >
                              Read <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    )
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
