import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TeamMemberCard } from '@/components/sections/team/TeamMemberCard'
import { teamMembers } from '@/components/sections/team/teamData'

const coreTeam = teamMembers.filter((m) => m.group === 'Core Team')

export function TeamGrid() {
  return (
    <>
      {/* Core Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Leadership"
            title="Core Team"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coreTeam.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="2026 Batch"
            title="Our Team"
          />
          <div className="flex justify-center">
            <Image
              src="/images/team/interns-2026.jpeg"
              alt="Indus Group 2026 Interns"
              width={800}
              height={1000}
              className="rounded-2xl shadow-lg w-full max-w-2xl"
            />
          </div>
        </div>
      </section>
    </>
  )
}