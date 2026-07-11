import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroBg from '../assets/inventory_hero_bg.jpg'
import inventoryImg from '../assets/inventory_management_services.png'

export default function InventoryManagement() {
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

  const inventoryTasks = [
    'Order picking assistance',
    'Automated reorder capability',
    'Tools for inventory forecasting',
    'Support for barcoding',
    'Point-of-sale assistance',
    'Inventory coding system',
    'Management of multiple warehouses',
    'Creation of multiple inventory categories',
    'Implementation of various pricing strategies',
    'Options for different inventory valuation methods',
    'Default accounting allocation',
    'Primary and alternative units of measurement',
    'System for tracking inventory',
    'Allocation of inventory costs',
    'Tracking batch numbers and expiry dates',
    'Alerts for inventory management',
    'Integration with accounting tools',
    'Reporting capabilities'
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
            Inventory Management
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#BFD9ED] font-avenir leading-relaxed">
            Premier provider of cost-effective, real-time inventory management outsourcing services.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[28px] md:text-[34px] font-display font-extrabold text-[#00305B] tracking-tight leading-snug">
                BnC Global stands out as a premier provider of cost-effective inventory management outsourcing services.
              </h2>
              <div className="space-y-4 text-[16px] text-slate-600 font-avenir leading-relaxed">
                <p>
                  The responsibility of effective inventory management demands a proactive and precise approach. It's a task no company can afford to take lightly, which is why outsourcing it to experts like BnC Global is a wise choice.
                </p>
                <p>
                  Our innovative outsourced inventory management solutions are designed to track products efficiently and update systems in real-time. The inventory process involves several critical steps, from procurement and stocking to production, sales, and delivery to customers. Businesses rely on expert analysis, inventory reports, and data insights to make informed decisions, as customer preferences heavily influence product management.
                </p>
                <p>
                  BnC excels in averting inventory shortages, ensuring that products are readily available when customers need them. We understand the importance of maintaining optimal inventory levels, and we tailor our solutions to meet specific company needs.
                </p>
                <p>
                  Our approach is flexible, adapting to various product types and stock shortfalls, and we specialize in managing diverse inventory types, including raw materials, finished goods, transportation inventory, cycle inventory, decoupling, anticipation, and more.
                </p>
              </div>
            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={inventoryImg} 
                alt="Inventory Management System" 
                className="w-full max-w-[450px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Scope of Services Grid (Navy Background) */}
      <section className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
              Scope of Inventory Services
            </h2>
            <p className="text-slate-300 font-medium">Outlining the essential tasks completed by BnC Global experts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inventoryTasks.map((task, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-3 hover:bg-white/10 hover:border-white/20 transition-all items-center"
              >
                <CheckCircle2 className="w-5 h-5 text-[#A3D9F6] shrink-0" />
                <span className="text-[#BFD9ED] font-sans font-medium text-[15px] leading-snug">
                  {task}
                </span>
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
