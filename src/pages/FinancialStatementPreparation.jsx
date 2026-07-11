import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroBg from '../assets/financial_statements_hero_bg.jpg'
import featureImg from '../assets/financial_statements_1.png'
import budgetingImg from '../assets/financial_statements_budgeting.png'

export default function FinancialStatementPreparation() {
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

  const workflow = [
    'Client and Business Assessment',
    'Analysis and Organisation of Trial Balance and Schedules',
    'Deferred tax calculations and tax provision calculations',
    'Crafting a Cash Flow Statement',
    'Financial statement consolidation (if necessary)',
    'Creation of financial statement schedules',
    'Preparation of tailored financial statements',
    'Submission of financial statements for thorough scrutiny and review',
    'Updating the financial statements to reflect any necessary changes'
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
            Financial Statement Preparation Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Precision US GAAP and IFRS statement crafting, audit support, and consolidation.
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

      {/* 2. Precision Compliant Process (White Background) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 font-avenir text-[16px] leading-relaxed">
              <h2 className="text-[28px] md:text-[34px] font-display font-extrabold text-[#00305B] tracking-tight leading-snug">
                Precision US GAAP & IFRS Compliance Frameworks
              </h2>
              <p>
                BnC offers comprehensive financial statement preparation services across diverse sectors. Our team possesses extensive expertise in audit management and in-depth knowledge of both IFRS and US GAAP standards, ensuring precision in crafting financial statements.
              </p>
              <p>
                We proactively identify companies in need of structured financial solutions and extend professional support. Complying with regulatory requirements, we undertake the preparation of annual and periodic financial statements. Our collaboration with the company's auditors ensures a harmonious process, characterized by productive discussions and the resolution of any potential challenges that may arise during the statement preparation.
              </p>
              <p className="font-bold text-[#00305B]">
                Recognizing that financial statements are pivotal management tools, our firm dedicates a significant portion of our efforts to thoroughly understand the unique needs and intricacies of our clients' businesses.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={featureImg} 
                alt="Consolidated financial charts" 
                className="w-full max-w-[440px] h-auto rounded-3xl shadow-lg border border-slate-100 object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Systematic Process (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
              We organize financial statement preparation systematically
            </h2>
            <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
              A comprehensive lifecycle designed to facilitate clear communications with your corporate auditors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={budgetingImg} 
                alt="Budgeting forecasting blueprint" 
                className="w-full max-w-[320px] rounded-3xl"
              />
            </div>

            {/* Right Workflow */}
            <div className="lg:col-span-7 space-y-4">
              {workflow.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 p-4 rounded-2xl flex gap-3 hover:bg-white/10 hover:border-white/20 transition-all items-center"
                >
                  <span className="w-8 h-8 rounded-full bg-[#A3D9F6]/10 flex items-center justify-center font-bold text-xs text-[#A3D9F6] shrink-0 font-sans">
                    {idx + 1}
                  </span>
                  <span className="text-[#BFD9ED] font-sans font-semibold text-[14px]">
                    {step}
                  </span>
                </div>
              ))}
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
