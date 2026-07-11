import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import corridorImg from '../assets/india_saudi_corridor.png'

export default function ServicesUnderVirtualCFO() {
  const subServices = [
    { name: 'CFO Services', path: '/virtual-cfo' },
    { name: 'Accounting Health Check', path: '/accounting-health-check' },
    { name: 'Accounting Policy Preparation Services', path: '/accounting-policy-preparation-services' },
    { name: 'Budgeting and Forecasting', path: '/budgeting-and-forecasting' },
    { name: 'Capital Budgeting', path: '/capital-budgeting' },
    { name: 'Internal Control', path: '/internal-control' },
    { name: 'Specific CFO Services', path: '/specific-cfo-services' },
    { name: 'Working Capital Management Services', path: '/working-capital-management' }
  ]

  const strategyPoints = [
    'Identifying the SWOT of Entrepreneur/Business',
    'Creating an informal Board for all Strategic Decisions',
    'Defining Core and Non-Core areas (what to do and what not to do)',
    'Developing, defining, and implementing Matrix',
    'Allocation of resources for the next 3-5 years',
    'Planning and implementing future Organisation Structure',
    'Defining the next 3-5 years’ Business Plan'
  ]

  const leadershipPoints = [
    { title: 'Effective Leadership', desc: 'Being an effective organizational leader.' },
    { title: 'Resource Allocation', desc: 'Effective allocation of the existing resources.' },
    { title: 'Stewardship', desc: 'Managing the responsibilities of stewardship with stakeholders.' },
    { title: 'Department Coordination', desc: 'Ensuring best co-ordination of finance department with other departments.' },
    { title: 'Integrator & Navigator', desc: 'Acting as integrator and navigator for the organization.' }
  ]

  const preferredSkills = [
    'Financial Foresight',
    'Accounting & Financial Expertise',
    'Can understand Business & all major functions',
    'Result Oriented Nature: resolve issues and implement solutions',
    'Self-driven & Proactive (less reactive approach)',
    'Experience with Multiple ERPs or equivalent IT platforms',
    'Confidence, Vision & Foresight',
    'Excellent Communication & People Skills (oral and written)',
    'Leadership Skills (must-have characteristic)',
    'Strong network of experts across the board'
  ]

  const mindsetPoints = [
    'This is not a compliance or audit function but a business function (Execution)',
    'Not only gap/issue finding but finding solutions, implementing solutions and resolving matters',
    'Continuous knowledge update and upgrade is very crucial for growth',
    'Crisis management capability is a very important feature of this service',
    'Awareness about Economy and capital markets developments is highly helpful',
    'Ownership driven mindset is must for engagement success'
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
                Services Under <span className="text-[#00305B]">Virtual CFO</span>
              </h1>
              <p className="text-[22px] leading-[30px] text-[#F5FFF7] font-medium font-avenir">
                A virtual CFO works remotely and provides a wide range of financial services, including financial analysis and planning, cash flow management, budgeting and forecasting, financial reporting, risk management, and other financial advisory services.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact-8"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#00305B] text-white hover:bg-opacity-90 shadow-md active:scale-98 transition-colors cursor-pointer font-sans"
                >
                  <span>Connect Us</span>
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

      {/* 2. Strategy Formulation */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-4xl space-y-4">
            <h2 className="text-[30px] font-display font-extrabold text-slate-800 leading-snug">
              Strategy Formulation
            </h2>
            <p className="text-[17px] text-slate-600 font-medium font-avenir leading-relaxed">
              Normally entities do not have detailed strategies in place when they have begun operations. They have a product line to build or an idea to develop. All these processes are fine at the initial stage but during the growth phase, if the strategy is not defined/documented, it can lead to multiple issues.
            </p>
            <p className="text-[17px] text-slate-800 font-bold font-avenir pt-2">
              Some of these strategies are defined in the early growth stage and some during the growth phase of business as the need arises. Virtual CFO support in:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {strategyPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl border border-[#ACD6E8] bg-[#F5FFF7]/50 hover:bg-[#F5FFF7] transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#1D67CD] shrink-0 mt-0.5" />
                <p className="text-slate-700 font-sans font-medium text-[16px] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Leadership & Domain Expertise (Navy Background) */}
      <section className="py-16 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl">
            <h2 className="text-[26px] md:text-[30px] font-display font-extrabold text-white leading-tight">
              Along with domain expertise as Supreme profession in field of Accounts and Finance, the Virtual chief financial Service Provider (CSP) should be expert at:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {leadershipPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="text-[#ACD6E8] font-bold text-lg mb-2 font-display">
                  {point.title}
                </div>
                <p className="text-[#BFD9ED] text-[14px] leading-relaxed font-sans font-medium">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Preferred Skills & Execution Mindset (White Background) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[32px] font-display font-extrabold text-slate-800 tracking-tight">
              CA Preferred Skills & Execution Mindset
            </h2>
            <p className="text-slate-500 font-medium mt-2">A Chartered Accountant (CA) with the following attributes is the ideal fit for Virtual CFO engagements.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Preferred Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1D67CD] border-b border-slate-100 pb-3">
                Preferred Professional Skills
              </h3>
              <ul className="space-y-3">
                {preferredSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#1D67CD] mt-2.5 shrink-0" />
                    <span className="text-slate-700 font-sans font-medium text-[16px] leading-relaxed">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Execution Mindset */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#00305B] border-b border-slate-100 pb-3">
                Execution & Solution Approach
              </h3>
              <ul className="space-y-3">
                {mindsetPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#00305B] mt-2.5 shrink-0" />
                    <span className="text-slate-700 font-sans font-medium text-[16px] leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
