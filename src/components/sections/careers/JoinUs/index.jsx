import Image from 'next/image'

export function JoinUs() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0b1f5c] mb-2 inline-block border-b-4 border-blue-600 pb-2">
              Join Us
            </h2>
            <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
              <p>
                The Indus Group Co. is a multi-vertical enterprise delivering industry-leading
                solutions across Logistics, Enterprise Solutions, Skill Development, and Real Estate.
              </p>
              <p>
                We move fast, operate under pressure, and solve real business problems for MSMEs and
                enterprises across India.
              </p>
              <p>
                Our aim is to attract the highest quality of talent and provide them opportunities for
                leadership and professional growth in a diverse and inclusive environment.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            {/* TODO(image): swap for a real Indus office/facility photo when provided. */}
            <Image
              src="/images/hero/hero-background.jpg"
              alt="The Indus Group workplace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
