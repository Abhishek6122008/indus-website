import { SectionHeading } from '@/components/ui/SectionHeading'
import { TeamMemberCard } from '@/components/sections/team/TeamMemberCard'
import { teamMembers } from '@/components/sections/team/teamData'

const coreTeam = teamMembers.filter((m) => m.group === 'Core Team')
const enterpriseTeam = teamMembers.filter((m) => m.group === 'Enterprise Team')

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
          <div className="grid grid-cols-4 gap-8">
            {coreTeam.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
            {Array.from({ length: (4 - (coreTeam.length % 4)) % 4 }).map((_, i) => (
              <div key={`empty-${i}`} className="rounded-2xl border border-blue-100 bg-white" />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Team */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="2026 Batch"
            title="Our Team"
          />
          <div className="grid grid-cols-3 gap-8">
            {enterpriseTeam.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}