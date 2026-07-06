import { useState } from 'react'
import { Link } from 'react-router-dom'

// Hero images
import ausHero1 from '../assets/aus_hero1.png'
import ausHero2 from '../assets/aus_hero2.png'

// Income images
import ausIncome1 from '../assets/aus_income1.png'
import ausIncome2 from '../assets/aus_income2.png'
import ausIncome3 from '../assets/aus_income3.png'
import ausIncome4 from '../assets/aus_income4.png'

// Residency images
import ausResidency1 from '../assets/aus_residency1.png'
import ausResidency2 from '../assets/aus_residency2.png'
import ausResidency3 from '../assets/aus_residency3.png'
import ausResidency4 from '../assets/aus_residency4.png'
import ausResidency5 from '../assets/aus_residency5.png'
import ausResidency6 from '../assets/aus_residency6.png'
import ausResidency7 from '../assets/aus_residency7.png'
import ausResidency8 from '../assets/aus_residency8.png'

// Dates & services images
import ausDatesBanner from '../assets/aus_dates_banner.jpg'
import ausDates1 from '../assets/aus_dates1.png'
import ausDates2 from '../assets/aus_dates2.png'
import ausDates3 from '../assets/aus_dates3.png'
import ausDates4 from '../assets/aus_dates4.png'
import ausDates5 from '../assets/aus_dates5.png'
import ausServices1 from '../assets/aus_services1.png'
import ausServices2 from '../assets/aus_services2.png'
import ausServices3 from '../assets/aus_services3.png'
import ausCta from '../assets/aus_cta.png'

