import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroBg from '../assets/year_end_hero_bg.jpg'

export default function YearEndAccounting() {
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

  const closureServices = [
    'Validation of opening balances with the latest audited financial statement',
    'General Ledger Examination',
    'Prepayment and Accrual Calculations',
    'Depreciation and Amortization Computation',
    'Accounts Payable and Receivable Reconciliation',
    'Tax Deferral Analysis',
    'Tax Expense and Liability Reconciliation',
    'Industry-Accepted Ratio Analysis',
    'Working Sheets and Schedules',
    'Financial Statement Preparation',
    'Bookkeeping Enhancement Recommendations'
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
            Year End Accounting
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Specialized closure, ledger finalization, and compliance mapping services to bring control to your fiscal wrap-up.
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

      {/* 2. Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
              <h2 className="text-[28px] md:text-[34px] font-display font-extrabold text-[#00305B] tracking-tight leading-snug">
                Smooth Year-End Closure Services
              </h2>
              <div className="space-y-4 text-[16px] text-slate-600 font-avenir leading-relaxed">
                <p>
                  BnC specializes in comprehensive year-end accounting closure services. As the year draws to a close and the task of finalizing your accounting records looms, we understand the blend of chaos and magnitude it can bring.
                </p>
                <p>
                  Our team is equipped with the endurance, in-depth knowledge, and extensive professional experience required to handle this critical phase seamlessly. At BnC, we offer a diverse range of expert account finalization services.
                </p>
                <p>
                  Regardless of the software you employ or the industry your company operates in, BnC is your trusted partner for a smooth year-end accounting closure.
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-6 bg-[#0B2F5B] text-white p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#A3D9F6] font-sans">
                  Punctuality & Dedicated Resources
                </h3>
                <p className="text-[#BFD9ED] font-avenir text-[15px] leading-relaxed">
                  We recognize the importance of punctuality and the deployment of top-tier resources when dealing with intricate circumstances and challenging accounting dilemmas. Our commitment lies in providing specialized year-end accounting finalization services tailored to your unique requirements and industry nuances.
                </p>
                <p className="text-[#BFD9ED] font-avenir text-[15px] leading-relaxed">
                  In addition to our comprehensive services, we go the extra mile by offering continuous guidance and coaching to our clients through our virtual accounting services. Our aim is to empower your organization with the knowledge and skills needed for sustained financial success.
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs text-[#A3D9F6] font-sans">
                <span>✓ High Efficiency Closure</span>
                <span>✓ Virtual Support Coach</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Closure Services List (Navy Background) */}
      <section className="py-20 bg-[#002244] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
              Our Year-End Accounting Finalisation Services Include:
            </h2>
            <p className="text-slate-300 font-medium">Systematic audit readiness and balance sheet verification checklists.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {closureServices.map((task, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-3 hover:bg-white/10 hover:border-white/20 transition-all items-start"
              >
                <CheckCircle2 className="w-5 h-5 text-[#A3D9F6] shrink-0 mt-0.5" />
                <span className="text-[#BFD9ED] font-sans font-medium text-[15px] leading-relaxed">
                  {task}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Bottom Quote Banner */}
      <section className="py-16 bg-[#F5FFF7] border-y border-[#ACD6E8]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-[22px] md:text-[26px] font-display font-bold text-[#00305B] leading-relaxed">
            "BnC does provide timely and efficient year-end finalisation of accounting services to its clientele in every way imaginable."
          </p>
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
