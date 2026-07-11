import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, LayoutGrid, BadgeDollarSign, FileSpreadsheet, Wallet, Scale, Users } from 'lucide-react'
import heroBg from '../assets/xero_hero_bg.jpg'
import infoImg from '../assets/xero_website_info.png'
import threeImg from '../assets/xero_3.png'

export default function XeroAccounting() {
  const subServices = [
    { name: 'Accounting', path: '/accounting' },
    { name: 'AR AP', path: '/ar-ap' },
    { name: 'Audit Support Service', path: '/audit-support-service' },
    { name: 'Bookkeeping', path: '/bookeeping' },
    { name: 'Financial Statements Preparation Services', path: '/financial-statment-preparation-services' },
    { name: 'Inventory Management', path: '/inventory-management' },
    { name: 'XERO Accounting', path: '/xero-accounting' },
    { name: 'Outsourced Tax Preparation', path: '/outsouced-tax-preparation' },
    { name: 'Quickbooks', path: '/quickbooks' },
    { name: 'Payroll Processing', path: '/payroll-processing' },
    { name: 'Virtual Accounting', path: '/virtual-accounting' }
  ]

  const mainServices = [
    'Chart of Accounts Setup',
    'Effortless Invoicing',
    'Streamlined Receipt Management',
    'Simplified Purchase Orders',
    'Scrutinisation of Vendor Invoice Management',
    'Project Profitability Tracking',
    'Tax Compliance',
    'Efficient Payroll Processing',
    'Comprehensive Tax Reporting',
    'Adjustment Entries',
    'Banking Transactions Recording',
    'Month/Year-End Closures'
  ]

  const advancedGroups = [
    {
      title: 'Xero Receivable Accounts',
      icon: BadgeDollarSign,
      items: [
        'Comprehensive Quote Analysis',
        'Effortless Invoice Transmission',
        'Payment Record-Keeping',
        'Customer Aging Management',
        'Reporting and Cash Flow Projection'
      ]
    },
    {
      title: 'Xero Bank Reconciliations',
      icon: FileSpreadsheet,
      items: [
        'Streamlined Bank Record Management',
        'Efficient Reconciliation with credit card data',
        'Check Order Management',
        'Balance Sheet Precision'
      ]
    },
    {
      title: 'Xero Payable Accounts',
      icon: Wallet,
      items: [
        'Streamlined bill payment and receipt processing',
        'Payment Scheduling and Authorization',
        'Payment Processing',
        'Vendor Queries Handling'
      ]
    },
    {
      title: 'Financial Reporting by Xero',
      icon: Scale,
      items: [
        'Balance Sheet',
        'Income declaration',
        'Balance Test (Trial Balance)',
        'Statement of Funds Flow',
        'Bank Reconciliation Report',
        'Comprehensive general ledger report',
        'Fixed Asset Account Management'
      ]
    },
    {
      title: 'Payroll Services Xero',
      icon: Users,
      items: [
        'Payroll Setup',
        'Payday Computations for both contractors and employees',
        'Payroll Tax Management by completing forms like 941, 1099, 940, and 944, and submitting quarterly state tax returns',
        'Payroll Reconciliation with quarterly returns',
        'Year-End Reporting by generating W2 forms'
      ]
    }
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section */}
      <section 
        className="relative w-full py-24 md:py-32 min-h-[500px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-[#00305B]/85" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-normal leading-tight max-w-5xl mx-auto">
            XERO Setup, Accounting, and Book-keeping Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Harnessing cloud automation to deliver complete visibility into your company's financial information.
          </p>
          <div className="pt-4">
            <Link
              to="/contact-8"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-opacity-90 shadow-md active:scale-98 transition-colors cursor-pointer font-sans"
            >
              <span>Connect to us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 font-avenir text-[16px] leading-relaxed">
              <h2 className="text-[28px] md:text-[34px] font-display font-extrabold text-[#00305B] tracking-tight leading-snug">
                Rapid Cloud Accounting Transformation
              </h2>
              <p>
                The evolution of your company depends on the integration of technology into your operational processes, and the landscape of accounting is undergoing a rapid transformation with the advent of cloud accounting. This innovative approach offers speed, security, and user-friendliness. With just a simple click, cloud-based accounting provides you with a comprehensive overview of your financial health and simplifies the management of daily transactions. In this realm, the spotlight falls on Xero, the cloud-based accounting software tailored for small enterprises. However, utilizing such software and manually inputting daily transactions can be time-consuming and labor-intensive.
              </p>
              <p>
                Small business owners often find themselves mired in the complexities of accounting, diverting their attention from their core business objectives. At BnC, we step in with our Xero Setup and Xero Accounting Services, offering invaluable assistance to small businesses in maintaining accurate financial records.
              </p>
              <p className="font-bold text-[#00305B]">
                As one of the leading accounting outsourcing companies, we possess extensive expertise in Xero Bookkeeping Services. Our team of Xero adviser professionals excels in various aspects, including Xero setup, seamless migration to Xero, chart of accounts creation, meticulous bookkeeping, efficient payroll management using Xero, and the generation of comprehensive financial statements. With BnC by your side, you can navigate the intricacies of Xero with confidence.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={threeImg} 
                alt="Three key pillars of Xero accounting" 
                className="w-full max-w-[420px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Main Services List (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
              We offer the following Xero Accounting Services and Xero Bookkeeping Services:
            </h2>
            <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
              Standard operations structured under Xero advisor parameters to ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mainServices.map((task, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-3 hover:bg-white/10 hover:border-white/20 transition-all items-start"
              >
                <CheckCircle2 className="w-5 h-5 text-[#A3D9F6] shrink-0 mt-0.5" />
                <span className="text-[#BFD9ED] font-sans font-semibold text-[14px]">
                  {task}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Advanced Xero Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Structured Financial Management Workflows in Xero
            </h2>
            <p className="text-slate-500 font-medium">Modular categories matching specific controllership tracks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {advancedGroups.map((group, idx) => {
              const IconComponent = group.icon
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-3xl flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#1D67CD]/10 flex items-center justify-center text-[#1D67CD]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-800 text-base font-sans">{group.title}</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-2 items-start text-[13px] text-slate-600 font-medium leading-relaxed">
                          <span className="text-[#1D67CD] mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Website Info illustration block */}
          <div className="max-w-5xl mx-auto flex flex-col items-center space-y-8 pt-8">
            <h3 className="text-2xl font-display font-extrabold text-[#00305B] text-center">
              Comprehensive Technology Integration
            </h3>
            <img 
              src={infoImg} 
              alt="Xero system features integration diagram" 
              className="w-full h-auto rounded-3xl shadow-lg border border-slate-100"
            />
          </div>

          {/* Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-bold text-[#00305B] text-lg font-sans">Automated & Optimized Controllership</h4>
              <p className="text-slate-500 text-sm font-avenir max-w-xl">
                At BnC, we are committed to leveraging cutting-edge technology to automate and optimize all aspects of your company's processes, including accounting.
              </p>
            </div>
            <Link
              to="/contact-8"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-opacity-90 transition-colors shrink-0"
            >
              <span>Connect to us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Sub-Services Menu */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#1D67CD] tracking-tight">
              Accounting Services Capability Checklist
            </h2>
            <p className="text-slate-500 font-medium">Explore specific bookkeeping, reporting, and tax support models tailored for your enterprise growth.</p>
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
