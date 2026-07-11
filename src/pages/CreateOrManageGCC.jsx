import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/gcc_hero.png'
import bannerImg from '../assets/gcc_consultation.jpg'
import teamImg from '../assets/gcc_team.png'
import frameworkImg from '../assets/gcc_framework.png'

export default function CreateOrManageGCC() {
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
    { label: 'Our GCC Services', id: 'services' },
    { label: 'Why India & BNC', id: 'why-india' }
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
                Global Capability Centers (GCC)
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                Set Up and Manage Your Global Capability Center (GCC) in India. Build. Operate. Scale. Succeed — with BNC Global.
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
                alt="GCC establishment hero corridor graphic" 
                className="w-full max-w-[420px] h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banner Strip */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img 
          src={bannerImg} 
          alt="Business Consultation Banner" 
          className="w-full h-full object-cover filter brightness-75"
        />
        <div className="absolute inset-0 bg-[#00305B]/30 flex items-center justify-center">
          <p className="text-white text-lg md:text-xl font-bold font-sans tracking-wide px-4 text-center">
            Complete GCC Advisory, Infrastructure, HR, & Legal Management
          </p>
        </div>
      </div>

      {/* 2. Our GCC Services (White Background) */}
      <section id="services" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Our GCC Setup & Operations Services
            </h2>
            <p className="text-slate-500 font-medium">
              India is now the global hub for GCCs — BNC Global assists you with end-to-end setup and scaling frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#1D67CD]/10 flex items-center justify-center font-bold text-[#1D67CD] text-lg">
                01
              </div>
              <h3 className="font-bold text-slate-800 text-base font-sans">Feasibility & Entity Incorporation</h3>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                Legal entity establishment, regulatory clearance filings, tax incentive mapping, and prime location scouting for infrastructure setups.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#1D67CD]/10 flex items-center justify-center font-bold text-[#1D67CD] text-lg">
                02
              </div>
              <h3 className="font-bold text-slate-800 text-base font-sans">Build & Operationalize</h3>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                Resource acquisition setups, workplace designing and network setups, local vendor agreements, and compliant HR payroll setups.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#1D67CD]/10 flex items-center justify-center font-bold text-[#1D67CD] text-lg">
                03
              </div>
              <h3 className="font-bold text-slate-800 text-base font-sans">Scale & Compliance Governance</h3>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                Ongoing internal audit control checks, global transfer pricing setups, tax compliance submissions, and technology scaling support.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center pt-8">
            <img 
              src={teamImg} 
              alt="BNC Operations Team GCC diagram" 
              className="w-full h-auto rounded-3xl"
            />
          </div>

        </div>
      </section>

      {/* 3. Why India? Why BNC Global? (Navy Background) */}
      <section id="why-india" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Why India? Why BNC Global?
            </h2>
            <p className="text-[#BFD9ED] font-medium font-sans">
              Accelerate capability development and reduce administrative overheads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Global Tech Hub', desc: 'India provides access to unmatched technological, analytical, and operational resources.' },
              { title: 'Optimized Overhead', desc: 'Drastically lower setup rents and administrative operational overheads.' },
              { title: 'Turnkey Execution', desc: 'We coordinate local licenses, office physical fit-outs, and hardware pipelines.' },
              { title: 'Audit-Proof Controls', desc: 'Compliance management ensures 100% security and local legal conformity.' }
            ].map((choose, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-3 hover:bg-white/10 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#A3D9F6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm font-sans">{choose.title}</h4>
                  <p className="text-xs text-[#BFD9ED] font-avenir leading-relaxed mt-1">{choose.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto flex justify-center pt-8">
            <img 
              src={frameworkImg} 
              alt="BNC GCC operational framework diagram" 
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* 4. Other Outsourcing Services */}
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
