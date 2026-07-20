import cfoHero from '../assets/cfo_hero.png'
import cfoChallenges from '../assets/cfo_challenges.png'
import cfoRisks from '../assets/cfo_risks.jpg'
import cfoValue from '../assets/cfo_value.png'
import corridorImg from '../assets/india_saudi_corridor.png'
import cfoInfographic1 from '../assets/cfo_infographic1.png'
import cfoInfographic2 from '../assets/cfo_infographic2.png'
import cfoInfographic3 from '../assets/cfo_infographic3.png'
import cfoInfographic4 from '../assets/cfo_infographic4.png'
import cfoInfographic5 from '../assets/cfo_infographic5.png'
import cfoNum20 from '../assets/cfo_num20.png'
import cfoNum21 from '../assets/cfo_num21.png'
import cfoNum22 from '../assets/cfo_num22.png'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

export default function VirtualCFO() {
  const subServices = [
    'Accounting Health Check',
    'Capital Budgeting',
    'Budgeting and Forecasting',
    'Business Valuation',
    'Corporate Restructuring',
    'Working Capital Management',
    'Direct and Indirect Tax Advisory',
    'Internal Controls (ICFR)',
    'Outsourced Bookkeeping & Payroll'
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      <SEO
        title="Virtual CFO Services & Financial Advisory"
        description="Boardroom-ready Virtual CFO services including capital budgeting, ICFR internal controls, tax advisory, and strategic financial management."
        canonical="/virtual-cfo"
      />
      
      {/* 1. Hero Section */}
      <section className="relative w-full bg-white py-12 md:py-16 border-b border-slate-100 min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[44px] font-display font-extrabold tracking-normal leading-tight text-left">
                <span className="text-[#1D67CD]">Virtual CFO</span> <span className="text-black">Services</span>
              </h1>
              <div className="space-y-4 text-black text-[20px] leading-[28px] font-medium font-avenir">
                <p>
                  We have a Pan-India network of experienced Virtual CFOs, providing strategic financial leadership without the cost of a full-time, in-house CFO.
                </p>
                <p>
                  Our Virtual CFO services support businesses — especially in early and growth stages — by addressing financial management, reporting frameworks, stat compliance, and strategic capital allocation.
                </p>
                <p>
                  Get expert financial guidance, better control, and data-driven decision-making — anywhere in India.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact-8"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-blue-600 shadow-md active:scale-98 transition-colors cursor-pointer font-sans"
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
                className="w-full max-w-[622px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Virtual CFO Services? */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[30px] font-display font-extrabold text-center tracking-normal">
              <span className="text-[#2E2E2E]">Why</span> <span className="text-[#1D67CD]">Virtual CFO</span> <span className="text-[#2E2E2E]">Services?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-white p-6 rounded-[5px] border-[1.6px] border-[#ACD6E8] text-center space-y-4 shadow-none">
              <div className="mx-auto w-[47px] h-[57px] flex items-center justify-center">
                <img src={cfoNum20} alt="20" className="w-full h-full object-contain" />
              </div>
              <p className="text-[#7F808A] text-sm leading-relaxed font-sans font-medium">
                Virtual CFO Services offer expert financial guidance during key business phases like growth, transition, and capital restructuring.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-6 rounded-[5px] border-[1.6px] border-[#ACD6E8] text-center space-y-4 shadow-none">
              <div className="mx-auto w-[47px] h-[57px] flex items-center justify-center">
                <img src={cfoNum21} alt="21" className="w-full h-full object-contain" />
              </div>
              <p className="text-[#7F808A] text-sm leading-relaxed font-sans font-medium">
                Hiring a full-time CFO can be costly for startups and SMEs. Virtual CFOs offer a cost-effective alternative to access top-tier financial expertise.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-6 rounded-[5px] border-[1.6px] border-[#ACD6E8] text-center space-y-4 shadow-none">
              <div className="mx-auto w-[47px] h-[57px] flex items-center justify-center">
                <img src={cfoNum22} alt="22" className="w-full h-full object-contain" />
              </div>
              <p className="text-[#7F808A] text-sm leading-relaxed font-sans font-medium">
                This enables small businesses to manage financial complexities efficiently and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Challenges Diagram (corresponds to Picture1.png on live site) */}
      <section className="py-12 bg-white flex justify-center border-b border-slate-100">
        <div className="max-w-[723px] w-full px-4">
          <img
            src={cfoChallenges}
            alt="CFO Challenges Diagram"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* 3. Common Organizational Challenges */}
      <section className="py-16 bg-[#1D67CD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[30px] font-display font-extrabold text-center tracking-normal leading-normal text-white">
              <span>Common Organizational Challenges in the Indian Environment</span> <span className="text-[#ACD6E8]">(with some exceptions)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto pt-6">
            {/* Box 1 */}
            <div className="bg-white p-5 rounded-[5px] border-[1.6px] border-[#ACD6E8] flex flex-col items-center justify-center text-center h-[138px] shadow-none">
              <p className="text-black text-[14px] font-semibold font-sans leading-snug">Early diversification causing resource strain</p>
            </div>
            {/* Box 2 */}
            <div className="bg-white p-5 rounded-[5px] border-[1.6px] border-[#ACD6E8] flex flex-col items-center justify-center text-center h-[138px] shadow-none">
              <p className="text-black text-[14px] font-semibold font-sans leading-snug">Over-reliance on debt</p>
            </div>
            {/* Box 3 */}
            <div className="bg-white p-5 rounded-[5px] border-[1.6px] border-[#ACD6E8] flex flex-col items-center justify-center text-center h-[138px] shadow-none">
              <p className="text-black text-[14px] font-semibold font-sans leading-snug">Misalignment with business goals</p>
            </div>
            {/* Box 4 */}
            <div className="bg-white p-5 rounded-[5px] border-[1.6px] border-[#ACD6E8] flex flex-col items-center justify-center text-center h-[138px] shadow-none">
              <p className="text-black text-[14px] font-semibold font-sans leading-snug">Low financial & legal awareness</p>
            </div>
            {/* Box 5 */}
            <div className="bg-white p-5 rounded-[5px] border-[1.6px] border-[#ACD6E8] flex flex-col items-center justify-center text-center h-[138px] shadow-none">
              <p className="text-black text-[14px] font-semibold font-sans leading-snug">Dependence on multiple consultants</p>
            </div>
          </div>

          <p className="text-white text-center text-[17px] font-semibold pt-6 max-w-3xl mx-auto font-avenir">
            Without Virtual CFO support, businesses face higher financial and strategic risks.
          </p>
        </div>
      </section>

      {/* 4. Impact of Absence of Virtual CFO */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* List left */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[30px] font-display font-extrabold tracking-normal">
                <span className="text-[#1D67CD]">Impact due to absence of a</span> <span className="text-black">Virtual CFO</span>
              </h2>
              <p className="text-black text-[17px] leading-relaxed font-medium font-avenir">
                Organizations without a CFO on their board or those needing support for the CFO office are susceptible to significant risks if they do not engage a Virtual CFO at the appropriate stage and moment.
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-[#1D67CD] text-[17px] font-semibold font-sans">
                <li>Missed business opportunities</li>
                <li>Weak control systems & inefficient processes</li>
                <li>Poor system transitions</li>
                <li>Wasted time and resources</li>
                <li>Loss of stakeholder confidence</li>
                <li>Resource shortages at critical stages</li>
                <li>Legal and tax risks</li>
              </ul>

              <p className="text-black text-[17px] font-bold font-avenir pt-2">
                Timely Virtual CFO support helps prevent these challenges.
              </p>
            </div>

            {/* Image right */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src={cfoRisks}
                alt="Business Presentation Scene"
                className="w-full max-w-[436px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Enhancing Value with a Virtual CFO */}
      <section className="py-16 bg-[#0B2F5B] border-b border-slate-100 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* List left */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[30px] font-display font-extrabold text-white tracking-normal">
                Enhancing Value with a Virtual CFO
              </h2>
              
              <ul className="list-disc pl-5 space-y-2 text-[#BFD9ED] text-[17px] font-medium font-avenir">
                <li>Hiring & retaining an experienced CFO is difficult for MSMEs</li>
                <li>Builds credibility, trust, and strong networks</li>
                <li>Acts as a mentor and strategic guide</li>
                <li>Ensures consistent performance and capability</li>
                <li>Helps identify and attract the right talent</li>
                <li>Prevents unstructured growth and future roadblocks</li>
                <li>Resolves organizational challenges with expertise</li>
                <li>Influences key operational decisions</li>
                <li>Provides hands-on execution and value delivery</li>
              </ul>
            </div>

            {/* Image right */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src={corridorImg}
                alt="India–Saudi Business Corridor"
                className="w-full max-w-[342px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6a. Fundamentals for effective Virtual CFO services */}
      <section className="py-16 bg-white border-b border-slate-100 text-center space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-[30px] font-serif font-normal text-black tracking-tight text-center">
            Fundamentals for effective Virtual CFO services
          </h2>
          <div className="flex justify-center">
            <img src={cfoInfographic1} alt="Fundamentals diagram" className="w-full max-w-[750px] h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* 6b. Virtual CFO Eco System */}
      <section className="py-16 bg-white border-b border-slate-100 text-center space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-[30px] font-serif font-normal text-black tracking-tight text-center">
            Virtual CFO Eco System
          </h2>
          <div className="flex justify-center">
            <img src={cfoInfographic2} alt="Ecosystem diagram" className="w-full max-w-[750px] h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* 6c. Execution by Virtual CFO Firm */}
      <section className="py-16 bg-white border-b border-slate-100 text-center space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-[30px] font-serif font-normal text-black tracking-tight text-center">
            Execution by Virtual CFO Firm
          </h2>
          <div className="flex justify-center">
            <img src={cfoInfographic3} alt="Execution diagram" className="w-full max-w-[750px] h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* 6d. Step-by-Step Methodology (No Heading) */}
      <section className="py-16 bg-white border-b border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <img src={cfoInfographic4} alt="Methodology steps" className="w-full max-w-[750px] h-auto object-contain" />
        </div>
      </section>

      {/* 6e. CFO Role Overview (No Heading) */}
      <section className="py-16 bg-white border-b border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <img src={cfoInfographic5} alt="CFO Services Overview" className="w-full max-w-[750px] h-auto object-contain" />
        </div>
      </section>

      {/* 7. Sub-Services Menu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#1D67CD] tracking-tight">
              Virtual CFO Capability Checklist
            </h2>
            <p className="text-slate-500 font-medium">Explore specific financial support models tailored for your enterprise growth.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {subServices.map((service, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-[#1D67CD] transition-all flex items-center justify-between group"
              >
                <span className="font-bold text-slate-800 text-sm font-sans">{service}</span>
                <Link to="/contact-8" className="text-[#1D67CD] group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
