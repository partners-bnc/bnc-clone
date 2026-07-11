import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/control_reconciliation_hero.png'
import servicesImg from '../assets/control_reconciliation_services.png'
import capabilitiesImg from '../assets/control_reconciliation_capabilities.png'
import benefitsImg from '../assets/control_reconciliation_benefits.png'
import wheelImg from '../assets/control_reconciliation_wheel.png'
import logoSap from '../assets/logo_sap.png'
import logoNetsuite from '../assets/logo_netsuite.png'
import logoMyob from '../assets/logo_myob.png'
import logoSage from '../assets/logo_sage.png'
import iconSoftware1 from '../assets/tax_icon_software.png'
import iconSoftware2 from '../assets/tax_icon_software2.png'

export default function ControlAccountReconciliations() {
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
    { label: 'Our Capabilities', id: 'capabilities' },
    { label: 'Key Elements', id: 'elements' },
    { label: "Software's in use", id: 'software' }
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
                Control Account Reconciliations
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                Detecting errors or discrepancies in records and ensuring financial statements accurately reflect financial positions.
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
                alt="Control account hero illustration" 
                className="w-full max-w-[420px] h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Services (White Background) */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Reconciliation Services We Render
            </h2>
            <p className="text-slate-500 font-medium">Our comprehensive accounting reconciliation services encompass:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Bank Statement Reconciliation',
              'Credit Card Statement Reconciliation',
              'Debit Card Receipt Reconciliation',
              'Check Payment Verification',
              'General Ledger Software Reconciliation',
              'Invoice Matching with Ledger and Journal Entries',
              'Partial Reconciliation Services',
              'Complete Reconciliation Services'
            ].map((srv, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex gap-3 hover:shadow-sm transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-[#1D67CD] mt-0.5 shrink-0" />
                <span className="font-bold text-slate-800 text-sm font-sans">{srv}</span>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto flex justify-center pt-6">
            <img 
              src={servicesImg} 
              alt="Services grid graphic" 
              className="w-full h-auto rounded-3xl"
            />
          </div>

        </div>
      </section>

      {/* 3. Our Capabilities (Navy Background) */}
      <section id="capabilities" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Our Capabilities
            </h2>
            <p className="text-[#BFD9ED] font-medium font-sans">
              Critical process of verifying an organization's financial records and transactions to rectify discrepancies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
              <p>
                Efficient bank account reconciliation plays a pivotal role in enabling auditors to ascertain the accuracy of a company's financial statements and ensure compliance with regulatory standards. Given the substantial workload and expertise required, outsourcing your account reconciliation is a prudent choice.
              </p>
              <p>
                This is precisely where BnC steps in, offering a comprehensive suite of services tailored to meet your needs. Our team comprises seasoned experts proficient in the intricacies of account reconciliations, guaranteeing secure and reliable services. 
              </p>
              <p className="font-bold text-white">
                By partnering with us, you stand to benefit from reduced administrative and account-related expenses. Additionally, we leverage cutting-edge technological software for our reconciliation services, ensuring that you have access to the latest advancements in the field.
              </p>

              <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-4 text-xs font-sans text-[#A3D9F6] font-bold">
                <span>✓ Bank Reconciliation</span>
                <span>✓ Business Reconciliation</span>
                <span>✓ Intercompany Reconciliation</span>
                <span>✓ Customer & Vendor Reconciliation</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={capabilitiesImg} 
                alt="Capabilities diagram" 
                className="w-full max-w-[380px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Benefits (White Background) */}
      <section id="elements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Benefits of Control Accounts Reconciliation
            </h2>
            <p className="text-slate-500 font-medium">Double-entry ledger accuracy assurance.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 font-avenir text-[16px] leading-relaxed">
              <p>
                Control account reconciliations are general ledger accounts that are used to compile a large number of transactions. As a result, they are included in the double-entry system.
              </p>
              <p className="font-bold text-[#00305B]">
                They are used to demonstrate the accuracy of the ledger accounting system.
              </p>
              <p>
                They are typically used in relation to payables and receivables balances.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={benefitsImg} 
                alt="Benefits diagram" 
                className="w-full max-w-[440px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Software (Light Backdrop) */}
      <section id="software" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Software Used By Us
            </h2>
            <p className="text-slate-500 font-medium">
              At BnC, we use the latest technological software for your account reconciliation solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center pb-12">
            <img src={logoNetsuite} alt="NetSuite logo" className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoSap} alt="SAP logo" className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoMyob} alt="MYOB logo" className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoSage} alt="Sage logo" className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={iconSoftware1} alt="Software icon 1" className="max-h-14 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={iconSoftware2} alt="Software icon 2" className="max-h-14 object-contain filter grayscale hover:grayscale-0 transition-all" />
          </div>

          <div className="max-w-5xl mx-auto flex justify-center">
            <img 
              src={wheelImg} 
              alt="Technology workflow circular image" 
              className="w-full h-auto rounded-3xl"
            />
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
