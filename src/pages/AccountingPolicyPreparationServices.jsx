import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import corridorImg from '../assets/india_saudi_corridor.png'
import policyPrep2 from '../assets/accounting_policy_prep_2.png'

export default function AccountingPolicyPreparationServices() {
  const subServices = [
    { name: 'CFO Services', path: '/virtual-cfo' },
    { name: 'Accounting Health Check', path: '/accounting-health-check' },
    { name: 'Capital Budgeting', path: '/capital-budgeting' },
    { name: 'Budgeting and Forecasting', path: '/budgeting-and-forecasting' },
    { name: 'Internal Control', path: '/internal-control' },
    { name: 'Services Under Virtual CFO', path: '/services-under-virtual-cfo' },
    { name: 'Specific CFO Services', path: '/specific-cfo-services' }
  ]

  const steps = [
    {
      title: 'Structuring the Framework:',
      description: 'Our team assesses the overall number of parts or procedures, such as accounts payables, fixed assets, cash, and banking. Each policy and practice is assigned a unique reference number to facilitate easy identification and transparent organization.',
      isDark: false
    },
    {
      title: 'Customized Templates',
      description: 'We understand that each business is unique and has its own distinct requirements. Consequently, our services are tailored to suit the specific needs of your organization. This results in the formulation of customized templates for documentation, making the writing process more user-friendly.',
      isDark: true
    },
    {
      title: 'Clear and Effective Communication',
      description: "It's vital to remember that firm policies and procedures are utilized by individuals with diverse backgrounds in terms of education, experience, and interests. Some users may not be well-versed in technical business language. Therefore, BnC ensures that the documentation is presented in a clear, engaging, and concise manner.",
      isDark: false
    },
    {
      title: 'Checklists and Visual Aids:',
      description: 'Visual information has a powerful impact on understanding and retention. To enhance clarity, we present procedures as flowcharts associated with the policy reference points. These flowcharts are strategically placed in areas relevant to manufacturing businesses\' policies.',
      isDark: true
    },
    {
      title: 'Tailored Internal Controls:',
      description: 'Establishing robust internal controls for small business accounting practices is a fundamental aspect of our standardization process. Our aim is to provide a sound framework for managing and maintaining these policies and procedures in alignment with your specific business requirements.',
      isDark: false
    }
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full bg-white py-12 md:py-16 border-b border-slate-100 min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[44px] font-display font-extrabold tracking-normal leading-tight text-left">
                <span className="text-[#1D67CD]">Accounting Policy</span> <span className="text-black">Preparation Services</span>
              </h1>
              <div className="space-y-4 text-black text-[20px] leading-[28px] font-medium font-avenir">
                <p>
                  Our Accounting Policy Preparation services encompass the creation and documentation of a company's accounting policies and procedures, ensuring compliance with pertinent accounting standards and regulations.
                </p>
                <p>
                  These policies provide a crucial framework for the efficient functioning of the accounts department.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact-8"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-blue-600 shadow-md active:scale-98 transition-colors cursor-pointer font-sans"
                >
                  <span>Connect to us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Right Image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={corridorImg}
                alt="India–Saudi Business Corridor"
                className="w-full max-w-[600px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Rules and Procedures Details Section */}
      <section className="py-16 bg-[#1D67CD] text-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-[18px] leading-[26px] font-medium text-[#BFD9ED] font-avenir">
                <p>
                  Accounting rules and procedures not only establish a step-by-step guide to interconnected operations but also furnish an essential checklist that enhances the streamlined operation of the accounts department.
                </p>
                <p>
                  When firm policies and procedures are correctly implemented initially, ongoing supervision becomes unnecessary, and the company can operate smoothly even in the absence of direct oversight. For instance, if you establish a policy against accepting post-dated checks, your staff will consistently adhere to this policy, ensuring operational consistency.
                </p>
                <p>
                  Although the process of developing accounting standards and procedures for small businesses may appear labor-intensive, the long-term benefits make it a valuable investment. At BnC, we specialize in assisting enterprises and manufacturing companies with a range of services, including accounting process analysis, research into best industry practices, policy preparation, and procedure management. Furthermore, we can assist in job assignments and ensure the optimal training for the implementation of these enhanced policies and procedures.
                </p>
              </div>
            </div>
            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src={policyPrep2}
                alt="Accounting Policy Preparation"
                className="w-full max-w-[320px] h-auto rounded-3xl shadow-lg object-cover bg-white p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Steps Section */}
      <section className="py-20 bg-[#F5FFF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[30px] font-display font-extrabold text-[#2E2E2E] tracking-tight leading-snug">
              The creation of appropriate policies and procedures involves several crucial steps:
            </h2>
          </div>

          {/* Staggered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Column (Steps 1, 3, 5) */}
            <div className="space-y-8">
              {steps.filter((_, idx) => idx % 2 === 0).map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#E8E8E8] text-slate-900 p-8 rounded-2xl border border-slate-300 shadow-sm min-h-[220px] flex flex-col justify-center space-y-3 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold font-sans text-slate-800">{step.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed font-sans">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Right Column (Steps 2, 4) - Offset slightly on desktop */}
            <div className="space-y-8 md:translate-y-8">
              {steps.filter((_, idx) => idx % 2 !== 0).map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#1D67CD] text-white p-8 rounded-2xl border border-blue-400 shadow-sm min-h-[220px] flex flex-col justify-center space-y-3 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold font-sans text-white">{step.title}</h3>
                  <p className="text-[#BFD9ED] text-[15px] leading-relaxed font-sans">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sub-Services Menu */}
      <section className="py-20 bg-white border-t border-slate-100">
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
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-[#1D67CD] transition-all flex items-center justify-between group cursor-pointer"
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
