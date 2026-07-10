import { SectionHeading } from '@/components/ui/SectionHeading'
import { TeamMemberCard } from '@/components/sections/team/TeamMemberCard'
import { teamMembers } from '@/components/sections/team/teamData'

const coreTeam = teamMembers.filter((m) => m.group === 'Core Team')
const enterpriseTeam = teamMembers.filter((m) => m.group === 'Enterprise Team')

export function TeamGrid() {
  return (
    <>

      {/* Enterprise Team */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label=""
            title="Our Team"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {enterpriseTeam.map((member, i) => (
              <TeamMemberCard key={`${member.name}-${i}`} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}