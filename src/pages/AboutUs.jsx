import aboutHero from '../assets/about_hero.png'
import visionIcon from '../assets/vision_icon2.png'
import timelineImg from '../assets/timeline.png'
import partnershipImg from '../assets/partnership.jpg'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

export default function AboutUs() {
  return (
    <div className="bg-[#0B2F5B] text-slate-800 antialiased font-sans">
      <SEO
        title="About Us - BNC Global Consultech"
        description="Learn about BNC Global Consultech, a contemporary risk advisory and management consulting firm serving SMEs, startups, and global enterprises."
        canonical="/about-us"
      />
      
      {/* 1. Hero Section (Pixel Perfect Constraints) */}
      <section className="relative w-full min-h-[665px] bg-[#0B2F5B] text-white border-b border-slate-800 flex flex-col lg:flex-row justify-between items-stretch overflow-hidden">
        {/* Left text column */}
        <div className="w-full lg:w-[374px] lg:ml-[290px] shrink-0 pt-16 lg:pt-[164px] pb-10 px-6 lg:px-0 space-y-6 z-10 flex flex-col justify-start">
          <h1 className="text-[44px] font-display font-extrabold tracking-tight leading-none text-left">
            About Us
          </h1>
          <p className="text-[#BFD9ED] text-[19px] leading-[26.6px] font-medium font-avenir text-left">
            BNC Global Consulteck is a contemporary consulting and advisory firm, embodying the spirit of innovation and modernity. We represent the future of business support services, specialization in risk advisory, management consulting, tax and corporate advisory for SMEs and startups.
          </p>
          <div className="pt-2 text-left">
            <Link
              to="/about-us/meet-our-team"
              className="inline-flex items-center justify-center gap-2 w-[218px] h-[31px] rounded-full font-bold bg-[#F5FFF7] text-black hover:bg-white shadow-md active:scale-98 transition-colors cursor-pointer text-[15px] font-sans"
            >
              <span>Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right image column (Bottom aligned) */}
        <div className="w-full lg:w-[710px] shrink-0 self-end flex justify-end z-10 mt-8 lg:mt-0">
          <img
            src={aboutHero}
            alt="India–Saudi Business Corridor.png"
            className="w-full h-auto max-w-[710px] object-contain block align-bottom"
          />
        </div>
      </section>

      {/* 2. Vision & Mission Section (Diagonal Overlay Layout) */}
      <section className="relative py-24 md:py-32 bg-white border-b border-slate-100 min-h-[620px] flex items-center overflow-hidden">
        {/* Central graphic background */}
        <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none px-4 my-65">
          <img
            src={visionIcon}
            alt="Vision and Mission illustration"
            className="max-w-[948px] w-full h-auto max-h-[575px] object-contain opacity-100"
          />
        </div>


      </section>

      {/* 3. Our Journey (Timeline) */}
      <section className="py-20 md:py-28 border-b border-slate-100 bg-white">
        {/* Constrained Header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-12">
          <h2 className="text-[35px] font-display font-extrabold text-[#4D4D4D] tracking-tight">
            Our Journey
          </h2>
          <p className="text-black text-[20px] leading-[28px] font-medium font-avenir">
            Since our establishment in 2014, we have rapidly expanded our presence across India through a strategic combination of offices and a network of partner firms. Additionally, we have established global ties with firms in Asia (Hong Kong/Singapore) and the Middle East.
          </p>
        </div>

        {/* Timeline chart with overlay milestone texts */}
        <div className="relative w-full max-w-[1525px] mx-auto">
          {/* Timeline Image (No shadow, no border) */}
          <img
            src={timelineImg}
            alt="Untitled design.png"
            className="w-full h-auto object-contain block"
          />

          {/* Overlaid labels on desktop */}
          <div className="hidden md:block absolute inset-0 pointer-events-none select-none">
            
            {/* Bottom Row */}
            {/* 2014 - Incorporation */}
            <div className="absolute left-[7%] bottom-[5%] w-[130px] text-center">
              <span className="text-sm font-bold text-black font-sans leading-tight block">Incorporation</span>
            </div>

            {/* 2017 - GST Expansion */}
            <div className="absolute left-[28.5%] bottom-[5%] w-[130px] text-center">
              <span className="text-sm font-bold text-black font-sans leading-tight block">GST Expansion</span>
            </div>

            {/* 2019 - Cybersecurity Advisory */}
            <div className="absolute left-[51.5%] bottom-[5%] w-[130px] text-center">
              <span className="text-sm font-bold text-black font-sans leading-tight block">Cybersecurity Advisory</span>
            </div>

            {/* 2021 - Global Alliances & Knowledge Platforms */}
            <div className="absolute left-[74%] bottom-[2%] w-[140px] text-center">
              <span className="text-sm font-bold text-black font-sans leading-tight block">Global Alliances & Knowledge Platforms</span>
            </div>

            {/* Top Row */}
            {/* 2015 - ICFR Launch */}
            <div className="absolute left-[16.5%] top-[15%] w-[160px] text-center">
              <span className="text-sm font-bold text-black font-sans leading-tight block">ICFR Launch</span>
            </div>

            {/* 2023 - Co-Founder - Gurvinder Singh & HR Solutions */}
            <div className="absolute left-[39.5%] top-[5%] w-[160px] text-center">
              <span className="text-sm font-bold text-black font-sans leading-tight block">Co-Founder – Gurvinder Singh & HR Solutions</span>
            </div>

            {/* 2024 - ESG & Global Entry */}
            <div className="absolute left-[61.5%] top-[15%] w-[160px] text-center">
              <span className="text-sm font-bold text-black font-sans leading-tight block">ESG & Global Entry</span>
            </div>

            {/* 2025 - GCC & Digital Transformation */}
            <div className="absolute left-[84%] top-[10%] w-[160px] text-center">
              <span className="text-sm font-bold text-black font-sans leading-tight block">GCC & Digital Transformation</span>
            </div>

          </div>
        </div>

        {/* Mobile list */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:hidden mt-8">
          <div className="space-y-6 pl-4 border-l border-slate-200">
            <div className="relative">
              <span className="font-bold text-blue-600 block">2014</span>
              <span className="text-sm font-semibold text-slate-800">Incorporation</span>
            </div>
            <div className="relative">
              <span className="font-bold text-blue-600 block">2015</span>
              <span className="text-sm font-semibold text-slate-800">ICFR Launch</span>
            </div>
            <div className="relative">
              <span className="font-bold text-blue-600 block">2017</span>
              <span className="text-sm font-semibold text-slate-800">GST Expansion</span>
            </div>
            <div className="relative">
              <span className="font-bold text-blue-600 block">2023</span>
              <span className="text-sm font-semibold text-slate-800">Co-Founder – Gurvinder Singh & HR Solutions</span>
            </div>
            <div className="relative">
              <span className="font-bold text-blue-600 block">2019</span>
              <span className="text-sm font-semibold text-slate-800">Cybersecurity Advisory</span>
            </div>
            <div className="relative">
              <span className="font-bold text-blue-600 block">2024</span>
              <span className="text-sm font-semibold text-slate-800">ESG & Global Entry</span>
            </div>
            <div className="relative">
              <span className="font-bold text-blue-600 block">2021</span>
              <span className="text-sm font-semibold text-slate-800">Global Alliances & Knowledge Platforms</span>
            </div>
            <div className="relative">
              <span className="font-bold text-blue-600 block">2025</span>
              <span className="text-sm font-semibold text-slate-800">GCC & Digital Transformation</span>
          </div>
        </div>
      </div>
    </section>

      {/* 4. Partnerships Section (Full-bleed Background image layout) */}
      <section className="relative min-h-[402px] flex items-center justify-center bg-[#0B2F5B] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={partnershipImg}
            alt="Image by Sebastian Herrmann"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[#0B2F5B]/80 z-0" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 text-white py-12">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Partnerships
          </h2>
          <div className="space-y-6 text-[20px] leading-[28px] font-medium font-avenir max-w-3xl mx-auto">
            <p>
              BNC Global Consulteck is proud to partner with the Internal Control Institute - US. We are committed to training resources in the field of risk management and providing corporations with skilled manpower solutions in the realm of risk advisory.
            </p>
            <p>
              At BNC Global, we're not just consultants; we're your partners in progress, working together to drive growth, enhance performance, and help you maintain your leadership position in the markets you serve.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
