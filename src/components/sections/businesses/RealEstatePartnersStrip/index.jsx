const partners = [
  { name: 'ROF', logo: '/images/businesses/real-estate/partners/ROF.png' },
  { name: 'MRG', logo: '/images/businesses/real-estate/partners/MRG.png' },
  { name: 'Rising Homes', logo: '/images/businesses/real-estate/partners/Rising Homes.png' },
  { name: 'Microtek Infrastructures', logo: '/images/businesses/real-estate/partners/Microtek.png' },
  { name: 'Signature Global', logo: '/images/businesses/real-estate/partners/Signature Global.png' },
  { name: 'Krisumi', logo: '/images/businesses/real-estate/partners/Krisumi.png' },
  { name: 'Ansal API', logo: '/images/businesses/real-estate/partners/Ansal API.png' },
  { name: 'JMS Group', logo: '/images/businesses/real-estate/partners/JMS Group.png' },
  { name: 'M3M', logo: '/images/businesses/real-estate/partners/M3M.png' },
  { name: 'DLF', logo: '/images/businesses/real-estate/partners/DLF.png' },
]

export function RealEstatePartnersStrip() {
  const doubled = [...partners, ...partners]

  return (
    <section className="py-12 bg-blue-50 border-y border-slate-100">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold font-heading text-slate-900 tracking-wide uppercase">
          Our Real Estate Partners
        </h2>
      </div>

      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="inline-flex items-center justify-center shrink-0 h-14 px-4 opacity-90 hover:opacity-100 transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 max-w-[130px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}