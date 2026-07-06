import { ShieldCheck } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="py-16 md:py-24 bg-white text-slate-800 antialiased font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-4 text-center border-b border-slate-200 pb-8">
          <ShieldCheck className="w-12 h-12 text-[#1D67CD] mx-auto" />
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: July 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-600 font-medium">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Data Confidentiality</h2>
            <p>
              BNC Global Consultech Pvt. Ltd. is committed to protecting the financial records and metadata shared by our clients during bookkeeping, advisory, and tax operations. All client ledgers, bank transactions, and payroll files are encrypted and processed in access-restricted cloud environments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Information Collection</h2>
            <p>
              We only collect business contact details, email addresses, and phone numbers via our online consultation forms. Financial documents are gathered securely via encrypted portals (like QuickBooks, Xero, Hubdoc, or client-approved shared drives) and are never stored on public-facing servers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Non-Disclosure & Third-Parties</h2>
            <p>
              All employees, contractors, and network advisors sign binding Non-Disclosure Agreements (NDAs). We do not rent, sell, or trade client information with third parties. Data is shared exclusively with relevant government tax boards (like ATO, CRA, ZATCA, FTA) upon explicit authorization by the client during filing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Cookies & Analytics</h2>
            <p>
              This website uses minor tracking cookies to measure traffic patterns and improve performance. No financial information is tracked by these cookies. You can disable cookies inside your browser settings at any time.
            </p>
          </section>
        </div>

      </div>
    </div>
  )
}
