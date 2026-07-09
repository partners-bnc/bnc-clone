import communitiesBanner from '../assets/communities_banner.jpg'

export default function Communities() {
  const communityGroups = [
    {
      name: 'BNC - Virtual CFO',
      href: 'https://chat.whatsapp.com/E7kwwJqK1659tWx7C84ujz',
    },
    {
      name: 'BNC - Global',
      href: 'https://chat.whatsapp.com/Gc1TFlIIFng90dyR9GW4Kn',
    },
    {
      name: 'BNC - Hiring',
      href: 'https://chat.whatsapp.com/JEDY1ljMVyaFpI0e6SLJcb',
    },
    {
      name: 'BNC - ESG Consulting',
      href: 'https://chat.whatsapp.com/EmBnS8hWFtg0O7d6ubVycS',
    },
    {
      name: 'BNC - GCC Services',
      href: 'https://chat.whatsapp.com/LqiBA1zNWWSDoGG8uTV3BX',
    },
    {
      name: 'BNC - Debt Financing',
      href: 'https://chat.whatsapp.com/JNscMqLHiVG0b8bhnXDLsA',
    },
  ]

  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Staggered Overlapping Hero Section (Pixel-Perfect Alignment) */}
      <section className="bg-white py-16 md:py-24 flex justify-center overflow-hidden">
        <div className="w-full max-w-[1360px] px-4 md:px-0">
          
          <div className="relative h-[480px] md:h-[448px] w-full flex flex-col md:block">
            
            {/* People-walking image on the left (w-[63.3%] matching live site) */}
            <div className="w-full md:w-[63.3%] h-[240px] md:h-[362px] md:absolute md:left-0 md:top-0 z-0">
              <img
                src={communitiesBanner}
                alt="BNC Communities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navy box overlapping on the right (w-[63.3%] and top-[80px]) */}
            <div className="w-full md:w-[63.3%] h-auto md:h-[367.6px] bg-[#0B2F5B] text-white p-8 md:p-12 md:pl-[140px] md:pr-16 flex flex-col justify-center md:absolute md:right-0 md:top-[80px] z-10 mt-6 md:mt-0">
              <div className="space-y-4">
                <h1 className="text-[36px] md:text-[56px] font-display font-extrabold text-[#1D67CD] leading-tight">
                  Communities
                </h1>
                <p className="text-[16px] md:text-[18px] text-white leading-relaxed font-sans font-normal max-w-[420px]">
                  Join our profile-specific WhatsApp communities now to receive real-time updates on new opportunities with BNC.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WhatsApp Channels Grid Section (Solid Navy Background) */}
      <section className="bg-[#0B2F5B] py-20 md:py-24 flex justify-center">
        <div className="w-full max-w-[1122px] px-6 lg:px-0">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {communityGroups.map((group, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-5"
              >
                {/* Title */}
                <h3 className="text-[20px] font-display font-bold text-white leading-tight">
                  {group.name}
                </h3>
                
                {/* Subtitle */}
                <p className="text-[13px] text-[#BFD9ED] font-avenir font-normal">
                  WhatsApp Community
                </p>

                {/* Button */}
                <div className="pt-2">
                  <a
                    href={group.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-[163px] h-[39px] flex items-center justify-center rounded-full bg-[#E5EBFA] text-[11px] font-semibold text-slate-800 hover:bg-[#1D67CD] hover:text-white transition-all shadow-sm active:scale-98 cursor-pointer"
                  >
                    Join
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
