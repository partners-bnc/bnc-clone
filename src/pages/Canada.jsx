import { useState } from 'react'
import { Link } from 'react-router-dom'

// Hero images
import canHero1 from '../assets/can_hero1.jpg'
import canHero2 from '../assets/can_hero2.png'

// Tab 0 & 1 & 2 & 3 images
import canBasics1 from '../assets/can_basics1.png'
import canBasics2 from '../assets/can_basics2.png'
import canReasons1 from '../assets/can_reasons1.png'
import canSin1 from '../assets/can_sin1.png'
import canAssist1 from '../assets/can_assist1.png'

// Tab 4 & 5 & 6 & 7 images
import canPayroll1 from '../assets/can_payroll1.png'
import canPayroll2 from '../assets/can_payroll2.png'
import canEmployment1 from '../assets/can_employment1.png'
import canEmployment2 from '../assets/can_employment2.png'
import canResidency1 from '../assets/can_residency1.png'
import canResidency2 from '../assets/can_residency2.png'

// Tab 8 & 9 & 10 images
import canDatesBanner from '../assets/can_dates_banner.jpg'
import canDates1 from '../assets/can_dates1.png'
import canException1 from '../assets/can_exception1.png'
import canPricing1 from '../assets/can_pricing1.png'
import canPricing2 from '../assets/can_pricing2.png'
import canPricing3 from '../assets/can_pricing3.png'
import canPricing4 from '../assets/can_pricing4.png'
import canPricing5 from '../assets/can_pricing5.png'
import canPricing6 from '../assets/can_pricing6.png'

// Bottom CTA image
import canCta from '../assets/can_cta.png'

