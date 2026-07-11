import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import corridorImg from '../assets/india_saudi_corridor.png'
import partnershipImg from '../assets/partnership.jpg'

export default function SpecificCFOServices() {
  const subServices = [
    { name: 'CFO Services', path: '/virtual-cfo' },
    { name: 'Accounting Health Check', path: '/accounting-health-check' },
    { name: 'Accounting Policy Preparation Services', path: '/accounting-policy-preparation-services' },
    { name: 'Budgeting and Forecasting', path: '/budgeting-and-forecasting' },
    { name: 'Capital Budgeting', path: '/capital-budgeting' },
    { name: 'Internal Control', path: '/internal-control' },
    { name: 'Services Under Virtual CFO', path: '/services-under-virtual-cfo' },
    { name: 'Working Capital Management Services', path: '/working-capital-management' }
  ]

  const tasksCovered = [
    'Planning for capital expenditures and equipment replacement',
    'Financial Planning & Budgeting',
    'Management of Cash Flow and Working Capital',
    'Services for Accounting Health Check',
    'Accounting Guidelines and Practices Preparation',
    'Internal controls and risk management consultancy.'
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full bg-[#1D67CD] text-white py-12 md:py-16 min-h-[500px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[44px] font-display font-extrabold tracking-normal leading-tight text-left text-white">
                Specific CFO <span className="text-[#00305B]">Services</span>
              </h1>
              <p className="text-[22px] leading-[30px] text-[#F5FFF7] font-medium font-avenir">
                Don't overload your CFO with requests when BnC can assist you with a part-time CFO.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact-8"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#00305B] text-white hover:bg-opacity-90 shadow-md active:scale-98 transition-colors cursor-pointer font-sans"
                >
                  <span>Connect to us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Right image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={corridorImg}
                alt="India–Saudi Business Corridor"
                className="w-full max-w-[550px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Situations Necessitating Part-Time CFO (White/Mint Background) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-4xl space-y-4">
            <h2 className="text-[28px] md:text-[32px] font-display font-extrabold text-slate-800 tracking-tight leading-snug">
              Any of the following situations necessitates the hiring of a part-time CFO:
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Situation 1 Card */}
            <div className="bg-[#F5FFF7] border border-[#ACD6E8] p-8 rounded-3xl shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#1D67CD] text-white font-bold flex items-center justify-center text-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 font-sans">
                Project Overload / Capacity Strain
              </h3>
              <p className="text-slate-600 font-medium font-avenir leading-relaxed text-[16px]">
                When multiple projects must be completed simultaneously, the demand on your current CFO's position may increase. Even with his greatest efforts, he won't be able to complete them all. Don't overload your CFO with requests when BnC can assist you with a part-time CFO.
              </p>
            </div>

            {/* Situation 2 Card */}
            <div className="bg-[#F5FFF7] border border-[#ACD6E8] p-8 rounded-3xl shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#00305B] text-white font-bold flex items-center justify-center text-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 font-sans">
                Skill Gaps in Core Specializations
              </h3>
              <p className="text-slate-600 font-medium font-avenir leading-relaxed text-[16px]">
                Several businesses lack an internal CFO with the necessary high skills and business understanding for some business-related operations. You can get assistance with those responsibilities from a professional thanks to our temporary CFO services.
              </p>
            </div>
          </div>

          {/* Core Areas Covered List */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1D67CD] text-center font-display">
              Tasks Covered by BnC Experts:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tasksCovered.map((task, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1D67CD] shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium font-sans text-[15px]">
                    {task}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interim CFO Collaboration (Navy Background) */}
      <section className="py-16 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[28px] md:text-[32px] font-display font-extrabold text-white leading-tight">
                Seamless Interim Integration
              </h2>
              <div className="space-y-4 text-[18px] text-[#BFD9ED] font-medium font-avenir leading-relaxed">
                <p>
                  In the aforementioned situations, we provide interim CFO services for a little time or to complete particular tasks.
                </p>
                <p>
                  Our CFO collaborates with your full-time CFO or the senior management team you currently have to expedite and complete duties as needed. This ensures business continuity, robust governance, and timely goal delivery.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src={partnershipImg}
                alt="Partnership and collaboration"
                className="w-full max-w-[450px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Sub-Services Menu */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#1D67CD] tracking-tight">
              CFO Services Capability Checklist
            </h2>
            <p className="text-slate-500 font-medium">Explore specific financial support models tailored for your enterprise growth.</p>
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
