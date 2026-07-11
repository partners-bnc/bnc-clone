import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/customer_vendor_hero.jpg'
import introImg from '../assets/customer_vendor_intro.png'
import processImg from '../assets/customer_vendor_process.png'
import benefitsImg from '../assets/customer_vendor_benefits.png'

export default function CustomerVendorReconciliation() {
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
    { label: 'Our Capabilities', id: 'capabilities' },
    { label: 'Reconciliation Services', id: 'services' },
    { label: 'How We Benefit You', id: 'benefits' }
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
                Customer & Vendor Reconciliation
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                Vendor payments are a significant financial outflow for any firm, thus vendor reconciliation is done to make operations easier.
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
                alt="Christina team meeting illustration" 
                className="w-full max-w-[440px] h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Capabilities (White Background) */}
      <section id="capabilities" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 font-avenir text-[16px] leading-relaxed">
              <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
                Our Reconciliation Capabilities
              </h2>
              <p>
                Vendor payments represents a significant financial commitment for any organization, underscoring the importance of vendor reconciliation in streamlining operations.
              </p>
              <p>
                Customer reconciliations are primarily conducted by service providers, whereas vendor reconciliations focus on matching supplier-issued statements with entries in the payable ledger, ensuring alignment and detecting any discrepancies in vendor accounts and systems.
              </p>
              <p className="font-bold text-[#00305B]">
                The establishment of robust financial controls hinges on the regular and accurate maintenance of accounts. To address this, BnC offers comprehensive account reconciliation services, diligently managing financial records and documentation.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={introImg} 
                alt="Reconciliation capabilities illustration" 
                className="w-full max-w-[400px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Reconciliation Services (Navy Background) */}
      <section id="services" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Reconciliation Services Encompass
            </h2>
            <p className="text-[#BFD9ED] font-medium font-sans">
              Distinct structured checking levels we deploy for customers and vendor ledgers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Customer Reconciliation */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-[#A3D9F6] font-sans">Customer Reconciliation</h3>
              <ul className="space-y-3 text-xs text-[#BFD9ED]">
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Gather Invoices</span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Inspect Line Items</span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Check Mark Matched Items</span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Highlight Inconsistencies</span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Compare Tools & Ledger Entries</span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Ensuring Accuracy & Completeness</span>
                </li>
              </ul>
            </div>

            {/* Vendor Reconciliation */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-[#A3D9F6] font-sans">Vendor Reconciliation</h3>
              <ul className="space-y-3 text-xs text-[#BFD9ED]">
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Checking the Opening Balance</span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Agree Periods Entries</span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Ensure No Ledger Inaccuracies</span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Allocate Credit Notes and Payments</span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Checking Omissions and Errors</span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#A3D9F6]" />
                  <span>Ensuring Accurate Supplier Ledger</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="max-w-5xl mx-auto flex justify-center pt-8">
            <img 
              src={processImg} 
              alt="Reconciliation process flow" 
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* 4. How we benefit you (White Background) */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
                Let’s have a glimpse of how you will be benefited from our services
              </h2>
              <p className="text-slate-500 font-medium font-sans">
                We make sure that your accounts are consistent & reconciled:
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Cash Flow & Budgeting', desc: 'We help in cash flow, fund flow, fund forecasting and budgeting.' },
                  { title: 'Expansion & Growth', desc: 'We help your business to expand and grow.' },
                  { title: 'Fraud & Scam Identification', desc: 'We identify frauds and scams before they impact your margins.' },
                  { title: 'Credible Vendor Bonds', desc: 'We increase the credibility of your bond with your vendors.' },
                  { title: 'Cost-Effective Services', desc: 'We provide cost-effective services that reduce admin overheads.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#1D67CD] shrink-0 mt-0.5" />
                    <div>
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
                src={benefitsImg} 
                alt="Benefits of customer vendor reconciliation" 
                className="w-full max-w-[380px] h-auto rounded-3xl"
              />
            </div>

          </div>

        </div>
      </section>

      {/* 5. Other Outsourcing Services */}
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
