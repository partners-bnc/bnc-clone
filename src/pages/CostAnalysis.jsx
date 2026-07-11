import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/cost_analysis_hero.png'
import capabilitiesImg from '../assets/cost_analysis_capabilities.png'
import processImg from '../assets/cost_analysis_process.png'
import serviceScopeImg from '../assets/cost_analysis_service.png'

export default function CostAnalysis() {
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
    { label: 'Cost Accounting Services', id: 'accounting-services' },
    { label: 'Forms of Analysis', id: 'forms-analysis' },
    { label: 'Other Cost Services', id: 'other-services' }
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
                Cost Analysis
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                We have a perfect solution to maximize your profitability with high-quality services.
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
                alt="Cost analysis hero illustration" 
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
                Marginal Clarity & Profit Optimization
              </h2>
              <p className="font-bold text-[#00305B]">
                Are you in search of the finest outsourcing company capable of delivering precise and pertinent cost insights for your products or brands?
              </p>
              <p>
                Are you grappling with the challenge of elevating the profitability and efficiency of your business operations? If your answer is yes, then you've found the premier provider of cost accounting services.
              </p>
              <p>
                Cost analysis, sometimes referred to as benefit-cost analysis, is a systematic process utilized to pinpoint solutions that offer the most effective path to delivering benefits while preserving savings across transactions, activities, and essential business requirements. This approach is frequently employed when assessing commercial or policy decisions.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={capabilitiesImg} 
                alt="Cost analysis capabilities diagram" 
                className="w-full max-w-[380px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Cost Accounting Services (Navy Background) */}
      <section id="accounting-services" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-[#BFD9ED] font-avenir text-[16px] leading-relaxed">
              <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
                Our Cost Accounting Services
              </h2>
              <p>
                BnC is a prominent player in the cost accounting outsourcing industry, well-equipped to assist you with a wide array of cost accounting needs at an economical price range. Our services provide invaluable insights into enhanced cost transparency, aiding in the identification of inefficiencies.
              </p>
              <p>
                BnC boasts a team of trained experts proficient in assessing overall expenditures and enhancing your cost-effective strategies. Our professionals possess extensive experience in cost analysis accounting services and have collaborated with manufacturing firms.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={processImg} 
                alt="Cost analysis process visual" 
                className="w-full max-w-[360px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Different Forms of Analysis (White Background) */}
      <section id="forms-analysis" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Cost, Variance, Break-Even, Contribution, and Overhead Analysis
            </h2>
            <p className="text-slate-500 font-medium">Specialized analytics structures we implement for corporate financial auditing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            
            {/* Cost Analysis */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-[#00305B] font-sans">Cost Analysis</h3>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                A systematic process utilized to identify solutions that offer the optimal strategy for delivering benefits while preserving savings across activities.
              </p>
              <div className="border-t border-slate-200 pt-3">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-2">Process Steps:</span>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Set goals and objectives</li>
                  <li>• Identify and categorize costs and benefits</li>
                  <li>• Establish timeline for expected revenues</li>
                  <li>• Monetize costs & benefits</li>
                  <li>• Discount costs to determine net present value</li>
                </ul>
              </div>
            </div>

            {/* Contribution Analysis */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-[#00305B] font-sans">Contribution Analysis</h3>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                Assesses a product's contribution while considering internal and external influences, highlighting fixed expenses impact.
              </p>
              <div className="border-t border-slate-200 pt-3">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-2">Process Steps:</span>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Set out the problem</li>
                  <li>• Develop the process mapping</li>
                  <li>• Gather raw transaction data</li>
                  <li>• Analyze the performance</li>
                  <li>• Keep revising the data periodically</li>
                </ul>
              </div>
            </div>

            {/* Variance Analysis */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-[#00305B] font-sans">Variance Analysis</h3>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                Entails identifying and resolving deviations from target levels. It investigates disparities between actual and projected costs.
              </p>
              <div className="border-t border-slate-200 pt-3">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-2">Process Steps:</span>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Determine variance between expected & actual costs</li>
                  <li>• Identify causes of the variance</li>
                  <li>• Report findings to management</li>
                  <li>• Implement corrective actions</li>
                </ul>
              </div>
            </div>

            {/* Break-Even & Overhead */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-[#00305B] font-sans">Break-Even & Overhead Analysis</h3>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed font-bold">
                Break-even analysis enables survival estimation, predicting impact of changes in sales/price models.
              </p>
              <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                Overhead analysis estimates the cost of each product, calculates WIP expense, and compares expectations to control overall spending.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Scope of Other Services (Navy Background) */}
      <section id="other-services" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Our Other Cost services
            </h2>
            <p className="text-[#BFD9ED] font-medium font-sans">
              Comprehensive list of cost auditing services we deploy for manufacturing and retail operations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center">
            <img 
              src={serviceScopeImg} 
              alt="Cost service scope diagram" 
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* 6. Other Outsourcing Services */}
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
