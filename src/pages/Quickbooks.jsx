import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, LayoutGrid, FileSpreadsheet, Scale, BadgeDollarSign, Wallet, Users } from 'lucide-react'
import heroBg from '../assets/quickbooks_hero_bg.jpg'
import graphsImg from '../assets/quickbooks_business_graphs.jpg'
import keyImg from '../assets/quickbooks_1.png'

export default function Quickbooks() {
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

  const setupServices = [
    'In-depth understanding of your business operations.',
    'Assessment of your management reporting needs.',
    'Thorough evaluation of different QuickBooks versions.',
    'Identification of compatible third-party applications.',
    'Recommendations for the ideal QuickBooks version and integration with third-party tools if necessary.',
    'Customization and establishment of account structures, including chart of accounts, cost classes, SKU masters, and user permissions.',
    'Precise configuration of payroll and tax settings in compliance with legal requirements.',
    'Seamless import of opening balances into QuickBooks as of your commencement date.',
    'Providing essential software usage training for clients and their staff.'
  ]

  const categoryGroups = [
    {
      title: 'Accounting & Bookkeeping Services',
      icon: LayoutGrid,
      items: [
        'Chart of Accounts Setup',
        'Creating and sending customer invoices',
        'Keeping track of customer receipts',
        'Checking and documenting vendor invoices',
        'Timekeeping and billable hours',
        'Monitoring project-specific profitability',
        'Managing Sales & Use Payment of taxes to merchants',
        'Payroll processing and payroll file updating',
        'Preparing additional tax-related reports',
        'Putting in adjustment entries for depreciation',
        'Banking Transactions Entry',
        'The account entries\' placement',
        'Accounting with added value',
        'Concluding entries for the month or year'
      ]
    },
    {
      title: 'QuickBooks Receivable Accounts',
      icon: BadgeDollarSign,
      items: [
        'Sending quotes',
        'Clients\' billing',
        'Keeping track of consumer payments',
        'Aging of customers management of collections',
        'Reporting and cash forecasting'
      ]
    },
    {
      title: 'Bank & Credit Card Reconciliations',
      icon: FileSpreadsheet,
      items: [
        'Comparing your bank statement with your bank book',
        'Reconciling statement records with credit card data',
        'Order of the checks audits',
        'Balance sheet balancing'
      ]
    },
    {
      title: 'QuickBooks Payable Accounts',
      icon: Wallet,
      items: [
        'Pay bills and shop online',
        'Processing and approval of bills',
        'Payment acceptance',
        'Making payments',
        'Response to vendor questions'
      ]
    },
    {
      title: 'Computer Aided Financial Reporting',
      icon: Scale,
      items: [
        'Sheet of balances (Balance Sheet)',
        'Income declaration (Profit & Loss)',
        'Test of Balance (Trial Balance)',
        'Statement of cash flows and bank reconciliation',
        'Comprehensive general ledger report',
        'Administration of fixed asset accounts'
      ]
    },
    {
      title: 'Services for QuickBooks Payroll',
      icon: Users,
      items: [
        'Setup for payroll',
        'Payday computations for contractors and workers and direct deposits',
        'Calculating payroll taxes, filling out forms 941, 1099, 940, and 944, and submitting quarterly state returns',
        'Payroll reconciliation with quarterly returns',
        'At the end of the year, create W2 forms'
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
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-normal leading-tight">
            Quickbooks Bookkeeping Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Efficient QuickBooks Accounting, custom environment setup, and certified advisory services.
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
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Efficient QuickBooks Accounting and Setup Services
            </h2>
            <p className="text-slate-500 font-medium">Releasing small business owners from complex backend ledger configurations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 font-avenir text-[16px] leading-relaxed">
              <p>
                Managing your accounts effectively can be a daunting task for most business owners. It demands significant effort, professional expertise, and consumes both time and money. At BnC, we take the reins of your accounting department, allowing you to channel your energy into core business operations. If you're on the lookout for a top-tier firm to outsource QuickBooks Accounting or QuickBooks Bookkeeping, you’re at the right place.
              </p>
              <p>
                QuickBooks by Intuit is highly esteemed by accounting professionals and small to medium-sized businesses alike. This small-business accounting software has gained popularity due to its user-friendly interface and its capability to automate time-consuming bookkeeping and accounting tasks.
              </p>
              <p>
                QuickBooks operates as a "Software as a Service (SaaS)," offering accessibility from any location via the web, making it available round the clock as a stand-alone service. It streamlines various routine business operations, including payroll management, invoice creation, bill payments, sales tax handling, report generation, tax preparation, and time tracking.
              </p>
              <p className="font-bold text-[#00305B]">
                BnC stands as a reputable accounting outsourcing firm with a specialized focus on QuickBooks accounting and bookkeeping services. Our seasoned team includes advisors who hold certifications from QuickBooks, ensuring excellence in our services.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={graphsImg} 
                alt="Business graphs and bookkeeping metrics" 
                className="w-full max-w-[480px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Setup Services (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
              Streamlined Accounting Setup Services
            </h2>
            <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
              Any accounting system's success depends on how it is set up to best imitate industry standards, business-specific processes, corporate hierarchy, etc. much as a building's usefulness depends on how its foundation was constructed.
            </p>
            <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
              Even though QuickBooks is incredibly user-friendly and in high demand all around the world, you must comprehend the many QuickBooks Software versions. Before choosing a particular edition, it is important to weigh your alternatives carefully to avoid investing in a more expensive version while maintaining access to all necessary features. BnC Global can assist you with complete QuickBooks setup services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {setupServices.map((task, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-3 hover:bg-white/10 hover:border-white/20 transition-all items-start"
              >
                <CheckCircle2 className="w-5 h-5 text-[#A3D9F6] shrink-0 mt-0.5" />
                <span className="text-[#BFD9ED] font-sans font-medium text-[14px] leading-relaxed">
                  {task}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Categorized Scope of Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              We offer the following QuickBooks Accounting & Bookkeeping Services:
            </h2>
            <p className="text-slate-500 font-medium">Modular workflow clusters structured around QuickBooks capabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {categoryGroups.map((group, idx) => {
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

          {/* Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-bold text-[#00305B] text-lg font-sans">Determine Your Optimal Frequency</h4>
              <p className="text-slate-500 text-sm font-avenir max-w-xl">
                We at BnC Global assist you in determining how frequently—weekly, monthly, or quarterly—you require our QuickBooks Accounting services.
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
