export function ServiceIntro({ heading, description }) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6">
          {heading}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}