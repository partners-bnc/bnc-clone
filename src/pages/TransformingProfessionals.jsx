import elevateHeroWoman from '../assets/elevate_hero_woman.png'
import transformingMission from '../assets/transforming_mission.png'
import transformingVision from '../assets/transforming_vision.png'
import valueIcon1 from '../assets/value_icon1.png'
import valueIcon2 from '../assets/value_icon2.png'
import valueIcon3 from '../assets/value_icon3.png'
import valueIcon4 from '../assets/value_icon4.png'
import networkIcon1 from '../assets/network_icon1.png'
import networkIcon2 from '../assets/network_icon2.png'
import networkIcon3 from '../assets/network_icon3.png'
import networkIcon4 from '../assets/network_icon4.png'
import networkIcon5 from '../assets/network_icon5.png'
import recLogo1 from '../assets/rec_logo1.png'
import recLogo2 from '../assets/rec_logo2.png'
import recLogo3 from '../assets/rec_logo3.png'
import recLogo4 from '../assets/rec_logo4.png'
import recLogo5 from '../assets/rec_logo5.png'
import recLogo6 from '../assets/rec_logo6.png'

export default function TransformingProfessionals() {
  const values = [
    {
      title: 'Excellence',
      desc: 'We set the highest standards for content quality, faculty expertise, and learner outcomes.',
      icon: valueIcon1,
    },
    {
      title: 'Practicality',
      desc: 'Every course is designed for immediate application in real-world scenarios.',
      icon: valueIcon2,
    },
    {
      title: 'Innovation',
      desc: 'We embrace AI, technology, and new methodologies to stay ahead of industry evolution.',
      icon: valueIcon3,
    },
    {
      title: 'Integrity',
      desc: 'We operate with transparency, ethical standards, and unwavering commitment to learner success.',
      icon: valueIcon4,
    },
    {
      title: 'Collaboration',
      desc: 'We believe in the power of mentorship, community, and shared knowledge.',
      icon: valueIcon2, // Reused icon 2 as on live site
    },
  ]

  const networkRow1 = [
    {
      title: 'BnC Global',
      desc: 'Our parent consulting firm provides real-world case studies, client access, and industry insights that inform every program.',
      icon: networkIcon1,
    },
    {
      title: 'Industry Mentors',
      desc: '50+ senior leaders from Fortune 500 companies, Big 4 firms, and unicorn startups who guide our learners.',
      icon: networkIcon2,
    },
    {
      title: 'University Partners',
      desc: 'Collaborations with leading institutions for guest lectures, curriculum enrichment, and research.',
      icon: networkIcon3,
    },
  ]

  const networkRow2 = [
    {
      title: 'Certification Bodies',
      desc: 'Official partnerships with IIA, ISACA, GRI, EC-Council, and ASQ for recognized credentials.',
      icon: networkIcon4,
    },
    {
      title: 'Corporate Partners',
      desc: '500+ organizations trust us for employee upskilling, leadership development, and compliance training.',
      icon: networkIcon5,
    },
  ]

  const recLogosLeft = [
    { name: 'Institute of Internal Auditors (IIA)', logo: recLogo1 },
    { name: 'Information Systems Audit and Control Association (ISACA)', logo: recLogo2 },
    { name: 'Global Reporting Initiative (GRI)', logo: recLogo3 },
  ]

  const recLogosRight = [
    { name: 'ISO 9001:2015 Certified Training Provider', logo: recLogo4 },
    { name: 'NSDC (National Skill Development Corporation) Approved', logo: recLogo5 },
    { name: 'HRDF (Saudi Arabia) Registered', logo: recLogo6 },
  ]

  return (
    <div className="bg-[#F5FFF7] text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section (Vibrant Blue Background) */}
      <section className="bg-[#1D67CD] py-16 md:py-24 flex justify-center text-white">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Left Text Column */}
          <div className="w-full md:w-[580px] space-y-6">
            <h1 className="text-[36px] md:text-[44px] font-display font-extrabold text-white leading-tight">
              Elevating Professionals, Transforming Organizations
            </h1>
            <div className="space-y-4 text-[16px] text-[#F5FFF7] font-avenir font-normal leading-relaxed">
              <p>
                Founded by the team behind BnC Global—a trusted consulting firm serving 500+ clients across India and Saudi Arabia—Elevate was born from a simple observation: <span className="font-bold">the best learning happens at the intersection of theory and practice.</span>
              </p>
              <p>
                For over a decade, BnC Global has helped organizations navigate complex challenges in audit, compliance, ESG, and operations. Time and again, our clients asked: <span className="italic">“Can you train our teams?”</span> They needed more than generic courses—they needed real-world expertise, industry context, and future-ready skills.
              </p>
              <p>
                Elevate is our answer.
              </p>
              <p>
                We’ve taken our consulting DNA—grounded in practical problem-solving—and built a learning ecosystem where professionals don’t just consume content, they transform how they think, work, and lead.
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full md:w-[484px] shrink-0 flex justify-center">
            <img
              src={elevateHeroWoman}
              alt="Elevate Hero Woman"
              className="w-full h-auto object-cover max-w-[420px] md:max-w-none"
            />
          </div>

        </div>
      </section>

      {/* 2. Our Mission & Our Vision Section (Staggered Column backgrounds) */}
      <section className="grid grid-cols-1 md:grid-cols-2 w-full">
        
        {/* Left Mission Column */}
        <div className="bg-[#F5FFF7] py-20 flex flex-col items-center justify-center text-center px-8 md:px-16">
          <div className="max-w-[420px] space-y-6 flex flex-col items-center">
            <img
              src={transformingMission}
              alt="Our Mission"
              className="w-[143px] h-[143px] object-contain"
            />
            <h2 className="text-[24px] font-serif font-normal text-[#00305B]">
              Our Mission
            </h2>
            <p className="text-[16px] text-slate-800 font-avenir leading-relaxed">
              Empower professionals and organizations to achieve excellence through industry-led, AI-integrated learning that bridges the gap between traditional expertise and future-ready skills.
            </p>
          </div>
        </div>

        {/* Right Vision Column */}
        <div className="bg-white py-20 flex flex-col items-center justify-center text-center px-8 md:px-16 border-t md:border-t-0 md:border-l border-slate-100">
          <div className="max-w-[420px] space-y-6 flex flex-col items-center">
            <img
              src={transformingVision}
              alt="Our Vision"
              className="w-[143px] h-[143px] object-contain"
            />
            <h2 className="text-[24px] font-serif font-normal text-[#00305B]">
              Our Vision
            </h2>
            <p className="text-[16px] text-[#1D67CD] font-avenir leading-relaxed">
              To be the trusted learning partner for professionals and organizations across India, Saudi Arabia, and beyond—recognized for transforming careers and driving business impact through practical, innovative education.
            </p>
          </div>
        </div>

      </section>

      {/* 3. Our Values Section (Vibrant Blue Background + White Cards) */}
      <section className="bg-[#1D67CD] py-20 flex justify-center text-white">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-12">
          
          <h2 className="text-[30px] font-display font-extrabold text-white text-center">
            Our Values
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 w-[200px] h-[260px] flex flex-col items-center justify-between text-center shadow-md text-slate-800"
              >
                <img
                  src={v.icon}
                  alt={v.title}
                  className="w-12 h-12 object-contain"
                />
                <h4 className="text-[17px] font-display font-extrabold text-[#00305B]">
                  {v.title}
                </h4>
                <p className="text-[13px] text-slate-500 font-avenir leading-normal">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. The Elevate Network Section (White Background) */}
      <section className="bg-white py-20 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0 space-y-16">
          
          <h2 className="text-[30px] font-display font-extrabold text-[#1D67CD] text-center">
            The Elevate <span className="text-black">Network</span>
          </h2>

          <div className="space-y-10">
            {/* Row 1: 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {networkRow1.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-4 p-6 bg-slate-50/50 border border-slate-100 rounded-3xl shadow-sm"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[50px] h-[51px] object-contain"
                  />
                  <h4 className="text-[17px] font-serif font-normal text-[#00305B]">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-slate-600 font-avenir leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2: 2 Columns Centered */}
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {networkRow2.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-4 p-6 bg-slate-50/50 border border-slate-100 rounded-3xl shadow-sm w-full md:max-w-[340px]"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[50px] h-[51px] object-contain"
                  />
                  <h4 className="text-[17px] font-serif font-normal text-[#00305B]">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-slate-600 font-avenir leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Recognition & Accreditations (Accreditation Blue Background) */}
      <section className="bg-[#0E76BC] py-20 flex justify-center text-white">
        <div className="w-full max-w-[1122px] px-6 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-[28px] font-display font-extrabold text-white">
                Recognition & Accreditations
              </h2>
              <div className="w-[128px] h-[5px] bg-white" />
              
              <div className="space-y-6 pt-4">
                {recLogosLeft.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5">
                    <div className="w-[60px] h-[57px] bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 p-2">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[15px] font-avenir font-normal text-white">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h2 className="text-[28px] font-display font-extrabold text-white">
                Certifications & Standards
              </h2>
              <div className="w-[128px] h-[5px] bg-white" />
              
              <div className="space-y-6 pt-4">
                {recLogosRight.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5">
                    <div className="w-[60px] h-[57px] bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 p-2">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[15px] font-avenir font-normal text-white">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