export default function Canada() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    'Basics',
    'Reasons tile a return',
    'Social Insurance Number',
    'Whom do we assist?',
    'Canadian Payroll System',
    'Amounts related to employment',
    'Employment status of the worker',
    'Residential Ties in Canada',
    'Due Dates for filing of return',
    'Exception to the due date',
    'Pricing',
    'Connect with us',
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* HERO SECTION */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-100 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* Left Text */}
          <div className="w-full lg:w-[487px] space-y-6">
            <h1 className="text-[44px] md:text-[60px] font-display font-extrabold text-[#00305B] leading-[68px]">
              Outsourcing Services for Canada
            </h1>
            <p className="text-[18px] text-slate-700 leading-relaxed font-avenir font-normal">
              Outsourcing services refer to the practice of hiring external companies or individuals to perform tasks or services that would otherwise be handled by in-house staff. This can include functions such as customer service, IT support, accounting, and many more.
            </p>
          </div>

          {/* Right Collage */}
          <div className="w-full lg:w-[633px] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] md:max-w-none md:w-[600px] h-[360px] md:h-[450px]">
              <img
                src={canHero1}
                alt="Canada hero 1"
                className="absolute left-0 top-0 w-[55%] md:w-[306px] h-auto object-contain rounded-lg shadow-sm border border-slate-100"
              />
              <img
                src={canHero2}
                alt="Canada hero 2"
                className="absolute right-0 bottom-0 w-[70%] md:w-[439px] h-auto object-contain rounded-lg shadow-md border border-slate-100 z-10"
              />
            </div>
          </div>

        </div>
      </section>

      {/* REGULATORY HUB SECTION (TABS) */}
      <section className="w-full bg-[#1D67CD] py-16 md:py-24 flex justify-center text-white border-b border-[#1552a8]">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-16">
          
          {/* Tab buttons grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-b border-white/10 pb-8">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`py-3 px-4 rounded-[10px] text-[14px] font-semibold transition-all border font-display ${
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
            
            {/* Tab 0: Basics */}
            {activeTab === 0 && (
              <div className="space-y-16">
                <div className="text-center max-w-[800px] mx-auto space-y-4">
                  <h2 className="text-[36px] md:text-[50px] font-display font-extrabold text-white leading-tight">
                    Understanding the Basics of the Canadian Tax System
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    In the realm of taxation, Canada operates under a two-tier system that encompasses:
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-b border-white/10 pb-12">
                  {/* Left block */}
                  <div className="space-y-6">
                    <h3 className="text-[26px] font-sans text-white">Value Added Tax(VAT)</h3>
                    <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir">
                      Referred to as Goods and Services Tax (GST), VAT is administered by the federal government. It is applied to various goods and services.
                    </p>
                    <div className="bg-white p-4 rounded-xl flex justify-center shadow-sm">
                      <img src={canBasics1} alt="VAT Details" className="max-h-[300px] object-contain rounded-lg" />
                    </div>
                  </div>
                  {/* Right block */}
                  <div className="space-y-6">
                    <h3 className="text-[26px] font-sans text-white">Provincial Sales Tax(PST)</h3>
                    <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir">
                      PST, on the other hand, is imposed by provincial governments. The rates of provincial sales tax can differ from one province to another and may be calculated based on the value of goods and services either before or after the federal tax assessment.
                    </p>
                    <div className="bg-white p-4 rounded-xl flex justify-center shadow-sm">
                      <img src={canBasics2} alt="PST Details" className="max-h-[300px] object-contain rounded-lg" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#00305B]/30 p-8 rounded-3xl border border-white/10 max-w-[900px] mx-auto space-y-6">
                  <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                    Typically, the seller of goods and services is responsible for remitting both federal and provincial taxes to the relevant tax authorities. However, it is also acceptable for the seller to remit only the federal tax portion, while the purchaser assumes the responsibility of remitting the provincial tax, which is commonly referred to as a self-assessment tax.
                  </p>
                  <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                    <strong className="text-white font-display">In cases where individuals reside outside of Quebec</strong>, they are required to file a single tax return that encompasses both provincial and federal taxes. Conversely, individuals residing in Quebec must file two separate returns—one for federal taxes and another for provincial taxes.
                  </p>
                  <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                    It is essential to bear in mind that the personal income tax structure in Canada is progressive. This means that the tax rate escalates with an individual's income level. Moreover, both federal and provincial governments offer a multitude of tax credits and deductions to assist individuals in minimizing their overall tax liabilities.
                  </p>
                  <p className="text-[16px] text-[#BFD9ED]/90 leading-relaxed font-avenir">
                    When it comes to filing personal income tax returns, Canadians have the option of utilizing traditional paper forms or embracing the convenience of electronic filing through various methods, such as dedicated tax preparation software, professional tax services, or the Canada Revenue Agency's (CRA) online platforms. Following the submission of your return, the CRA will assess your tax liability and issue a Notice of Assessment, which provides a comprehensive breakdown of the amount owed or any eligible refund.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 1: Reasons tile a return */}
            {activeTab === 1 && (
              <div className="space-y-16">
                <div className="text-center space-y-4 max-w-[800px] mx-auto">
                  <h2 className="text-[40px] md:text-[50px] font-display font-extrabold text-white leading-tight">
                    Reasons tile a return
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    Check if you meet any of the mandatory filing criteria specified under CRA tax regulations.
                  </p>
                </div>

                <div className="w-full max-w-[900px] mx-auto bg-white p-6 rounded-2xl shadow-sm flex justify-center">
                  <img src={canReasons1} alt="Filing Reasons Details" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            )}

            {/* Tab 2: Social Insurance Number */}
            {activeTab === 2 && (
              <div className="space-y-16">
                <div className="text-center space-y-4 max-w-[800px] mx-auto">
                  <h2 className="text-[40px] md:text-[50px] font-display font-extrabold text-white leading-tight">
                    Get a Social Insurance Number (SIN)
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    A SIN is a 9-digit number that is personal, confidential, and unique to you.
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-white/10 pb-12">
                  <div className="w-full lg:w-[500px] space-y-6">
                    <h3 className="text-[28px] font-display font-bold text-white">You need a SIN to:</h3>
                    <ul className="list-disc list-inside text-[#BFD9ED] font-avenir space-y-2 text-[17px]">
                      <li>Work in Canada</li>
                      <li>File taxes and claim benefits</li>
                      <li>Access government support programs</li>
                    </ul>
                    <div className="bg-[#00305B] p-4 rounded-xl border border-white/10 text-center font-display font-bold text-white text-[16px]">
                      Go to Service Canada to apply for a SIN
                    </div>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 bg-white p-4 rounded-xl">
                    <img src={canSin1} alt="SIN Details" className="w-full h-auto object-contain" />
                  </div>
                </div>

                <div className="bg-[#00305B]/30 p-8 rounded-3xl border border-white/10 max-w-[900px] mx-auto space-y-4">
                  <h3 className="text-[24px] font-bold text-white font-display">What to do if you can't get a SIN</h3>
                  <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir">
                    If Service Canada is unable to give you a permanent or temporary SIN, the CRA may give you a temporary tax number (TTN) you may use to get benefits and credit.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Whom do we assist? */}
            {activeTab === 3 && (
              <div className="space-y-16">
                <div className="text-center space-y-4 max-w-[800px] mx-auto">
                  <h2 className="text-[40px] md:text-[50px] font-display font-extrabold text-white leading-tight">
                    Whom do we assist?
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    Our Canada tax advisory and compliance desk supports various residency categories:
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 font-avenir text-[17px] text-[#BFD9ED]">
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-[20px]">1. You live in Canada permanently</h4>
                      <p>Full support for Canadian citizens and permanent residents filing annual returns.</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-[20px]">2. You live in Canada temporarily</h4>
                      <p>Support for student visa, work permit, and temporary visa holders.</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-[20px]">3. You leave Canada temporarily or permanently</h4>
                      <p>Deemed residents and exit-tax filings for emigrants.</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-[20px]">4. Newcomers to Canada</h4>
                      <p>First-year resident status filing, setting up residential ties timelines.</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl flex justify-center">
                    <img src={canAssist1} alt="Clients We Assist" className="w-full h-auto object-contain rounded-lg" />
                  </div>
                </div>

                <div className="bg-[#00305B]/30 p-6 rounded-2xl border border-white/10 max-w-[800px] mx-auto text-center text-[#BFD9ED] font-avenir text-[16px]">
                  The Canada Revenue Agency (CRA) considers you a newcomer to Canada for the first year you are a resident of Canada. You become a resident of Canada for income tax purposes when you have enough residential ties.
                </div>
              </div>
            )}

            {/* Tab 4: Canadian Payroll System */}
            {activeTab === 4 && (
              <div className="space-y-16">
                <div className="text-center space-y-4 max-w-[800px] mx-auto">
                  <h2 className="text-[40px] md:text-[50px] font-display font-extrabold text-white leading-tight">
                    Canadian Payroll System
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    A payroll account is an account number assigned to either an employer, a trustee, or a payer of other amounts related to employment to identify themselves when dealing with the CRA.
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-white/10 pb-12">
                  <div className="w-full lg:w-[500px] space-y-6">
                    <h3 className="text-[24px] font-display font-extrabold text-white">15-Character Payroll Number Structure:</h3>
                    <div className="space-y-4 font-avenir text-[16px] text-[#BFD9ED]">
                      <div>
                        <strong className="text-white font-bold font-sans block text-[18px]">A. Nine-digit BN</strong>
                        <span>Unique federal government numbering system identifying your business.</span>
                      </div>
                      <div>
                        <strong className="text-white font-bold font-sans block text-[18px]">B. Two-letter RP code</strong>
                        <span>Program code representing payroll program ("RP").</span>
                      </div>
                      <div>
                        <strong className="text-white font-bold font-sans block text-[18px]">C. Four-digit reference</strong>
                        <span>Reference number identifying each account program details.</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 bg-white p-4 rounded-xl">
                    <img src={canPayroll1} alt="Payroll BN Code details" className="w-full h-auto object-contain" />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
                  <div className="w-full lg:w-[500px] space-y-4">
                    <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir">
                      Depending on the type of business you have, you may need to register other types of program accounts or open a separate payroll account. The nine-digit business number will not change, but other letters or reference numbers will be added to the BN.
                    </p>
                    <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir">
                      A company requires a GST/HST, an import/export, and two payroll accounts.
                    </p>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 bg-white p-4 rounded-xl">
                    <img src={canPayroll2} alt="Payroll Accounts setup details" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 5: Amounts related to employment */}
            {activeTab === 5 && (
              <div className="space-y-16">
                <div className="text-center space-y-4 max-w-[800px] mx-auto">
                  <h2 className="text-[40px] md:text-[50px] font-display font-extrabold text-white leading-tight">
                    Amounts related to employment
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    You may need to register for a payroll account if you pay salaries, wages, bonuses, or taxable benefits.
                  </p>
                </div>

                <div className="w-full max-w-[900px] mx-auto bg-white p-6 rounded-2xl shadow-sm flex justify-center">
                  <img src={canEmployment1} alt="Employment Amounts Rules" className="w-full h-auto object-contain rounded-lg" />
                </div>
              </div>
            )}

            {/* Tab 6: Employment status of the worker */}
            {activeTab === 6 && (
              <div className="space-y-16">
                <div className="text-center space-y-4 max-w-[800px] mx-auto">
                  <h2 className="text-[40px] md:text-[50px] font-display font-extrabold text-white leading-tight">
                    Employment status of the worker
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    Determine if you are an employer, a trustee or a payer of other amounts related to employment.
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="w-full lg:w-[500px] space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-[24px] font-display font-extrabold text-white">Employer</h3>
                      <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                        The CRA generally considers you to be an employer if you pay salaries, wages, bonuses, or provide taxable benefits. An individual is an employee if the worker and the payer have an employer-employee relationship (contract of service).
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[24px] font-display font-extrabold text-white">Trustee</h3>
                      <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                        Employment by a trustee in bankruptcy or other trustees.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[24px] font-display font-extrabold text-white">Payer of other amounts</h3>
                      <p className="text-[16px] text-[#BFD9ED] leading-relaxed font-avenir">
                        An executor, liquidator, administrator, or director who pays pensions, lump-sums, self-employed commissions, annuities, retiring allowances, research grants, or death benefits.
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 bg-white p-4 rounded-xl">
                    <img src={canEmployment2} alt="Worker Status Guidelines" className="w-full h-auto object-contain" />
                  </div>
                </div>

                <div className="bg-[#00305B]/30 p-8 rounded-3xl border border-white/10 max-w-[900px] mx-auto space-y-4 font-avenir text-[16px] text-[#BFD9ED]">
                  <h4 className="text-white font-bold font-display text-[18px]">What if you do not know the employment status of the worker?</h4>
                  <p>
                    If you or a person working for you is not sure of the worker's employment status, either one of you can request a CPP/EI ruling to determine the status and whether the employment is pensionable, insurable, or both.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                    <div>
                      <strong className="text-white font-bold block mb-1">Payer Request</strong>
                      <span>Payer can ask for a ruling if they are not sure whether they should deduct CPP contributions or EI premiums.</span>
                    </div>
                    <div>
                      <strong className="text-white font-bold block mb-1">Worker Request</strong>
                      <span>A worker can ask whether CPP contributions or EI premiums should be deducted from their pay.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 7: Residential Ties in Canada */}
            {activeTab === 7 && (
              <div className="space-y-16">
                <div className="text-center space-y-4 max-w-[800px] mx-auto">
                  <h2 className="text-[40px] md:text-[50px] font-display font-extrabold text-white leading-tight">
                    Residential Ties in Canada
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    CRA residential ties evaluations determine tax resident status.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
                  <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-center">
                    <img src={canResidency1} alt="Residential Ties sheet 1" className="w-full h-auto object-contain rounded-lg" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-center">
                    <img src={canResidency2} alt="Residential Ties sheet 2" className="w-full h-auto object-contain rounded-lg" />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 8: Due Dates for filing of return */}
            {activeTab === 8 && (
              <div className="space-y-16">
                
                {/* Large Header Banner */}
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-center items-center py-16 px-6 bg-slate-900/50">
                  <img
                    src={canDatesBanner}
                    alt="Canadian scenery"
                    className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
                  />
                  <div className="relative text-center space-y-4 z-10">
                    <h2 className="text-[44px] md:text-[75px] font-display font-extrabold text-white leading-tight">
                      Canadian
                    </h2>
                    <p className="text-[24px] md:text-[50px] font-display font-extrabold text-[#A3D9F6]">
                      Due Dates
                    </p>
                  </div>
                </div>

                {/* Due Dates */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pb-12">
                  <div className="w-full lg:w-[500px] space-y-4">
                    <h3 className="text-[30px] md:text-[60px] font-display font-extrabold text-white leading-tight">Due Dates</h3>
                    <p className="text-[17px] text-[#BFD9ED] font-avenir">
                      Tax return lodgement timelines for individuals, self-employed workers, and corporations.
                    </p>
                    <p className="text-[14px] text-[#BFD9ED]/80 italic">
                      Note: The return for Deceased person shall be at a varied due date wrt guide T4011.
                    </p>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 bg-white p-4 rounded-xl">
                    <img src={canDates1} alt="Due Dates Timeline" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 9: Exception to the due date */}
            {activeTab === 9 && (
              <div className="space-y-16">
                <div className="text-center space-y-4 max-w-[800px] mx-auto">
                  <h2 className="text-[40px] md:text-[50px] font-display font-extrabold text-white leading-tight">
                    Exception to the due date
                  </h2>
                  <p className="text-[18px] text-[#BFD9ED] leading-relaxed font-avenir">
                    Late payment rules and exception handling by the CRA.
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="w-full lg:w-[500px] space-y-4 text-[17px] font-avenir text-[#BFD9ED] leading-relaxed">
                    <p>
                      When a due date falls on a Saturday, Sunday, or public holiday recognized by the CRA, your return is considered on time if the CRA receives it, or if it is postmarked, on or before the next business day.
                    </p>
                    <p>
                      Your payment is considered on time if it is received on the first business day after the due date.
                    </p>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 bg-white p-4 rounded-xl">
                    <img src={canException1} alt="Exception Details" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 10: Pricing */}
            {activeTab === 10 && (
              <div className="space-y-20">
                
                {/* Bookkeeping Services */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-white/10 pb-12">
                  <div className="w-full lg:w-[500px] space-y-4">
                    <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white">Bookkeeping Services</h3>
                    <p className="text-[17px] text-[#BFD9ED] font-avenir leading-relaxed">
                      Onboarding at a cost of 26 CAD. Our bookkeeping services include bank reconciliation, credit card reconciliation, and monthly financial statements. We offer monthly fixed pricing based on transaction volume.
                    </p>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 bg-white p-4 rounded-xl">
                    <img src={canPricing1} alt="Bookkeeping pricing details" className="w-full h-auto object-contain" />
                  </div>
                </div>

                {/* Income Tax Preparation */}
                <div className="space-y-8 border-b border-white/10 pb-12">
                  <div className="text-center space-y-2">
                    <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white">Income Tax Preparation</h3>
                    <p className="text-[17px] text-[#BFD9ED] font-avenir">
                      Pricing for Income Tax preparation is tabulated below wrt types of returns.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-center">
                      <img src={canPricing2} alt="Tax Prep pricing table 1" className="w-full h-auto object-contain" />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-center">
                      <img src={canPricing3} alt="Tax Prep pricing table 2" className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </div>

                {/* HST Filing */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-white/10 pb-12">
                  <div className="w-full lg:w-[500px] space-y-4">
                    <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white">HST Filing Services</h3>
                    <p className="text-[17px] text-[#BFD9ED] font-avenir leading-relaxed">
                      Pricing based on business turnover for HST filing and submission to the CRA.
                    </p>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 bg-white p-4 rounded-xl">
                    <img src={canPricing4} alt="HST pricing table" className="w-full h-auto object-contain" />
                  </div>
                </div>

                {/* Payroll Preparation Services */}
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 pb-12">
                  <div className="w-full lg:w-[500px] space-y-6">
                    <h3 className="text-[28px] md:text-[34px] font-display font-extrabold text-white">Payroll Preparation Services</h3>
                    <p className="text-[17px] text-[#BFD9ED] font-avenir leading-relaxed">
                      Detailed payroll pricing structure is tabulated below. Please take note of the following parameters:
                    </p>
                    <ul className="list-decimal list-inside text-[#BFD9ED] font-avenir space-y-2 text-[15px] leading-relaxed">
                      <li>Worked on software like Ceridian, Easy Pay, Can Pay.</li>
                      <li>Payroll set-up fee - 200 CAD considering payroll procedure at client end (varies with bulk work).</li>
                      <li>Quotes do not include software subscriptions and other payroll expenses.</li>
                      <li>ROE fees are excluded in the given pricing (range 13 CAD - 70 CAD per employee).</li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-[500px] shrink-0 grid grid-cols-1 gap-6">
                    <div className="bg-white p-4 rounded-xl">
                      <img src={canPricing5} alt="Payroll pricing table 1" className="w-full h-auto object-contain" />
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <img src={canPricing6} alt="Payroll pricing table 2" className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 11: Connect with us */}
            {activeTab === 11 && (
              <div className="space-y-8 text-center max-w-[600px] mx-auto">
                <h2 className="text-[40px] md:text-[50px] font-display font-extrabold text-white leading-tight">
                  Connect with us
                </h2>
                <p className="text-[18px] text-[#BFD9ED] font-avenir leading-relaxed">
                  Our professional Canada tax compliance desk is ready to assist you. 
                </p>
                <div>
                  <Link
                    to="/contact-8"
                    className="px-8 py-3.5 rounded-full font-bold bg-[#A3D9F6] text-black shadow-md hover:bg-[#86c6e9] transition-all inline-block cursor-pointer font-display text-[15px]"
                  >
                    Contact BNC Global
                  </Link>
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
                src={canCta}
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
