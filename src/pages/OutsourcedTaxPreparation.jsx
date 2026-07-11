import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, DollarSign, Clock, Check } from 'lucide-react'
import heroBg from '../assets/tax_prep_hero_bg.jpg'
import badgeImg from '../assets/tax_prep_3_badge.png'
import prepImg2 from '../assets/tax_prep_2.png'
import prepImg3 from '../assets/tax_prep_3.png'

export default function OutsourcedTaxPreparation() {
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

  const stages = [
    {
      num: '1',
      title: 'Document Receipt',
      desc: 'We initiate the process by thoroughly reviewing the tax organizer, source documents, and financial statements to identify any missing or incomplete data.'
    },
    {
      num: '2',
      title: '3C\'s Verification',
      desc: 'We conduct a comprehensive review of all written materials, focusing on ensuring correctness, consistency, and completeness.'
    },
    {
      num: '3',
      title: 'Tax Preparation',
      desc: 'Our team diligently inputs the collected data into the client\'s tax software, adhering to all relevant tax laws and regulations.'
    },
    {
      num: '4',
      title: 'Balance Sheet Examination and Submission',
      desc: 'Before proceeding further, we carefully examine and validate the accuracy and authenticity of the return, seeking client approval for the PDFs.'
    },
    {
      num: '5',
      title: 'Verification and Completion',
      desc: 'After receiving confirmation from the client, we proceed to submit the prepared return to the appropriate revenue authority.'
    }
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
            Outsourced Tax Preparation
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Exceptional tax preparation outsourcing services to CPAs, EAs, Accounting, and Tax Firms across the USA.
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
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[28px] md:text-[34px] font-display font-extrabold text-[#00305B] tracking-tight leading-snug">
                Exceptional Tax Preparation Services Year-Round
              </h2>
              <div className="space-y-4 text-[16px] text-slate-600 font-avenir leading-relaxed">
                <p>
                  We specialize in delivering exceptional tax preparation outsourcing services to CPAs, EAs, Accounting, and Tax Firms across the USA. Our commitment to maintaining meticulous accounts, records, and reports in strict compliance with tax regulations allows us to effectively support you during the hectic tax season.
                </p>
                <p>
                  We offer year-round and year-end comprehensive range of tax preparation services to meet your unique accounting and taxation needs. Our team of highly skilled tax preparers is dedicated to maximizing your tax benefits without straining your budget. By leveraging our CPA tax preparation services, you can streamline the intricate process of matching tax information and preparing returns for your clients, saving valuable time and resources.
                </p>
                <p>
                  Outsourcing tax preparation to India presents an opportunity for both individual businesses and CPA firms to benefit from accurate tax processing. This strategic move enables CPA firms to focus on acquiring more revenue-generating clients and providing them with value-added services, while ensuring that tax-related tasks are expertly handled.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={badgeImg} 
                alt="Tax preparation certification badge" 
                className="w-full max-w-[400px] h-auto rounded-3xl object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Why Opt for Outsourced Tax (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
                Why Opt for Outsourced Tax Preparation Services?
              </h2>
              <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
                Our team of external tax preparers is here to make your life easier. With an 80% cost-saving advantage and a 150% faster turnaround time, we take the complexity out of tax calculation, preparation, and filing. Our seamless and expert tax preparation outsourcing services are designed to alleviate staffing shortages and reduce the stress associated with tax season.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-3.5">
                  <DollarSign className="w-8 h-8 text-[#A3D9F6] shrink-0" />
                  <div>
                    <h4 className="font-bold font-sans text-white text-base">80% Cost Saving</h4>
                    <p className="text-[#BFD9ED] text-xs font-avenir mt-1">Dramatically reduce operational overhead and backend manual entry costs.</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-3.5">
                  <Clock className="w-8 h-8 text-[#A3D9F6] shrink-0" />
                  <div>
                    <h4 className="font-bold font-sans text-white text-base">150% Faster Speed</h4>
                    <p className="text-[#BFD9ED] text-xs font-avenir mt-1">Accelerated processing timelines ensure you never miss tax filing milestones.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={prepImg2} 
                alt="Outsourced Tax Advantage Checklist" 
                className="w-full max-w-[420px] rounded-3xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Outsourcing CPA Tax Preparation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#00305B] tracking-tight">
              Our Outsourcing CPA Tax Preparation Process
            </h2>
            <p className="text-slate-500 font-medium">Secured collection, meticulous audit verification, and execution.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Stages */}
            <div className="lg:col-span-7 space-y-8">
              <p className="text-slate-600 font-avenir text-[16px] leading-relaxed">
                Our process begins by securely collecting all necessary data from our clients via a dedicated file-sharing platform. This includes crucial documents, financial statements, and tax organizers for the current tax year. Once we have the information, we kickstart our meticulous accuracy check by comparing it to the previous year's return (if applicable) and taking note of any carried-over balances. We meticulously review and cross-verify the balance sheet, profit & loss statement, and other relevant data provided by the client, focusing on the three C's: correctness, consistency, and completeness. Only after ensuring that all data aligns seamlessly do we proceed to input it into the tax preparation software, allowing us to spot and rectify any discrepancies before embarking on the return preparation process.
              </p>
              
              <div className="space-y-6">
                {stages.map((stage) => (
                  <div key={stage.num} className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1D67CD] text-white flex items-center justify-center font-bold text-sm shrink-0 font-sans">
                      {stage.num}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[16px] font-sans">{stage.title}</h4>
                      <p className="text-slate-500 text-sm font-avenir mt-1 leading-relaxed">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Info Panel */}
            <div className="lg:col-span-5 space-y-6">
              <img src={prepImg3} alt="Tax filing process" className="w-full rounded-3xl shadow-md" />
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-4">
                <h4 className="font-bold text-[#00305B] font-sans">Final Verification & Submission</h4>
                <p className="text-slate-600 font-avenir text-sm leading-relaxed">
                  After confirming the accuracy of the provided information, we gain access to the client's system and tax software to process all elements, including deductions, credits, carryover balances, and other relevant components, within the tax preparation program. Subsequently, we furnish clients with PDF files containing their tax returns and computations, accompanied by our observations, queries, and comments. Any necessary adjustments are executed only after receiving the client's approval, at which point the return is ready for filing.
                </p>
              </div>
            </div>

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
