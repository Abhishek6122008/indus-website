const clients = [
  { name: 'Gautam Solar', logo: '/images/clients/Gautam Solar.png' },
  { name: 'Akums', logo: '/images/clients/Akums.png' },
  { name: 'Alpha', logo: '/images/clients/Alpha.png' },
  { name: 'Fidelis Etairos', logo: '/images/clients/Fidelis.png' },
  { name: 'Eastman Impex', logo: '/images/clients/Eastman Impex.png' },
  { name: 'HealthCaps HC', logo: '/images/clients/HealthCaps HC.png' },
  { name: 'Ingersoll Rand', logo: '/images/clients/Ingersoll Rand.png' },
  { name: 'Eltek', logo: '/images/clients/Eltek.png' },
  { name: 'Caryaire', logo: '/images/clients/Caryaire.png' },
  { name: 'Synopsys', logo: '/images/clients/Synopsys.png' },
  { name: 'East India Technologies', logo: '/images/clients/East India Technologies.png' },
  { name: 'Eaton', logo: '/images/clients/Eaton.png' },
]

export function TrustedByStrip() {
  const doubled = [...clients, ...clients]

  return (
    <section className="py-12 bg-blue-50 border-y border-slate-100">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold font-heading text-slate-900 tracking-wide uppercase">
          Trusted By
        </h2>
      </div>

      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-16 animate-marquee-reverse whitespace-nowrap">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="inline-flex items-center justify-center shrink-0 h-14 px-4 opacity-90 hover:opacity-100 transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 max-w-[130px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}