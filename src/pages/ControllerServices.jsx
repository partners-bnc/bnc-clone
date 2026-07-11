import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/controller_hero.png'
import servicesMapImg from '../assets/controller_services_map.png'
import hierarchyImg from '../assets/controller_hierarchy.png'
import reportingImg from '../assets/controller_reporting.png'
import accountingServicesImg from '../assets/controller_accounting_services.png'
import reasonsImg from '../assets/controller_reasons.png'

export default function ControllerServices() {
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
    { label: 'Our Services', id: 'services' },
    { label: 'Hierarchy', id: 'hierarchy' },
    { label: 'Management Reporting', id: 'reporting' },
    { label: 'Accounting Services', id: 'accounting' },
    { label: 'Why Choose Us', id: 'why' }
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
                Controller Services
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                Deliver precise, timely, and dependable financial data and assistance, empowering sound and efficient decision-making.
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
                alt="Controller hero illustration" 
                className="w-full max-w-[440px] h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services We Offer (White Background) */}
      <section id="services" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 font-avenir text-[16px] leading-relaxed">
              <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
                Services we offer for your financial controller areas
              </h2>
              <p>
                Are you in search of an affordable and technologically advanced partner for your financial controller needs? Look no further.
              </p>
              <p>
                BnC stands as a leading financial controller service provider, addressing your asset and financial controller requirements comprehensively. Our overarching goal is to optimize accounting, finance, marketing, production, and operations to ensure your business's profitability.
              </p>
              <p className="font-bold text-[#00305B]">
                With cutting-edge accounting software and technology at our disposal, our skilled professionals guarantee reliable and efficient service.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={servicesMapImg} 
                alt="Controller Services Map illustration" 
                className="w-full max-w-[420px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Hierarchy (Navy Background) */}
      <section id="hierarchy" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Our Controllership Hierarchy
            </h2>
            <p className="text-[#BFD9ED] font-medium font-sans">
              The structured reporting and auditing levels we deploy across your departments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex justify-center">
            <img 
              src={hierarchyImg} 
              alt="Controller Hierarchy diagram" 
              className="w-full max-w-[620px] h-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* 4. Management Reporting (White Background) */}
      <section id="reporting" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 font-avenir text-[16px] leading-relaxed">
              <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
                Management Reporting Services
              </h2>
              <p>
                BnC excels in management accounting outsourcing, offering valuable services such as prescriptive and predictive analytics, comprehensive financial reports, Cash flow statements, data auditing, reconcile control and more.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1D67CD] mt-0.5 shrink-0" />
                  <span>Real-time dashboard reporting tools</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1D67CD] mt-0.5 shrink-0" />
                  <span>Actionable cash flow modeling</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={reportingImg} 
                alt="Management reporting tools" 
                className="w-full max-w-[360px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Management Accounting Services (Navy Background) */}
      <section id="accounting" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Management Accounting Outsourcing Scope
            </h2>
            <p className="text-[#BFD9ED] font-medium font-sans">
              Covering the core analytics and controllership reporting tracks for scaling firms.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex justify-center">
            <img 
              src={accountingServicesImg} 
              alt="Accounting scope diagram" 
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us (White Background) */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
                Reasons to Choose BnC for Management Accounting Consulting
              </h2>
              
              <div className="space-y-6">
                {[
                  { title: 'Understanding', desc: 'We deeply comprehend your project requirements, tailoring our services to your specific needs.' },
                  { title: 'Tools and Technology', desc: 'BnC utilizes cutting-edge tools and technology to enhance your management reporting processes.' },
                  { title: 'Comprehensive Reports', desc: 'Your data is treated with the utmost security, ensuring comprehensive and actionable reports.' },
                  { title: 'Software Integration', desc: 'Benefit from accurate, reliable, and efficient data using tools like Omniture, web trends, net insight, and more.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#1D67CD] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-800 text-sm font-sans">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-avenir leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={reasonsImg} 
                alt="Why choose us graphic" 
                className="w-full max-w-[360px] h-auto rounded-3xl"
              />
            </div>

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
