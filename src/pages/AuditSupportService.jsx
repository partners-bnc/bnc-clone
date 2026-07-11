import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Shield, Calendar, Award, FileText, CheckCircle, HelpCircle } from 'lucide-react'
import heroBg from '../assets/audit_support_hero_bg.jpg'
import img8 from '../assets/audit_support_8.png'
import img2 from '../assets/audit_support_2.png'
import img1 from '../assets/audit_support_1.png'

export default function AuditSupportService() {
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

  const auditServices = [
    { title: 'Financial Statement Audit', desc: 'Detailed validation of statements, balance matching, and audit-ready schedules.' },
    { title: 'Tax Audit', desc: 'Comprehensive alignment of tax schedules and documentation for IRS or local authority guidelines.' },
    { title: 'Forensic Audit', desc: 'Detecting fraud, verifying transaction ledgers, and providing clean reports under strict scrutiny.' },
    { title: 'Internal Audit Sales', desc: 'Evaluating operational efficiency, validation of sales cycles, and internal control reviews.' },
    { title: 'Compliance Audit', desc: 'Rigorously testing procedures to ensure full alignment with regulatory requirements.' },
    { title: 'SOX', desc: 'Ensuring alignment with the Sarbanes-Oxley Act framework, internal controls, and documentation.' }
  ]

  const planningItems = [
    'Compiling detailed documentation and an audit requirements list.',
    'Utilizing audit software to seamlessly roll out electronic audit files from the previous year.',
    'Converting paper-based audit files into electronic formats using Excel.',
    'Precise mapping and tallying of trial balances.',
    'Preliminary analysis of the previous year\'s audit files.',
    'Executing and meticulously recording instructions for internal controls.',
    'Thorough examination of opening balances.',
    'Calculating materiality thresholds and selecting audit samples.',
    'Rigorously assessing books of accounts for adherence to Generally Accepted Accounting Principles (GAAP).'
  ]

  const executionItems = [
    'Assisting in the preparation, verification, and review of working papers.',
    'Evaluating internal controls and meticulously gathering audit evidence.',
    'Systematic indexing and validation of audit evidence.',
    'Summarizing audit findings, establishing cross-references among documents, and offering recommendations for streamlining the review process.',
    'Applying casting methods to ensure internal consistency, mathematical precision, and alignment of lead schedules with final accounts.',
    'Conducting substantive tests and assessing risks.',
    'Facilitating the distribution of balance confirmations.',
    'Conducting a comprehensive end-to-end audit.'
  ]

  const finalizationItems = [
    'Precision in preparing and reviewing high-quality financial statements.',
    'Independent scrutiny of audit files to ensure accuracy and compliance.',
    'Compiling key points for a management letter.',
    'Crafting informative memos addressing accounting or auditing challenges.',
    'Generating internal audit reports based on risk assessments.',
    'Collaboratively developing and implementing effective accounting policies and practices.',
    'Establishing and executing robust internal control procedures.'
  ]

  const whyChooseUs = [
    {
      title: 'Seasoned Expertise',
      desc: 'Our team comprises CPAs, EAs, and CAs with extensive auditing experience.'
    },
    {
      title: 'Efficiency',
      desc: 'We prioritize timely completion, delivering swift audit services without compromising on quality or accuracy.'
    },
    {
      title: 'Error-Free Assurance',
      desc: 'Our commitment to error-free deliverables not only instills client trust but also opens up new revenue streams by enhancing your reputation.'
    },
    {
      title: '24/7 Availability',
      desc: 'We are at your prompt service around the clock to address challenges and queries.'
    },
    {
      title: 'Workflow Enhancement',
      desc: 'Beyond audit management, our adept team streamlines and simplifies your workflow, optimizing efficiency in your operations.'
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
            Audit Support Service
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Outsourced Auditing Services for CPA and Accounting Companies to meet stringent deadlines with precision.
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
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[28px] md:text-[34px] font-display font-extrabold text-[#00305B] tracking-tight leading-snug">
                Professional Audit Support for CPA and Accounting Firms
              </h2>
              <div className="space-y-4 text-[16px] text-slate-600 font-avenir leading-relaxed">
                <p>
                  Accounting, Catchup or Cleanup, Tax filling, or Audit– CPA firms often face the challenge of meeting stringent deadlines. This process can be time-consuming, as highly qualified auditors are tasked with meticulously reviewing and validating all documents against financial records.
                </p>
                <p>
                  At BNC, we specialize in providing comprehensive audit support services to CPA firms and accounting professionals. Our dedicated team of seasoned auditors excels at efficiently managing Accounting Audit Services, thereby, alleviating the burden on your team. Our goal is to free up your valuable time for you to carry on your audits with precision and success.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={img8} 
                alt="Audit Support Team Verification" 
                className="w-full max-w-[480px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Services We Offer (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
              Audit Support Services We Offer
            </h2>
            <p className="text-slate-300 font-medium">A diverse range of support capabilities designed to accelerate audit readiness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#1D67CD]/20 flex items-center justify-center text-[#A3D9F6] font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white font-sans">{service.title}</h3>
                <p className="text-[#BFD9ED] font-avenir text-[14px] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Components of Our Audit Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#00305B] tracking-tight">
              Components of Our Audit Outsourcing Service
            </h2>
            <p className="text-slate-500 font-medium">From strategic planning to final accuracy, we cover the complete lifecycle.</p>
          </div>

          {/* Planning Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#1D67CD] text-white font-sans uppercase tracking-wider">Phase 1</span>
                <h3 className="text-2xl font-display font-extrabold text-[#00305B]">Strategic Planning</h3>
              </div>
              <p className="text-slate-600 font-avenir text-[15px] leading-relaxed">
                We prioritize effective coordination among team members during the planning phase to ensure a seamless audit process. Our team offers valuable support in this critical stage:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {planningItems.map((item, index) => (
                  <li key={index} className="flex gap-2.5 items-start text-slate-600 text-sm font-avenir leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-[#1D67CD] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <img src={img2} alt="Audit Planning Flow" className="w-full max-w-[420px] rounded-3xl shadow-md" />
            </div>
          </div>

          {/* Execution Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-slate-100 pt-16">
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              <img src={img1} alt="Audit Execution Controls" className="w-full max-w-[400px] rounded-3xl shadow-md" />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#00305B] text-white font-sans uppercase tracking-wider">Phase 2</span>
                <h3 className="text-2xl font-display font-extrabold text-[#00305B]">Execution</h3>
              </div>
              <p className="text-slate-600 font-avenir text-[15px] leading-relaxed">
                Our proficient audit team assumes the following responsibilities for a seamless execution phase:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {executionItems.map((item, index) => (
                  <li key={index} className="flex gap-2.5 items-start text-slate-600 text-sm font-avenir leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-[#1D67CD] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Finalization Block */}
          <div className="bg-[#0B2F5B] text-white p-8 md:p-12 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#A3D9F6] text-[#00305B] font-sans uppercase tracking-wider">Phase 3</span>
              <h3 className="text-2xl font-display font-extrabold text-white">Finalization and Precision</h3>
            </div>
            <p className="text-[#BFD9ED] font-avenir text-[15px] max-w-3xl leading-relaxed">
              As we approach the conclusion, our focus remains on validation, independent review, policy drafting, and complete security validation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              {finalizationItems.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-[#A3D9F6] shrink-0 mt-0.5" />
                  <span className="text-white font-sans text-sm font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Why Choose BnC */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Why Choose BnC for Your External Audit Needs
            </h2>
            <p className="text-slate-500 font-medium">Our client-centric support models are structured for excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((point, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#1D67CD] font-sans">
                    {idx + 1}. {point.title}
                  </h3>
                  <p className="text-slate-600 font-avenir text-[14px] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Sub-Services Menu */}
      <section className="py-20 bg-white">
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
