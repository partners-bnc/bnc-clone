import { useState } from 'react'
import contactHero from '../assets/contact_hero.png'
import contactVisit from '../assets/contact_visit.png'
import contactEmail from '../assets/contact_email.png'
import contactWhatsapp from '../assets/contact_whatsapp.png'
import { Send, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email) {
      alert('Please fill out all required fields.')
      return
    }
    setIsSubmitted(true)
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      <SEO
        title="Contact Us - Global Offices in India & Saudi Arabia"
        description="Get in touch with BNC Global. Reach our offices in Riyadh, Saudi Arabia and Gurgaon, India for financial consulting and advisory services."
        canonical="/contact-8"
      />
      
      {/* 1. Hero Banner */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactHero}
            alt="CONTACT US background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-none uppercase">
            CONTACT US!
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Have a question or a project in mind? Our team is ready to help.
          </p>
        </div>
      </section>

      {/* 2. Three Contact Columns */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Visit Us */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 shadow-sm space-y-6">
              <div className="w-[56px] h-[56px] flex items-center justify-center">
                <img src={contactVisit} alt="Visit Us" className="w-full h-full object-contain" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Visit Us</h3>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-700 uppercase">Riyadh Office</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    8163 Abi Barzah Al Aslami, 4362 Al Dhubbat Dist.<br />Riyadh, 12623, Saudi Arabia
                  </p>
                  <button className="text-sm font-bold text-[#1D67CD] hover:underline flex items-center gap-1 cursor-pointer">
                    Read More &gt;
                  </button>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-slate-700 uppercase">Gurgaon Office</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Plot no C-15 & C-16 Ground floor<br />Udyog Vihar Phase 5, Gurgaon, India
                  </p>
                  <button className="text-sm font-bold text-[#1D67CD] hover:underline flex items-center gap-1 cursor-pointer">
                    Read More &gt;
                  </button>
                </div>
              </div>
            </div>

            {/* Join Us */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-[56px] h-[56px] flex items-center justify-center">
                  <img src={contactWhatsapp} alt="WhatsApp" className="w-full h-full object-contain" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">Join Us</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We maintain an active network of Chartered Accountants, MBAs, and financial specialists. Join our community to access hybrid projects and roles.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <a
                  href="https://chat.whatsapp.com/JuKT39dKPEW2RxyA1vuHFK"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-blue-600 shadow-sm transition-colors text-sm cursor-pointer"
                >
                  <span>WhatsApp Community</span>
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 shadow-sm space-y-6">
              <div className="w-[56px] h-[56px] flex items-center justify-center">
                <img src={contactEmail} alt="Contact Us" className="w-full h-full object-contain" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Contact Us</h3>
                
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Consulting Inquiries</h4>
                  <a href="mailto:summit@bncglobal.in" className="text-[#1D67CD] hover:underline font-semibold text-base block">
                    summit@bncglobal.in
                  </a>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-400 uppercase">General Inquiries</h4>
                  <a href="mailto:info@bncglobal.in" className="text-[#1D67CD] hover:underline font-semibold text-base block">
                    info@bncglobal.in
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Connect with a Specialist Form */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-[#1D67CD] tracking-tight">
              Connect with a Specialist
            </h2>
            <p className="text-slate-500">
              Submit your project details below and a senior advisor will get in touch shortly.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200/60 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-in zoom-in duration-200">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">Message Sent!</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out. A senior partner will contact you shortly to schedule an introductory call.
                </p>
                <button
                  onClick={() => { setIsSubmitted(false); setFormData({ firstName:'', lastName:'', email:'', message:'' }); }}
                  className="px-6 py-2 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-blue-600 transition-colors text-sm cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1D67CD]"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1D67CD]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1D67CD]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your query or required services..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1D67CD] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold bg-slate-950 text-white hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    <span>Send</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  )
}
