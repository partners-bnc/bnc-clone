import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Hero
import saHero from '../assets/sa_hero.png'
import saHero2 from '../assets/sa_hero2.png'
// Sections
import saGrowth from '../assets/sa_growth.png'
import saIncome from '../assets/sa_income.png'
import saTax1 from '../assets/sa_tax1.png'
import saTax2 from '../assets/sa_tax2.png'
import saVat from '../assets/sa_vat.png'
// Services
import saServicesIntro from '../assets/sa_services_intro.png'
import saSvcAccounts from '../assets/sa_svc_accounts.png'
import saSvcGrc from '../assets/sa_svc_grc.png'
import saSvcIncorp from '../assets/sa_svc_incorp.png'
import saSvc5 from '../assets/sa_svc_5.png'
import saSvcEsg from '../assets/sa_svc_esg.png'
import saSvc6 from '../assets/sa_svc_6.png'
import saSvcCyber from '../assets/sa_svc_cyber.png'
import saSvcCyber2 from '../assets/sa_svc_cyber2.png'
import saTeam from '../assets/sa_team.png'

export default function SaudiArabia() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    'Basic',
    'Residency Status',
    'Types of Income',
    'Types of Tax',
    'Types of VAT',
    'Connect with us',
  ]

  // Basic tax facts
  const basics = [
    {
      title: 'Tax Year',
      body: 'The tax year in Saudi Arabia is usually the same as the calendar year, running from January 1st to December 31st.',
    },
    {
      title: 'Tax Residency',
      body: 'Individuals are considered tax residents in Saudi Arabia if they meet certain criteria, including staying in the country for at least 183 days in a tax year or having a permanent home in Saudi Arabia. Tax residents are subject to tax on their worldwide income.',
    },
    {
      title: 'Permanent Establishment (PE)',
      body: 'Foreign companies conducting business activities in Saudi Arabia may be subject to corporate income tax if they have a permanent establishment in the country. A permanent establishment is generally a fixed place of business, such as an office, branch, or factory.',
    },
    {
      title: 'Tax Treaties',
      body: 'Saudi Arabia has signed tax treaties with various countries to avoid double taxation and provide relief to taxpayers. These treaties govern how the tax liabilities of individuals and companies are treated when they have cross-border activities.',
    },
  ]

  // Types of tax
  const taxTypes = [
    { title: '1. Income Tax', body: 'Individuals in Saudi Arabia are not subject to personal income tax on their earned income. This is one of the significant attractions for expatriates working in the country.' },
    { title: '2. Corporate Tax', body: 'Companies operating in Saudi Arabia are subject to corporate income tax. The standard corporate income tax rate is 20% for both local and foreign-owned companies. However, certain industries and activities may have different tax rates or tax exemptions.' },
    { title: '3. Withholding Tax', body: 'Saudi Arabia imposes withholding tax on certain types of payments made to non-resident companies and individuals. For example, dividends, interest, royalties, and fees for technical services may be subject to withholding tax.' },
    { title: '4. Value Added Tax (VAT)', body: 'In January 2018, Saudi Arabia introduced a 5% VAT on the supply of goods and services. VAT is applicable to most goods and services, except for essential items like basic food items, certain healthcare services, and financial services.' },
    { title: '5. Other Taxes', body: 'There are other taxes, fees, and contributions that businesses might have to pay, such as social insurance contributions for Saudi and expatriate employees.' },
    { title: '6. Import and Export Duties', body: 'Saudi Arabia levies customs duties on certain imported goods, and the rates can vary based on the type of goods and their country of origin.' },
  ]

  const residencyDetails = [
    { title: 'Sponsorship System (Kafala)', body: 'The sponsorship system, known as Kafala, is an essential aspect of the expatriate residency process. Under this system, expatriates must have a Saudi sponsor (usually their employer) who takes legal responsibility for them during their stay in the country. The sponsor facilitates the issuance and renewal of the Iqama and handles other related administrative matters.' },
    { title: 'Iqama (Residency Permit)', body: 'Expatriates need to obtain an Iqama, which is a residency permit issued by the Saudi government. The Iqama is usually tied to a specific job and employer. It grants them the legal right to live and work in the country.' },
    { title: "Dependents' Visas", body: 'Expatriates with valid Iqamas may apply for residency visas for their immediate family members (spouse, children, parents) to join them in Saudi Arabia. These visas are typically sponsored by the main expatriate.' },
    { title: 'Renewal and Cancellation', body: 'Iqamas typically need to be renewed annually. Failure to renew the Iqama on time or violation of Saudi laws may lead to penalties, fines, or even deportation.' },
    { title: 'Permanent Residency', body: 'In recent years, Saudi Arabia has introduced a premium residency program, also known as the "Green Card" or "Special Privilege Iqama." This program allows certain eligible expatriates to obtain permanent residency in the country without the need for a Saudi sponsor. It grants them various benefits and privileges.' },
    { title: 'Changing Employers', body: 'Expatriates who wish to change employers within Saudi Arabia need to go through a process called the "transfer of sponsorship" or "transfer of services," which requires approval from the current sponsor and the new employer.' },
  ]

  const services = [
    { title: 'Accounts & Risk Consulting', img: saSvcAccounts, extra: null },
    { title: 'Governance, Risk & Compliance (GRC)', img: saSvcGrc, extra: null },
    { title: 'Company Incorporation & Risk Compliance', img: saSvcIncorp, extra: saSvc5 },
    { title: 'ESG Advisory', img: saSvcEsg, extra: saSvc6 },
    { title: 'Cyber Security Solutions', img: saSvcCyber, extra: saSvcCyber2 },
  ]

  return (
    <div className="bg-[#F5FFF7] text-slate-800 antialiased font-sans">

      {/* HERO */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-100 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="w-full lg:w-[540px] space-y-6">
            <h1 className="text-[36px] md:text-[44px] font-display font-extrabold leading-[1.15]">
              <span className="text-[#0B2F5B]">Connect with BNC Global to </span>
              <span className="text-[#1D67CD]">Shape the Next Wave of Innovation </span>
              <span className="text-[#0B2F5B]">in Saudi Arabia</span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#0B2F5B] leading-relaxed font-avenir font-normal">
              At BNC Global, we empower businesses to drive digital transformation, innovation, and market expansion across Saudi Arabia. With expertise in accounting, risk consulting, ESG strategies, cyber security, and compliance, we help organizations navigate today&rsquo;s complex business landscape with confidence.
            </p>
            <a
              href="https://www.linkedin.com/company/bnc-global"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-[18px] font-display font-semibold text-[#1D67CD] hover:text-[#0B2F5B] transition-colors"
            >
              Learn more <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="w-full lg:w-[500px] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] h-[420px]">
              <img src={saHero} alt="BNC Global in Saudi Arabia" className="absolute right-0 top-0 w-[85%] h-auto object-contain rounded-2xl shadow-sm" />
              <img src={saHero2} alt="Innovation in Saudi Arabia" className="absolute left-0 bottom-0 w-[62%] h-auto object-contain rounded-2xl shadow-md border border-slate-100 z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="w-full bg-[#F2F3F5] py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-10">
          <span className="text-[20px] md:text-[22px] font-display font-semibold text-[#1D67CD]">Why Work with BNC Global?</span>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-5">
              <h2 className="text-[30px] md:text-[34px] font-display font-extrabold leading-tight">
                <span className="text-[#0B2F5B]">Empowering </span>
                <span className="text-[#1D67CD]">Strategic Growth</span>
              </h2>
              <p className="text-[18px] text-[#0B2F5B] leading-relaxed font-avenir">
                Our partnerships are crafted for sustainable success &mdash; helping you expand into new markets, foster innovation, and upskill your teams for the future.
              </p>
              <div className="pt-2">
                <span className="text-[20px] md:text-[22px] font-display font-semibold text-[#1D67CD]">Types of Partnerships:</span>
                <h3 className="text-[28px] md:text-[33px] font-display font-extrabold leading-tight mt-2">
                  <span className="text-[#0B2F5B]">BNC Global </span>
                  <span className="text-[#1D67CD]">Innovation &amp; Expansion </span>
                  <span className="text-[#0B2F5B]">Programs</span>
                </h3>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src={saGrowth} alt="Warm welcome from the BNC Global team" className="w-full max-w-[560px] h-auto object-contain rounded-2xl shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* TAXATION LAWS (TABS) */}
      <section className="w-full bg-[#1D67CD] py-16 md:py-24 flex justify-center text-white">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-14">
          <div className="text-center">
            <h2 className="text-[32px] md:text-[44px] font-display font-extrabold text-[#F5FFF7]">Taxation Laws in Saudi Arabia</h2>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 border-b border-white/10 pb-8">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`py-3 px-5 rounded-[10px] text-[14px] font-semibold transition-all border font-display flex items-center gap-2 ${
                  activeTab === idx
                    ? 'bg-white text-[#1D67CD] border-white shadow-md'
                    : 'bg-transparent text-white/90 border-white/25 hover:bg-white/10'
                }`}
              >
                {tab} <span aria-hidden>&#10606;</span>
              </button>
            ))}
          </div>

          <div className="animate-in fade-in duration-300">
            {/* Basic */}
            {activeTab === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {basics.map((b, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-3">
                    <h3 className="text-[22px] md:text-[25px] font-display font-bold text-white">{b.title}</h3>
                    <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">{b.body}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Residency Status */}
            {activeTab === 1 && (
              <div className="space-y-12">
                <h3 className="text-[24px] md:text-[28px] font-display font-bold text-white text-center max-w-[800px] mx-auto">
                  Residency status in Saudi Arabia can be broadly categorized into two main types
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-3">
                    <h4 className="text-[22px] md:text-[25px] font-display font-bold text-white">Saudi Citizens</h4>
                    <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">Saudi citizens are individuals who hold Saudi Arabian nationality. They have full rights and privileges in the country, including the right to live and work in Saudi Arabia without any time restrictions.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-3">
                    <h4 className="text-[22px] md:text-[25px] font-display font-bold text-white">Expatriates</h4>
                    <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">Expatriates, also known as non-Saudi residents or foreign residents, are individuals from other countries who come to Saudi Arabia for employment, business, or other purposes. Expatriates must obtain a valid residency permit (Iqama) to legally reside and work in the country.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {residencyDetails.map((d, i) => (
                    <div key={i} className="bg-[#00305B]/40 border border-white/10 rounded-2xl p-6 space-y-2">
                      <h4 className="text-[20px] md:text-[22px] font-display font-bold text-white">{d.title}</h4>
                      <p className="text-[15px] text-[#BFD9ED] leading-relaxed font-avenir">{d.body}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 max-w-[900px] mx-auto">
                  <p className="text-[16px] text-[#EAF3FF] leading-relaxed font-avenir">As of September 2021, Saudi Arabia does not levy personal income tax, making it an appealing destination for expatriates and individuals seeking to work and live in the country without the burden of individual income tax.</p>
                  <p className="text-[16px] text-[#EAF3FF] leading-relaxed font-avenir">However, other taxes such as VAT, corporate income tax, withholding tax, and excise tax apply in Saudi Arabia. The standard corporate income tax rate is 20%, and VAT is imposed at a flat rate of 5% on most goods and services.</p>
                </div>
              </div>
            )}

            {/* Types of Income */}
            {activeTab === 2 && (
              <div className="space-y-10">
                <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white text-center">Types of Income</h3>
                <div className="bg-white p-4 rounded-2xl flex justify-center">
                  <img src={saIncome} alt="Types of income in Saudi Arabia" className="max-w-full h-auto object-contain rounded-lg" />
                </div>
                <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir max-w-[900px] mx-auto text-center">
                  Other Income includes miscellaneous income sources that may include prizes, awards, lottery winnings, or any other income not specifically categorized under the above types.
                </p>
              </div>
            )}

            {/* Types of Tax */}
            {activeTab === 3 && (
              <div className="space-y-12">
                <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white text-center">Types of Tax in Saudi Arabia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {taxTypes.map((t, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2">
                      <h4 className="text-[18px] md:text-[20px] font-display font-bold text-white">{t.title}</h4>
                      <p className="text-[15px] text-[#BFD9ED] leading-relaxed font-avenir">{t.body}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-4 rounded-2xl flex justify-center"><img src={saTax1} alt="Types of tax details 1" className="max-w-full h-auto object-contain rounded-lg" /></div>
                  <div className="bg-white p-4 rounded-2xl flex justify-center"><img src={saTax2} alt="Types of tax details 2" className="max-w-full h-auto object-contain rounded-lg" /></div>
                </div>
              </div>
            )}

            {/* Types of VAT */}
            {activeTab === 4 && (
              <div className="space-y-10">
                <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white text-center">Types of VAT</h3>
                <div className="bg-white p-4 rounded-2xl flex justify-center max-w-[1000px] mx-auto">
                  <img src={saVat} alt="Types of VAT in Saudi Arabia" className="max-w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            )}

            {/* Connect with us */}
            {activeTab === 5 && (
              <div className="max-w-[820px] mx-auto text-center space-y-6 bg-white/5 border border-white/10 rounded-3xl p-10">
                <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white">Connect with us</h3>
                <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir">
                  Ready to expand and innovate in Saudi Arabia? Our specialists will help you navigate taxation, compliance, and market entry with confidence.
                </p>
                <Link to="/contact-8" className="inline-block px-8 py-3.5 rounded-full font-bold bg-[#A3D9F6] hover:bg-[#86c6e9] text-[#0B2F5B] shadow-md active:scale-98 transition-all text-[14px]">
                  Get in touch
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SPECIALIZED SERVICES */}
      <section className="w-full bg-[#0B2F5B] py-16 md:py-24 flex justify-center text-white">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-14">
          <div className="text-center space-y-8">
            <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#F5FFF7]">Our specialized services include:</h2>
            <div className="flex justify-center">
              <img src={saServicesIntro} alt="BNC Global specialized services" className="w-full max-w-[900px] h-auto object-contain rounded-2xl" />
            </div>
          </div>

          <div className="space-y-10">
            {services.map((s, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-[24px] md:text-[28px] font-display font-extrabold text-[#F5FFF7] text-center">{s.title}</h3>
                <div className="flex justify-center">
                  <img src={s.img} alt={s.title} className="w-full max-w-[820px] h-auto object-contain rounded-2xl" />
                </div>
                {s.extra && (
                  <div className="flex justify-center">
                    <img src={s.extra} alt={`${s.title} details`} className="w-full max-w-[780px] h-auto object-contain rounded-2xl" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM + CTA */}
      <section className="w-full bg-[#F5FFF7] py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-14">
          <div className="text-center space-y-8">
            <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#0B2F5B]">BNC Global&rsquo;s Team</h2>
            <div className="flex justify-center">
              <img src={saTeam} alt="BNC Global's team" className="w-full max-w-[820px] h-auto object-contain rounded-2xl shadow-sm" />
            </div>
          </div>

          <div className="bg-[#00305B] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 md:w-[70%]">
              <h3 className="text-[26px] md:text-[32px] font-display font-extrabold leading-tight">
                Partner with BNC Global in Saudi Arabia
              </h3>
              <p className="text-[16px] text-slate-300 font-avenir leading-relaxed">
                From accounting and risk consulting to ESG, cyber security, and company incorporation &mdash; let&rsquo;s build the next wave of innovation together.
              </p>
            </div>
            <Link to="/contact-8" className="px-8 py-3.5 rounded-full font-bold bg-[#A3D9F6] hover:bg-[#86c6e9] text-[#0B2F5B] shadow-md active:scale-98 transition-all inline-block text-[14px] whitespace-nowrap">
              Visit here
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
