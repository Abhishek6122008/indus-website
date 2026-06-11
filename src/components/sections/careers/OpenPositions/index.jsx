import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { MapPin, Clock, ArrowRight } from 'lucide-react'

const jobs = [
  {
    title: 'Logistics Operations Manager',
    department: 'Operations & Logistics',
    location: 'New Delhi, Delhi',
    type: 'Full-time',
    description: 'Lead supply chain coordination, dispatch oversight, and logistics resource optimization.',
  },
  {
    title: 'Enterprise Sales Executive',
    department: 'Business Development',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    description: 'Grow client base, secure partnerships, and expand market share for business solutions.',
  },
  {
    title: 'Frontend Developer (Next.js)',
    department: 'Technology',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build responsive, pixel-perfect user interfaces and manage client-facing web application development.',
  },
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.title} hover className="flex flex-col h-full bg-white justify-between">
              <div>
                <div className="flex justify-between items-start mb-4 gap-2">
                  <Badge variant="blue">{job.department}</Badge>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                  {job.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {job.description}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-6 border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    {job.location}
                  </span>
                </div>
                <Button
                  href={`mailto:info@theindusgroup.com?subject=Application for ${job.title}`}
                  variant="outline"
                  className="w-full text-center group"
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
