import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import corridorImg from '../assets/india_saudi_corridor.png'

export default function WorkingCapitalManagementServices() {
  const subServices = [
    { name: 'CFO Services', path: '/virtual-cfo' },
    { name: 'Accounting Health Check', path: '/accounting-health-check' },
    { name: 'Accounting Policy Preparation Services', path: '/accounting-policy-preparation-services' },
    { name: 'Budgeting and Forecasting', path: '/budgeting-and-forecasting' },
    { name: 'Capital Budgeting', path: '/capital-budgeting' },
    { name: 'Internal Control', path: '/internal-control' },
    { name: 'Services Under Virtual CFO', path: '/services-under-virtual-cfo' },
    { name: 'Specific CFO Services', path: '/specific-cfo-services' },
    { name: 'Working Capital Management Services', path: '/working-capital-management-services' }
  ]

  const cashFlowOfferings = [
    'Thorough annual cash flow forecasts and 13-week rolling cash balances are prepared and managed',
    'Accelerating the collection of all past-due debts to improve cash flow',
    'Reviewing, identifying, and offering advice on negotiating payment conditions with trade payables as possible',
    'Finding ways to improve trade receivables collection terms to boost cash flows',
    'Examining stock turnover and inventory age',
    'Reviewing and examining every activity that involves a direct financial inflow or outflow to better understand the cash flow system of the business',
    'Assessing all bankers and suggesting better options, such as alternate forms of credit or better credit conditions',
    'Sensitivity analysis to develop new strategies and revise an existing plan to increase cash flows'
  ]

  const tasksCompleted = [
    'Examining every facet of working capital management and outlining each participant\'s obligation to maintain balance',
    'Establishing a benchmark and overseeing a schedule for the cycles of payables and receivables',
    'Creating a system to periodically check it, together with a precise working capital flow forecast, and managing daily reports',
    'Identifying the areas for improvement in the cash conversion processes and coming up with solutions',
    'Helping businesses create or improve working capital lines with banks for managing small business cash flow',
    'Guidance on how to negotiate better conditions for payments and collections'
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
                Working Capital Management <span className="text-[#A3D9F6]">Services</span>
              </h1>
              <p className="text-[22px] leading-[30px] text-[#F5FFF7] font-medium font-avenir">
                The management of an organization's short-term assets and liabilities to ensure that it has sufficient liquidity to meet its financial obligations.
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

      {/* 2. Cash Flow Management Offerings (Navy Background) */}
      <section className="py-16 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-4xl space-y-4">
            <p className="text-[17px] text-[#BFD9ED] font-medium font-avenir leading-relaxed">
              Your company's cash flow may be disrupted by things like economic cycle phases, business dynamics, growth functions, and challenging periods. The management of payables and receivables is crucial during these times. A wise choice not only enhances cash flow but also contributes to more predictability.
            </p>
            <h2 className="text-[28px] md:text-[32px] font-display font-extrabold text-white leading-tight">
              The following services are included in BnC Global's cash flow management offerings, however, they are not the only ones:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
            {cashFlowOfferings.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#A3D9F6] shrink-0 mt-0.5" />
                <p className="text-[#BFD9ED] font-sans font-medium text-[16px] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Tasks Completed (White Background) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-4xl space-y-4">
            <p className="text-[17px] text-slate-600 font-medium font-avenir leading-relaxed">
              The team at BnC helps businesses and provides working capital management services that enhance small enterprises' cash flow management. Our working capital management services assist businesses in putting in place the required procedures and systems to improve their working capital management.
            </p>
            <h2 className="text-[28px] md:text-[32px] font-display font-extrabold text-slate-800 leading-tight">
              Here are a few of the tasks that we complete:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
            {tasksCompleted.map((task, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl border border-[#ACD6E8] bg-[#F5FFF7]/50 hover:bg-[#F5FFF7] transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#1D67CD] shrink-0 mt-0.5" />
                <p className="text-slate-700 font-sans font-medium text-[16px] leading-relaxed">
                  {task}
                </p>
              </div>
            ))}
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
