const projects = [
  {
    title: 'Affordable Housing Projects',
    description: 'Quality 1,2 & 3 BHK homes',
    image: '/images/businesses/real-estate/project-focus/affordable-housing.jpg',
  },
  {
    title: 'Luxury Villa Developments',
    description: 'Exclusive gated communities with premium amenities',
    image: '/images/businesses/real-estate/project-focus/luxury-villas.jpg',
  },
  {
    title: 'Industrial Warehouse Hubs',
    description: 'Grade-A logistics facilities with prime connectivity on NH.',
    image: '/images/businesses/real-estate/project-focus/industrial-warehouse.jpg',
  },
]

export function ProjectFocus() {
  return (
    <section className="section-padding bg-[#0b1f5c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-heading text-white text-center mb-12">
          Our Project Focus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative h-72 rounded-2xl overflow-hidden group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-semibold font-heading text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-blue-100 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}