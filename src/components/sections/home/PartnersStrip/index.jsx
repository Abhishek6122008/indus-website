const partners = [
  { name: 'UPS', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/UPS_Logo_Shield_2017.svg' },
  { name: 'Hapag-Lloyd', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Hapag-Lloyd_logo.svg' },
  { name: 'Qatar Airways Cargo', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Qatar_Airways_Logo.svg' },
  { name: 'CMA CGM', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/CMA_CGM_logo.svg' },
  { name: 'Aramex', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Aramex_logo.svg' },
  { name: 'Etihad Cargo', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Etihad_Airways_Logo.svg' },
  { name: 'MOL', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/MOL_Logo.svg' },
  { name: 'Thai Airways', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Thai_Airways_Logo.svg' },
  { name: 'Air India', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Air_India_Logo.svg' },
  { name: 'Lufthansa Cargo', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Lufthansa_Logo_2018.svg' },
  { name: 'Maersk', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Maersk_Logo_2014.svg' },
]

export function PartnersStrip() {
  const doubled = [...partners, ...partners]

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-xl font-bold font-heading text-[#c00] tracking-wide uppercase">
          Our Valued Partners
        </h2>
      </div>

      <div className="overflow-hidden relative">
        {/* Fade edges */}
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
                className="max-h-10 max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
