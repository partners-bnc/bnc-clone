import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import RichTextRenderer from './RichTextRenderer'
import { resolveImageUrl } from '../../services/storyblok'

/**
 * Normalizes internal links (e.g., /post/xyz -> /blog/xyz)
 */
export function normalizeLink(url) {
  if (!url) return '#'
  if (url.startsWith('/post/')) {
    return url.replace('/post/', '/blog/')
  }
  return url
}

export default function StoryblokBlockRenderer({ block }) {
  if (!block || !block.component) return null

  switch (block.component) {
    case 'hero':
      return <HeroBlock block={block} />
    case 'featured_post':
      return <FeaturedPostBlock block={block} />
    case 'cta_banner':
      return <CtaBannerBlock block={block} />
    case 'comparison_block':
      return <ComparisonBlock block={block} />
    case 'image_block':
      return <ImageBlock block={block} />
    case 'related_post':
      return <RelatedPostBlock block={block} />
    case 'rich_text':
      return <RichTextBlock block={block} />
    default:
      console.warn(`[Storyblok] Unknown component block: ${block.component}`, block)
      return null
  }
}

/* =========================================================================
   Individual Block Components
   ========================================================================= */

function HeroBlock({ block }) {
  const linkUrl = normalizeLink(block.cta_url)
  const isExternal = linkUrl.startsWith('http') || linkUrl.startsWith('mailto:')

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F2830] via-[#163842] to-[#0A1E24] text-white p-8 sm:p-12 lg:p-16 mb-12 shadow-2xl border border-teal-900/40">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        {block.eyebrow && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-6">
            {block.eyebrow}
          </div>
        )}

        {block.headline && (
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-display leading-[1.15]">
            {block.headline}
          </h1>
        )}

        {block.body && (
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-sans font-normal">
            {block.body}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-6">
          {block.cta_label && (
            isExternal ? (
              <a
                href={linkUrl}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold transition-all shadow-lg hover:shadow-teal-500/25 active:scale-95"
              >
                {block.cta_label}
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to={linkUrl}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold transition-all shadow-lg hover:shadow-teal-500/25 active:scale-95"
              >
                {block.cta_label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )
          )}

          {(block.stat_label || block.stat_value) && (
            <div className="border-l border-teal-800/80 pl-6 py-1">
              {block.stat_value && (
                <div className="text-sm sm:text-base font-bold text-teal-300 tracking-wider uppercase">
                  {block.stat_value}
                </div>
              )}
              {block.stat_label && (
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                  {block.stat_label}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function FeaturedPostBlock({ block }) {
  const linkUrl = normalizeLink(block.href)
  const isExternal = linkUrl.startsWith('http')

  const CardWrapper = ({ children }) =>
    isExternal ? (
      <a href={linkUrl} className="block group mb-12" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link to={linkUrl} className="block group mb-12">
        {children}
      </Link>
    )

  return (
    <CardWrapper>
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 group-hover:border-teal-500/50">
        <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {block.eyebrow && (
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {block.eyebrow}
                </span>
              )}
              {block.category && (
                <span className="text-xs font-medium text-slate-500">
                  {block.category}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors font-display mb-4 leading-snug">
              {block.title}
            </h2>

            {block.summary && (
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 line-clamp-3">
                {block.summary}
              </p>
            )}
          </div>

          <div className="inline-flex items-center gap-2 text-teal-600 font-semibold group-hover:text-teal-700 transition-colors">
            Read article
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[260px] bg-slate-100 overflow-hidden flex items-center justify-center">
          {block.image_url ? (
            <img
              src={resolveImageUrl(block.image_url)}
              alt={block.title || 'Featured Post'}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback to netlify origin if relative path failed
                if (block.image_url.startsWith('/')) {
                  e.target.src = `https://bnc-blog.netlify.app${block.image_url}`
                }
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-teal-800 to-slate-900 flex items-center justify-center p-8">
              <span className="text-teal-200/50 font-display text-2xl font-bold">BNC Insights</span>
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  )
}

function CtaBannerBlock({ block }) {
  const linkUrl = normalizeLink(block.button_url)
  const isExternal = linkUrl.startsWith('http') || linkUrl.startsWith('mailto:')

  return (
    <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-14 my-12 relative overflow-hidden border border-slate-800 shadow-xl">
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        {block.eyebrow && (
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-3 block">
            {block.eyebrow}
          </span>
        )}

        {block.heading && (
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mb-4 leading-tight">
            {block.heading}
          </h3>
        )}

        {block.body && (
          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            {block.body}
          </p>
        )}

        {block.button_label && (
          isExternal ? (
            <a
              href={linkUrl}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold transition-all shadow-md active:scale-95"
            >
              {block.button_label}
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <Link
              to={linkUrl}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold transition-all shadow-md active:scale-95"
            >
              {block.button_label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )
        )}
      </div>
    </div>
  )
}

function ComparisonBlock({ block }) {
  return (
    <div className="my-10 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
      {block.eyebrow && (
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-2.5 py-1 rounded-md mb-3 inline-block">
          {block.eyebrow}
        </span>
      )}

      {block.heading && (
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
          {block.heading}
        </h3>
      )}

      {block.summary && (
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
          {block.summary}
        </p>
      )}

      {block.image_url && (
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-white mb-3">
          <img
            src={resolveImageUrl(block.image_url)}
            alt={block.alt || block.heading || 'Comparison graphic'}
            className="w-full h-auto object-contain max-h-[500px]"
            onError={(e) => {
              if (block.image_url.startsWith('/')) {
                e.target.src = `https://bnc-blog.netlify.app${block.image_url}`
              }
            }}
          />
        </div>
      )}

      {block.caption && (
        <p className="text-xs sm:text-sm text-slate-500 italic mt-2 text-center">
          {block.caption}
        </p>
      )}
    </div>
  )
}

function ImageBlock({ block }) {
  if (!block.image_url) return null

  return (
    <figure className="my-10">
      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
        <img
          src={resolveImageUrl(block.image_url)}
          alt={block.alt || 'Article visual'}
          className="w-full h-auto object-cover max-h-[600px]"
          onError={(e) => {
            if (block.image_url.startsWith('/')) {
              e.target.src = `https://bnc-blog.netlify.app${block.image_url}`
            }
          }}
        />
      </div>
      {block.caption && (
        <figcaption className="text-xs sm:text-sm text-slate-500 italic mt-3 text-center">
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}

function RelatedPostBlock({ block }) {
  const linkUrl = normalizeLink(block.href)
  const isExternal = linkUrl.startsWith('http')

  const Wrapper = ({ children }) =>
    isExternal ? (
      <a href={linkUrl} className="block my-8 group" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link to={linkUrl} className="block my-8 group">
        {children}
      </Link>
    )

  return (
    <Wrapper>
      <div className="p-6 sm:p-7 rounded-2xl bg-teal-50/50 border border-teal-200/80 hover:border-teal-400 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col sm:flex-row gap-6 items-start justify-between">
        <div className="flex-1">
          {block.eyebrow && (
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2 block">
              {block.eyebrow}
            </span>
          )}

          <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors font-display mb-2">
            {block.title}
          </h4>

          {block.summary && (
            <p className="text-sm sm:text-base text-slate-600 line-clamp-2">
              {block.summary}
            </p>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-teal-700 font-semibold text-sm shrink-0 self-end sm:self-center">
          Read post
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Wrapper>
  )
}

function RichTextBlock({ block }) {
  return <RichTextRenderer content={block.content} />
}
