import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { TrendingUp, Users, Target, BookOpen } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'We prioritize internal promotion and provide clear pathways for professional advancement and mentorship.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'A supportive, diverse team environment where open communication and fresh ideas are always encouraged.',
  },
  {
    icon: Target,
    title: 'Meaningful Impact',
    description: 'Work on large-scale logistics, enterprise, skill development, and infrastructure projects that empower Indian MSMEs.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Access to ongoing training, skill development programs, industry workshops, and educational sponsorship.',
  },
]

export function WhyWorkWithUs() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Culture & Values"
          title="Why Work With Us"
          subtitle="Be part of a dynamic, forward-thinking team dedicated to excellence across multiple industries."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <Card key={benefit.title} hover className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {benefit.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
