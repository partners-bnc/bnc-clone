import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/business_analysis_market.png'
import capabilitiesImg from '../assets/business_analysis_capabilities.png'
import processImg from '../assets/business_analysis_process.png'
import benefitsImg from '../assets/business_analysis_benefits.png'
import logoBalsamiq from '../assets/logo_balsamiq.png'
import logoEdrawmax from '../assets/logo_edrawmax.png'
import logoTrello from '../assets/logo_trello.png'
import logoJira from '../assets/logo_jira.png'
import logoStaruml from '../assets/logo_staruml.png'

export default function BusinessAnalysis() {
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
    { label: 'Process We Follow', id: 'process' },
    { label: 'Software’s in Use', id: 'software' },
    { label: 'Benefits You Obtain', id: 'benefits' },
    { label: 'Solutions We Offer', id: 'solutions' }
  ]

  const solutions = [
    'Financial analysis',
    'Retail analysis',
    'Text analysis',
    'Contact center analysis',
    'Cost analysis',
    'Variance analysis',
    'Profit center analysis',
    'Supply chain analysis',
    'Statistical analysis',
    'Cost center analysis',
    'Contribution analysis',
    'Overhead analysis',
    'Business operation analysis',
    'Scenario analysis',
    'Trend analysis',
    'Risk analysis'
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
                Business Analysis
              </h1>
              <p className="text-lg md:text-xl text-[#BFD9ED] font-sans leading-relaxed">
                BnC stands out as a premier provider of business analytics services, empowering you to analyze both structured and unstructured data in real time.
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
                alt="Business analysis market research illustration" 
                className="w-full max-w-[440px] h-auto object-cover rounded-3xl"
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
                Empowering Data-Led Decision Making
              </h2>
              <p>
                This essentially translates to your business achieving full compliance with regulatory requirements. Our team possesses a core set of analytical skills that will guide you in recognizing the pivotal shift from data-driven to data-led decision-making in today's digital transformation era. We engage closely with our clients to align with their specific business needs, offering highly tailored solutions.
              </p>
              <p>
                BnC is a renowned service provider that harnesses cutting-edge technology to seamlessly connect products, systems, customers, and employees, thereby enhancing overall experiences. Our team of professionals conducts thorough examinations of your business's financial aspects, including income, taxes, revenue, and financial statements.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={capabilitiesImg} 
                alt="Business capabilities diagram" 
                className="w-full max-w-[380px] h-auto rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Our Business Analytics Process (Navy Background) */}
      <section id="process" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#A3D9F6] tracking-tight">
              Our Business Analytics Process
            </h2>
            <p className="text-[#BFD9ED] font-medium font-sans">
              BnC delivers cutting-edge solutions to organizations of all sizes, fostering continuous growth and profitability.
            </p>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center">
            <img 
              src={processImg} 
              alt="Business analytics workflow process diagram" 
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* 4. Analysis Tools and Techniques (White Background) */}
      <section id="software" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Analysis Tools and Techniques
            </h2>
            <p className="text-slate-500 font-medium">
              At BnC, we employ a diverse array of analysis tools and techniques to facilitate collaboration, manage projects, streamline workflows, and foster creative ideation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-8 items-center justify-items-center">
            <img src={logoBalsamiq} alt="Balsamiq logo" className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoEdrawmax} alt="EdrawMax logo" className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoTrello} alt="Trello logo" className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoJira} alt="Jira logo" className="max-h-9 object-contain filter grayscale hover:grayscale-0 transition-all" />
            <img src={logoStaruml} alt="StarUML logo" className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all" />
          </div>

        </div>
      </section>

      {/* 5. Benefits you obtain (Light Backdrop) */}
      <section id="benefits" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
              Benefits of Business Analytics Services
            </h2>
            <p className="text-slate-500 font-medium font-sans">
              Our business analytics consulting services that help organizations scale efficiency:
            </p>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center">
            <img 
              src={benefitsImg} 
              alt="Benefits diagram graphic" 
              className="w-full h-auto rounded-3xl shadow-sm border border-slate-200"
            />
          </div>
        </div>
      </section>

      {/* 6. Solutions We Offer (Navy Background) */}
      <section id="solutions" className="py-20 bg-[#0B2F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#A3D9F6] leading-tight">
              We offer the following business analytics solutions:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {solutions.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-3 hover:bg-white/10 hover:border-white/20 transition-all items-start"
              >
                <CheckCircle2 className="w-5 h-5 text-[#A3D9F6] shrink-0 mt-0.5" />
                <span className="text-[#BFD9ED] font-sans font-semibold text-[14px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Other Outsourcing Services */}
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
