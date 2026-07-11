import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/payroll_reconciliation_hero.png'
import capabilitiesImg from '../assets/payroll_reconciliation_capabilities.png'
import flowImg from '../assets/payroll_reconciliation_flow.png'
import logoSap from '../assets/logo_sap.png'
import logoNetsuite from '../assets/logo_netsuite.png'
import logoMyob from '../assets/logo_myob.png'
import logoSage from '../assets/logo_sage.png'
import iconSoftware1 from '../assets/tax_icon_software.png'
import iconSoftware2 from '../assets/tax_icon_software2.png'

export default function PayrollReconciliation() {
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
    { label: 'Steps We Follow', id: 'steps' },
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
                Payroll Reconciliation
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                Meticulously compare the contents of your payroll register with the intended payouts to employees, ensuring alignment and accuracy.
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
                alt="Payroll Reconciliation hero illustration" 
                className="w-full max-w-[420px] h-auto object-cover rounded-3xl"
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
                Complete Payroll Assurance & Compliance
              </h2>
              <p>
                In any organization, payroll processing is not just a necessity but a legal requirement, and payroll reconciliation plays a pivotal role in this aspect. Though the process may appear labor-intensive, its benefits span from simplifying tax preparation to effectively tracking business expenses.
              </p>
              <p>
                Adhering to the payroll reconciliation process is of utmost importance as it guarantees correct and timely employee compensation, shields against penalties, and upholds precise financial records. It also involves the integration of data from various general ledger accounts, including payable payroll, expenses, and liabilities.
              </p>
              <p className="font-bold text-[#00305B]">
                At BnC, we bring extensive experience to the table, addressing all aspects of payroll reconciliation while prioritizing employee well-being. Our services encompass meticulous record-keeping, penalty avoidance, and precise employee compensation.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={capabilitiesImg} 
                alt="Payroll capabilities illustration" 
                className="w-full max-w-[380px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Steps We Follow (Navy Background) */}
      <section id="steps" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Steps of the Payroll Reconciliation Process
            </h2>
            <p className="text-[#BFD9ED] font-medium font-sans">
              Here's how our payroll reconciliation services enhance business management, saving time while upholding accuracy:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Verification of Payroll Register', desc: 'Cross-checking employee details such as name, DOB, and employee number.' },
              { title: 'Scrutiny of Pay Rates', desc: 'Determining gross wages for employees accurately.' },
              { title: 'Validation of Employee Time Cards', desc: 'Ensuring accurate entry of work hours.' },
              { title: 'Confirmation of Deductions', desc: 'Comprising social security, Medicare, local taxes, health insurance, etc.' },
              { title: 'Accurate General Ledger Entries', desc: 'Properly recording assets, liabilities, revenues, and expenses.' },
              { title: 'Timely Tax Submission', desc: 'Monthly or weekly payroll tax submissions to avoid penalties.' },
              { title: 'Payroll Validation Audits', desc: 'Checking register totals against salary bank drafts.' },
              { title: 'General Ledger Balancing', desc: 'Reconciling ledger variances before closing out the period.' },
              { title: 'IRS Form 941 Filing support', desc: 'Ensuring your quarterly returns match final tax deposits.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-3 hover:bg-white/10 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#A3D9F6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#A3D9F6] text-sm font-sans">{step.title}</h4>
                  <p className="text-xs text-[#BFD9ED] font-avenir leading-relaxed mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto flex justify-center pt-8">
            <img 
              src={flowImg} 
              alt="Payroll reconciliation workflow chart" 
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* 4. Software Used (Light Backdrop) */}
      <section id="software" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Software We Integrate With
            </h2>
            <p className="text-slate-500 font-medium">
              The best accounting software that we use for your payroll and credit card reconciliation are:
            </p>
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

      {/* 5. Other Outsourcing Services */}
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
