import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/finance_advisory_hero.png'
import targetImg from '../assets/finance_advisory_target.png'

export default function FinanceAdvisory() {
  const otherServices = [
    { name: 'Bank & Cards Reconciliations', path: '/bank-card-reconciliations' },
    { name: 'Business Analysis', path: '/business-analysis' },
    { name: 'Control Account Reconciliations', path: '/control-account-reconciliations' },
    { name: 'Controller services', path: '/controller-services' },
    { name: 'Cost Analysis', path: '/cost-analysis' },
    { name: 'Customer & Vendor Reconciliation', path: '/customer-vendor-reconciliation' },
    { name: 'Pay', path: '/pay' },
    { name: 'Finance Advisory', path: '/finance-advisory' },
    { name: 'Digital Stock / Asset Verification', path: '/digital-stock-asset-verification' },
    { name: 'Create / Manage Your GCC In India', path: '/create-or-manage-your-gcc-in-india' }
  ]

  const capabilities = [
    {
      title: 'Strategic Financial Advisory',
      desc: 'Formulating growth strategies, capital spending optimization, asset deployment plans, and comprehensive financial runway modeling.'
    },
    {
      title: 'Business Restructuring & Turnaround',
      desc: 'Structuring debt renegotiation workflows, immediate cash preservation, operational cost pruning, and business turnaround advisory.'
    },
    {
      title: 'Regulatory & Compliance Advisory',
      desc: 'Comprehensive compliance reporting, statutory audit prep support, corporate governance audits, and tax strategy alignments.'
    },
    {
      title: 'Risk Management & Governance',
      desc: 'Internal controls designing, transaction audit reviews, fraud monitoring frameworks, and enterprise risk management (ERM).'
    },
    {
      title: 'Financial Operations & Efficiency',
      desc: 'Standardizing accounting operations, finance tech stack integrations, billing workflows automation, and closing cycles acceleration.'
    },
    {
      title: 'Transaction & Capital Advisory',
      desc: 'Assisting in venture capitalization runs, institutional debt syndication, valuation checks, and transactional due diligence.'
    }
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#00305B] to-[#0A2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-normal leading-tight">
                Finance Advisory Services
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                We offer end-to-end financial advisory services designed to help organisations strengthen financial performance, manage risk, and remain compliant in a constantly evolving regulatory landscape.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact-8"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-opacity-90 shadow-md transition-colors"
                >
                  <span>Connect to us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={heroImg} 
                alt="Finance advisory corridor illustration" 
                className="w-full max-w-[440px] h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Advisory Services (White Background) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Our Finance Advisory Capabilities
            </h2>
            <p className="text-slate-500 font-medium">Helping organizations navigate growth, transformation, and stabilization phases.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-[#1D67CD] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1D67CD]/10 flex items-center justify-center font-bold text-[#1D67CD] text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-800 text-base font-sans group-hover:text-[#1D67CD] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs text-[#1D67CD] font-bold">
                  <span>Learn details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Who We Work With (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
                Who We Work With
              </h2>
              <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
                BnC collaborates with businesses at all stages of their lifecycle. From high-growth tech startups needing financial structure to mature enterprises standardizing global controls, we curate our advisory expertise to meet client scales.
              </p>
              
              <div className="space-y-4 pt-2">
                {[
                  { segment: 'Startups & Growth-Stage', detail: 'Fundraising readiness, runway management, and seed metrics auditing.' },
                  { segment: 'SMEs & Mid-Market Firms', detail: 'Regulatory compliance structuring, working capital optimization, and tax planning.' },
                  { segment: 'Enterprise Corporates', detail: 'M&A due diligence, global controllership outsourcing, and risk governance.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D9F6] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm font-sans">{item.segment}</h4>
                      <p className="text-xs text-[#BFD9ED] font-avenir mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={targetImg} 
                alt="Startups and Growth companies chart graphic" 
                className="w-full max-w-[380px] h-auto rounded-3xl shadow-lg border border-white/10"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Other Outsourcing Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#1D67CD] tracking-tight">
              Other Outsourcing Services
            </h2>
            <p className="text-slate-500 font-medium">Explore specific operational controllership tracks designed for corporate scaling.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {otherServices.map((service, idx) => (
              <Link
                key={idx}
                to={service.path}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#1D67CD] transition-all flex items-center justify-between group shadow-sm cursor-pointer"
              >
                <span className="font-bold text-slate-800 text-sm font-sans">{service.name}</span>
                <span className="text-[#1D67CD] group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
