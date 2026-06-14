const partners = [
  { name: 'Air India', logo: '/images/partners/air-india.png' },
  { name: 'Aramex', logo: '/images/partners/aramex.png' },
  { name: 'CMA CGM', logo: '/images/partners/cma-cgm.png' },
  { name: 'Etihad', logo: '/images/partners/etihad.png' },
  { name: 'Hapag-Lloyd', logo: '/images/partners/hapag-lloyd.png' },
  { name: 'Lufthansa', logo: '/images/partners/lufthansa.png' },
  { name: 'Maersk', logo: '/images/partners/maersk.png' },
  { name: 'MOL', logo: '/images/partners/mol.png' },
  { name: 'Qatar Airways', logo: '/images/partners/qatar-airways.png' },
  { name: 'Thai Airways', logo: '/images/partners/thai-airways.png' },
  { name: 'UPS', logo: '/images/partners/ups.png' },
]

export function PartnersStrip() {
  const doubled = [...partners, ...partners]

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold font-heading text-[#c00] tracking-wide uppercase">
          Our Valued Partners
        </h2>
      </div>

      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="inline-flex items-center justify-center shrink-0 h-14 px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
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
