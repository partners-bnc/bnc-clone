import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroBg from '../assets/payroll_hero_bg.jpg'
import payroll5 from '../assets/payroll_5.png'
import guideImg from '../assets/payroll_process_guide.png'
import detailedMap from '../assets/payroll_detailed_map.png'

export default function PayrollProcessing() {
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
            Payroll Outsourcing Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Superior payroll administration, accurate calculations, and complete compliance for diverse business sectors.
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
                Superior Payroll Administration Solutions
              </h2>
              <div className="space-y-4 text-[16px] text-slate-600 font-avenir leading-relaxed">
                <p>
                  Our payroll processing services empower businesses to achieve superior payroll administration. Accurate salary calculations are paramount in fostering transparency and trust among your employees, ultimately enhancing business outcomes and maximizing returns on investment.
                </p>
                <p>
                  However, navigating the intricacies of payroll management demands a profound understanding of both workflow management strategies and human resource management. The landscape of payroll management is often beset with challenges that require deft navigation to ensure clearly defined salary components.
                </p>
                <p>
                  Simplifying this process calls for consistent guidance and profound expertise. Partnering with a reputable payroll outsourcing service provider like BnC is a strategic move to streamline and fortify this crucial process. BnC boasts a wealth of experience across diverse business sectors and specializes in delivering outsourced payroll services, particularly for large workforces, ensuring a seamless and efficient payroll management experience.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={payroll5} 
                alt="Payroll 5 point overview" 
                className="w-full max-w-[420px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Intricacies of payroll (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Guide Image */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              <img 
                src={guideImg} 
                alt="Payroll Process Guide Blueprint" 
                className="w-full max-w-[420px] rounded-3xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
                Navigating Complex Compensation Frameworks
              </h2>
              <div className="space-y-4 text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
                <p>
                  Payroll management today entails a multifaceted array of responsibilities, including reimbursements, loan advances, leave management, and the intricate handling of diverse salary structures. Compliance with legislative requirements, tax laws, and impeccable time management are also integral components of this intricate process.
                </p>
                <p>
                  Furthermore, addressing employee concerns related to compensation and upholding the company's reputation as an equitable employer are essential aspects of online payroll processing.
                </p>
                <p>
                  BnC is your trusted partner in delivering comprehensive payroll processing services that leverage both cutting-edge systems and time-tested methods. Our systematic approach enhances organization and productivity, underpinned by a team of seasoned accounting experts.
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-[#A3D9F6]">
                <span>✓ Reimbursement & Loan Tracking</span>
                <span>✓ Impeccable Time & Tax Management</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Detailed Map Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              End-to-End Online Payroll Processing
            </h2>
            <p className="text-slate-500 font-medium">A visual overview of the payroll workflow optimization offered by BnC Global.</p>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center">
            <img 
              src={detailedMap} 
              alt="Detailed payroll map diagram" 
              className="w-full h-auto rounded-3xl shadow-lg border border-slate-100"
            />
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
