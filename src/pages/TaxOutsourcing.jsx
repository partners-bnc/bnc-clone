import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck, Scale, Users2, Database, Laptop, Layers } from 'lucide-react'
import heroImg from '../assets/tax_outsourcing_hero.png'
import processImg from '../assets/tax_outsourcing_process.png'
import assistImg from '../assets/tax_outsourcing_assist.png'
import misconceptionsImg from '../assets/tax_outsourcing_misconceptions.png'
import whyImg from '../assets/tax_outsourcing_why.png'
import iconTeam from '../assets/tax_icon_team.png'
import iconPartner from '../assets/tax_icon_partner.png'
import iconGlobal from '../assets/tax_icon_global.png'
import iconSoftware1 from '../assets/tax_icon_software.png'
import iconSoftware2 from '../assets/tax_icon_software2.png'
import logoSap from '../assets/logo_sap.png'
import logoNetsuite from '../assets/logo_netsuite.png'
import logoMyob from '../assets/logo_myob.png'
import logoSage from '../assets/logo_sage.png'

export default function TaxOutsourcing() {
  const subServices = [
    { name: 'Accounting', path: '/accounting' },
    { name: 'AR AP', path: '/ar-ap' },
    { name: 'Audit Support Service', path: '/audit-support-service' },
    { name: 'Bookkeeping', path: '/bookeeping' },
    { name: 'Financial Statements Preparation Services', path: '/financial-statment-preparation-services' },
    { name: 'Inventory Management', path: '/inventory-management' },
    { name: 'XERO Accounting', path: '/xero-accounting' },
    { name: 'Outsourced Tax Preparation', path: '/outsouced-tax-preparation' },
    { name: 'Quickbooks', path: '/quickbooks' },
    { name: 'Payroll Processing', path: '/payroll-processing' },
    { name: 'Virtual Accounting', path: '/virtual-accounting' }
  ]

  const menuItems = [
    { label: 'Services we Render', id: 'services' },
    { label: 'Whom do we assist?', id: 'assist' },
    { label: 'Our Capabilities', id: 'capabilities' },
    { label: 'Software’s in Use', id: 'software' },
    { label: 'The Process we Follow', id: 'process' },
    { label: 'Misconceptions', id: 'misconceptions' },
    { label: 'Why us?', id: 'whyus' }
  ]

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#00305B] to-[#0A2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-normal leading-tight">
                Tax Outsourcing Services
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                BNC Global offers Income tax preparation and submission of online Tax returns for Individuals, Corporations and most of the tax filing entities globally.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact-8"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-opacity-90 shadow-md active:scale-98 transition-colors cursor-pointer"
                >
                  <span>Connect to us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Anchor Menu */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-[#A3D9F6] font-bold mb-3">Quick Navigation</p>
                <div className="flex flex-wrap gap-2">
                  {menuItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleScroll(item.id)}
                      className="px-4 py-2 text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-slate-300 hover:text-white"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={heroImg} 
                alt="Tax Outsourcing illustration" 
                className="w-full max-w-[480px] h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services we Render (White Background) */}
      <section id="services" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Tax Return Preparation Services
            </h2>
            <p className="text-slate-500 font-medium">Providing structured validations and computations across filing seasons.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tax Validation', desc: 'Validating accounting ledgers and transactions against target tax legislation.', icon: ShieldCheck },
              { title: 'Liability Calculation', desc: 'Accurately computing tax liabilities under applicable global frameworks.', icon: Scale },
              { title: 'Returns Preparation', desc: 'Comprehensive compilation of tax returns ready for certified filing.', icon: FileSpreadsheet },
              { title: 'Form & Certificate Management', desc: 'Handling specialized certificates and compliance schedules.', icon: Layers }
            ].map((srv, idx) => {
              const IconComp = srv.icon
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-[#1D67CD]/10 flex items-center justify-center text-[#1D67CD]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#00305B] text-base font-sans">{srv.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-avenir">{srv.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Our Capabilities (Navy Background) */}
      <section id="capabilities" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Our Capabilities
            </h2>
            <p className="text-[#BFD9ED] font-medium">Why top tier accounting firms choose BNC Global.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <img src={iconTeam} alt="Team capability icon" className="w-10 h-10 object-contain" />
                <h4 className="font-bold text-white text-lg font-sans">Our Team: Your Strength</h4>
              </div>
              <p className="text-slate-300 font-avenir text-sm leading-relaxed">
                Our tax outsourcing team comprises chartered accountants and tax specialists with a proven track record of navigating intricate tax challenges. With years of experience providing expert tax guidance, they fortify your financial operations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <img src={iconPartner} alt="Partner capability icon" className="w-10 h-10 object-contain" />
                <h4 className="font-bold text-white text-lg font-sans">Overcoming Weaknesses</h4>
              </div>
              <p className="text-slate-300 font-avenir text-sm leading-relaxed">
                Finding a qualified tax professional can be a daunting task for many businesses. BNC boasts a highly qualified team of tax professionals ready to assist CPA firms in devising effective tax planning strategies and managing compliance requirements.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <img src={iconGlobal} alt="Global capability icon" className="w-10 h-10 object-contain" />
                <h4 className="font-bold text-white text-lg font-sans">Global Sales & Services</h4>
              </div>
              <p className="text-slate-300 font-avenir text-sm leading-relaxed">
                Our tax outsourcing services offer you the transparency and control you seek, whether you operate in one country or across international jurisdictions. Expect consistent, flexible, and high-quality tax compliance services tailored to your needs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Process (White Background) */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Our CPA Tax Preparation Outsourcing Process
            </h2>
            <p className="text-slate-500 font-medium">A standardized transition cycle from data ingestion to return finalization.</p>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center">
            <img 
              src={processImg} 
              alt="Outsourcing Process Workflow" 
              className="w-full h-auto rounded-3xl shadow-lg border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 5. Whom do we assist (Light Backdrop) */}
      <section id="assist" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
                Whom do we assist ?
              </h2>
              <p className="text-slate-500 font-medium font-sans">
                Providing specialized filing models matching the tax filing requirements of global entities:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Non-profits',
                  'Partnerships',
                  'Estates and trusts',
                  'Corporations',
                  'Expatriate Tax Filing',
                  'Individuals'
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1D67CD] shrink-0" />
                    <span className="font-bold text-slate-700 font-sans text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 flex justify-center">
              <img 
                src={assistImg} 
                alt="Whom we assist graphic" 
                className="w-full max-w-[420px] rounded-3xl shadow-md border border-slate-200"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 6. Software (White Background) */}
      <section id="software" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Software Used By Us
            </h2>
            <p className="text-slate-500 font-medium">Standard tax, accounting, and compliance suites integrated into our operations.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            <img src={logoNetsuite} alt="NetSuite logo" className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoSap} alt="SAP logo" className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoMyob} alt="MYOB logo" className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoSage} alt="Sage logo" className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={iconSoftware1} alt="Software icon 1" className="max-h-14 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={iconSoftware2} alt="Software icon 2" className="max-h-14 object-contain filter grayscale hover:grayscale-0 transition-all" />
          </div>

        </div>
      </section>

      {/* 7. Misconceptions (Navy Background) */}
      <section id="misconceptions" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
                6 Outsourced Tax Preparation Misconceptions
              </h2>
              <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
                Our tax outsourcing services provide the visibility and control you need, whether for a single country or multiple jurisdictions. You can count on consistent, flexible, and high-quality tax compliance services that align with your specific requirements.
              </p>
              
              <div className="border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-[#A3D9F6]">
                <span>✓ High visibility & corporate transparency</span>
                <span>✓ International jurisdiction readiness</span>
                <span>✓ Meticulous data encryption protocols</span>
                <span>✓ Scalable year-round tax support</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={misconceptionsImg} 
                alt="Tax preparation misconceptions illustration" 
                className="w-full max-w-[460px] rounded-3xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 8. Why Us? (White Background) */}
      <section id="whyus" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              <img 
                src={whyImg} 
                alt="Why choose BNC Global" 
                className="w-full max-w-[380px] rounded-3xl shadow-lg border border-slate-100"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
                Why Outsource Tax Preparation to BNC Global?
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Process Standardization',
                  'Cost Reduction',
                  'Confidentiality of Information',
                  'Alleviation of Staffing Constraints',
                  'Technology Enablement',
                  'Access to Human Talent'
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1D67CD] shrink-0" />
                    <span className="font-bold text-slate-800 font-sans text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. Sub-Services Menu */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#1D67CD] tracking-tight">
              Accounting Services Capability Checklist
            </h2>
            <p className="text-slate-500 font-medium">Explore specific bookkeeping, reporting, and tax support models tailored for your enterprise growth.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {subServices.map((service, idx) => (
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
