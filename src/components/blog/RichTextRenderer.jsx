import React from 'react'

/**
 * Render Storyblok ProseMirror rich-text JSON document into React JSX
 */
export default function RichTextRenderer({ content, className = '' }) {
  if (!content) return null

  // If content is already a string (raw HTML or plain text)
  if (typeof content === 'string') {
    return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  }

  // If content is ProseMirror JSON doc
  if (content.type === 'doc' && Array.isArray(content.content)) {
    return (
      <div className={`prose max-w-none text-slate-700 leading-relaxed ${className}`}>
        {content.content.map((node, index) => renderNode(node, index))}
      </div>
    )
  }

  return null
}

function renderNode(node, index) {
  if (!node) return null

  switch (node.type) {
    case 'heading': {
      const level = node.attrs?.level || 2
      const text = renderChildNodes(node.content)
      const headingClasses = {
        1: 'text-3xl sm:text-4xl font-bold text-slate-900 mt-10 mb-5 font-display tracking-tight',
        2: 'text-2xl sm:text-3xl font-bold text-slate-900 mt-8 mb-4 font-display tracking-tight',
        3: 'text-xl sm:text-2xl font-semibold text-slate-900 mt-6 mb-3 font-display',
        4: 'text-lg sm:text-xl font-semibold text-slate-900 mt-5 mb-2 font-display',
        5: 'text-base sm:text-lg font-semibold text-slate-900 mt-4 mb-2 font-display',
        6: 'text-sm sm:text-base font-semibold text-slate-900 mt-3 mb-1 font-display',
      }
      const HeadingTag = `h${level}`
      return (
        <HeadingTag key={index} className={headingClasses[level] || headingClasses[2]}>
          {text}
        </HeadingTag>
      )
    }

    case 'paragraph': {
      return (
        <p key={index} className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-sans">
          {renderChildNodes(node.content)}
        </p>
      )
    }

    case 'bullet_list': {
      return (
        <ul key={index} className="list-disc pl-6 space-y-2 mb-6 text-base sm:text-lg text-slate-700">
          {node.content?.map((item, itemIdx) => (
            <li key={itemIdx} className="leading-relaxed">
              {renderChildNodes(item.content)}
            </li>
          ))}
        </ul>
      )
    }

    case 'ordered_list': {
      return (
        <ol key={index} className="list-decimal pl-6 space-y-2 mb-6 text-base sm:text-lg text-slate-700">
          {node.content?.map((item, itemIdx) => (
            <li key={itemIdx} className="leading-relaxed">
              {renderChildNodes(item.content)}
            </li>
          ))}
        </ol>
      )
    }

    case 'list_item': {
      return <span key={index}>{renderChildNodes(node.content)}</span>
    }

    case 'blockquote': {
      return (
        <blockquote key={index} className="border-l-4 border-teal-600 pl-4 py-2 my-6 italic text-slate-800 bg-slate-50/70 rounded-r-lg">
          {renderChildNodes(node.content)}
        </blockquote>
      )
    }

    case 'code_block': {
      return (
        <pre key={index} className="bg-slate-900 text-slate-100 p-4 rounded-xl my-6 overflow-x-auto text-sm font-mono">
          <code>{renderChildNodes(node.content)}</code>
        </pre>
      )
    }

    case 'horizontal_rule': {
      return <hr key={index} className="my-8 border-slate-200" />
    }

    default:
      if (node.content) {
        return <div key={index}>{renderChildNodes(node.content)}</div>
      }
      return null
  }
}

function renderChildNodes(children) {
  if (!children || !Array.isArray(children)) return null

  return children.map((child, index) => {
    if (child.type === 'text') {
      let element = <span key={index}>{child.text}</span>

      if (child.marks && Array.isArray(child.marks)) {
        child.marks.forEach((mark) => {
          if (mark.type === 'bold') {
            element = <strong key={index} className="font-semibold text-slate-900">{element}</strong>
          } else if (mark.type === 'italic') {
            element = <em key={index} className="italic">{element}</em>
          } else if (mark.type === 'underline') {
            element = <u key={index} className="underline">{element}</u>
          } else if (mark.type === 'strike') {
            element = <s key={index} className="line-through">{element}</s>
          } else if (mark.type === 'code') {
            element = <code key={index} className="bg-slate-100 text-teal-700 px-1.5 py-0.5 rounded text-sm font-mono">{element}</code>
          } else if (mark.type === 'link') {
            const href = mark.attrs?.href || '#'
            const isExternal = href.startsWith('http')
            element = (
              <a
                key={index}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="text-teal-600 hover:text-teal-800 underline underline-offset-2 transition-colors font-medium"
              >
                {element}
              </a>
            )
          }
        })
      }
      return element
    }

    return renderNode(child, index)
  })
}
