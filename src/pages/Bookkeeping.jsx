import { Link } from 'react-router-dom'
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react'
import heroBg from '../assets/bookkeeping_hero_bg.jpg'
import badgeImg from '../assets/bookkeeping_2_badge.png'
import flowImg from '../assets/bookkeeping_detailed_flow.png'

export default function Bookkeeping() {
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

  const challenges = [
    'Overcoming hurdles in accurate income analysis.',
    'Identifying and addressing unpaid balances.',
    'Tracking expenses, resolving issues, and uncovering underlying causes.',
    'Efficiently managing inventory items and more.'
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
            Book-Keeping Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Tailored bookkeeping outsourcing services to meet the operational needs of small and medium-sized businesses.
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

      {/* 2. Challenges & Inadequate Bookkeeping Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[26px] md:text-[32px] font-display font-extrabold text-[#00305B] tracking-tight leading-snug">
                Drawing on our expertise and wealth of professional resources, we offer bookkeeping outsourcing services tailored to small businesses.
              </h2>
              <p className="text-slate-600 font-avenir text-[16px] leading-relaxed">
                We understand that inadequate bookkeeping can lead to critical operational challenges:
              </p>
              
              <div className="space-y-4">
                {challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <AlertCircle className="w-5 h-5 text-[#1D67CD] shrink-0 mt-0.5" />
                    <p className="text-slate-700 font-medium text-sm font-sans">{challenge}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#F5FFF7] border border-[#ACD6E8] p-5 rounded-2xl">
                <p className="text-[#00305B] font-bold text-[15px] font-sans">
                  Let us help you navigate these challenges and elevate your business's financial health.
                </p>
              </div>
            </div>

            {/* Right Badge Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={badgeImg} 
                alt="Bookkeeping process badge" 
                className="w-full max-w-[380px] h-auto rounded-3xl object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Offshore Value (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
              Offshore Bookkeeping for Small & Medium Enterprises
            </h2>
            <p className="text-[#BFD9ED] font-avenir text-[17px] leading-relaxed">
              Our team of highly skilled professionals specializes in delivering offshore bookkeeping services to small and medium-sized enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[16px] text-slate-300 font-avenir leading-relaxed pt-4 border-t border-white/10">
            <p>
              We take pride in our track record of successfully resolving bookkeeping challenges for our valued clients, thereby, helping them save valuable time, effort, and money. Our outsourced accounting services are designed to alleviate financial stress by implementing proven methods and cutting-edge solutions tailored to each client's unique needs.
            </p>
            <p>
              Our legacy in offering outsourced bookkeeping services has made us a trusted leader in customer satisfaction over the years; a trust we intend to keep for years to come. So, if you're in search of a reputable bookkeeping outsourcing services provider in India, your search ends here!
            </p>
          </div>

        </div>
      </section>

      {/* 4. Aspects Diagram Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              The following are the main aspects of our online bookkeeping service:
            </h2>
            <p className="text-slate-500 font-medium">Flawless integrations, automated workflows, and ledger tracking.</p>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center">
            <img 
              src={flowImg} 
              alt="Bookkeeping detailed flow illustration" 
              className="w-full h-auto rounded-3xl shadow-lg border border-slate-100"
            />
          </div>

        </div>
      </section>

      {/* 5. Sub-Services Menu */}
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
