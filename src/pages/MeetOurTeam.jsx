import { Linkedin } from 'lucide-react'
import imgSummit from '../assets/team_summit.png'
import imgGurvinder from '../assets/team_gurvinder.png'
import imgKarandeep from '../assets/team_karandeep.png'
import imgSushmeet from '../assets/team_sushmeet.png'
import imgPraveen from '../assets/team_praveen.png'
import imgSaurabh from '../assets/team_saurabh.png'
import imgPankhuri from '../assets/team_pankhuri.png'
import imgPranav from '../assets/team_pranav.png'
import imgAnwar from '../assets/team_anwar.png'
import imgShailesh from '../assets/team_shailesh.png'

export default function MeetOurTeam() {
  const sections = [
    {
      name: 'Founder Team',
      members: [
        {
          name: 'Summit Goyal',
          role: 'Founder',
          desc: 'Summit has 18+ years of consulting experience across multiple sectors. A CA (AIR 50) and former KPMG professional, he advises global firms on CFO services, finance transformation, ERM, GRC, and strategic MIS.',
          img: imgSummit
        },
        {
          name: 'Gurvinder Singh',
          role: 'Co-Founder',
          desc: 'Chartered Accountant with 21+ years of experience in assurance and risk management across multiple sectors. Formerly with KPMG, Aon Hewitt, and MetLife, he specializes in ICFR, internal audits, controls, process automation, and finance transformation.',
          img: imgGurvinder
        }
      ]
    },
    {
      name: 'Senior Team',
      members: [
        {
          name: 'Karandeep Singh',
          role: 'GCC & CFO Practice',
          desc: 'Advising corporate scaling programs and multinational GCC operations. Deep background in Consumer Tech (Flipkart, Simplilearn, KPMG), Retail & GCCs (Tesco Business Services), and Gaming & Esports.',
          img: imgKarandeep
        },
        {
          name: 'Sushmeet Singh',
          role: 'Digital Transformation',
          desc: 'Steering stakeholder alignment, scope finalization, operations governance, system integrations, and multi-country team mobilization.',
          img: imgSushmeet
        },
        {
          name: 'Praveen Ladha',
          role: 'KSA Country Head',
          desc: 'Overseeing Middle East business growth and corporate setups. Expert in Retail & Digital Banking, Transformation & Strategic Consulting.',
          img: imgPraveen
        }
      ]
    },
    {
      name: 'ESG Advisory Team',
      members: [
        {
          name: 'Saurabh Verma',
          role: 'UK Division Head',
          desc: 'Structuring European institutional relations. Expert in Climate & Risk Advisory, Banking, and Asset Management.',
          img: imgSaurabh
        },
        {
          name: 'Pankhuri Jain',
          role: 'Social Practice Head',
          desc: 'Structuring social impact standards. Expert in ESG & Sustainability, Strategic Leadership, and Impact-Driven Solutions.',
          img: imgPankhuri
        },
        {
          name: 'Pranav Bhardwaj',
          role: 'ESG Practice Head',
          desc: 'Leading regulatory environmental audits. Expert in Cross-Sector Experience, Sustainability Focus, and Collaborative Approach.',
          img: imgPranav
        }
      ]
    },
    {
      name: 'Privacy & Growth Team',
      members: [
        {
          name: 'Anwar Akhtar',
          role: 'Cyber Security Head',
          desc: 'Managing data protection. Expert in GRC & DPDPA implementation; CISA, CISM, ISO 27001 Lead Auditor; GDPR, HIPAA, PCI DSS.',
          img: imgAnwar
        },
        {
          name: 'Shailesh Dayal',
          role: 'Growth Strategist',
          desc: 'Directing training formats. Expert in Leadership training, business podcasts, and corporate workshops.',
          img: imgShailesh
        }
      ]
    }
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* Hero Header */}
      <section className="py-20 bg-gradient-to-br from-[#00305B] to-[#0A2F5B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-normal">
            Meet Our Team
          </h1>
          <p className="text-base md:text-lg text-[#BFD9ED] max-w-2xl mx-auto font-sans leading-relaxed">
            Our multi-disciplinary experts bring global consulting, risk assurance, and compliance experience to guide your organization scaling.
          </p>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-10">
              
              {/* Category Title */}
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-[#00305B] tracking-tight">
                  {sec.name}
                </h2>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sec.members.map((member, mIdx) => (
                  <div 
                    key={mIdx} 
                    className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      {/* Photo */}
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                        <img 
                          src={member.img} 
                          alt={member.name} 
                          className="w-full h-full object-cover filter brightness-[1.02] contrast-[0.98] transition-transform duration-300 hover:scale-[1.03]"
                        />
                      </div>

                      {/* Info */}
                      <div className="p-6 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-extrabold text-[#00305B] font-sans">{member.name}</h3>
                            <p className="text-xs font-semibold text-[#1D67CD] mt-0.5">{member.role}</p>
                          </div>
                          <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-1.5 rounded-lg bg-slate-200/50 hover:bg-[#1D67CD]/10 text-slate-500 hover:text-[#1D67CD] transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </div>
                        <p className="text-xs text-slate-500 font-avenir leading-relaxed">
                          {member.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
