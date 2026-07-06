import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'

const careerData = {
  elevate: {
    title: 'Elevate Program',
    badge: 'Executive Training',
    desc: 'Elevate is BNC Global’s proprietary development track designed to help senior accountants, finance controllers, and advisors level-up their strategic corporate skills.',
    points: [
      'Boardroom communication & reporting simulations.',
      'Training on complex cross-border taxations and transfer pricing.',
      'Software masterclasses (Advanced NetSuite, Xero, and complex ERP integrations).',
      'Leadership mentoring directly from senior CFO network members.',
    ],
  },
  'transforming-professionals': {
    title: 'Transforming Professionals',
    badge: 'Graduate Transition',
    desc: 'A structured bridging initiative helping qualified Chartered Accountants, graduates, and interns transition smoothly from raw academic training to real-world corporate consultation.',
    points: [
      'Comprehensive orientation on global outsourcing frameworks (US/UK accounting standards).',
      'Real-world client communication guidelines and advisory ethics.',
      'Hands-on bookkeeping automation and AI integration workshops.',
      'Buddy programs for immediate feedback during early client engagements.',
    ],
  },
  communities: {
    title: 'BNC Communities',
    badge: 'Peer Network',
    desc: 'Connecting like-minded finance leaders, consultants, and freelance CFOs. We offer platforms to share technical resources, collaborate on major project RFPs, and participate in peer reviews.',
    points: [
      'Quarterly local chapter meetups and networking dinners.',
      'Private knowledge base access filled with templates, checklists, and calculators.',
      'Shared project bidding opportunities for large scale client conversions.',
      'Continuing Professional Education (CPE) webinars with industry guests.',
    ],
  },
}

export default function CareersSubPage({ slug: propSlug }) {
  const { slug: paramSlug } = useParams()
  const slug = propSlug || paramSlug
  const data = careerData[slug]

  if (!data) {
    return (
      <div className="py-24 text-center bg-white text-slate-800 space-y-6">
        <h2 className="text-2xl font-bold font-serif font-normal text-slate-900">Program Not Found</h2>
        <Link to="/careers" className="text-blue-600 hover:underline">
          Back to Careers
        </Link>
      </div>
    )
  }

  return (
    <div className="py-16 md:py-24 bg-white text-slate-800 antialiased font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-300">
        
        {/* Back Link */}
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Careers</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 text-sm font-semibold tracking-wide">
            {data.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-slate-900 leading-tight">
            {data.title}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            {data.desc}
          </p>
        </div>

        {/* Pillars / Features */}
        <div className="border-t border-slate-200 pt-8 space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Key Features of the Program</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.points.map((point, idx) => (
              <li
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex gap-3 text-sm text-slate-600"
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 text-center space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Interested in Participating?</h3>
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            Applications for our upcoming training cohort and community memberships are now open. Speak to our recruiter to submit your portfolio.
          </p>
          <div>
            <Link
              to="/contact-8"
              className="px-8 py-3 rounded-full font-bold bg-[#1D67CD] hover:bg-blue-600 text-white shadow-md active:scale-98 transition-colors inline-block cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
