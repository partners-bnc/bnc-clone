import { Link } from 'react-router-dom'

import uaeHero from '../assets/uae_hero.png'
import uaeTaxes1 from '../assets/uae_taxes1.png'
import uaeTaxes2 from '../assets/uae_taxes2.png'
import uaeIncome from '../assets/uae_income.png'
import uaeBooks from '../assets/uae_books.png'
import uaeCtRates from '../assets/uae_ctrates.png'
import uaeTimeline1 from '../assets/uae_timeline1.png'
import uaeTimeline2 from '../assets/uae_timeline2.png'
import uaeIncorp from '../assets/uae_incorp.png'
import uaeBookkeeping from '../assets/uae_bookkeeping.png'
import uaeTaxfiling from '../assets/uae_taxfiling.png'
import uaeFounders from '../assets/uae_founders.png'
import uaeCta from '../assets/uae_cta.png'

export default function UAE() {
  const nav = [
    { label: 'Types of Taxes', id: 'types-of-taxes' },
    { label: 'Types of VAT', id: 'types-of-vat' },
    { label: 'Types of Income', id: 'types-of-income' },
    { label: 'Books to be maintained', id: 'books' },
    { label: 'Corporate Tax Rates', id: 'ct-rates' },
    { label: 'Corporate Tax Timeline', id: 'ct-timeline' },
    { label: 'VAT Return', id: 'vat-return' },
    { label: 'Incorporating a Company', id: 'incorporating' },
    { label: 'Bookkeeping Services', id: 'bookkeeping' },
    { label: 'Tax Filing Services', id: 'tax-filing' },
    { label: 'Connect to us', id: 'connect' },
  ]

  const incorpSteps = [
    { h: 'Choose a Business Activity.', b: '' },
    { h: 'Determine the Company Type', b: 'Mainland company, Free zone company, or Offshore company.' },
    { h: 'Reserve the Trade Name:', b: 'Apply to reserve the chosen trade name with the DED or the respective free zone authority.' },
    { h: 'Select a Company Name', b: 'that complies with the guidelines and restrictions set by the Department of Economic Development (DED).' },
    { h: 'Prepare the Memorandum of Association (MOA):', b: "Draft the MOA, which outlines the company's structure, shareholders, activities, and other essential details." },
    { h: 'Obtain Initial Approvals from Relevant Authorities.', b: '' },
    { h: 'Register with Government', b: 'Authorities such as the Dubai Chamber of Commerce and Industry, the Federal Tax Authority (if applicable), and obtain any necessary permits or clearances.' },
  ]

  const bookkeepingServices = [
    'Monthly Trial Balance',
    'Monthly Ledgers - Banks Reconciliations',
    'Quarterly Accounting Reporting',
    'Balance Sheet, Profit & Loss & Cash Flow Statement in Every 4 months',
    'Tax/VAT Filing – Quarterly',
    'Tax/VAT Computing – Quarterly',
    'Tax/VAT Advisory – Quarterly',
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 160, behavior: 'smooth' })
  }

  const Banner = ({ children }) => (
    <div className="flex justify-center">
      <div className="bg-[#1D67CD] rounded-2xl px-8 py-5 inline-block">
        <h2 className="text-[26px] md:text-[40px] font-display font-extrabold text-white text-center leading-tight">{children}</h2>
      </div>
    </div>
  )

  const ImgCard = ({ src, alt, max = 'max-w-[900px]' }) => (
    <div className={`bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex justify-center mx-auto ${max}`}>
      <img src={src} alt={alt} className="max-w-full h-auto object-contain rounded-lg" />
    </div>
  )

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">

      {/* HERO */}
      <section className="w-full bg-white py-14 lg:py-16 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col items-center text-center gap-8">
          <h1 className="text-[40px] md:text-[60px] font-display font-extrabold text-[#00305B] leading-[1.1]">
            Taxation Laws in UAE
          </h1>
          <img src={uaeHero} alt="Taxation Laws in UAE" className="w-full max-w-[685px] h-auto object-contain" />
          <p className="text-[18px] md:text-[20px] text-[#0B2F5B] leading-relaxed font-avenir max-w-[820px]">
            Understand the tax framework, compliance requirements, and business setup essentials for operating in the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* ANCHOR NAV (static, matches live) */}
      <div className="w-full bg-white border-t border-slate-100 pb-4">
        <div className="max-w-[1122px] mx-auto px-4 flex flex-wrap justify-center gap-2">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="py-2 px-4 rounded-full text-[13px] font-semibold font-display text-[#1D67CD] border border-[#1D67CD]/30 bg-white hover:bg-[#1D67CD] hover:text-white transition-all cursor-pointer"
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT SECTIONS (all stacked, matching live) */}
      <section className="w-full bg-[#F4F7FB] py-16 md:py-20">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 mx-auto space-y-20">

          {/* Types of Taxes */}
          <div id="types-of-taxes" className="space-y-8 scroll-mt-40">
            <Banner>Types of Taxes in UAE</Banner>
            <ImgCard src={uaeTaxes1} alt="Types of taxes in UAE" max="max-w-[660px]" />
          </div>

          {/* Types of VAT */}
          <div id="types-of-vat" className="space-y-8 scroll-mt-40">
            <Banner>Types of VAT</Banner>
            <ImgCard src={uaeTaxes2} alt="Types of VAT in UAE" max="max-w-[900px]" />
          </div>

          {/* Types of Income */}
          <div id="types-of-income" className="space-y-8 scroll-mt-40">
            <Banner>Types of Income</Banner>
            <h3 className="text-[26px] md:text-[30px] font-display font-extrabold text-[#0B2F5B] text-center">Exempt income</h3>
            <ImgCard src={uaeIncome} alt="Exempt income in UAE" max="max-w-[800px]" />
            <p className="text-[18px] text-[#0B2F5B] leading-relaxed font-avenir text-center max-w-[820px] mx-auto">
              Other Income includes income such as lottery winnings, prizes, alimony, or any other sources of income.
            </p>
            {/* Amounts not to declare highlight */}
            <div className="bg-[#0B2F5B] text-white rounded-3xl px-8 py-10 text-center space-y-3 max-w-[900px] mx-auto">
              <h3 className="text-[28px] md:text-[40px] font-display font-extrabold leading-tight">The amount you do not include as income</h3>
              <p className="text-[18px] text-slate-200 font-avenir">Amount that you earn or receive that you don&rsquo;t need to declare as income.</p>
            </div>
          </div>

          {/* Books to be maintained */}
          <div id="books" className="space-y-8 scroll-mt-40">
            <Banner>Books of Accounts to be maintained</Banner>
            <ImgCard src={uaeBooks} alt="Books of accounts to be maintained" max="max-w-[800px]" />
          </div>

          {/* Corporate Tax Rates */}
          <div id="ct-rates" className="space-y-8 scroll-mt-40">
            <Banner>Corporate Tax Rates</Banner>
            <div className="max-w-[820px] mx-auto space-y-3">
              <p className="text-[18px] font-avenir font-bold text-[#0B2F5B]">• Zero percent on the portion of the Taxable Income below AED 375,000.</p>
              <p className="text-[18px] font-avenir font-bold text-[#0B2F5B]">• Nine percent on Taxable Income that exceeds AED 375,000.</p>
            </div>
            <ImgCard src={uaeCtRates} alt="UAE corporate tax rates" max="max-w-[1000px]" />
          </div>

          {/* Corporate Tax Timeline */}
          <div id="ct-timeline" className="space-y-8 scroll-mt-40">
            <Banner>Corporate Tax Timeline</Banner>
            <ImgCard src={uaeTimeline1} alt="UAE corporate tax timeline" max="max-w-[820px]" />
            <p className="text-[18px] text-[#0B2F5B] leading-relaxed font-avenir text-center max-w-[900px] mx-auto">
              Taxable Persons are required to file a Corporate Tax return for each Tax Period within 9 months from the end of the relevant period. The same deadline would generally apply for the payment of any Corporate Tax due in respect of the Tax Period for which a return is filed.
            </p>
            <ImgCard src={uaeTimeline2} alt="UAE corporate tax filing deadline" max="max-w-[760px]" />
          </div>

          {/* VAT Return */}
          <div id="vat-return" className="space-y-8 scroll-mt-40">
            <Banner>VAT Return</Banner>
            <div className="max-w-[820px] mx-auto space-y-3">
              <p className="text-[18px] font-avenir text-[#0B2F5B]">• VAT tax return filing</p>
              <p className="text-[18px] font-avenir text-[#0B2F5B]">• VAT Advisory</p>
            </div>
            <ImgCard src={uaeTaxfiling} alt="UAE VAT return services" max="max-w-[860px]" />
          </div>

          {/* Incorporating a Company */}
          <div id="incorporating" className="space-y-8 scroll-mt-40">
            <Banner>Incorporating a Company</Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[980px] mx-auto">
              {incorpSteps.map((s, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-[#1D67CD] text-white font-display font-bold flex items-center justify-center">{i + 1}</span>
                  <div className="space-y-1">
                    <h4 className="text-[18px] font-display font-bold text-[#0B2F5B]">{s.h}</h4>
                    {s.b && <p className="text-[15px] text-slate-600 font-avenir leading-relaxed">{s.b}</p>}
                  </div>
                </div>
              ))}
            </div>
            <ImgCard src={uaeIncorp} alt="Incorporating a company in UAE" max="max-w-[720px]" />
          </div>

          {/* Bookkeeping Services */}
          <div id="bookkeeping" className="space-y-8 scroll-mt-40">
            <Banner>Bookkeeping Services</Banner>
            <div className="max-w-[820px] mx-auto space-y-3">
              <h4 className="text-[20px] font-display font-bold text-[#0B2F5B]">Services Covered:</h4>
              <ul className="space-y-2">
                {bookkeepingServices.map((s, i) => (
                  <li key={i} className="text-[17px] text-[#0B2F5B] font-avenir">• {s}</li>
                ))}
              </ul>
            </div>
            <ImgCard src={uaeBookkeeping} alt="UAE bookkeeping services" max="max-w-[880px]" />
          </div>

          {/* Tax Filing Services */}
          <div id="tax-filing" className="space-y-8 scroll-mt-40">
            <Banner>Tax Filing Services</Banner>
            <div className="max-w-[820px] mx-auto space-y-3">
              <p className="text-[17px] text-[#0B2F5B] font-avenir">• Tax/VAT Filing – Quarterly</p>
              <p className="text-[17px] text-[#0B2F5B] font-avenir">• Tax/VAT Computing – Quarterly</p>
              <p className="text-[17px] text-[#0B2F5B] font-avenir">• Tax/VAT Advisory – Quarterly</p>
            </div>
          </div>

          {/* Connect to us */}
          <div id="connect" className="scroll-mt-40">
            <div className="max-w-[820px] mx-auto text-center space-y-6 bg-[#0B2F5B] rounded-3xl p-10 text-white">
              <h2 className="text-[28px] md:text-[40px] font-display font-extrabold">Connect to us</h2>
              <p className="text-[17px] text-slate-300 leading-relaxed font-avenir">
                If you would like to outsource to BnC Global, please fill in our inquiry form. Our sales executives will get in touch with you immediately. Even if you are not yet ready to venture into outsourcing, you are always welcome to get in touch with us to find out more about outsourcing to India.
              </p>
              <Link to="/contact-8" className="inline-block px-8 py-3.5 rounded-full font-bold bg-[#A3D9F6] hover:bg-[#86c6e9] text-[#0B2F5B] shadow-md active:scale-98 transition-all text-[14px]">
                Contact us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FOUNDERS & CTA */}
      <section className="w-full bg-[#F5FFF7] py-16 md:py-24 border-b border-slate-100 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-[26px] md:text-[30px] font-display font-extrabold text-[#0B2F5B]">Stay connected for more information</h3>
              <p className="text-[18px] text-slate-700 leading-relaxed font-avenir italic">
                "We have a robust team to ensure smooth transition of all kinds of projects from their initiation to completion. Moreover, at BnC Global, we have incorporated best practices for accounting &amp; tax preparation, assuring information Security and Confidentiality Assurance to all our clients."
              </p>
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between gap-4">
                <span className="font-bold text-[#0B2F5B] font-display">Our Founders</span>
                <img src={uaeFounders} alt="Our founders" className="h-[60px] w-auto object-contain" />
              </div>
            </div>

            <div className="space-y-8 lg:pt-4">
              <div className="space-y-2">
                <h4 className="text-[22px] font-display font-bold text-[#0B2F5B]">Our Mission:</h4>
                <p className="text-[17px] text-slate-700 leading-relaxed font-avenir">
                  To enable organizations to improve their fundamental performance, reinvent their business, and lead their people through transformational change.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[22px] font-display font-bold text-[#0B2F5B]">Our Vision:</h4>
                <p className="text-[17px] text-slate-700 leading-relaxed font-avenir">
                  Our Vision is to solve your problems with our innovative solutions as well as help you implement the solutions and train the people.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#00305B] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-6 z-10 md:w-[62%]">
              <h3 className="text-[28px] md:text-[34px] font-display font-extrabold leading-tight">
                Give us an opportunity to assist you by filling the questionnaire
              </h3>
              <p className="text-[16px] text-slate-300 font-avenir leading-relaxed">
                Gain a first-hand understanding on how outsourcing can help you by signing up for one of BnC Global&rsquo;s Free Trial Programs. Our sales executives will get in touch with you immediately.
              </p>
              <Link to="/contact-8" className="px-8 py-3.5 rounded-full font-bold bg-[#A3D9F6] hover:bg-[#86c6e9] text-[#0B2F5B] shadow-md active:scale-98 transition-all inline-block text-[14px]">
                Visit here
              </Link>
            </div>
            <div className="w-[180px] md:w-[220px] shrink-0 flex justify-center">
              <img src={uaeCta} alt="Questionnaire graphic" className="w-full h-auto object-contain rounded-xl" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
