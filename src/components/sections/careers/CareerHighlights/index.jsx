import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const jobs = [
  {
    title: 'Trainer / Faculty',
    department: 'Skill Development',
    description: 'Deliver engaging training sessions, develop course material, and mentor learners across our skill development and certification programs.',
    image: '/images/careers/trainer.png',
  },
  {
    title: 'Freelancers',
    department: 'Growth',
    description: 'Support cross-vertical operational strategies and manage variable client requirements.',
    image: '/images/careers/freelancer.png',
  },
  {
    title: 'Sales and Marketing',
    department: 'Marketing',
    description: 'Execute campaigns, capture local markets, and build brand awareness for enterprise products.',
    image: '/images/careers/sales.png',
  },
  {
    title: 'Channel Partners',
    department: 'Business Development',
    description: 'Establish strategic market channels, expand corporate networking, and secure regional growth.',
    image: '/images/careers/channel.png',
  },
]

export function CareerHighlights() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="relative rounded-2xl overflow-hidden group min-h-[360px] flex flex-col justify-end shadow-sm"
            >
              <Image
                src={job.image}
                alt={job.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative z-10 p-6 text-white">
                <span className="inline-block text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  {job.department}
                </span>
                <p className="text-lg font-bold font-heading leading-snug mb-3">
                  {job.title}
                </p>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  {job.description}
                </p>
                <Link
                  href={`mailto:info@theindusgroup.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
