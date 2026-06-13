import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Rocket, Users, Lightbulb, GraduationCap, MapPin, Mail } from 'lucide-react'
import { WhyWorkWithUs } from '@/components/sections/careers/WhyWorkWithUs'
import { OpenPositions } from '@/components/sections/careers/OpenPositions'
import { CareersCTA } from '@/components/sections/careers/CareersCTA'

export const metadata = {
  title: 'Careers | The Indus Group of Co.',
  description:
    'Join The Indus Group of Co. — explore open positions and build your career with a team that values growth, culture, and impact.',
}

const benefits = [
  {
    icon: Rocket,
    title: 'Accelerated Growth',
    description:
      'Fast-track your career with real ownership from day one. We promote from within and reward performance.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description:
      'Work alongside driven professionals who support each other. Open communication and respect are non-negotiable.',
  },
  {
    icon: Lightbulb,
    title: 'Real Impact',
    description:
      'Your work directly shapes the businesses we serve. Every contribution matters — not just to us, but to the MSMEs we empower.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description:
      'Access mentorship, cross-vertical exposure, and industry events that keep you sharp and ahead of the curve.',
  },
]

const openPositions = [
  {
    title: 'Business Development Executive',
    department: 'Sales & Growth',
    location: 'New Delhi, India',
    type: 'Full-time',
  },
  {
    title: 'Logistics Coordinator',
    department: 'Operations',
    location: 'Noida, India',
    type: 'Full-time',
  },
  {
    title: 'Digital Marketing Intern',
    department: 'Marketing',
    location: 'Remote',
    type: 'Internship',
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Join Our Team"
        title="Careers"
        subtitle="Be part of a team that's reshaping how businesses grow across India. We're always looking for passionate people."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Why Work With Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Indus"
            title="Why Work With Us"
            subtitle="We believe the best work happens when people feel valued, challenged, and part of something bigger."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} hover className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 font-heading mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Now Hiring"
            title="Open Positions"
            subtitle="Find a role that matches your skills and ambitions. All positions are based in India."
          />
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {openPositions.map((position) => (
              <Card key={position.title} hover className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-slate-900 font-heading text-lg">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="blue">{position.department}</Badge>
                    <Badge variant="default">{position.type}</Badge>
                    <span className="flex items-center gap-1 text-sm text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {position.location}
                    </span>
                  </div>
                </div>
                <Button
                  href={`mailto:info@theindusgroup.com?subject=Application — ${encodeURIComponent(position.title)}`}
                  variant="primary"
                  size="sm"
                  external
                  className="shrink-0"
                >
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>

          {/* Closing CTA */}
          <div className="mt-12 text-center">
            <Card className="inline-block max-w-xl w-full">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-slate-700 font-medium">Don&apos;t see your role listed?</p>
                <p className="text-slate-500 text-sm">
                  We&apos;re always open to exceptional talent. Send your CV directly and let&apos;s start a conversation.
                </p>
                <Button
                  href="mailto:info@theindusgroup.com?subject=Open Application — CV Submission"
                  variant="outline"
                  size="sm"
                  external
                >
                  Send Your CV
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
