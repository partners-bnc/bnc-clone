import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/digital_stock_hero.png'
import teamImg from '../assets/digital_stock_team.png'
import teamfImg from '../assets/digital_stock_teamf.png'

export default function DigitalStockAssetVerification() {
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
    { label: 'Why Choose BNC', id: 'why-choose' }
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
                Digital Stock & Asset Verification
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                Turn verification into intelligence — simplify, digitize, and stay compliant. Redefining Inventory Verification Through Smart Solutions.
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
                alt="Inventory verification hero graphic" 
                className="w-full max-w-[420px] h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Services Include (White Background) */}
      <section id="services" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Our Services Include:
            </h2>
            <p className="text-slate-500 font-medium">Complete verification and valuation structures for raw stock and capital assets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#1D67CD]/10 flex items-center justify-center font-bold text-[#1D67CD] text-lg">
                01
              </div>
              <h3 className="font-bold text-slate-800 text-base font-sans">Digital Stock Auditing</h3>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                Reconciling real-time digital scanner inputs with ERP database logs to eliminate inventory ledger variances.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#1D67CD]/10 flex items-center justify-center font-bold text-[#1D67CD] text-lg">
                02
              </div>
              <h3 className="font-bold text-slate-800 text-base font-sans">Onsite Physical Audits</h3>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                Diligently mapping capital machinery, real estate bounds, and institutional inventories directly in-field.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#1D67CD]/10 flex items-center justify-center font-bold text-[#1D67CD] text-lg">
                03
              </div>
              <h3 className="font-bold text-slate-800 text-base font-sans">Depreciation & Traceability</h3>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                Reviewing asset usage life scales, calculating yearly depreciation offsets, and ensuring complete trace mapping.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center pt-8">
            <img 
              src={teamImg} 
              alt="BNC Team collaborating on audits" 
              className="w-full h-auto rounded-3xl"
            />
          </div>

        </div>
      </section>

      {/* 3. Why Choose BNC Global? (Navy Background) */}
      <section id="why-choose" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Why Choose BNC Global?
            </h2>
            <p className="text-[#BFD9ED] font-medium font-sans">
              Decades of combined expertise ensuring accurate compliance reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sector Experience', desc: 'Experience across manufacturing, education, and real estate sectors.' },
              { title: 'Flexible Delivery', desc: 'Onsite and remote engagement options designed around corporate logistics.' },
              { title: 'End-to-End Auditing', desc: 'Comprehensive verification and ledger reconciliation guarantee.' },
              { title: 'Absolute Discretion', desc: '100% data confidentiality and audit traceability metrics.' }
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
              src={teamfImg} 
              alt="BNC Operations backend desk" 
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
