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
                  <div className="bg-amber-100 text-amber-800 w-16 flex items-center justify-center font-bold text-lg shrink-0">
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
                    <div className="w-8 h-8 rounded-md bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">🎯</div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-0.5 font-heading">{aud.title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{aud.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-100 p-6 rounded-xl flex flex-col items-center justify-center min-h-[220px] text-center">
                <span className="text-4xl mb-2">📊</span>
                <h4 className="text-base font-bold text-amber-900 font-heading">TARGET MARKET</h4>
                <p className="text-[11px] text-amber-700/80 mt-1 max-w-xs">Optimizing structures across 75% Enterprise groups and 50% Startup models.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Strategy Module */}
        <section className="py-16 bg-orange-50/40 border-b border-orange-100">
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {gridImages?.map((gridItem, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden h-24 flex items-center justify-center p-4 bg-gradient-to-b from-slate-800 to-slate-900 text-white border border-slate-100 shadow-sm">
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-60" />
                  <span className="relative z-10 text-[9px] font-bold tracking-wider leading-snug">{gridItem.title}</span>
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