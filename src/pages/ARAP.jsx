import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import heroBg from '../assets/ar_ap_hero_bg.jpg'
import arApImg1 from '../assets/ar_ap_management_1.png'
import arApImg2 from '../assets/ar_ap_management_2.png'

export default function ARAP() {
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

  const arServices = [
    'Timely generation of invoices post the delivery of goods and services, along with estimates',
    'Seamless integration of new invoices into the systems',
    'Swift and accurate updates to accounts receivable information',
    'Regular and effective communication for the purpose of receivables collection',
    'Thorough updates on receipts in the ledger of accounts receivable',
    'Timely updates on advances received, in addition to receipts for credit sales, and more',
    'Expert handling of unpaid invoices through appropriate questioning',
    'Preparation of account statements and proactive client updates for reconciliation',
    'Timely communication with clients and relevant touchpoints regarding any discrepancies in account statement reconciliation',
    'Diverse analysis of accounts receivable, including aging reports, segmentation by company, client areas, and more',
    'Forecasting future cash flows based on the current state of receivables'
  ]

  const apServices = [
    {
      title: 'PO Integration',
      desc: 'Streamlining purchase order integration in alignment with goods receipts, ensuring accuracy and efficiency.'
    },
    {
      title: 'Vendor Scrutinization',
      desc: 'Meticulous scrutinization of vendor approvals, cross-referencing them with purchase orders and maintaining open lines of communication with vendors.'
    },
    {
      title: 'Problem Resolution',
      desc: 'Resolving potential AP bottleneck problems proactively.',
      isProblemResolution: true
    },
    {
      title: 'Bill Posting',
      desc: 'Efficient posting of vendor bills to ensure an organized financial record.'
    },
    {
      title: 'Discount Guidance',
      desc: 'Guidance on discount availability and early payment options to optimize working capital.'
    },
    {
      title: 'Payment Controls',
      desc: 'Custom payment instructions for upcoming payments.'
    },
    {
      title: 'Documentation',
      desc: 'Comprehensive documentation of vendor account statements, credit notes, and debit notes.'
    },
    {
      title: 'Reconciliation',
      desc: 'Meticulous vendor account reconciliation.'
    },
    {
      title: 'Payment Notifications',
      desc: 'Timely notification of unpaid supply amounts and unfulfilled purchase order commitments.'
    },
    {
      title: 'In-Depth Analysis',
      desc: 'In-Depth analysis of segments, aging of payables, and vendors\' past purchase patterns and price trends.'
    }
  ]

  const resolvedProblems = [
    'Purchase orders lacking proper authorization or budget allocation.',
    'Unauthorized receipt of goods or services.',
    'Instances of non-receipt of goods/services despite vendor billing.',
    'Discrepancies between vendor bills and purchase orders.',
    'Identification and rectification of computation errors in supplier bills.'
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-normal leading-tight max-w-5xl mx-auto">
            Accounts Receivable & Accounts Payable Outsourcing
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Streamline your cash flow, optimize invoice processing, and maintain flawless financial relations.
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

      {/* 2. Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[28px] md:text-[34px] font-display font-extrabold text-[#00305B] tracking-tight leading-snug">
                BnC Global offers comprehensive outsourcing services for accounts payable and receivable management.
              </h2>
              <div className="space-y-4 text-[16px] text-slate-600 font-avenir leading-relaxed">
                <p>
                  Within the realm of business, various entities such as suppliers, clients, payment terms, and non-payment terms bind together to form a complex ecosystem.
                </p>
                <p>
                  Establishing sophisticated systems and vigilant cash flow monitoring is paramount to effective business management. Continuous tracking of earnings and investments is important for maintaining harmonious relationships with clients and business partners.
                </p>
                <p>
                  Our outsourced accounts payable and accounts receivable services empower businesses to streamline their financial processes. The meticulous tracking of accounts payable and receivable can be a formidable challenge in accounting management. Without a dedicated team specialized in accounts payable and receivable outsourcing services, tackling such intricacies becomes all the more exhaustive.
                </p>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={arApImg1} 
                alt="AR AP Management Diagram" 
                className="w-full max-w-[450px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-[#1D67CD] font-sans">Strategic Leadership</h4>
              <p className="text-slate-500 font-avenir text-sm">Effective leadership and cash flow management stand as indispensable pillars of success.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-[#00305B] font-sans">Resource Diversion</h4>
              <p className="text-slate-500 font-avenir text-sm">Divert valuable resources toward productive hours and negotiations instead of heavy backend overhead.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-[#1D67CD] font-sans">Proactive Follow-Ups</h4>
              <p className="text-slate-500 font-avenir text-sm">Regular monitoring and customer receipt updates protect consistency in company revenues.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Accounts Receivable Services (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl">
            <h2 className="text-[28px] md:text-[36px] font-display font-extrabold text-white leading-tight">
              Our comprehensive range of accounts receivable outsourcing services encompasses:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arServices.map((point, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-3.5 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-[#1D67CD] flex items-center justify-center shrink-0 font-sans text-xs font-bold mt-0.5 text-white">
                  {idx + 1}
                </div>
                <p className="text-[#BFD9ED] font-sans font-medium text-[15px] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Accounts Payable Services (White Background) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-[28px] md:text-[36px] font-display font-extrabold text-slate-800 tracking-tight leading-tight">
              Our comprehensive range of accounts payable outsourcing services encompasses:
            </h2>
            <p className="text-slate-500 font-medium">Keep supplier balances balanced and process expenses systematically.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {apServices.map((service, idx) => (
              <div 
                key={idx}
                className={`bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-md transition-shadow flex flex-col justify-between ${service.isProblemResolution ? 'lg:col-span-2 bg-[#F5FFF7] border-[#ACD6E8]' : ''}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#1D67CD] shrink-0" />
                    <h3 className="text-lg font-bold text-slate-800 font-sans">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 font-sans text-[15px] leading-relaxed">
                    {service.desc}
                  </p>
                  
                  {/* Embedded Problem Resolution Sub-list */}
                  {service.isProblemResolution && (
                    <div className="mt-4 bg-white border border-[#ACD6E8] p-5 rounded-2xl space-y-3.5">
                      <div className="flex items-center gap-2 text-[#00305B] font-bold text-sm">
                        <AlertCircle className="w-4 h-4 text-[#1D67CD]" />
                        <span>AP Bottlenecks Addressed:</span>
                      </div>
                      <ul className="space-y-2">
                        {resolvedProblems.map((prob, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-slate-600 text-[13px] font-medium leading-relaxed">
                            <span className="text-[#1D67CD] font-bold mt-0.5">•</span>
                            <span>{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Inline Image Callout Banner */}
          <div className="bg-[#00305B] rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 space-y-6 md:w-3/5 text-white">
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-[#A3D9F6] leading-tight">
                Vigilant Monitoring and Reporting
              </h3>
              <p className="text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
                BnC Global works diligently with you to map supplier relationships, early discounts, and customer payments to provide complete clarity over your working cash loop.
              </p>
            </div>
            <div className="md:w-2/5 w-full">
              <img 
                src={arApImg2} 
                alt="AR AP Flow Optimization" 
                className="w-full h-full object-cover min-h-[250px] md:min-h-[300px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Sub-Services Menu */}
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