export default function Australia() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    'Types of Income',
    'The income you must declare',
    'Residency for Tax Purposes',
    'Due Dates & Tax Rates',
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* HERO SECTION */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-100 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* Left Text */}
          <div className="w-full lg:w-[487px] space-y-6">
            <h1 className="text-[44px] md:text-[60px] font-display font-extrabold text-[#00305B] leading-[68px]">
              Outsourcing Services For AUSTRALIA
            </h1>
            <p className="text-[18px] text-slate-700 leading-relaxed font-avenir font-normal">
              Outsourcing services involves the practice of enlisting external companies or individuals to perform tasks or services that would typically be handled by in-house staff. These outsourced functions can encompass a wide range of activities, including customer service, IT support, accounting, and more.
            </p>
          </div>

          {/* Right Collage */}
          <div className="w-full lg:w-[633px] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] md:max-w-none md:w-[600px] h-[360px] md:h-[450px]">
              <img
                src={ausHero1}
                alt="Australia hero 1"
                className="absolute left-0 top-0 w-[65%] md:w-[350px] h-auto object-contain rounded-lg shadow-sm border border-slate-100"
              />
              <img
                src={ausHero2}
                alt="Australia hero 2"
                className="absolute right-0 bottom-0 w-[60%] md:w-[310px] h-auto object-contain rounded-lg shadow-md border border-slate-100 z-10"
              />
            </div>
          </div>

        </div>
      </section>

      {/* REGULATORY HUB SECTION (TABS) */}
      <section className="w-full bg-[#1D67CD] py-16 md:py-24 flex justify-center text-white border-b border-[#1552a8]">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-16">
          
          {/* Tab buttons grid */}
          <div className="flex flex-wrap justify-center gap-4 border-b border-white/10 pb-8">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-[260px] py-3 px-4 rounded-[10px] text-[15px] font-semibold transition-all border font-display ${
                  activeTab === idx
                    ? 'bg-white text-[#1D67CD] border-white shadow-md scale-102'
                    : 'bg-[#1D67CD] text-white/90 border-white/20 hover:bg-[#1552a8] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content state swapper */}
          <div className="animate-in fade-in duration-300">
            
            {/* Tab 0: Types of Income */}
            {activeTab === 0 && (
              <div className="space-y-16">
                <div className="text-center max-w-[800px] mx-auto space-y-4">
                  <h2 className="text-[40px] md:text-[60px] font-display font-extrabold text-white leading-tight">
                    Types of Income
                  </h2>
                </div>
                
                {/* Assessable Income */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="w-full lg:w-[500px] space-y-4">
                    <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white">
                      Assessable income
                    </h3>
                    <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir">
                      Assessable income refers to the income on which you are obligated to pay taxes if it exceeds the tax-free threshold. If you receive income in the form of cash, including cash cheques, you must declare this income when preparing and filing your tax return. In most cases, you can claim the tax-free threshold of $18,200 for one source of income earned during the income year.
                    </p>
                  </div>
                  <div className="w-full lg:w-[492px] shrink-0 bg-white p-4 rounded-xl flex justify-center">
                    <img src={ausIncome1} alt="Assessable Income" className="max-w-full h-auto object-contain rounded-lg" />
                  </div>
                </div>

                {/* Exploring Exempt Income */}
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
                  <div className="w-full lg:w-[500px] space-y-4">
                    <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white">
                      Exploring Exempt Income
                    </h3>
                    <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir">
                      Exempt income is income that is not subject to taxation, meaning it is tax-free. However, you may still need to report these amounts in your tax return for use in other tax calculations. Examples of exempt income can include certain government pensions, benefits, and allowances. If your sole source of income during an income year consists of exempt income, you are not required to pay any income tax on it.
                    </p>
                  </div>
                  <div className="w-full lg:w-[492px] shrink-0 bg-white p-4 rounded-xl flex justify-center">
                    <img src={ausIncome2} alt="Exempt Income" className="max-w-full h-auto object-contain rounded-lg" />
                  </div>
                </div>

                {/* Understanding Non-Exempt Income */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="w-full lg:w-[500px] space-y-4">
                    <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white">
                      Understanding Non-Exempt Income
                    </h3>
                    <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir">
                      Non-assessable non-exempt income refers to income amounts that are not required to be reported in your tax return. Non-assessable and non-exempt income can encompass various sources, including certain government grants, disaster relief payments, or specialized tax-free scheme distributions.
                    </p>
                  </div>
                  <div className="w-full lg:w-[492px] shrink-0 bg-white p-4 rounded-xl flex justify-center">
                    <img src={ausIncome3} alt="Non-Exempt Income" className="max-w-full h-auto object-contain rounded-lg" />
                  </div>
                </div>

                {/* Taxable Income */}
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
                  <div className="w-full lg:w-[500px] space-y-6">
                    <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white">
                      Taxable income
                    </h3>
                    <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir">
                      Taxable income is the portion of your income on which you are obligated to pay taxes. It is calculated as the remaining amount after deducting eligible expenses. These deductions reduce the overall assessable income subject to taxation.
                    </p>
                    <div className="bg-[#00305B] p-6 rounded-xl border border-white/10 text-center font-display font-bold text-white text-[16px] sm:text-[18px] leading-tight">
                      Taxable Income = Assessable Income - Allowable Deductions
                    </div>
                    <p className="text-[14px] text-[#BFD9ED]/80 leading-relaxed font-avenir">
                      To qualify for deductions, you must have incurred the expenses and not been reimbursed. Additionally, you typically need to provide evidence of these expenses. Deductions work by reducing the income amount upon which taxes are calculated, rather than directly reducing your tax liability.
                    </p>
                  </div>
                  <div className="w-full lg:w-[492px] shrink-0 bg-white p-4 rounded-xl flex justify-center">
                    <img src={ausIncome4} alt="Taxable Income" className="max-w-full h-auto object-contain rounded-lg" />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 1: The income you must declare */}
            {activeTab === 1 && (
              <div className="space-y-16">
                <div className="text-center space-y-4 max-w-[800px] mx-auto">
                  <h2 className="text-[40px] md:text-[60px] font-display font-extrabold text-white leading-tight">
                    Identifying Reportable Income
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    When preparing your tax return, it is essential to identify the types of income you must declare. This can include income from employment, government sources, and investments.
                  </p>
                </div>

                {/* Grid of the 4 tax info sheets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
                  <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-center">
                    <img src={ausResidency1} alt="Reportable Income details 1" className="max-w-full h-auto object-contain rounded-lg" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-center">
                    <img src={ausResidency2} alt="Reportable Income details 2" className="max-w-full h-auto object-contain rounded-lg" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-center">
                    <img src={ausResidency3} alt="Reportable Income details 3" className="max-w-full h-auto object-contain rounded-lg" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-center">
                    <img src={ausResidency4} alt="Reportable Income details 4" className="max-w-full h-auto object-contain rounded-lg" />
                  </div>
                </div>

                {/* Amounts not to declare */}
                <div className="bg-[#00305B]/30 p-8 rounded-3xl border border-white/10 max-w-[900px] mx-auto space-y-4">
                  <h3 className="text-[26px] md:text-[34px] font-display font-extrabold text-white text-center">
                    Amount That You Don't Need to Declare
                  </h3>
                  <p className="text-[17px] text-[#BFD9ED] text-center font-avenir leading-relaxed">
                    Some income amounts you earn or receive do not require a declaration as taxable income. These include certain government benefits, scholarships, and child support payments. Refer to ATO guidelines for full exclusion parameters.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Residency for Tax Purposes */}
            {activeTab === 2 && (
              <div className="space-y-16">
                <div className="text-center space-y-4 max-w-[800px] mx-auto">
                  <h2 className="text-[40px] md:text-[60px] font-display font-extrabold text-white leading-tight">
                    Residency for Taxation Purposes
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    Residency for tax purposes can diverge from your residency status for other reasons. It's essential to note that you may be a tax resident even if you aren't an Australian citizen or a permanent resident according to immigration regulations.
                  </p>
                  <p className="text-[20px] font-medium text-white/90 font-display">
                    As an individual, you will fall into one of the following categories:
                  </p>
                </div>

                {/* 4 Residency categories */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1100px] mx-auto">
                  {/* Category 1 */}
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-[24px] font-display font-bold text-white">Australian Resident for Tax Purposes</h3>
                      <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                        If you satisfy any of the residency tests, you are considered an Australian tax resident. This means you must declare your worldwide income, even if you've already paid taxes on it overseas. Typically, a foreign income tax offset is available to reduce your Australian tax liability on the same income.
                      </p>
                    </div>
                    <div className="flex justify-center bg-white p-4 rounded-xl">
                      <img src={ausResidency5} alt="Australian Resident" className="max-h-[220px] object-contain" />
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-[24px] font-display font-bold text-white">Foreign Residents</h3>
                      <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                        You are classified as a foreign resident if you fail to meet any of the residency tests. As a foreign resident, you do not have access to a tax-free threshold and are exempt from paying the Medicare levy. However, you are still required to report any income earned in Australia, including capital gains from taxable Australian property.
                      </p>
                    </div>
                    <div className="flex justify-center bg-white p-4 rounded-xl">
                      <img src={ausResidency6} alt="Foreign Residents" className="max-h-[220px] object-contain" />
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-[24px] font-display font-bold text-white">Temporary Residents</h3>
                      <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                        You will be a ‘temporary resident’ if you hold a temporary visa and neither you nor your spouse is an Australian resident within the meaning of the Social Security Act 1991 (that is, not an Australian citizen or permanent resident).
                      </p>
                    </div>
                    <div className="flex justify-center bg-white p-4 rounded-xl">
                      <img src={ausResidency7} alt="Temporary Residents" className="max-h-[220px] object-contain" />
                    </div>
                  </div>

                  {/* Category 4 */}
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-[24px] font-display font-bold text-white">Dual residents</h3>
                      <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                        You are considered to be a dual resident if you are a resident of Australia for domestic income tax law purposes, and a resident of another country for that other country’s tax laws. Where Australia has a double tax treaty with a foreign country, a treaty tie-breaker test would usually determine which country has the right to tax.
                      </p>
                    </div>
                    <div className="flex justify-center bg-white p-4 rounded-xl">
                      <img src={ausResidency8} alt="Dual residents" className="max-h-[220px] object-contain" />
                    </div>
                  </div>
                </div>

                {/* Child tax rules */}
                <div className="bg-[#00305B]/30 p-8 rounded-3xl border border-white/10 max-w-[900px] mx-auto space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-[28px] font-display font-extrabold text-white">
                      Tax Considerations for Children
                    </h3>
                    <p className="text-[16px] text-[#BFD9ED] font-avenir">
                      If you have children under the age of 18 who receive unearned income, such as investment income, it's important to understand the special tax rates that apply to them.
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <h4 className="text-[20px] font-bold text-white font-avenir">Savings accounts and shares</h4>
                    <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                      If your child is under 18 years old and they earn income in their savings account, you may need to consider who declares the interest. If they are under 18 and earn income from shares, you may need to lodge a tax return on their behalf. Income from a savings account is treated differently from income from children's shares investments.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Due Dates & Tax Rates */}
            {activeTab === 3 && (
              <div className="space-y-16">
                
                {/* Large Header Banner */}
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-center items-center py-16 px-6 bg-slate-900/50">
                  <img
                    src={ausDatesBanner}
                    alt="Australian scenery"
                    className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
                  />
                  <div className="relative text-center space-y-4 z-10">
                    <h2 className="text-[44px] md:text-[75px] font-display font-extrabold text-white leading-tight">
                      Australian
                    </h2>
                    <p className="text-[24px] md:text-[50px] font-display font-extrabold text-[#A3D9F6]">
                      Due Dates & Tax Rates
                    </p>
                  </div>
                </div>

                {/* Due Dates */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-white/10 pb-12">
                  <div className="w-full lg:w-[500px] space-y-4">
                    <h3 className="text-[30px] md:text-[60px] font-display font-extrabold text-white leading-tight">Due Dates</h3>
                    <p className="text-[17px] text-[#BFD9ED] font-avenir">
                      Tax return lodgement timelines for individuals, trusts, and corporate structures operating in Australia. Ensure to lodge before deadlines to avoid ATO failure to lodge penalties.
                    </p>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 bg-white p-4 rounded-xl">
                    <img src={ausDates1} alt="Due Dates Timeline" className="w-full h-auto object-contain" />
                  </div>
                </div>

                {/* Individual Tax Rates */}
                <div className="space-y-8 border-b border-white/10 pb-12">
                  <div className="text-center space-y-4 max-w-[800px] mx-auto">
                    <h3 className="text-[30px] md:text-[60px] font-display font-extrabold text-white">Individual Tax Rates</h3>
                    <p className="text-[18px] text-[#BFD9ED] font-avenir">
                      Tax rates are applicable as per the residential status of individuals. They are defined as per the ATO rules.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Residents */}
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between gap-6">
                      <div className="space-y-4">
                        <h4 className="text-[22px] font-bold text-white text-center font-avenir">For residents</h4>
                        <div className="bg-white p-2 rounded-xl flex justify-center">
                          <img src={ausDates2} alt="Resident tax rates table" className="max-h-[280px] object-contain" />
                        </div>
                        <p className="text-[14px] text-[#BFD9ED] font-avenir leading-relaxed">
                          *Note: The above rates do not include the Medicare levy of 2%.
                        </p>
                      </div>
                      <div className="bg-[#00305B]/30 p-4 rounded-xl border border-white/5 space-y-1 text-[12px] text-[#BFD9ED] font-mono">
                        <span className="font-bold text-white block">Example: Tax on A$ 190,000</span>
                        <span>= (190000-180000) * 45% + $51,667</span>
                        <span>= $4,500 + $51,667 = $56,167 + 2% Medicare Levy</span>
                        <span className="text-white font-bold block pt-1">= A$ 57,290</span>
                      </div>
                    </div>

                    {/* Foreign Residents */}
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between gap-6">
                      <div className="space-y-4">
                        <h4 className="text-[22px] font-bold text-white text-center font-avenir">Foreign residents</h4>
                        <div className="bg-white p-2 rounded-xl flex justify-center">
                          <img src={ausDates3} alt="Foreign resident tax rates table" className="max-h-[280px] object-contain" />
                        </div>
                      </div>
                      <p className="text-[14px] text-[#BFD9ED] font-avenir leading-relaxed">
                        These rates apply to individuals who are foreign residents for tax purposes. No tax-free threshold is available.
                      </p>
                    </div>

                    {/* Working Holiday Makers */}
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between gap-6">
                      <div className="space-y-4">
                        <h4 className="text-[22px] font-bold text-white text-center font-avenir">Working Holiday</h4>
                        <div className="bg-white p-2 rounded-xl flex justify-center">
                          <img src={ausDates4} alt="Working holiday maker tax rates table" className="max-h-[280px] object-contain" />
                        </div>
                      </div>
                      <p className="text-[14px] text-[#BFD9ED] font-avenir leading-relaxed">
                        The rates apply to a work holiday maker if you are a foreign or Australian resident not from a non-discriminatory article (NDA ) country. (Visa subclass of 417 or 462).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bookkeeping Services */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-white/10 pb-12">
                  <div className="w-full lg:w-[500px] space-y-4">
                    <h3 className="text-[30px] md:text-[60px] font-display font-extrabold text-white leading-tight">Bookkeeping</h3>
                    <p className="text-[17px] text-[#BFD9ED] font-avenir leading-relaxed">
                      Onboarding at a cost of 30 A$. Our bookkeeping services include bank reconciliation, credit card reconciliation, and monthly financial statements. We offer monthly fixed pricing based on transaction volume.
                    </p>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 bg-white p-4 rounded-xl">
                    <img src={ausDates5} alt="Bookkeeping pricing details" className="w-full h-auto object-contain" />
                  </div>
                </div>

                {/* Income Tax Return Filing & Submission */}
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-[30px] md:text-[60px] font-display font-extrabold text-white leading-tight">
                      Income Tax Return Filing & Submission
                    </h3>
                    <p className="text-[18px] text-[#BFD9ED] font-avenir">
                      Streamlined filing processes designed to assure exact compliance with ATO rules.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-4 rounded-xl flex items-center justify-center shadow-sm">
                      <img src={ausServices1} alt="Filing step 1" className="max-h-[300px] object-contain" />
                    </div>
                    <div className="bg-white p-4 rounded-xl flex items-center justify-center shadow-sm">
                      <img src={ausServices2} alt="Filing step 2" className="max-h-[300px] object-contain" />
                    </div>
                    <div className="bg-white p-4 rounded-xl flex items-center justify-center shadow-sm">
                      <img src={ausServices3} alt="Filing step 3" className="max-h-[300px] object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* FOUNDERS & QUESTIONNAIRE SECTION */}
      <section className="w-full bg-[#F5FFF7] py-16 md:py-24 border-b border-slate-100 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-20">
          
          {/* Founders quote & Mission/Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Founders quote card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-[28px] font-display font-extrabold text-[#00305B]">
                Stay connected for more information
              </h3>
              <p className="text-[18px] text-slate-700 leading-relaxed font-avenir font-normal italic">
                "We have a robust team to ensure smooth transition of all kinds of projects from their initiation to completion. Moreover, at BnC Global, we have incorporated best practices for accounting & tax preparation, assuring information Security and Confidentiality Assurance to all our clients."
              </p>
              <div className="border-t border-slate-100 pt-4">
                <span className="font-bold text-[#00305B] block font-display">Our Founders</span>
              </div>
            </div>

            {/* Mission & Vision stack */}
            <div className="space-y-8 lg:pt-4">
              <div className="space-y-2">
                <h4 className="text-[22px] font-bold text-[#00305B] font-display">Our Mission:</h4>
                <p className="text-[17px] text-slate-700 leading-relaxed font-avenir">
                  To enable organizations to improve their fundamental performance, reinvent their business, and lead their people through transformational change.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[22px] font-bold text-[#00305B] font-display">Our Vision:</h4>
                <p className="text-[17px] text-slate-700 leading-relaxed font-avenir">
                  Our Vision is to solve your problems with our innovative solutions as well as help you implement the solutions and train the people.
                </p>
              </div>
            </div>
          </div>

          {/* Questionnaire CTA */}
          <div className="bg-[#00305B] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
            <div className="space-y-6 z-10 md:w-[60%]">
              <h3 className="text-[28px] md:text-[34px] font-display font-extrabold leading-tight">
                Give us an opportunity to assist you by filling the questionnaire
              </h3>
              <p className="text-[16px] text-slate-300 font-avenir leading-relaxed">
                Gain a first-hand understanding on how outsourcing can help you by signing up for one of BnC Global's Free Trial Programs. Our sales executives will get in touch with you immediately.
              </p>
              <div>
                <Link
                  to="/contact-8"
                  className="px-8 py-3.5 rounded-full font-bold bg-[#A3D9F6] hover:bg-[#86c6e9] text-black shadow-md active:scale-98 transition-all inline-block cursor-pointer text-[14px]"
                >
                  Visit here
                </Link>
              </div>
            </div>

            <div className="w-[180px] md:w-[220px] shrink-0 flex justify-center z-10">
              <img
                src={ausCta}
                alt="Questionnaire QR or graphic"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
