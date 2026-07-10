import Image from 'next/image'

const perks = [
  {
    title: 'Employee Assistance Program',
    desc: 'Access resources to support your mental health and well-being.',
    image: '/images/careers/perk-assistance.png',
  },
  {
    title: 'Generous Leave Policies',
    desc: 'Flexible leave for personal and family needs.',
    image: '/images/careers/perk-leave.png',
  },
  {
    title: 'Recognition and Rewards',
    desc: 'Your efforts don’t go unnoticed — monthly recognition & rewards.',
    image: '/images/careers/perk-recognition.png',
  },
]

export function PerksBenefits() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

          {/* Intro */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0b1f5c] mb-2 inline-block border-b-4 border-blue-600 pb-2">
              Perks &amp; Benefits
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Joining The Indus Group isn’t just a career move; it’s an opportunity to enjoy a host
              of perks and benefits that enhance your professional and personal life. Experience a
              workplace that values your well-being and growth.
            </p>
          </div>

          {/* Perk cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src={perk.image}
                    alt={perk.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-blue-600 font-bold font-heading text-sm uppercase tracking-wide mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
