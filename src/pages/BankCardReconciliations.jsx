import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/reconciliation_hero.png'
import introImg from '../assets/reconciliation_intro.png'
import wheelImg from '../assets/reconciliation_wheel.png'
import whyImg from '../assets/reconciliation_why.png'
import logoSap from '../assets/logo_sap.png'
import logoNetsuite from '../assets/logo_netsuite.png'
import logoMyob from '../assets/logo_myob.png'
import logoSage from '../assets/logo_sage.png'
import iconSoftware1 from '../assets/tax_icon_software.png'
import iconSoftware2 from '../assets/tax_icon_software2.png'

export default function BankCardReconciliations() {
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
    { label: 'Our Capabilities', id: 'intro' },
    { label: 'Key Elements', id: 'wheel' },
    { label: 'Software’s in Use', id: 'software' },
    { label: 'Services we Offer', id: 'why' }
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
                Bank & Cards Reconciliations
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                We make your finances and cash flow processes easier through our bank and credit card reconciliation services.
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
                alt="Bank and card reconciliation services illustration" 
                className="w-full max-w-[440px] h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro/Capabilities Section (Navy Background) */}
      <section id="intro" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
              <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
                Accurate Month-End Closures
              </h2>
              <p>
                Are bank card and reconciliation tasks at the end of each month proving to be a challenging endeavour for your organization? Are you considering outsourcing your bank and credit card reconciliation operations to a reputable service provider? Are you looking for a company that can efficiently manage your bank card and reconciliation processes in a timely manner?
              </p>
              <p>
                Look no further than BnC, a seasoned expert in the field of bank and credit card reconciliation services. We have a proven track record of assisting numerous companies with their reconciliation requirements, making a significant impact on their financial stability. Our team of experts is ready to seamlessly integrate with your operations to handle your bank and credit card reconciliation tasks.
              </p>
              <p className="font-bold text-white">
                Outsourcing your bank and credit card reconciliation services to BnC offers you a cost-effective and precise solution. Our services are designed to eliminate the obstacles you face in the reconciliation process, meticulously tracking receipts and cheque issuance to ensure accuracy and efficiency.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={introImg} 
                alt="Reconciliation capabilities illustration" 
                className="w-full max-w-[380px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Reconciliations Wheel Diagram (White Background) */}
      <section id="wheel" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Main Parts of Account Reconciliation
            </h2>
            <p className="text-slate-500 font-medium font-sans">
              Our workflows cover all standard banking, credit cards, and ledger matching processes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center">
            <img 
              src={wheelImg} 
              alt="Account Reconciliation Segment Wheel" 
              className="w-full h-auto rounded-3xl shadow-md border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 4. Software Section (Light Backdrop) */}
      <section id="software" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Software Used By Us
            </h2>
            <p className="text-slate-500 font-medium">Reconciliation software integrated across our secure financial servers.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            <img src={logoNetsuite} alt="NetSuite logo" className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoSap} alt="SAP logo" className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoMyob} alt="MYOB logo" className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoSage} alt="Sage logo" className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={iconSoftware1} alt="Software icon 1" className="max-h-14 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={iconSoftware2} alt="Software icon 2" className="max-h-14 object-contain filter grayscale hover:grayscale-0 transition-all" />
          </div>

        </div>
      </section>

      {/* 5. Experience and Expertise (Navy Background) */}
      <section id="why" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
                Experience and Expertise
              </h2>
              <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
                BnC has great experience in dealing with bank card and reconciliation services and has helped numerous companies in providing seamless controllership values, ensuring error-free accounts at month-end closures.
              </p>
              <div className="flex gap-4 items-center">
                <CheckCircle2 className="w-5 h-5 text-[#A3D9F6]" />
                <span className="text-xs text-[#BFD9ED] font-semibold font-sans">Meticulous tracking of receipts and cheque issuance</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={whyImg} 
                alt="Experience illustration" 
                className="w-full max-w-[360px] h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Other Outsourcing Services */}
      <section className="py-20 bg-white">
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
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:border-[#1D67CD] transition-all flex items-center justify-between group shadow-sm cursor-pointer"
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
