import { useState } from 'react'
import careersHero from '../assets/careers_hero.png'
import careersStaffing from '../assets/careers_staffing.png'
import careersFooter from '../assets/careers_footer.jpg'
import { Mail, CheckCircle2, MessageSquare, ArrowRight, User, GraduationCap, Briefcase, Calendar, UploadCloud, MapPin, Phone } from 'lucide-react'

export default function Careers() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    position: 'Select position',
    joiningDate: '',
    experience: '',
    cv: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, cv: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.address || formData.position === 'Select position' || !formData.joiningDate || !formData.experience) {
      alert('Please fill out all required fields.')
      return
    }
    setIsSubmitted(true)
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Hero Section */}
      <section className="py-20 md:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl font-serif font-normal text-slate-900 tracking-tight leading-none">
                Career
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Your journey at BNC promises a unique blend of experiences, allowing you to collaborate with both industry-leading giants, including the BIG 4 firms, and our own BNC team. This dual exposure provides a rich learning environment that accelerates your professional development.
              </p>
              <div className="pt-2">
                <a
                  href="#application-form"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-blue-600 shadow-md active:scale-98 transition-all cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6">
              <img
                src={careersHero}
                alt="BNC Career Journey"
                className="w-full h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Temporary Staffing Section */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1D67CD] tracking-tight">
                Temporary Staffing
              </h2>
              <h3 className="text-xl font-bold text-slate-800">
                Build Skills. Gain Experience. Secure Your Future.
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-600 text-base">Gain practical work experience on active corporate audit, tax, and financial operations engagements.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-600 text-base">Learn and refine essential technical skills, software platforms, and local compliance methodologies.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-600 text-base">Access networking channels with seasoned Chartered Accountants, MBAs, and enterprise finance leaders.</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6">
              <img
                src={careersStaffing}
                alt="Temporary Staffing Program"
                className="w-full h-auto rounded-3xl shadow-md border border-slate-150 object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mail & Join Us Section */}
      <section className="py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mail Box */}
            <a
              href="mailto:info@bncglobal.in"
              className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 hover:border-[#1D67CD] bg-white shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#1D67CD] group-hover:bg-[#1D67CD] group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-normal text-slate-900 text-base">Mail Us!</h4>
                <p className="text-slate-500 text-sm font-sans">info@bncglobal.in</p>
              </div>
            </a>

            {/* WhatsApp Group Box */}
            <a
              href="https://chat.whatsapp.com/JuKT39dKPEW2RxyA1vuHFK"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 hover:border-green-500 bg-white shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-normal text-slate-900 text-base">Join Us!</h4>
                <p className="text-slate-500 text-sm font-sans">BNC Global WhatsApp Community</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 4. Application Form (Single page form container) */}
      <section id="application-form" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-serif font-normal text-[#1D67CD] tracking-tight">
              Your ambition is as bold as ours.
            </h2>
            <p className="text-slate-500">
              Submit your profile directly to our hiring panel. Complete all details below.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200/60 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-in zoom-in duration-200">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">Application Submitted!</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Thank you for applying to BNC. Our recruitment panel will review your credentials and contact you shortly.
                </p>
                <button
                  onClick={() => { setIsSubmitted(false); setFormData({ name:'', email:'', phone:'', address:'', position:'Select position', joiningDate:'', experience:'', cv:null }); }}
                  className="px-6 py-2 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-blue-600 transition-colors text-sm cursor-pointer"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1D67CD]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Mobile */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1D67CD]"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="State, City, Country"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1D67CD]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Position */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                      Applying For *
                    </label>
                    <select
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1D67CD] bg-white"
                    >
                      <option>Select position</option>
                      <option>Intern</option>
                      <option>Associate</option>
                      <option>Consultant</option>
                      <option>Manager</option>
                    </select>
                  </div>

                  {/* Date Picker */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Tentative Joining Date *
                    </label>
                    <input
                      type="date"
                      name="joiningDate"
                      required
                      value={formData.joiningDate}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1D67CD]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Experience */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="year of experiene"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1D67CD]"
                    />
                  </div>

                  {/* CV Upload */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                      <UploadCloud className="w-3.5 h-3.5 text-slate-400" />
                      Upload Your CV * (PDF, Word max 15MB)
                    </label>
                    <div className="relative border-2 border-dashed border-slate-200 hover:border-[#1D67CD] rounded-2xl p-3 text-center cursor-pointer transition-colors bg-slate-50/50">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <span className="text-slate-500 text-xs font-medium">
                        {formData.cv ? formData.cv.name : 'Click to select file or drag here'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full font-bold bg-[#1D67CD] text-white hover:bg-blue-600 transition-colors text-sm cursor-pointer"
                  >
                    Next
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 5. Footer Banner */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={careersFooter}
            alt="Your ambition is as bold as ours background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight">
            Your ambition is as bold as ours.
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            BNC provides a premium platform for learning and professional growth, combined with active mentorship and hands-on client engagement.
          </p>
        </div>
      </section>

    </div>
  )
}
