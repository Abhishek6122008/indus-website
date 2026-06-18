import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function ServiceHero({ title, subtitle, slug, steps, team, customIntro = false }) {
  if (customIntro) {
    return (
      <>
        {/* Main Title Banner */}
        <section className="py-20 bg-white border-b border-slate-100 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 font-heading">
              {title}
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <Button variant="primary" size="lg">Discover Indus</Button>
          </div>
        </section>

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
                    <span className="text-amber-500 font-bold text-sm mb-1 block font-heading">{step.num}</span>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {team.map((member, idx) => (
                  <Card key={idx} className="bg-white border border-slate-100 shadow-sm p-4 rounded-lg">
                    <div className="w-full h-36 bg-gradient-to-tr from-blue-50 to-indigo-50 flex items-center justify-center text-3xl mb-3 rounded-md">
                      {member.avatar}
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

  return (
    <PageHero
      label="Business Vertical"
      title={title}
      subtitle={subtitle}
      breadcrumbs={[
        { label: 'Businesses', href: '/businesses' },
        { label: title },
      ]}
    />
  )
}