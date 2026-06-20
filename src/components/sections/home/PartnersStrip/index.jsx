'use client'

import { useState } from 'react'

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

const trustedBy = [
  { name: 'Ingersoll Rand', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Ingersoll_Rand_logo.svg' },
  { name: 'Eltek', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Eltek_logo.svg' },
  { name: 'Synopsys', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Synopsys_Logo.svg' },
  { name: 'Eaton', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Eaton_Corporation_logo.svg' },
  { name: 'East India Technologies', logo: '/images/partners/east-india-technologies.png' },
  { name: 'Gautam Solar', logo: '/images/partners/gautam-solar.png' },
  { name: 'Caryaire', logo: '/images/partners/caryaire.png' },
  { name: 'Alpha', logo: '/images/partners/alpha.png' },
  { name: 'Healthcaps', logo: '/images/partners/healthcaps.png' },
]

function PartnerLogo({ item }) {
  const [error, setError] = useState(false)

  if (error || !item.logo) {
    return (
      <span className="text-slate-400 font-semibold tracking-wider text-sm select-none">
        {item.name}
      </span>
    )
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={item.logo}
      alt={item.name}
      className="max-h-10 max-w-[120px] object-contain"
      onError={() => setError(true)}
    />
  )
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className={`flex gap-16 whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="inline-flex items-center justify-center shrink-0 h-14 px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <PartnerLogo item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function PartnersStrip() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 space-y-10">

      {/* Our Valued Partners */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold font-heading text-[#c00] tracking-wide uppercase">
            Our Valued Partners
          </h2>
        </div>
        <MarqueeRow items={partners} />
      </div>

      {/* Trusted By */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold font-heading text-[#c00] tracking-wide uppercase">
            Trusted By
          </h2>
        </div>
        <MarqueeRow items={trustedBy} reverse />
      </div>

    </section>
  )
}
