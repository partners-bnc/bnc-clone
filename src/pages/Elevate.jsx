import { Link } from 'react-router-dom'
import elevateHero from '../assets/elevate_hero.png'
import elevatePillar3 from '../assets/elevate_pillar3.png'
import elevateFormat from '../assets/elevate_format.png'
import elevateAdvantage from '../assets/elevate_advantage.png'

// Who We Serve Icons
import serveIcon1 from '../assets/serve_icon1.png'
import serveIcon2 from '../assets/serve_icon2.png'
import serveIcon3 from '../assets/serve_icon3.png'
import serveIcon4 from '../assets/serve_icon4.png'
import serveIcon5 from '../assets/serve_icon5.png'

// All Programs Include Icons
import includeIcon1 from '../assets/include_icon1.png'
import includeIcon2 from '../assets/include_icon2.png'
import includeIcon3 from '../assets/include_icon3.png'
import includeIcon4 from '../assets/include_icon4.png'
import includeLarge from '../assets/include_large.png'

export default function Elevate() {
  return (
    <div className="bg-[#F5FFF7] text-slate-800 antialiased font-sans">
      
      {/* SECTION 0: Hero Section */}
      <section className="w-full min-h-[546px] bg-white flex justify-center items-center py-12 md:py-0 border-b border-slate-100">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Text Column */}
          <div className="w-full lg:w-[600px] flex flex-col justify-center space-y-6">
            <h1 className="text-[44px] font-display font-extrabold text-[#1D67CD] leading-[54px]">
              Get Trained. Get Certified. Get Hired.
            </h1>
            <p className="text-black text-[16px] leading-[24px] font-medium font-avenir">
              The only L&D provider in India and Saudi Arabia that doesn’t just make you job-ready—we get you the job. Master Internal Audit, ESG, Cybersecurity, and Business Operations in 2 hours to 2 days, then let our recruitment arm place you with 500+ hiring companies.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#learning-formats"
                className="w-full sm:w-[205px] h-[40px] rounded-[5px] bg-[#1D67CD] text-[#FDEBC9] border-[0.8px] border-[#FDEBC9] hover:bg-[#1552a8] active:scale-98 transition-all flex items-center justify-center font-avenir font-semibold text-[13px]"
              >
                Browse Programs
              </a>
              <Link
                to="/contact-8"
                className="w-full sm:w-[205px] h-[40px] rounded-[5px] bg-[#A3D9F6] text-black hover:bg-[#86c6e9] active:scale-98 transition-all flex items-center justify-center font-avenir font-semibold text-[14px]"
              >
                See Job Placements
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-[523px] shrink-0 flex justify-center">
            <img
              src={elevateHero}
              alt="Get Trained, Certified, Hired illustration"
              className="w-full max-w-[523px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: Why Elevate Stands Apart (Pillars 1 & 2) */}
      <section className="w-full bg-[#1D67CD] text-white pt-16 pb-12 flex justify-center border-b border-[#1D67CD]">
        <div className="w-full max-w-[1065px] px-6 lg:px-0 space-y-12">
          <div>
            <h2 className="text-[30px] font-serif font-normal text-white mb-2">
              Why Elevate Stands Apart
            </h2>
            <p className="text-[19px] font-avenir font-medium text-white/90">
              Three Core Pillars:
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Pillar 1 */}
            <div className="w-full lg:w-[451px] shrink-0 space-y-4">
              <h3 className="text-[19px] font-bold font-avenir text-white">
                1. Training + Placement = Career Transformation
              </h3>
              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-100/90 list-disc list-inside">
                <li>Not just “job-ready”—we get you hired through BnC Global’s recruitment arm</li>
                <li>Direct access to 500+ companies actively hiring in India and Saudi Arabia</li>
                <li>78% of learners secure new roles or promotions within 6 months</li>
                <li>Exclusive job postings, interview prep, salary negotiation support</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="w-full lg:w-[451px] shrink-0 space-y-4">
              <h3 className="text-[19px] font-bold font-avenir text-white">
                2. Fast-Track Learning Formats
              </h3>
              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-100/90 list-disc list-inside">
                <li>Quick Wins (2-4 hours): Evening workshops for targeted skills</li>
                <li>Deep Dives (1 day): Master complete topics in 8 hours</li>
                <li>Bootcamps (2 days): Weekend intensives that transform capabilities</li>
                <li>Certification Tracks (4-12 weeks): Globally recognized credentials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Pillar 3 (Expertise + AI) */}
      <section className="w-full bg-[#1D67CD] text-white py-12 flex justify-center border-b border-[#1552a8]">
        <div className="w-full max-w-[1065px] px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Column */}
          <div className="w-full lg:w-[479px] shrink-0 space-y-4">
            <h3 className="text-[19px] font-bold font-avenir text-white">
              3. Industry-Proven Expertise + AI Integration
            </h3>
            <ul className="space-y-4 text-[15px] leading-relaxed text-slate-100/90 list-disc list-inside">
              <li>Training designed by practitioners leading at Fortune 500 and Big 4 firms</li>
              <li>Real-world case studies from BnC Global’s 500+ client engagements</li>
              <li>AI tools integrated into every program—audit, ESG analytics, threat detection, process optimization</li>
              <li>Mentorship from 50+ CXOs and senior industry leaders</li>
            </ul>
          </div>

          {/* Right Column - Decorative Card Formatting */}
          <div className="relative w-full lg:w-[511px] h-[405px] shrink-0 flex items-center justify-center lg:justify-start mt-8 lg:mt-0">
            {/* White card background offset to the right */}
            <div className="absolute right-0 top-0 w-[301px] h-[405px] bg-white rounded-none shadow-sm" />
            {/* Image overlapping the card, offset to the left */}
            <img
              src={elevatePillar3}
              alt="Expertise and AI integration illustration"
              className="absolute left-0 top-[18px] w-[386px] h-[386px] object-contain z-10"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Who We Serve */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="w-full max-w-[1122px] mx-auto px-6 lg:px-0 space-y-12">
          <h2 className="text-[30px] font-serif font-normal text-black text-center">
            Who We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Box 1 */}
            <div className="bg-[#A3D9F6] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start space-y-4">
              <img src={serveIcon1} alt="Job Seekers icon" className="w-[49px] h-[49px] object-contain" />
              <h3 className="text-[18px] font-bold text-black font-avenir">
                Job Seekers & Career Switchers
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-800">
                For professionals seeking to break into or advance in audit, ESG, cybersecurity, or operations. We don’t just train you—our recruitment arm actively places you with 500+ hiring companies across India and Saudi Arabia. 78% of learners secure new roles or promotions.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#ECECEC] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start space-y-4">
              <img src={serveIcon2} alt="Working Professionals icon" className="w-[49px] h-[49px] object-contain" />
              <h3 className="text-[18px] font-bold text-black font-avenir">
                Working Professionals
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-800">
                For auditors, consultants, risk managers, sustainability officers, and IT security specialists who need fast, practical upskilling. Our 2-hour to 2-day formats fit your schedule, and our certifications (IIA, ISACA, GRI, EC-Council) advance your career.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-[#A3D9F6] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start space-y-4">
              <img src={serveIcon3} alt="Organizations icon" className="w-[49px] h-[49px] object-contain" />
              <h3 className="text-[18px] font-bold text-black font-avenir">
                Organizations
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-800">
                For MSMEs, mid-market corporates, and enterprises needing to upskill teams in compliance, risk management, ESG reporting, cybersecurity, and operational excellence. Custom programs delivered on-site, virtually, or hybrid.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-[#ECECEC] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start space-y-4">
              <img src={serveIcon4} alt="Students icon" className="w-[49px] h-[49px] object-contain" />
              <h3 className="text-[18px] font-bold text-black font-avenir">
                Students & Fresh Graduates
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-800">
                For commerce graduates, CA aspirants, and business students preparing for careers in audit, consulting, and corporate governance. Practical, job-ready training with placement support to launch your career.
              </p>
            </div>

            {/* Box 5 */}
            <div className="bg-[#A3D9F6] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start space-y-4">
              <img src={serveIcon5} alt="Universities icon" className="w-[49px] h-[49px] object-contain" />
              <h3 className="text-[18px] font-bold text-black font-avenir">
                Universities
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-800">
                For educational institutions seeking industry partnerships, guest faculty, curriculum enrichment, and placement support to enhance student employability and career outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5: Choose Your Learning Format */}
      <section id="learning-formats" className="w-full bg-[#A3D9F6] py-16 border-b border-slate-200">
        <div className="w-full max-w-[1122px] mx-auto px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Column - Formats stack */}
          <div className="w-full lg:w-[446px] space-y-8">
            <h2 className="text-[30px] font-serif font-normal text-black leading-tight">
              Choose Your Learning Format
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href="#format-cards"
                className="w-full h-[40px] px-6 rounded-[5px] bg-[#F5FFF7] text-black border border-slate-200 hover:bg-white transition-all flex items-center justify-start font-avenir font-semibold text-[14px]"
              >
                Quick Wins: 2-4 Hour Workshops
              </a>
              <a
                href="#format-cards"
                className="w-full h-[40px] px-6 rounded-[5px] bg-[#F5FFF7] text-black border border-slate-200 hover:bg-white transition-all flex items-center justify-start font-avenir font-semibold text-[14px]"
              >
                Deep Dives: 1-Day Intensives
              </a>
              <a
                href="#format-cards"
                className="w-full h-[40px] px-6 rounded-[5px] bg-[#F5FFF7] text-black border border-slate-200 hover:bg-white transition-all flex items-center justify-start font-avenir font-semibold text-[14px]"
              >
                Bootcamps: 2-Day Immersives
              </a>
              <a
                href="#format-cards"
                className="w-full h-[40px] px-6 rounded-[5px] bg-[#F5FFF7] text-black border border-slate-200 hover:bg-white transition-all flex items-center justify-start font-avenir font-semibold text-[14px]"
              >
                Certification Tracks: 4-12 Weeks
              </a>
            </div>
          </div>

          {/* Right Column - Graphic Panel */}
          <div className="relative w-full lg:w-[349px] h-[335px] bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
            <img
              src={elevateFormat}
              alt="Everyday learning format graphic"
              className="absolute -top-6 w-[463px] max-w-none h-[463px] object-contain pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 (Alternating Cards Row) */}
      <section id="format-cards" className="w-full bg-white border-b border-slate-100">
        <div className="w-full max-w-[1520px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[394px]">
          {/* Card 1 */}
          <div className="bg-white p-10 flex flex-col justify-center items-center text-center space-y-4 border-r border-b lg:border-b-0 border-slate-100">
            <h4 className="text-[17px] font-serif font-normal text-black">
              Quick Wins: 2-4 Hour Workshops
            </h4>
            <p className="text-[16px] leading-[24px] font-avenir text-slate-600 max-w-[280px]">
              Evening sessions for targeted skills. Perfect for busy professionals who need specific knowledge fast.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F5FFF7] p-10 flex flex-col justify-center items-center text-center space-y-4 border-r border-b lg:border-b-0 border-slate-100">
            <h4 className="text-[17px] font-serif font-normal text-black">
              Deep Dives: 1-Day Intensives
            </h4>
            <p className="text-[16px] leading-[24px] font-avenir text-slate-600 max-w-[280px]">
              Power-packed 8-hour programs covering complete topics. Weekend or weekday options available.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 flex flex-col justify-center items-center text-center space-y-4 border-r border-b md:border-b-0 border-slate-100">
            <h4 className="text-[17px] font-serif font-normal text-black">
              Bootcamps: 2-Day Immersives
            </h4>
            <p className="text-[16px] leading-[24px] font-avenir text-slate-600 max-w-[280px]">
              Weekend transformation programs combining instruction, case studies, and hands-on practice.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F5FFF7] p-10 flex flex-col justify-center items-center text-center space-y-4">
            <h4 className="text-[17px] font-serif font-normal text-black">
              Certification Tracks: 4-12 Weeks
            </h4>
            <p className="text-[16px] leading-[24px] font-avenir text-slate-600 max-w-[280px]">
              Structured pathways to globally recognized credentials (IIA, ISACA, GRI, EC-Council, ASQ).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: All Programs Include */}
      <section className="w-full bg-[#ECECEC] py-16 border-b border-slate-200">
        <div className="w-full max-w-[1122px] mx-auto px-6 lg:px-0 space-y-12">
          <h2 className="text-[20px] font-serif font-normal text-black text-center lg:text-left">
            All Programs Include:
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <img src={includeIcon1} alt="Expert instruction icon" className="w-[44px] h-[44px] object-contain" />
              <p className="text-[16px] font-avenir font-medium text-slate-800 max-w-[130px] leading-tight">
                Industry expert instruction
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <img src={includeIcon2} alt="Case studies icon" className="w-[44px] h-[44px] object-contain" />
              <p className="text-[16px] font-avenir font-medium text-slate-800 max-w-[130px] leading-tight">
                Real-world case studies
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <img src={includeIcon3} alt="AI tools icon" className="w-[44px] h-[44px] object-contain" />
              <p className="text-[16px] font-avenir font-medium text-slate-800 max-w-[130px] leading-tight">
                AI tool integration
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <img src={includeIcon4} alt="Certificate icon" className="w-[44px] h-[44px] object-contain" />
              <p className="text-[16px] font-avenir font-medium text-slate-800 max-w-[130px] leading-tight">
                Certificate of completion
              </p>
            </div>

            {/* Item 5 */}
            <div className="flex flex-col items-center text-center space-y-3 col-span-2 sm:col-span-1">
              <img src={includeIcon2} alt="Profile optimization icon" className="w-[44px] h-[44px] object-contain" />
              <p className="text-[16px] font-avenir font-medium text-slate-800 max-w-[135px] leading-tight">
                Resume & LinkedIn optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: The Elevate Advantage */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100 flex justify-center relative overflow-hidden">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-12 z-10">
          
          {/* Left Column - Copy details */}
          <div className="w-full lg:w-[563px] space-y-8">
            <h2 className="text-[28px] font-serif font-normal text-black">
              The Elevate Advantage
            </h2>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="text-[16px] leading-[24px] font-avenir text-slate-700">
                <span className="font-bold text-black block mb-0.5">Training + Placement</span>
                The only L&D provider that gets you hired. Through BnC Global’s recruitment arm, we place 78% of learners within 6 months
              </div>

              {/* Item 2 */}
              <div className="text-[16px] leading-[24px] font-avenir text-slate-700">
                <span className="font-bold text-black block mb-0.5">Fast-Track Formats</span>
                Learn in 2 hours, 1 day, or 2 days—not months. Perfect for working professionals who need results fast
              </div>

              {/* Item 3 */}
              <div className="text-[16px] leading-[24px] font-avenir text-slate-700">
                <span className="font-bold text-black block mb-0.5">Practical Learning</span>
                80% hands-on training with real case studies from 500+ BnC Global consulting engagements
              </div>

              {/* Item 4 */}
              <div className="text-[16px] leading-[24px] font-avenir text-slate-700">
                <span className="font-bold text-black block mb-0.5">AI-First Approach</span>
                Integrate AI tools into audit, ESG, cybersecurity, and operations from day one—not as “future topic”
              </div>

              {/* Item 5 */}
              <div className="text-[16px] leading-[24px] font-avenir text-slate-700">
                <span className="font-bold text-black block mb-0.5">Industry Mentors</span>
                Learn from 50+ CXOs, partners, and senior leaders actively shaping industries
              </div>

              {/* Item 6 */}
              <div className="text-[16px] leading-[24px] font-avenir text-slate-700">
                <span className="font-bold text-black block mb-0.5">Global Certifications</span>
                Prep and test for globally recognized credentials (IIA, ISACA, GRI, EC-Council, ASQ)
              </div>

              {/* Item 7 */}
              <div className="text-[16px] leading-[24px] font-avenir text-slate-700">
                <span className="font-bold text-black block mb-0.5">Career Services</span>
                Exclusive job board, resume reviews, mock interviews, and salary negotiation coaching
              </div>
            </div>
          </div>

          {/* Right Column - Graphic Panel */}
          <div className="w-full lg:w-[463px] shrink-0 flex flex-col items-center justify-center relative">
            <img
              src={elevateAdvantage}
              alt="Advantage overview illustration"
              className="w-full max-w-[463px] h-auto object-contain"
            />
            {/* Center Ornament badge overlay from Section 7/8 boundary */}
            <img
              src={includeLarge}
              alt="BnC decorative badge"
              className="hidden lg:block absolute -left-12 bottom-6 w-[186px] h-[185px] object-contain pointer-events-none"
            />
          </div>
        </div>
      </section>

    </div>
  )
}
