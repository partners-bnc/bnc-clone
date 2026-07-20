import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronUp, ChevronDown, Search, ChevronLeft, ChevronRight, X } from 'lucide-react'
import SEO from '../components/SEO'
import corridorImg from '../assets/india_saudi_corridor.png'

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BNC Global Consultech',
  url: 'https://www.bncglobal.in',
  logo: 'https://www.bncglobal.in/logo.png',
  description: 'BNC Global provides specialized Risk & Management Consulting, Accounting Outsourcing, Virtual CFO, and Tax Advisory services.',
  telephone: '+919810575613',
  email: 'info@bncglobal.in',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/bnc-global-consulteck/',
    'https://www.instagram.com/bncglobal.in/',
    'https://www.facebook.com/bncglobal.in/',
    'https://www.youtube.com/@bncglobalconsultech',
  ],
}
import reviewImg from '../assets/reviewing_financial_reports.png'
import iconAccounting from '../assets/icon_accounting.png'
import iconTax from '../assets/icon_tax.png'
import iconAdvisory from '../assets/icon_advisory.png'

export default function Home() {
  const [activeFaqTab, setActiveFaqTab] = useState('setup')
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showDpdpaModal, setShowDpdpaModal] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('dpdpa_modal_dismissed')
    if (!dismissed) {
      setShowDpdpaModal(true)
    }
  }, [])

  const closeDpdpaModal = () => {
    sessionStorage.setItem('dpdpa_modal_dismissed', 'true')
    setShowDpdpaModal(false)
  }

  const slides = [
    {
      title: 'Resistance to change',
      desc: "95% of CEOs are concerned that resistance to change could hinder our organisation's ability to adapt our business model and core operations as needed.",
      showButtons: true,
      btn1Text: 'About Us',
      btn1Link: '/about-us',
      btn2Text: 'Career',
      btn2Link: '/careers'
    },
    {
      title: 'Security Controls',
      desc: '81% of CEOs find it challenging to manage security controls across remote or hybrid working architectures.',
      showButtons: false
    },
    {
      title: 'Regulatory Challenges',
      desc: '88% of CEOs recognise the need to adapt to changing regulatory frameworks and international tax guidelines.',
      showButtons: false
    },
    {
      title: 'Merger integration',
      desc: '89% of CEOs find merger integration is key to growth, but struggle to align financial operations post-transaction.',
      showButtons: false
    }
  ]

  // Auto-slide effect every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const faqData = {
    setup: [
      {
        q: 'What is BNC Global?',
        a: 'BNC Global is a professional corporate consultation and financial operations group. We deliver boardroom-ready Virtual CFO support, outsourced bookkeeping, payroll, and corporate tax compliance services designed for modern enterprises.'
      },
      {
        q: 'What is start up ecosystem? and how can I benefit from it?',
        a: 'BNC Global is a finance consulting and outsourcing company. We are working with clients in India region as well as in UAE area. We also provide Manpower on temporary and permanent basis to Big 4s and top 15 consulting company, CA firms and corporates in India and UAE.'
      },
      {
        q: 'What is recruitment Ecosystem? How can I gain from it?',
        a: 'The recruitment ecosystem is our pipeline connecting qualified Chartered Accountants, financial analysts, and corporate tax advisors with growing firms. Job seekers get access to prime career-track hybrid roles.'
      },
      {
        q: 'I am working in a company, how can BNC help me?',
        a: 'We serve as an extension of your internal finance department, handling labor-intensive tasks like bank reconciliations, audit schedule preparation, VAT/GST filings, and monthly ledger closings.'
      },
      {
        q: 'What kind of consulting is provided by BNC?',
        a: 'We provide specialized strategic consulting in Virtual CFO support, working capital optimization, cash-flow forecasting, risk mitigation, and corporate restructuring.'
      }
    ],
    general: [
      {
        q: 'What software platforms does BNC support?',
        a: 'We are certified partners and experts in QuickBooks Online, Xero, Zoho Books, NetSuite, Hubdoc, and standard payroll ledgers.'
      },
      {
        q: 'How secure is our financial data?',
        a: 'We implement industry-grade ISO compliance, restricted cloud databases, and enforce strict Non-Disclosure Agreements (NDAs) across all advisory members.'
      }
    ]
  }

  const toggleFaq = (idx) => {
    if (expandedFaq === idx) {
      setExpandedFaq(null)
    } else {
      setExpandedFaq(idx)
    }
  }

  const currentFaqs = faqData[activeFaqTab].filter(item =>
    item.q.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 antialiased font-sans">
      <SEO
        title="Risk & Management Consulting"
        description="BNC Global delivers boardroom-ready Virtual CFO support, outsourced bookkeeping, payroll, and corporate tax compliance services."
        canonical="/"
        jsonLd={homeSchema}
      />
      
      {/* 1. Hero Video Section (Centered Video Player with exact live site margins) */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1296px] mx-auto aspect-video mt-[25px] mb-[33px] overflow-hidden">
          <video
            src="https://bvvqyjqokvnttbgyjkrt.supabase.co/storage/v1/object/public/video_bnc.in/file.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-none"
          />
        </div>
      </section>

      {/* 2. Hero Interactive Slideshow Carousel */}
      <section className="relative h-[580px] flex items-center justify-center overflow-hidden border-t border-slate-100">
        {/* Background slide images */}
        <div className="absolute inset-0 z-0">
          <img
            src={reviewImg}
            alt="Slider Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        {/* Carousel Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex items-center justify-between gap-4">
          
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-2.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/5 transition-all cursor-pointer hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slide Body */}
          <div className="flex-1 text-left space-y-4 max-w-3xl pl-12 animate-in fade-in duration-300">
            <h1
              className="font-display text-[32px] sm:text-[45px] font-extrabold text-[#F5FFF7] tracking-normal text-left"
              style={{ lineHeight: '81px' }}
            >
              {slides[currentSlide].title}
            </h1>
            <p
              className="font-sans text-[16px] sm:text-[19px] font-normal text-[#F5FFF7] max-w-2xl text-left min-h-[4.5rem]"
              style={{ letterSpacing: '0.19px' }}
            >
              {slides[currentSlide].desc}
            </p>
            
            {slides[currentSlide].showButtons && (
              <div className="flex flex-row justify-start gap-4 pt-4">
                <Link
                  to={slides[currentSlide].btn1Link}
                  className="w-[171px] h-[45px] flex items-center justify-center font-avenir text-[18px] font-normal bg-[#4BADFD] hover:bg-blue-400 text-white transition-all cursor-pointer"
                  style={{ letterSpacing: '0.9px' }}
                >
                  {slides[currentSlide].btn1Text}
                </Link>
                <Link
                  to={slides[currentSlide].btn2Link}
                  className="w-[198px] h-[45px] flex items-center justify-center font-avenir text-[18px] font-normal bg-white text-[#4BADFD] hover:bg-slate-100 transition-all cursor-pointer"
                  style={{ letterSpacing: '0.9px' }}
                >
                  {slides[currentSlide].btn2Text}
                </Link>
              </div>
            )}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-2.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/5 transition-all cursor-pointer hidden sm:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Slide indicators (dots) */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'bg-[#1D67CD] w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 3. What do we do? Section */}
      <section className="py-24 bg-white text-[#F5FFF7]">
        <div className="max-w-[1290px] mx-auto px-4 sm:px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-[35px] font-display font-extrabold text-[#1D67CD] leading-normal tracking-tight">
              What do we do?
            </h2>
            <p className="font-avenir text-[20px] font-normal text-black leading-[28px]">
              At BNC Global, we don't just offer services — we deliver structured solutions that work in the real world. Our approach blends domain expertise, compliance-first thinking, and execution discipline to help businesses scale with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={corridorImg}
                alt="India–Saudi Business Corridor"
                className="w-[473px] h-[469px] object-cover rounded-none"
              />
            </div>

            {/* List Blocks */}
            <div className="lg:col-span-6 space-y-6">
              {/* Block 1 */}
              <div className="bg-[#1D67CD] p-6 rounded-none space-y-2 shadow-sm">
                <div className="flex items-center gap-3">
                  <img src={iconAccounting} alt="icon" className="w-14 h-14 object-contain flex-shrink-0" />
                  <h3 className="font-display text-[18px] font-bold text-[#F5FFF7] leading-[25.2px]">Integrated Expertise Under One Roof</h3>
                </div>
                <p className="font-avenir text-[15px] font-normal text-white leading-[21px] pl-[68px]">
                  From accounting and tax to risk, ESG, cybersecurity, and hiring — our multidisciplinary teams work together to provide holistic business support, reducing vendor dependency and operational friction.
                </p>
              </div>

              {/* Block 2 */}
              <div className="bg-[#1D67CD] p-6 rounded-none space-y-2 shadow-sm">
                <div className="flex items-center gap-3">
                  <img src={iconTax} alt="icon" className="w-14 h-14 object-contain flex-shrink-0" />
                  <h3 className="font-display text-[18px] font-extrabold text-[#FFFFFF] leading-[25.2px]">Business-First, Not Theory-First</h3>
                </div>
                <p className="font-avenir text-[15px] font-normal text-white leading-[21px] pl-[68px]">
                  We focus on practical implementation, not just advice. Every recommendation is designed to fit your business model, industry, and growth stage — ensuring measurable outcomes, not generic reports.
                </p>
              </div>

              {/* Block 3 */}
              <div className="bg-[#1D67CD] p-6 rounded-none space-y-2 shadow-sm">
                <div className="flex items-center gap-3">
                  <img src={iconAdvisory} alt="icon" className="w-14 h-14 object-contain flex-shrink-0" />
                  <h3 className="font-display text-[18px] font-extrabold text-[#FFFFFF] leading-[25.2px]">Compliance & Governance Focus</h3>
                </div>
                <p className="font-avenir text-[15px] font-normal text-white leading-[21px] pl-[68px]">
                  Regulatory adherence is built into everything we do. Our services are designed to keep you audit-ready, regulator-ready, and investor-ready at all times.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2 pl-[68px]">
                <Link
                  to="/bnc-global-services"
                  className="w-[335px] h-[38px] flex items-center justify-center font-avenir text-[16px] font-normal bg-[#00305b] text-[#FDEBC9] border-[0.8px] border-[#FDEBC9] hover:bg-opacity-90 transition-colors cursor-pointer rounded-none"
                  style={{ letterSpacing: '1.6px' }}
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-24 bg-[#1D67CD] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/20 pb-8">
            <div className="space-y-4">
              <h2 className="font-serif text-[28px] sm:text-[32px] font-normal text-[#F5FFF7] leading-[38.4px] tracking-tight">
                Frequently asked questions
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={() => { setActiveFaqTab('setup'); setExpandedFaq(null); }}
                  className={`text-[16px] font-normal font-avenir pb-2 border-b-[2.4px] transition-all cursor-pointer ${
                    activeFaqTab === 'setup' ? 'border-[#FDEBC9] text-[#F5FFF7]' : 'border-transparent text-[#F5FFF7] hover:text-[#FDEBC9]'
                  }`}
                  style={{ letterSpacing: '1.6px' }}
                >
                  Setting up FAQs
                </button>
                <button
                  onClick={() => { setActiveFaqTab('general'); setExpandedFaq(null); }}
                  className={`text-[16px] font-normal font-avenir pb-2 border-b-[2.4px] transition-all cursor-pointer ${
                    activeFaqTab === 'general' ? 'border-[#FDEBC9] text-[#F5FFF7]' : 'border-transparent text-[#F5FFF7] hover:text-[#FDEBC9]'
                  }`}
                  style={{ letterSpacing: '1.6px' }}
                >
                  General
                </button>
              </div>
            </div>

            {/* Search Box */}
            <div className="relative max-w-sm w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/65">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Looking for something?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-white/35 bg-white/10 text-white placeholder-white/65 focus:outline-none focus:bg-white/20 transition-all text-sm"
              />
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4 max-w-5xl mx-auto">
            {currentFaqs.length > 0 ? (
              currentFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border-b border-[#BFD9ED] pb-4 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full py-4 text-left font-avenir text-[20px] font-normal text-[#F5FFF7] hover:text-[#FDEBC9] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === idx ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                  </button>
                  {expandedFaq === idx && (
                    <p className="font-avenir text-[16px] font-normal text-[#F5FFF7] mt-[13.6px] leading-[24px] pl-1 max-w-4xl animate-in fade-in duration-200">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-[#F5FFF7] py-8 font-avenir">No FAQ items matched your search query.</p>
            )}
          </div>

        </div>
      </section>

      {/* DPDPA Lightbox Modal */}
      {showDpdpaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-[835px] h-[645px] bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-none mx-4">
            
            {/* Close Button top right */}
            <button
              onClick={closeDpdpaModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-20 cursor-pointer p-1.5"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column: Form Content */}
            <div className="flex-1 p-12 flex flex-col justify-center space-y-6 z-10 text-left">
              <div className="space-y-2">
                <h2 className="font-display text-[44px] font-extrabold text-black leading-tight tracking-tight">
                  DPDPA Consulting
                </h2>
                <p className="font-sans text-[22px] font-normal text-slate-500 leading-normal">
                  Data Protection Starts Here.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  closeDpdpaModal();
                }}
                className="space-y-4 max-w-sm"
              >
                <div className="space-y-1">
                  <label htmlFor="dpdpa-email" className="block text-[14px] font-normal text-slate-600">
                    Enter your email *
                  </label>
                  <input
                    id="dpdpa-email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors text-base"
                  />
                </div>
                
                <div className="flex gap-4 pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#FDEBC9] hover:bg-[#f6dec0] text-[#282626] font-bold text-[16px] transition-colors cursor-pointer"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={closeDpdpaModal}
                    className="px-6 py-3 border border-slate-300 text-slate-600 hover:bg-slate-50 font-normal text-[16px] transition-colors cursor-pointer"
                  >
                    Back to site
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Image Graphic */}
            <div className="hidden md:block w-[320px] relative bg-slate-50 border-l border-slate-100">
              <img
                src="https://static.wixstatic.com/media/93f548_8230aee12f0b4490bfb7a6eb1a6e736e~mv2.jpeg/v1/crop/x_0,y_530,w_1792,h_1206/fill/w_588,h_386,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/create_a_image%2C_white_a_202606171119.jpeg"
                alt="DPDPA Consulting illustration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/5" />
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
