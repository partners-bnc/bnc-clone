import { Link } from 'react-router-dom'
import servicesHero from '../assets/services_hero.jpg'
import servicesFooter from '../assets/services_footer.jpg'
import iconCyber from '../assets/icon_cyber.png'
import iconEsg from '../assets/icon_esg.png'
import iconCfo from '../assets/icon_cfo.png'
import iconAccounting from '../assets/icon_accounting.png'
import iconTax from '../assets/icon_tax.png'
import iconAdvisory from '../assets/icon_advisory.png'
import iconInventory from '../assets/icon_inventory.png'
import SEO from '../components/SEO'

export default function Services() {
  const categories = [
    {
      title: 'Cybersecurity & Data Privacy Compliances',
      desc: 'Protect critical business data and confidently meet global regulatory requirements with BNC Global. We empower organizations to safeguard what matters most—their data—through comprehensive compliance frameworks',
      icon: iconCyber,
      darkTheme: false,
      path: '/cybersecurity'
    },
    {
      title: 'ESG Advisory',
      desc: 'We support organisations in building sustainable, responsible, and compliant business practices by embedding sustainability and ESG principles into their core operations and strategic decision-making.',
      icon: iconEsg,
      darkTheme: false
    },
    {
      title: 'Virtual CFO',
      desc: 'BNC Global Virtual CFO strategic solution promptly addresses critical challenges faced by entrepreneurs and business entities, especially during the nascent stages of their operations.',
      icon: iconCfo,
      darkTheme: false,
      path: '/virtual-cfo'
    },
    {
      title: 'Accounting Services',
      desc: 'BNC Global is a strategic outsourcing partner that simplifies end-to-end accounting management while helping organizations optimize operational costs.?',
      icon: iconAccounting,
      darkTheme: true,
      path: '/accounting'
    },
    {
      title: 'All types of tax outsourcing service',
      desc: 'BNC Global delivers end-to-end tax compliance and outsourcing services across multiple jurisdictions, helping individuals and organisations navigate complex tax regulations with confidence and accuracy.',
      icon: iconTax,
      darkTheme: true,
      path: '/income-tax-service-soutsourcing'
    },
    {
      title: 'Finance Advisory',
      desc: 'We provide strategic, data-driven financial guidance to support growth, restructuring, and efficiency, with cost analysis to optimize spending and improve profitability.',
      icon: iconAdvisory,
      darkTheme: true,
      path: '/finance-advisory'
    },
    {
      title: 'Inventory Verification',
      desc: 'BNC Global is a strategic outsourcing partner that simplifies end-to-end accounting management while helping organizations optimize operational costs.?',
      icon: iconInventory,
      darkTheme: false,
      path: '/digital-stock-asset-verification'
    },
    {
      title: 'Global Capability Center',
      desc: 'India is a global hub for GCCs, and BNC Global supports you in setting up, managing, and scaling your GCC with end-to-end advisory, HR, legal, and infrastructure support.',
      icon: iconAdvisory, // Fallback to advisory icon
      darkTheme: false,
      path: '/create-or-manage-your-gcc-in-india'
    }
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      <SEO
        title="BNC Global Services - Consulting & Compliance"
        description="Discover BNC Global Services: Cybersecurity, Virtual CFO, ESG Advisory, Tax & Accounting Outsourcing, and Corporate Governance."
        canonical="/bnc-global-services"
      />
      
      {/* 1. Hero Banner */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHero}
            alt="Services Banner Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-400/5 text-blue-300 text-sm font-semibold tracking-wide uppercase">
            Core Service Modules
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight uppercase">
            Your Trusted Partner for Finance, Compliance & Growth
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            BNC Global Services is a multidisciplinary professional services firm supporting businesses across finance, compliance, risk, technology, and talent.
          </p>
        </div>
      </section>

      {/* 2. Grid Cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border transition-all flex flex-col justify-between shadow-sm hover:shadow-md ${
                  cat.darkTheme
                    ? 'bg-[#0b2f5b] text-[#F5FFF7] border-slate-800 hover:border-blue-500'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-[#1D67CD]'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b pb-5 border-current/15">
                    <img src={cat.icon} alt="icon" className="w-14 h-14 object-contain flex-shrink-0" />
                    <h3 className={`text-[20px] font-display font-extrabold leading-tight ${
                      cat.darkTheme ? 'text-[#F5FFF7]' : 'text-slate-900'
                    }`}>
                      {cat.title}
                    </h3>
                  </div>
                  <p className={`text-[14px] leading-relaxed font-sans ${
                    cat.darkTheme ? 'text-[#BFD9ED]' : 'text-slate-600'
                  }`}>
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    to={cat.path || '/contact-8'}
                    className={`inline-flex items-center gap-1 text-[14px] font-bold hover:underline ${
                      cat.darkTheme ? 'text-[#F5FFF7]' : 'text-[#1D67CD]'
                    }`}
                  >
                    <span>Learn More</span>
                    <span>&gt;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bottom Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesFooter}
            alt="Let's build stronger, smarter businesses background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Let’s Build Stronger, Smarter Businesses
          </h2>
          <p className="text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Whether you need support in finance, compliance, risk, technology, or talent — BNC Global Services is your long-term partner.
          </p>
          <div className="pt-4">
            <Link
              to="/contact-8"
              className="px-8 py-3 rounded-full font-bold bg-[#1D67CD] hover:bg-blue-600 text-white shadow-md transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
