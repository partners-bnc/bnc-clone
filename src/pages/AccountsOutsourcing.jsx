import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck, DollarSign, ListTodo, BookOpen, Clock, BarChart } from 'lucide-react'
import heroImg from '../assets/accounts_outsourcing_hero.png'
import benefitsImg from '../assets/accounts_outsourcing_benefits.png'
import challengesImg from '../assets/accounts_outsourcing_challenges.png'
import solutionImg from '../assets/accounts_outsourcing_solution.png'

export default function AccountsOutsourcing() {
  const otherServices = [
    { name: 'Bank & Cards Reconciliations', path: '/bank-card-reconciliations' },
    { name: 'Business Analysis', path: '/business-analysis' },
    { name: 'Control Account Reconciliations', path: '/control-account-reconciliations' },
    { name: 'Controller services', path: '/controller-services' },
    { name: 'Cost Analysis', path: '/cost-analysis' },
    { name: 'Customer & Vendor Reconciliation', path: '/customer-vendor-reconciliation' },
    { name: 'Pay', path: '/pay' },
    { name: 'Finance Advisory', path: '/finance-advisory' },
    { name: 'Digital Stock / Asset Verification', path: '/digital-stock-asset-verification' },
    { name: 'Create / Manage Your GCC In India', path: '/create-or-manage-your-gcc-in-india' }
  ]

  const menuItems = [
    { label: 'What is Outsourcing?', id: 'intro' },
    { label: 'Issues Resolved', id: 'benefits' },
    { label: 'Challenges', id: 'challenges' },
    { label: 'Solutions', id: 'solution' },
    { label: 'Why choose us?', id: 'why' }
  ]

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#00305B] to-[#0A2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-normal leading-tight">
                Account Outsourcing
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                Strategic delegation of finance functions to external experts, optimizing resource allocation and data accuracy.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact-8"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-opacity-90 shadow-md transition-colors"
                >
                  <span>Connect to us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Navigation Menu */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-[#A3D9F6] font-bold mb-3">Quick Navigation</p>
                <div className="flex flex-wrap gap-2">
                  {menuItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleScroll(item.id)}
                      className="px-4 py-2 text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-slate-300 hover:text-white"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={heroImg} 
                alt="Account outsourcing illustration" 
                className="w-full max-w-[440px] h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is Outsourcing (Navy Background) */}
      <section id="intro" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              What is Outsourcing?
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-[#BFD9ED] font-avenir text-[16px] leading-relaxed text-center">
            <p>
              Proven to be a successful strategy for businesses, outsourcing is the strategic adoption of technology and automation at an accelerated pace. Business owners focus on their core functions, which are directly related to generating revenue. These core functions are at the heart of the business's success.
            </p>
            <p>
              Non-core functions, although not directly tied to revenue generation, play a vital role in the overall health of the business. They constitute a significant portion of the business's expenses and encompass tasks such as bookkeeping, accounting, payroll, financial management, and financial planning.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Benefits of Outsourcing (White Background) */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Benefits of Outsourcing Financial Accounting
            </h2>
            <p className="text-slate-500 font-medium">Strategic resources and real-time controller workflows.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { title: 'Resource Management', desc: 'Allows businesses to allocate resources as needed without the burden of paying benefit costs or salaries.', icon: DollarSign },
                { title: 'Time Savings', desc: 'Improves work efficiency and frees up time for businesses to focus on their core operations.', icon: Clock },
                { title: 'Access to Real-Time Data', desc: 'Provides access to updated real-time financial information, facilitating informed decision-making.', icon: BarChart },
                { title: 'Expertise Access', desc: 'Businesses can tap into the expertise of professionals who can assist with accounting software selection and implementation.', icon: BookOpen },
                { title: 'Focus on Core Business', desc: 'Outsourcing non-core tasks enables focus on reconciliation, forecasting, trend analysis, and budgeting.', icon: ListTodo }
              ].map((item, idx) => {
                const IconComp = item.icon
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-[#1D67CD]/10 flex items-center justify-center text-[#1D67CD] shrink-0 mt-1">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-800 text-sm font-sans">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-avenir">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={benefitsImg} 
                alt="Benefits diagram" 
                className="w-full max-w-[400px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Challenges Faced (Light Background) */}
      <section id="challenges" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Challenges Faced by Businesses in Accounting
            </h2>
            <p className="text-slate-500 font-medium">Key compliance and reporting bottlenecks standard teams hit.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              <img 
                src={challengesImg} 
                alt="Challenges illustration" 
                className="w-full max-w-[320px] h-auto rounded-3xl"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { title: 'Common Bookkeeping Mistakes', desc: 'Accounting errors often result from common bookkeeping mistakes, such as incorrect numbers and mixing business and personal accounts.' },
                { title: 'Lack of Monthly Financial Reports', desc: 'Businesses struggle to provide monthly financial reports, hindering financial visibility.' },
                { title: 'Compliance Issues', desc: 'Adhering to federal and state regulations and tax codes is necessary to avoid IRS penalties and expensive fines.' },
                { title: 'Inefficient Software Usage', desc: 'Many businesses do not efficiently utilize or integrate their accounting software features.' },
                { title: 'Late Payments & Billing Errors', desc: 'Challenges related to late customer payments and inaccurate invoice billing cycles.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 hover:shadow-sm transition-shadow">
                  <h4 className="font-bold text-slate-800 text-sm font-sans">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-avenir">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. Solution Through Outsourcing (Navy Background) */}
      <section id="solution" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
                Solution Through Outsourcing
              </h2>
              <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
                Many businesses find it challenging to manually manage accounting tasks, especially when they lack the workforce or time for financial operations. Outsourcing is the solution to these accounting challenges as it offers significant assistance for technical tasks. Businesses commonly outsource responsibilities such as accounting (37%), IT services (37%), and digital marketing (34%) to enhance expertise and efficiency.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={solutionImg} 
                alt="Solution details" 
                className="w-full max-w-[420px] rounded-3xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 6. Why Choose BnC */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Why Choose BnC for Finance and Accounting Outsourcing?
            </h2>
            <p className="text-slate-500 font-medium">Standard controllership values delivered by certified financial experts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-3">
              <h4 className="font-bold text-[#00305B] text-base font-sans">Cost Efficiency</h4>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                Outsourcing eliminates recruitment costs, infrastructure expenses, training, and other operational costs associated with in-house accounting departments.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-3">
              <h4 className="font-bold text-[#00305B] text-base font-sans">Tax Compliance</h4>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                BnC ensures timely tax return submissions and ledger preparation, helping businesses avoid late penalty structures and IRS fines.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-3">
              <h4 className="font-bold text-[#00305B] text-base font-sans">Audit Preparedness</h4>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                BnC assists business owners in preparing finances for banking, investor reviews, and regulatory authorities, reducing last-minute audit surprises.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-slate-50 border border-slate-200 p-8 rounded-3xl">
            <p className="text-slate-600 font-avenir text-sm leading-relaxed">
              In an era marked by relentless technological advancement, outsourcing finance and accounting services emerges as a pragmatic solution for businesses seeking resolution to their challenges. At our organization, we offer a comprehensive array of accounting services to cater to diverse business needs, spanning from efficient payroll management to meticulous tax accounting.
            </p>
          </div>

        </div>
      </section>

      {/* 7. Other Outsourcing Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#1D67CD] tracking-tight">
              Other Outsourcing Services
            </h2>
            <p className="text-slate-500 font-medium">Explore specific operational controllership tracks designed for corporate scaling.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {otherServices.map((service, idx) => (
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
