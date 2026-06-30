import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const jobs = [
  {
    title: 'Trainer / Faculty',
    department: 'Skill Development',
    description: 'Deliver engaging training sessions, develop course material, and mentor learners across our skill development and certification programs.',
  },
  {
    title: 'Freelancers',
    department: 'Operations',
    description: 'Support cross-vertical operational strategies and manage variable client requirements.',
  },
  {
    title: 'Sales and Marketing',
    department: 'Marketing',
    description: 'Execute campaigns, capture local markets, and build brand awareness for enterprise products.',
  },
  {
    title: 'Channel Partners',
    department: 'Business Development',
    description: 'Establish strategic market channels, expand corporate networking, and secure regional growth.',
  }
]

export function OpenPositions() {
  return (
    <section className="section-padding bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Opportunities"
          title="Open Positions"
          subtitle="Explore our current openings and find where you can make a difference."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {jobs.map((job) => (
            <Card key={job.title} hover className="flex flex-col h-full bg-white justify-between p-6">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="blue">{job.department}</Badge>
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                  {job.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {job.description}
                </p>
              </div>
              <div>
                <Button
                  href={`mailto:info@theindusgroup.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  variant="outline"
                  className="w-full text-center group flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}