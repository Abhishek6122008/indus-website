import Image from 'next/image'

const corporateTeam = [
  {
    name: 'O.P. Singh',
    role: 'Emeritus Chairman',
    image: '/images/about/team/op-singh.jpeg'
  },
  {
    name: 'Dr. P.K. Singh',
    role: 'Group C.E.O.',
    image: '/images/about/team/pk-singh.jpeg'
  },
  {
    name: 'Debdutta Ghosh',
    role: 'Group CHRO',
    image: '/images/about/team/debdutta-ghosh.jpeg'
  },
  {
    name: 'Shruti Singh',
    role: 'Board Advisor - LSCM',
    image: '/images/about/team/shruti-singh.jpeg'
  },
  {
    name: 'Adv. Dr. K.R. Madhar (I.R.S. Retd.)',
    role: 'Delhi High Court',
    image: '/images/about/team/kr-madhar.jpeg'
  },
  {
    name: 'Adv. Kailash Chand',
    role: 'Former Assistant Commissioner of Customs & GST (retd.)',
    image: '/images/about/team/kailash-chand.jpeg'
  },
  {
    name: 'Adv. Gaurav Bhardwaj',
    nameSuffix: '(Supreme Court of India)',
    role: 'Head Advisory Board, Legal',
    image: '/images/about/team/gaurav-bhardwaj.jpeg'
  },
  {
    name: 'Ananya Singh',
    role: 'Strategist, Legal',
    image: '/images/about/team/ananya-singh.jpeg',
    objectPosition: 'object-[center_20%]'
  },
  {
    name: 'Dr. Tanu Manocha',
    role: 'Strategic Board Advisor, Operations',
    image: '/images/about/team/tanu-manocha.jpeg',
    objectPosition: 'object-center'
  },
  {
    name: 'Dr.Vijay Prakash Sharma',
    role: 'Group Advisor- Business Strategy',
    image: '/images/about/team/vijay-prakah-sharma.jpeg'
  },
  {
    name: 'Dr. Archana Pandey',
    role: 'Director - L&D',
    image: '/images/team/archana-pandey.jpeg',
    group: 'Core Team',
  },
  {
    name: 'Nihar Parida',
    role: 'Head of Advisory Board, LSCM',
    image: '/images/team/nihar-parida.jpeg',
    group: 'Core Team',
    }
    {
    name: 'Pawan kumar Sharma',
    role: 'SBU Head- EXIM & Customs',
    image: '/images/team/pawan-kumar-sharma',
    group: 'Core Team',
    }

]

export function MeetOurTeam() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Custom Subtitle Line */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-blue-600" />
            <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase font-heading">
              Leadership
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-heading">
            Our Leadership
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            The dedicated experts driving operational excellence, design strategy, and market analysis across our divisions.
          </p>
        </div>

        {/* Grid Structure */}
        <div className="grid grid-cols-4 gap-8">
          {corporateTeam.map((member, idx) =>
            member.placeholder ? (
              <div key={`placeholder-${idx}`} className="rounded-2xl border border-slate-100 bg-white" />
            ) : (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-slate-100"
              >
                {/* Photo at the top (edge-to-edge) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.objectPosition || 'object-top'}`}
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>

                {/* Text details at the bottom */}
                <div className="p-6 text-center flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-slate-800 mb-1.5 font-heading">
                    {member.name}
                  </h3>
                  {member.nameSuffix && (
                    <p className="text-sm font-medium text-slate-900 mb-1.5">
                      {member.nameSuffix}
                    </p>
                  )}
                  <p className="text-sm font-semibold text-blue-600 px-2 leading-relaxed text-center whitespace-pre-line">
                    {member.role}
                  </p>
                </div>
              </div>
            )
          )}
          {Array.from({ length: (4 - (corporateTeam.length % 4)) % 4 }).map((_, i) => (
            <div key={`empty-${i}`} className="rounded-2xl border border-slate-100 bg-white" />
          ))}
        </div>

      </div>
    </section>
  )
}