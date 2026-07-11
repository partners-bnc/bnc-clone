import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Asset imports
import cyberHero from '../assets/cyber_hero.png'
import cyberBadge1 from '../assets/cyber_badge1.png'
import cyberBadge2 from '../assets/cyber_badge2.png'
import cyberBadge3 from '../assets/cyber_badge3.png'
import cyberBadge4 from '../assets/cyber_badge4.png'
import cyberBadge5 from '../assets/cyber_badge5.png'
import cyberTeamWelcome from '../assets/cyber_team_welcome.png'
import cyberTeamWelcomeF from '../assets/cyber_team_welcome_f.png'
import cyberExpertise from '../assets/cyber_expertise.png'
import cyberChooseUs from '../assets/cyber_choose_us.png'
import cyberBanner from '../assets/cyber_banner.jpg'

export default function Cybersecurity() {
  const frameworks = [
    {
      title: 'ISO/IEC 27001 – Information Security Management System (ISMS)',
      body: 'Design and implementation of a robust ISMS to identify, manage, and mitigate information security risks while ensuring data confidentiality, integrity, and availability.',
      link: '/contact-8'
    },
    {
      title: 'SOC Certification (SOC 2) – Trust & Assurance',
      body: 'Readiness and certification support to demonstrate strong security, availability, confidentiality, and operational controls to customers, partners, and stakeholders.',
      link: '/contact-8'
    },
    {
      title: 'GDPR Compliance – Data Privacy & Protection',
      body: 'Advisory and implementation services to ensure lawful, transparent, and secure processing of personal data in line with EU data protection regulations.',
      link: '/contact-8'
    },
    {
      title: 'HIPAA Compliance – Sensitive & Health Data Security',
      body: 'Framework alignment and control implementation to enable secure handling of health-related and sensitive data in accordance with HIPAA requirements.',
      link: '/contact-8'
    }
  ]

  const socialLinks = [
    { img: cyberBadge1, url: 'https://www.linkedin.com/company/bnc-data-privacy-labs/', alt: 'LinkedIn' },
    { img: cyberBadge2, url: 'https://www.instagram.com/bncdataprivacylabs/', alt: 'Instagram' },
    { img: cyberBadge3, url: 'https://www.facebook.com/bncdataprivacylabs/', alt: 'Facebook' },
    { img: cyberBadge4, url: 'https://www.youtube.com/@bncdataprivacylabs', alt: 'YouTube' },
    { img: cyberBadge5, url: 'https://chat.whatsapp.com/GfWeaXrKjg20IbnQmuvRmw', alt: 'WhatsApp' }
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-100 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-[560px] space-y-6">
            <h1 className="text-[40px] md:text-[52px] font-display font-extrabold leading-[1.15] flex flex-col">
              <span className="text-[#00305B]">Compliance.</span>
              <span className="text-[#1D67CD]">Cyber-Secure.</span>
              <span className="text-[#00305B]">Globally Assured.</span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-[20px] text-[#00305B] leading-relaxed font-avenir font-medium">
                At BNC Global (<span className="text-[#1D67CD]">BNC Data Privacy</span>), we empower organisations to protect what matters most — their data.
              </p>
              <p className="text-[18px] text-[#00305B]/80 leading-relaxed font-avenir font-normal">
                Our mission is simple: to build trust through technology, ensuring that every business stays compliant, secure, and globally recognised for data protection excellence.
              </p>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 space-y-3">
              <p className="text-[14px] text-slate-400 font-semibold uppercase tracking-wider">Connect with BNC Data Privacy Labs</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-md block bg-slate-50 border border-slate-100"
                  >
                    <img src={social.img} alt={social.alt} className="w-full h-full object-cover" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="w-full lg:w-[500px] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] h-auto rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src={cyberHero}
                alt="Cybersecurity at BNC Global"
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. OUR SERVICES SECTION */}
      <section className="w-full bg-[#1D67CD] py-20 lg:py-24 flex justify-center text-white">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-12">
          
          <div className="max-w-[800px] space-y-4">
            <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#F5FFF7]">
              Our Services
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#BFD9ED] leading-relaxed font-avenir font-normal">
              Based on our assessment, organizations operating in today’s digital and global environment require a comprehensive set of security and compliance frameworks to build trust, scale internationally, and meet regulatory and customer expectations. We provide end-to-end advisory, implementation, and certification support across the following frameworks:
            </p>
          </div>

          {/* 2x2 Grid of Framework Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frameworks.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F5FFF7] p-8 rounded-2xl shadow-lg border border-[#A3D9F6]/20 flex flex-col justify-between hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[22px] font-display font-extrabold text-[#00305B] group-hover:text-[#1D67CD] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[16px] text-slate-700 leading-relaxed font-avenir font-normal">
                    {card.body}
                  </p>
                </div>
                
                <div className="pt-6">
                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-2 text-[#1D67CD] font-display font-bold text-[16px] hover:text-[#00305B] transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HOW BNC GLOBAL EMPOWERS SECTION */}
      <section className="w-full bg-white py-20 lg:py-24 border-b border-slate-100 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-12">
          
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#00305B]">
              How BNC Global Empowers Corporates &amp; Individuals
            </h2>
          </div>

          {/* Infographic Images Stack */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-[1000px] rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <img
                src={cyberTeamWelcome}
                alt="How BNC Global Empowers Corporates & Individuals - Welcome Infographic"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full max-w-[1000px] rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <img
                src={cyberTeamWelcomeF}
                alt="How BNC Global Empowers Corporates & Individuals - Team Infographic"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR EXPERTISE SECTION */}
      <section className="w-full bg-[#F5FFF7] py-20 lg:py-24 border-b border-slate-100 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text content */}
          <div className="w-full lg:w-[480px] space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#00305B]">
              Our Expertise
            </h2>
            <p className="text-[18px] text-slate-700 leading-relaxed font-avenir font-normal">
              We combine industry-leading privacy frameworks and cybersecurity intelligence to deliver solutions that work in real time. Whether you’re managing <span className="font-bold text-[#00305B]">DPDP Act compliance</span>, preparing for <span className="font-bold text-[#00305B]">SOC 2 audits</span>, or implementing <span className="font-bold text-[#00305B]">ISO 27001 controls</span>, we’ve got you covered.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-8"
                className="inline-flex items-center gap-2 bg-[#1D67CD] text-white px-6 py-3 rounded-lg font-display font-bold text-[16px] hover:bg-[#00305B] shadow-md transition-all duration-300"
              >
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Infographic / Diagram */}
          <div className="w-full lg:w-[580px] flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px] rounded-2xl overflow-hidden shadow-lg bg-white p-4 border border-slate-100">
              <img
                src={cyberExpertise}
                alt="BNC Data Privacy Expertise Frameworks"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="w-full bg-white py-20 lg:py-24 border-b border-slate-100 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-[480px] space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#00305B]">
              Why Choose Us
            </h2>
            <div className="space-y-4 font-avenir text-[17px] text-slate-600 leading-relaxed">
              <p>
                We deliver tailored solutions that integrate seamlessly with your existing IT systems and business operations. Our certified experts ensure you meet global benchmarks without slowing down your operations.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#00305B] font-medium">
                <li>Proven track record with global clients</li>
                <li>Expert advisory for standard certifications</li>
                <li>Comprehensive compliance mapping tools</li>
                <li>Post-implementation support and audits</li>
              </ul>
            </div>
          </div>

          {/* Diagram */}
          <div className="w-full lg:w-[580px] flex justify-center lg:justify-start">
            <div className="w-full max-w-[560px] rounded-2xl overflow-hidden shadow-lg bg-white p-4 border border-slate-100">
              <img
                src={cyberChooseUs}
                alt="Why Choose BNC Global Cybersecurity Services"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE SECTION */}
      <section className="w-full bg-[#00305B] py-16 flex justify-center text-white">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-[600px]">
            <h2 className="text-[28px] md:text-[36px] font-display font-extrabold text-[#F5FFF7]">
              Industries We Serve
            </h2>
            <p className="text-[17px] text-[#BFD9ED] leading-relaxed font-avenir font-normal">
              From fintech and healthcare to SaaS and e-commerce, our solutions adapt to your business environment — ensuring compliance without compromising agility.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact-8"
              className="inline-flex items-center gap-2 bg-white text-[#00305B] px-6 py-3 rounded-lg font-display font-bold text-[16px] hover:bg-[#1D67CD] hover:text-white transition-all duration-300 shadow-md"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH BANNER IMAGE */}
      <section className="w-full h-[240px] relative overflow-hidden bg-[#00305B]">
        <img
          src={cyberBanner}
          alt="Security Operations Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#00305B]/10 mix-blend-overlay"></div>
      </section>

      {/* 8. OUR PROMISE SECTION */}
      <section className="w-full bg-[#F5FFF7] py-20 lg:py-24 flex justify-center text-center">
        <div className="w-full max-w-[800px] px-6 lg:px-0 space-y-6">
          <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-[#00305B]">
            Our Promise
          </h2>
          <p className="text-[20px] md:text-[24px] text-[#1D67CD] font-display font-medium leading-relaxed">
            We help you build customer confidence through <span className="font-extrabold text-[#00305B] underline decoration-wavy decoration-[#1D67CD]">secure, transparent, and compliant data practices</span> — because privacy isn’t optional, it’s essential.
          </p>
          <div className="pt-6">
            <Link
              to="/contact-8"
              className="inline-flex items-center gap-3 bg-[#1D67CD] text-white px-8 py-4 rounded-xl font-display font-bold text-[18px] hover:bg-[#00305B] shadow-lg transition-all duration-300 hover:scale-105"
            >
              Build Trust Today <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
