import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, User, Share2, AlertCircle } from 'lucide-react'
import SEO from '../components/SEO'
import { getStoryBySlug, resolveImageUrl } from '../services/storyblok'
import StoryblokBlockRenderer from '../components/blog/StoryblokBlockRenderer'

export default function BlogPost() {
  const { slug } = useParams()
  const [story, setStory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    async function loadPost() {
      if (!slug) return
      setLoading(true)
      setNotFound(false)

      try {
        // Try fetching with 'blog/' prefix first, then fallback to root slug
        let data = await getStoryBySlug(`blog/${slug}`)
        if (!data) {
          data = await getStoryBySlug(slug)
        }

        if (!data) {
          setNotFound(true)
        } else {
          setStory(data)
        }
      } catch (err) {
        console.error(`Error loading story for slug ${slug}:`, err)
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
    window.scrollTo(0, 0)
  }, [slug])

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: story?.content?.title || story?.name,
          text: story?.content?.meta_desc || story?.content?.excerpt || '',
          url: window.location.href,
        })
        .catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-6 w-32 bg-slate-200 rounded" />
            <div className="h-12 w-3/4 bg-slate-200 rounded-lg" />
            <div className="h-6 w-1/2 bg-slate-200 rounded" />
            <div className="h-80 bg-slate-200 rounded-2xl" />
            <div className="space-y-4 pt-8">
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-5/6" />
              <div className="h-4 bg-slate-200 rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (notFound || !story) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-lg">
          <AlertCircle className="w-14 h-14 text-teal-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 font-display mb-2">Article Not Found</h1>
          <p className="text-slate-600 text-sm mb-6">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-all shadow-md text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Insights
          </Link>
        </div>
      </div>
    )
  }

  const content = story.content || {}
  const title = content.title || story.name
  const metaDesc = content.meta_desc || content.excerpt || ''
  const category = content.category
  const author = content.author
  const date = content.date || story.first_published_at
  const readTime = content.read_time
  const coverImageUrl = content.cover_image_url
  const bodyBlocks = content.body || []

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: metaDesc,
    image: coverImageUrl ? [coverImageUrl] : undefined,
    datePublished: date,
    author: {
      '@type': 'Person',
      name: author || 'BNC Global',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BNC Global',
      url: 'https://www.bncglobal.in',
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={title}
        description={metaDesc}
        ogType="article"
        ogImage={coverImageUrl}
        jsonLd={articleSchema}
      />
      {metaDesc && <meta name="description" content={metaDesc} />}

      {/* Article Header */}
      <header className="bg-slate-50 border-b border-slate-200/80 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          {/* Category Badge */}
          {category && (
            <div className="mb-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 border border-teal-200 px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-display mb-6 leading-[1.2]">
            {title}
          </h1>



          {/* Meta bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 text-xs sm:text-sm text-slate-600">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {author && (
                <div className="flex items-center gap-2 font-medium text-slate-900">
                  <div className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">
                    {author.charAt(0)}
                  </div>
                  {author}
                </div>
              )}

              {date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {new Date(date).toLocaleDateString(undefined, {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              )}

              {readTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {readTime} min read
                </div>
              )}
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-teal-500 hover:text-teal-600 transition-all text-xs font-semibold shadow-sm active:scale-95"
            >
              <Share2 className="w-3.5 h-3.5" />
              {copied ? 'Link Copied!' : 'Share'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Cover Image */}
        {coverImageUrl && (
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 mb-12 shadow-sm bg-slate-100">
            <img
              src={resolveImageUrl(coverImageUrl)}
              alt={title}
              className="w-full h-auto max-h-[500px] object-cover"
              onError={(e) => {
                if (typeof coverImageUrl === 'string' && coverImageUrl.startsWith('/')) {
                  e.target.src = `https://bnc-blog.netlify.app${coverImageUrl}`
                }
              }}
            />
          </div>
        )}

        {/* Dynamic Storyblok Blocks */}
        <div className="article-body">
          {bodyBlocks.map((block) => (
            <StoryblokBlockRenderer key={block._uid} block={block} />
          ))}
        </div>
      </main>
    </div>
  )
}
