import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'

const team = [
  {
    name: 'O.P. Singh',
    role: 'Emeritus Chairman',
    image: '/images/about/O.P. Singh.jpg',
  },
  {
    name: 'Dr. P.K. Singh',
    role: 'Group C.E.O.',
    image: '/images/about/Dr. P.K. Singh.jpg',
  },
  {
    name: 'Adv. Gaurav Bhardwaj',
    role: 'Board Advisor, Legal – Indus Group (Adv. Supreme Court of India)',
    image: '/images/about/Adv. Gaurav Bhardwaj.jpg',
  },
  {
    name: 'Debdutta Ghosh',
    role: 'Group CHRO',
    image: '/images/about/Debdutta Ghosh.jpg',
  },
  {
    name: 'Dr. Vijay Prakash Sharma',
    role: 'Group Advisor- Business Strategy',
    image: '/images/about/Dr. Vijay Prakash Sharma.jpg',
  },
  {
    name: 'Shruti Singh',
    role: 'Board Advisor - LSCM',
    image: '/images/about/Shruti Singh.jpg',
  },
]

export function OurCoreTeam() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Leadership"
          title="Our Core Team"
          subtitle="The experienced leaders driving our vision and business strategy."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {team.map((member) => (
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
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              
              {/* Text details at the bottom */}
              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-800 mb-1.5 font-heading">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600 px-2 leading-relaxed">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
