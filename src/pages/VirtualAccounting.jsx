import { Link } from 'react-router-dom'
import { ArrowRight, CloudLightning, ShieldCheck, HeartHandshake } from 'lucide-react'
import heroBg from '../assets/virtual_accounting_hero_bg.jpg'
import featureImg from '../assets/virtual_accounting_feature.png'

export default function VirtualAccounting() {
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

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section */}
      <section 
        className="relative w-full py-24 md:py-32 min-h-[500px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-[#00305B]/85" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-normal leading-tight">
            Virtual Accounting Services -<br />Cloud Accounting Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Leading virtual bookkeeping and cloud-based financial controllership designed for SME expansion.
          </p>
          <div className="pt-4">
            <Link
              to="/contact-8"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-opacity-90 shadow-md active:scale-98 transition-colors cursor-pointer font-sans"
            >
              <span>Connect to us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 font-avenir text-[16px] leading-relaxed">
              <h2 className="text-[28px] md:text-[34px] font-display font-extrabold text-[#00305B] tracking-tight leading-snug">
                Pioneering Next-Gen Cloud Financial Systems
              </h2>
              <p>
                As a premier provider of online accounting services, BnC is committed to maintaining a leadership position in the industry. Our dedication to staying ahead of the competition drives us to offer cutting-edge virtual accounting and virtual bookkeeping services, enabling businesses to access skilled accountants without incurring the overhead costs associated with in-house accountants.
              </p>
              <p>
                By opting for our services, organizations gain access to a pool of seasoned professionals with extensive experience. Choosing virtual accounting services also spares businesses from the financial burden of hiring costly in-house financial controllers. At BnC, we take pride in offering these invaluable services at highly competitive rates, ensuring that our clients receive exceptional value.
              </p>
              <div className="bg-slate-50 border-l-4 border-[#1D67CD] p-5 rounded-r-2xl">
                <p className="font-bold text-slate-800 text-[15px] font-sans">
                  Recognizing that every organization seeking a bookkeeper or financial controller has unique requirements, we collaborate closely with our clients to tailor our services to their specific needs.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={featureImg} 
                alt="Virtual cloud bookkeeping operations illustration" 
                className="w-full max-w-[440px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Growth & Optimism (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Unleashing SME Growth Potential
            </h2>
            <p className="text-[#BFD9ED] font-avenir text-[17px] leading-relaxed">
              Under the umbrella of our online accounting services and virtual bookkeeping services contract, BnC extends its expertise to include bookkeeping and financial controlling services.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl max-w-4xl mx-auto space-y-6">
            <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed text-left md:text-center">
              This comprehensive approach consistently proves to be more cost-effective than hiring an in-house accountant. As a result, small business owners can envision greater possibilities for expansion and growth, buoyed by the cost efficiencies and expertise of our virtual accounting services.
            </p>
            <div className="h-px bg-white/10 w-full" />
            <h3 className="text-xl md:text-2xl font-bold font-display text-white">
              "By harnessing the power of our cloud accounting services, let's explore how BnC Global's virtual accounting services can play a pivotal role in nurturing optimism among SMEs."
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl">
              <CloudLightning className="w-6 h-6 text-[#A3D9F6]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Cloud Driven</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl">
              <ShieldCheck className="w-6 h-6 text-[#A3D9F6]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Secure Vaults</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl">
              <HeartHandshake className="w-6 h-6 text-[#A3D9F6]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Tailored Models</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Sub-Services Menu */}
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
