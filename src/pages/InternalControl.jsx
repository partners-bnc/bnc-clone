import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import corridorImg from '../assets/india_saudi_corridor.png'
import internalControlImg from '../assets/internal_control_services.png'

export default function InternalControl() {
  const subServices = [
    { name: 'CFO Services', path: '/virtual-cfo' },
    { name: 'Accounting Health Check', path: '/accounting-health-check' },
    { name: 'Accounting Policy Preparation Services', path: '/accounting-policy-preparation-services' },
    { name: 'Budgeting and Forecasting', path: '/budgeting-and-forecasting' },
    { name: 'Capital Budgeting', path: '/capital-budgeting' },
    { name: 'Services Under Virtual CFO', path: '/services-under-virtual-cfo' },
    { name: 'Specific CFO Services', path: '/specific-cfo-services' },
    { name: 'Working Capital Management Services', path: '/working-capital-management' }
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full bg-[#1D67CD] text-white py-12 md:py-16 min-h-[500px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[44px] font-display font-extrabold tracking-normal leading-tight text-left text-white">
                Internal Control <span className="text-[#00305B]">Consulting Services</span> <span className="text-[32px] block text-[#BFD9ED] mt-2">- Risk Management Service</span>
              </h1>
              <p className="text-[22px] leading-[30px] text-[#F5FFF7] font-medium font-avenir">
                Helping companies identify and mitigate potential risks that may impact their operations.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact-8"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#00305B] text-white hover:bg-opacity-90 shadow-md active:scale-98 transition-colors cursor-pointer font-sans"
                >
                  <span>Connect to us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Right image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={corridorImg}
                alt="India–Saudi Business Corridor"
                className="w-full max-w-[550px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Requirements & Risk Management (Navy Background) */}
      <section className="py-16 bg-[#0B2F5B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[18px] leading-[28px] font-avenir font-medium text-[#BFD9ED]">
          <p>
            Some of the key requirements for enhancing the internal ecosystem of the firm include risk management and internal control. Creating effective and uniform processes is crucial for making better predictions. Organizations are giving internal control systems the highest priority possible in light of the digital age. Also, the ongoing evaluations of the implemented controls and business processes contribute to the system's improved design—a system that aims to continuously handle known and specific risks.
          </p>
          <div className="border-l-4 border-[#1D67CD] pl-6 py-2 my-6">
            <p className="text-white text-xl font-bold font-sans">
              BnC provides thorough risk management services for the benefit of enterprises' future.
            </p>
          </div>
          <p>
            An internal control system that is clearly defined helps the company make better managerial decisions, secure investments, and improve risk management strategies. This finally results in an increase in the value of related stakeholders. Consider working with a seasoned service provider like BnC if you're seeking one of the most cost-effective and cutting-edge risk management service providers.
          </p>
        </div>
      </section>

      {/* 3. Internal Control Services by BnC Global (White Background) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-display font-extrabold text-[#1D67CD] tracking-tight">
                Top Spot in Risk & Internal Control
              </h2>
              <div className="space-y-4 text-[17px] text-slate-600 leading-relaxed font-avenir font-medium">
                <p className="font-bold text-slate-800 text-[18px]">
                  We are really happy to announce that BnC Global has the top spot among business providers of risk management and internal control consulting services.
                </p>
                <p>
                  BnC techniques are created to make it easier to deliver traditional internal control consulting services in an effective and crucial manner. With the help of our executive director, we offer senior staff involvement one step forward.
                </p>
                <p>
                  We think that enhancing internal control consulting services should begin at the very beginning and continue through the executing and final reporting phases. BnC assigns senior staff and executives to daily tasks to track the engagement process and client satisfaction.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src={internalControlImg}
                alt="Internal Control Services by BnC global"
                className="w-full max-w-[400px] h-auto rounded-3xl shadow-lg object-cover border border-slate-100"
              />
            </div>

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
