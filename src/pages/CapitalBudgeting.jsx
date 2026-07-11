import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import corridorImg from '../assets/india_saudi_corridor.png'
import budgetingPlanning from '../assets/capital_budgeting_planning.png'
import budgetingInfographic from '../assets/capital_budgeting_infographic.png'

export default function CapitalBudgeting() {
  const subServices = [
    { name: 'CFO Services', path: '/virtual-cfo' },
    { name: 'Accounting Health Check', path: '/accounting-health-check' },
    { name: 'Accounting Policy Preparation Services', path: '/accounting-policy-preparation-services' },
    { name: 'Budgeting and Forecasting', path: '/budgeting-and-forecasting' },
    { name: 'Internal Control', path: '/internal-control' },
    { name: 'Services Under Virtual CFO', path: '/services-under-virtual-cfo' },
    { name: 'Specific CFO Services', path: '/specific-cfo-services' },
    { name: 'Working Capital Management Services', path: '/working-capital-management' }
  ]

  const choices = [
    'Lowering operational costs through technology and equipment upgrades',
    'Retaining the new plant, storehouse, or any other storage space for expansion while increasing capacity',
    'Choosing wisely from the available possibilities to maximise financial efficiency',
    'Deciding what land and equipment to acquire and lease to expand the business',
    'Finding the greatest choice to reduce operating expenses via advancing technology',
    'Every alternative option that takes capital investments and their analysis into account'
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
                Capital Budgeting <span className="text-[#00305B]">Analysis Services</span>
              </h1>
              <p className="text-[22px] leading-[30px] text-[#F5FFF7] font-medium font-avenir">
                Evaluating potential long-term investments to determine whether they are financially viable and worth pursuing.
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

      {/* 2. Capital Planning & Budgeting Explanation */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-4xl space-y-4">
            <h2 className="text-[26px] md:text-[30px] font-display font-extrabold text-slate-800 leading-snug">
              The process of budgeting the capital investment of a firm can be understood as Capital planning and budgeting.
            </h2>
            <p className="text-[18px] text-slate-600 font-medium font-avenir leading-relaxed">
              You should have two questions in your mind before purchasing fixed assets:
            </p>
            <ul className="list-disc pl-6 text-[#1D67CD] text-[18px] font-bold space-y-1">
              <li>Whether investing in fixed assets is a wise decision?</li>
              <li>Which assets could the company buy if the aforementioned is true?</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-[17px] text-slate-600 leading-relaxed font-avenir font-medium">
              <p>
                You must compare the options and do a personal cost-benefit analysis to find the answers to these questions. To put it simply, capital budgeting analysis is required for any choice that may result in outflows in the present and inflows in the future.
              </p>
              <p>
                At BnC, we help companies who lack the resources to do a proper capital budgeting study since either management is occupied with everyday tasks or there aren't any internal resources available to do so.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src={budgetingPlanning}
                alt="Capital Budgeting & Planning"
                className="w-full max-w-[360px] h-auto rounded-3xl shadow-md object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Routine Capital Choices Section */}
      <section className="py-16 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-[28px] md:text-[32px] font-display font-extrabold text-white leading-tight">
              At BnC Global, we offer assistance with routine capital planning and budgeting choices like:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {choices.map((choice, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#1D67CD] text-white font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <p className="text-[#BFD9ED] text-[16px] leading-relaxed font-sans font-medium pt-0.5">
                  {choice}
                </p>
              </div>
            ))}
          </div>

          <p className="text-white text-[18px] leading-relaxed font-avenir font-semibold max-w-4xl border-t border-white/10 pt-8">
            Sometimes, you have a lot of projects in front of you and you need to make the best decisions keeping in mind the future growth of your business. BnC Global can also help you in such conditions to find single or multiple potential projects for funding which promise a significant future return.
          </p>

        </div>
      </section>

      {/* 4. Infographic Section */}
      <section className="py-16 bg-white border-b border-slate-100 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <h2 className="text-[28px] md:text-[32px] font-display font-extrabold text-slate-800 max-w-3xl mx-auto">
            At BnC Global, we offer assistance with routine capital planning and budgeting choices like
          </h2>
          <div className="flex justify-center">
            <img
              src={budgetingInfographic}
              alt="Capital Budgeting Infographic"
              className="w-full max-w-[700px] h-auto object-contain rounded-2xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 5. Sub-Services Menu */}
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
