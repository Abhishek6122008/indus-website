import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ServiceFeatures({ 
  features, 
  heading = 'What We Offer',
  customLayout = false,
  servicesTable,
  advantages,
  audience,
  strategies,
  gridImages
}) {
  if (customLayout) {
    return (
      <>
        {/* Our Products and Services Table */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-center text-xl font-bold text-blue-600 mb-8 font-heading">{heading}</h2>
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-4 font-semibold text-slate-700 text-sm">
                <div className="col-span-1">Product/Service</div>
                <div className="col-span-2 pl-4">Description</div>
              </div>
              {servicesTable?.map((row, idx) => (
                <div key={idx} className={`grid grid-cols-3 p-5 text-sm items-start border-b last:border-0 border-slate-100 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                  <div className="col-span-1 font-medium text-slate-900 pr-2">{row.id}</div>
                  <div className="col-span-2 text-slate-600 leading-relaxed text-xs pl-4">{row.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-center text-xl font-bold text-blue-600 mb-10 font-heading">Our Competitive Advantages</h2>
            <div className="space-y-4">
              {advantages?.map((item) => (
                <div key={item.id} className="flex items-stretch bg-white border border-slate-100 shadow-sm rounded-lg overflow-hidden">
                  <div className="bg-blue-100 text-blue-700 w-16 flex items-center justify-center font-bold text-lg shrink-0">
                    {item.id}
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-slate-900 mb-1 font-heading">{item.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Panels */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-center text-xl font-bold text-blue-600 mb-10 font-heading">Our Target Audience</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {audience?.map((aud, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">🎯</div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-0.5 font-heading">{aud.title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{aud.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative rounded-xl overflow-hidden border border-blue-100 shadow-sm aspect-square">
                <Image
                  src="/images/businesses/enterprise/target-market.png"
                  alt="Target market breakdown"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Growth Strategy Module */}
        <section className="py-16 bg-blue-50/40 border-b border-blue-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-900 mb-1 font-heading">Our Growth Strategy</h2>
            <p className="text-slate-500 text-xs mb-6">Our strategic initiatives are designed to drive sustained growth.</p>
            <div className="space-y-4">
              {strategies?.map((strat) => (
                <div key={strat.id} className="flex gap-4 items-start">
                  <span className="w-7 h-7 rounded bg-white shadow-sm flex items-center justify-center font-bold text-slate-800 text-xs border border-slate-100 shrink-0">{strat.id}</span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5 font-heading">{strat.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{strat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overlay Grid */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-blue-600 mb-8 font-heading">Our Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {gridImages?.map((gridItem, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden aspect-[5/4] border border-slate-100 shadow-sm">
                  <Image
                    src={gridItem.image}
                    alt={gridItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Our Services" title={heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features?.map((f) => (
            <div
              key={f.title}
              className="bg-blue-50 border border-blue-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-md transition-all"
            >
              {f.image ? (
                <div className="relative w-full h-44">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}

              <div className="p-7">
                {f.Icon && (
                  <div className="w-11 h-11 rounded-xl bg-white border border-blue-200 flex items-center justify-center mb-5 shadow-sm">
                    <f.Icon className="w-5 h-5 text-blue-600" />
                  </div>
                )}
                <h3 className="text-slate-900 font-semibold font-heading text-base mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}