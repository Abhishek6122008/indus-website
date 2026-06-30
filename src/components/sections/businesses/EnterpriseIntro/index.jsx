import Image from 'next/image'
import { Card } from '@/components/ui/Card'

export function EnterpriseIntro({ steps, team }) {
  return (
    <>
      {/* Who We Are Context Card */}
      <section className="py-12 bg-slate-50 flex justify-center">
        <div className="bg-white border border-slate-100 shadow-sm max-w-2xl mx-auto p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 font-heading">Who We Are</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            At Indus, we&apos;re passionate about powering India&apos;s economic growth through impactful projects.
            We achieve this by providing comprehensive enterprise solutions, from expert startup consulting and
            legal assistance to cutting-edge digital marketing and vital HR support, helping businesses thrive nationwide.
          </p>
        </div>
      </section>

      {/* 3 Simple Steps */}
      {steps && (
        <section className="py-16 bg-white border-y border-slate-100 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-blue-600 mb-10 font-heading">
              How We Help Startups/SMEs In 3 Simple Steps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <Card key={idx} className="p-6 border border-slate-100 bg-white shadow-sm flex flex-col justify-center min-h-[140px]">
                  <span className="text-blue-600 font-bold text-sm mb-1 block font-heading">{step.num}</span>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The Enterprise Team Panel */}
      {team && (
        <section className="py-16 bg-slate-50 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-blue-600 mb-10 font-heading">The Enterprise Team</h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              {team.map((member, idx) => (
                <Card key={idx} className="bg-white border border-slate-100 shadow-sm p-4 rounded-lg w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)]">
                  <div className="w-full aspect-[3/4] mb-3 rounded-md overflow-hidden relative bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-[center_15%]"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{member.name}</h4>
                  <p className="text-blue-600 text-xs mt-0.5 font-medium">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
