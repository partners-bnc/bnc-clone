import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Globe, ShieldAlert, CheckCircle } from 'lucide-react'

const countryData = {
  australia: {
    name: 'Australia',
    badge: 'APAC Region',
    desc: 'Supporting Australian businesses, Accounting Practices, and SMEs with comprehensive outsourcing services built on local standards.',
    compliance: 'AASB, ASIC reporting, ATO compliance, local GST, and payroll guidelines (Superannuation/Single Touch Payroll).',
    solutions: [
      'Xero bookkeeping & reconciliation.',
      'ATO Activity Statement filings (BAS/IAS) preparation.',
      'Superannuation compliance reporting.',
      'Audit file preparation packages for local external auditors.',
    ],
  },
  canada: {
    name: 'Canada',
    badge: 'Americas Region',
    desc: 'Delivering dedicated back-office bookkeeping, accounting, and tax filing prep support for Canadian businesses and accounting firms.',
    compliance: 'ASPE, IFRS, CRA guidelines, GST/HST/PST returns, and T2 corporate tax return scheduling.',
    solutions: [
      'QuickBooks Online & Hubdoc receipt processing.',
      'Monthly bank, credit card, and intercompany reconciliations.',
      'Payroll processing (CRA deductions, T4 filings).',
      'Year-end working paper files prep.',
    ],
  },
  'saudi-arabia': {
    name: 'Saudi Arabia',
    badge: 'Middle East Region',
    desc: 'Steering KSA enterprises and foreign branches through the rapidly changing tax regulatory environment.',
    compliance: 'ZATCA e-invoicing Phase 1 & 2 integration, KSA VAT filings, SOCPA accounting standards, and Withholding Tax (WHT).',
    solutions: [
      'ZATCA compliant accounting integrations.',
      'Bilingual (English/Arabic) accounting reviews.',
      'Historical accounts clean-up for audit preparedness.',
      'VAT returns and compliance checks.',
    ],
  },
  uae: {
    name: 'United Arab Emirates',
    badge: 'Middle East Region',
    desc: 'Helping UAE startups, Free Zone entities, and mainland conglomerates scale their finance functions.',
    compliance: 'FTA Corporate Tax laws, local VAT regulations, Free Zone reporting protocols, and Economic Substance Regulations (ESR).',
    solutions: [
      'Corporate Tax registrations and preparation files.',
      'FTA VAT return calculations and submissions.',
      'WPS-compliant payroll management.',
      'Management reporting for local banks and investors.',
    ],
  },
}

export default function CountryDetail() {
  const { countrySlug } = useParams()
  const data = countryData[countrySlug]

  if (!data) {
    return (
      <div className="py-24 text-center bg-white text-slate-800 space-y-6">
        <h2 className="text-2xl font-bold font-serif font-normal text-slate-900">Country Service Details Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="py-16 md:py-24 bg-white text-slate-800 antialiased font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-300">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 text-sm font-semibold tracking-wide">
            {data.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-slate-900 leading-tight flex items-center gap-3">
            <Globe className="w-8 h-8 text-[#1D67CD] sm:w-12 sm:h-12" />
            <span>BNC in {data.name}</span>
          </h1>
          <p className="text-slate-655 text-lg leading-relaxed">
            {data.desc}
          </p>
        </div>

        {/* Compliance Block */}
        <div className="p-6 rounded-2xl border border-amber-500/25 bg-amber-500/5 flex gap-4 text-sm text-amber-800">
          <ShieldAlert className="w-6 h-6 flex-shrink-0 mt-0.5 text-amber-600" />
          <div>
            <h4 className="font-bold mb-1 text-slate-900">Local Compliance Framework</h4>
            <p className="text-slate-600 leading-relaxed font-medium">{data.compliance}</p>
          </div>
        </div>

        {/* Specific Solutions */}
        <div className="border-t border-slate-200 pt-8 space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Tailored Solutions for {data.name}</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.solutions.map((sol, idx) => (
              <li
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex gap-3 text-sm text-slate-600 font-medium"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 text-center space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Need a Service Consultation for {data.name}?</h3>
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            Discuss your requirements with our region-specific tax and accounting consultants to build an efficient outsourcing timeline.
          </p>
          <div>
            <Link
              to="/contact-8"
              className="px-8 py-3 rounded-full font-bold bg-[#1D67CD] hover:bg-blue-600 text-white shadow-md active:scale-98 transition-colors inline-block cursor-pointer"
            >
              Contact region advisor
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
