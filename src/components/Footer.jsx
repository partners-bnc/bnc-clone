import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'
import logoWhite from '../assets/logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/bnc-global-consulteck/',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bncglobal.in/',
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/bncglobal.in/',
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@bncglobalconsultech',
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      name: 'X',
      url: 'https://twitter.com/GoyalSummit',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-[#0b2f5b] text-white/80 h-auto py-8 md:h-[219px] flex items-center border-t border-white/10 font-sans leading-[20.8px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section: Logo & Copyright */}
        <div className="flex flex-col items-start space-y-2">
          <Link to="/" aria-label="BNC Global Home Page" className="rounded focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none">
            <img className="h-[91px] w-[247px] object-contain" src={logoWhite} alt="BNC Global Logo" />
          </Link>
          <p className="text-[16px] text-white font-sans leading-[20.8px]">
            Copyrights &copy; {currentYear} BNC Global Consultech Pvt. Ltd.
          </p>
        </div>

        {/* Center Section: Contacts & Socials */}
        <div className="flex flex-col items-center space-y-3">
          <div className="flex flex-col items-center text-[16px] text-white space-y-1 leading-[20.8px]">
            <a href="mailto:info@bncglobal.in" className="hover:text-teal-400 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none rounded transition-colors" aria-label="Email BNC Global">
              info@bncglobal.in
            </a>
            <a href="tel:+919810575613" className="hover:text-teal-400 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none rounded transition-colors" aria-label="Call BNC Global">
              +91 98105 75613
            </a>
          </div>
          {/* Socials */}
          <nav aria-label="Social Media Links" className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Follow BNC Global on ${social.name}`}
                className="w-[22px] h-[22px] text-white hover:text-teal-400 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none rounded transition-all flex items-center justify-center"
              >
                {social.icon}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Section: Privacy & Blog Links */}
        <nav aria-label="Footer Links" className="flex flex-col items-end text-[16px] space-y-2">
          <Link to="/privacy-policy" className="text-[#BFD9ED] hover:text-white focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none rounded transition-colors">
            Privacy Policy
          </Link>
          <a href="https://www.bncglobal.in/blog/categories/soc-consultant" target="_blank" rel="noopener noreferrer" className="text-[#BFD9ED] hover:text-white focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none rounded transition-colors">
            Blog
          </a>
        </nav>

      </div>
    </footer>
  )
}
