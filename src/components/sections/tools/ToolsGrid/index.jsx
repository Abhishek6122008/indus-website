import { FileSearch, Boxes, Leaf, ExternalLink } from 'lucide-react'

// External quick-access tools — open in a new tab.
const QUICK_ACCESS_TOOLS = [
  {
    title: 'HS Code Finder',
    desc: 'Quickly find the Harmonized System (HS) codes for your products to ensure accurate customs declarations and tariffs.',
    icon: FileSearch,
    href: 'https://www.tariffnumber.com/',
  },
  {
    title: 'CBM Calculator',
    desc: 'Calculate the Cubic Meter (CBM) of your cargo to optimize space utilization and estimate shipping costs efficiently.',
    icon: Boxes,
    href: 'https://www.cbmcalculator.com/',
  },
  {
    title: 'Carbon Emission Calculator',
    desc: 'Estimate the carbon footprint of your shipments and explore ways to reduce environmental impact in your supply chain.',
    icon: Leaf,
    href: 'https://www.ecotransit.org/en/',
  },
]

export function ToolsGrid() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Access (external) tools */}
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-900 text-center mb-8">
            Quick Access Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUICK_ACCESS_TOOLS.map((tool) => {
              const Icon = tool.icon
              return (
                <a
                  key={tool.title}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-slate-100 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{tool.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors">
                    Go to Tool <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
