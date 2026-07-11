import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroBg from '../assets/accounting_hero_bg.jpeg'

export default function Accounting() {
  const subServices = [
    { name: 'CFO Services', path: '/virtual-cfo' },
    { name: 'Accounting Health Check', path: '/accounting-health-check' },
    { name: 'Accounting Policy Preparation Services', path: '/accounting-policy-preparation-services' },
    { name: 'Budgeting and Forecasting', path: '/budgeting-and-forecasting' },
    { name: 'Capital Budgeting', path: '/capital-budgeting' },
    { name: 'Internal Control', path: '/internal-control' },
    { name: 'Services Under Virtual CFO', path: '/services-under-virtual-cfo' },
    { name: 'Specific CFO Services', path: '/specific-cfo-services' },
    { name: 'Working Capital Management Services', path: '/working-capital-management-services' }
  ]

  const serviceCategories = [
    {
      title: 'Core Accounting Services',
      items: [
        'Chart of Accounts Setup',
        'Creating and sending customer invoices',
        'Keeping track of customer receipts',
        'Reviewing and documenting supplier invoices',
        'Managing amounts owed to suppliers',
        'Processing payroll and updating payroll records',
        'Generating tax reports and submitting tax payments',
        'Making adjustment entries for depreciation and other things',
        'Recording banking transactions',
        'Proper categorisation of account entries',
        'Accounting with added value',
        'Creating concluding entries for monthly or yearly financial statements'
      ]
    },
    {
      title: 'Book-keeping Services',
      items: [
        'Invoice scanning and storage',
        'Processing and approval of invoices',
        'Allocation of expenses',
        'Accepting payments online',
        'Making payments',
        'Response to vendor questions'
      ]
    },
    {
      title: 'Revenue Management',
      items: [
        'Order management',
        'Keeping track of customer payments',
        'Managing collections',
        'Generating reports and cash forecasts'
      ]
    },
    {
      title: 'Control Reporting',
      items: [
        'Sheet of balances (Balance Sheet)',
        'Profit and Loss / Trial Balance',
        'The flow of Funds Statement',
        'Report on bank reconciliation',
        'Comprehensive general ledger report',
        'Administration of fixed asset accounts',
        'Comparing your bank statement with your bank book',
        'Efficiently reconciling your statement records with your credit card data',
        'Managing the order of the checks',
        'Balancing of Balance Sheet'
      ]
    },
    {
      title: 'Payroll Processing',
      items: [
        'Setup of payroll, daily calculations, and direct deposits',
        'Calculating payroll taxes, filling out forms 941, 1099, 940, and 944, and submitting state returns',
        'Payroll reconciliation with quarterly returns'
      ]
    },
    {
      title: 'Tax Preparation',
      items: [
        'Individual tax returns for the US (Forms 1040, 1040A, 1040EZ, and 1040NR)',
        'Comprehensive business tax returns (Sales & Use, 1065, 1120, 1120S, 1041, 990)'
      ]
    }
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section with Background Image & Overlay */}
      <section 
        className="relative w-full py-24 md:py-32 min-h-[500px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-[#00305B]/85" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-normal leading-tight">
            Accounting Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Diversifying portfolios, sharpening expertise, and providing unique outsourced accounting services to small businesses.
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

      {/* 2. Intro and Cost Optimization Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-4xl space-y-4">
            <h2 className="text-[28px] md:text-[34px] font-display font-extrabold text-[#00305B] tracking-tight leading-snug">
              BnC Global – An Outsourcing Company simplifying accounting management and optimizing costs.
            </h2>
            <p className="text-[17px] text-slate-600 font-medium font-avenir leading-relaxed">
              The current global economy is heavily reliant on financial services that are not considered essential. This creates a highly competitive environment where corporations are driven to achieve financial success at all costs. Furthermore, advancements in technology have significantly altered the way traditional business practices are conducted.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Box */}
            <div className="lg:col-span-6 bg-[#F5FFF7] border border-[#ACD6E8] p-8 rounded-3xl space-y-4 flex flex-col justify-between">
              <div className="space-y-4 text-slate-700 font-avenir text-[16px] leading-relaxed">
                <p>
                  Finding the ideal expert who can work wonders is crucial for your financial firm. You need someone who can stay in the game and use the latest management techniques to ensure your success.
                </p>
                <p>
                  The organization specializes in providing online management solutions for accountancy and related services. Through such systems, BnC Global has carved its position in the fintech industry.
                </p>
                <p>
                  The organization provides specialized outsourcing accounting services to small businesses. Our diverse portfolio in accounting, bookkeeping services, and financial solutions, allows us to constantly expand our knowledge and skill set.
                </p>
              </div>
              <div className="font-bold text-[#1D67CD] text-[15px] pt-4 font-sans">
                ✓ Continuous Knowledge Update & Upgrade
              </div>
            </div>

            {/* Right Box */}
            <div className="lg:col-span-6 bg-[#0B2F5B] text-white p-8 rounded-3xl space-y-4 flex flex-col justify-between">
              <div className="space-y-4 text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
                <p>
                  At BnC Global, we firmly believe that diversifying our portfolio is the key to sharpening our expertise in delivering unparalleled outsourced accounting services. If you're looking for an esteemed accounting outsourcing company in the USA, you've arrived at the right destination!
                </p>
                <p>
                  Your top priority today should be optimizing your time and channelling it into productive hours. At BnC Global, we specialize in delivering unique outsourced accounting services designed to boost your business's long-term return on investment (ROI). 
                </p>
                <p>
                  Our accounting solutions and business strategies are designed to go beyond and enhance your daily operations. We specialize in areas such as internal controls, risk reduction, expenditure balancing, cash flow management, growth, and providing top-notch business solutions.
                </p>
              </div>
              <div className="font-bold text-[#A3D9F6] text-[15px] pt-4 font-sans">
                ✓ Customer ROI Optimization Approach
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center pt-4">
            <p className="text-slate-600 font-avenir font-semibold text-lg italic">
              "Numerous small business accounting service providers operate according to their own principles and responsibilities. While we strive to be among the top accounting companies, we acknowledge the presence of a vast knowledge-based business platform."
            </p>
          </div>

        </div>
      </section>

      {/* 3. Detailed Services Offerings Grid (Navy Background) */}
      <section className="py-20 bg-[#002244] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
              Experience BnC Global's specialized accounting outsourcing services tailored to boost your company's ROI.
            </h2>
            <p className="text-slate-300 font-medium">Comprehensive scope across all critical accounting, reporting, tax, and payroll functions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, catIdx) => (
              <div 
                key={catIdx}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all flex flex-col"
              >
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3 mb-4 font-display">
                  {category.title}
                </h3>
                <ul className="space-y-3 flex-grow">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A3D9F6] shrink-0 mt-1" />
                      <span className="text-[#BFD9ED] text-[14px] leading-relaxed font-sans font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Sub-Services Menu */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#1D67CD] tracking-tight">
              CFO Services Capability Checklist
            </h2>
            <p className="text-slate-500 font-medium">Explore specific financial support models tailored for your enterprise growth.</p>
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
