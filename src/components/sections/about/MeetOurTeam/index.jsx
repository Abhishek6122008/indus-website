import Image from 'next/image'
import { Card } from '@/components/ui/Card'

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
    name: 'Adv. Gaurav Bhardwaj',
    role: 'Board Advisor, Legal – Indus Group (Adv. Supreme Court of India)',
    image: '/images/about/team/gaurav-bhardwaj.jpeg'
  },
  {
    name: 'Debdutta Ghosh',
    role: 'Group CHRO',
    image: '/images/about/team/debdutta-ghosh.jpeg'
  },
  {
    name: 'Dr.Vijay Prakash Sharma',
    role: 'Group Advisor- Business Strategy',
    image: '/images/about/team/vijay-sharma.jpeg'
  },
  {
    name: 'Shruti Singh',
    role: 'Board Advisor - LSCM',
    image: '/images/about/team/shruti-singh.jpeg'
  },
  {
    name: 'Dr. Tannu',
    role: 'Advisor',
    image: '/images/about/team/tannu.jpeg'
  },
  {
    name: 'Dr. K.R. Madhar',
    role: 'Strategic Advisor - Board',
    image: '/images/about/team/kr-madhar.jpeg'
  },
  {
    name: 'Mr. Kailash Chand',
    role: 'Strategic Board- Advisor',
    image: '/images/about/team/kailash-chand.jpeg'
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
              Our Experts
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-heading">
            Meet Our Team
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            The dedicated experts driving operational excellence, design strategy, and market analysis across our divisions.
          </p>
        </div>

        {/* Responsive Grid Structure */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {corporateTeam.map((member) => (
            <Card 
              key={member.name} 
              hover 
              className="bg-white border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center rounded-xl"
            >
              {/* Perfectly sized circular image wrapper */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-5 border-2 border-slate-100 bg-slate-100 shadow-sm shrink-0">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>

              {/* Meta Content */}
              <div>
                <h3 className="font-bold text-slate-900 text-base font-heading tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mt-1 uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}