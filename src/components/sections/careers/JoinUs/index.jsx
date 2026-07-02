import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function JoinUs() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/careers/join-our-team.png"
              alt="Join our team at The Indus Group"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Embark on a fulfilling journey with The Indus Group, where passion meets purpose.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Join a team that values innovation, collaboration, and a commitment to excellence.
              We’re on the lookout for dynamic individuals who share our vision for transforming
              logistics, enterprise, skill development, and infrastructure across India. If you’re
              ready to be a part of something big, explore our career opportunities today.
            </p>
            <Link
              href="mailto:info@theindusgroup.com?subject=General Application - Careers"
              className="inline-flex items-center gap-2 bg-[#0b1f5c] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-blue-800 transition-colors shadow-lg"
            >
              Join Us
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
