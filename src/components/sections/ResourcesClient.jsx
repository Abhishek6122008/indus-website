'use client'

import { useState } from 'react'
import { Truck, DollarSign, Globe, Download, ExternalLink, BookOpen, FileText, Briefcase, Map, X, ChevronRight } from 'lucide-react'

const QUICK_LINKS = [
  {
    title: 'Cargo Tracking',
    desc: 'Track your shipments globally in real-time.',
    icon: Truck,
    bg: 'from-slate-700 to-slate-900',
    href: 'https://www.track-trace.com/',
  },
  {
    title: 'Currency Converter',
    desc: 'Check the latest international exchange rates.',
    icon: DollarSign,
    bg: 'from-blue-800 to-blue-950',
    href: 'https://www.xe.com/',
  },
  {
    title: 'Incoterms 2020',
    desc: 'Understand international trade terms and conditions.',
    icon: Globe,
    bg: 'from-indigo-700 to-indigo-950',
    href: 'https://2go.iccwbo.org/incoterms-2020-practical-free-wallchart-fr.html',
  },
]

const GUIDES = [
  {
    id: 'container-types',
    title: 'Container Types Overview',
    desc: 'Dimensions, weight limits, and specs for all major shipping container types.',
    icon: Briefcase,
    image: '/images/resources/container-types.png',
    category: 'Guide',
    file: '/files/container-types.pdf',
    summary: 'A comprehensive reference document covering 9 standard container types used in international shipping. Each type includes internal dimensions (mm and ft), door opening measurements, max gross weight, tare weight, max payload, and cubic capacity.',
    highlights: [
      'Standard Container — 20\', 40\', and 40\' High-Cube versions for general dry cargo',
      'Hardtop Container — Removable steel roof for overheight cargo',
      'Open-Top Container — Removable tarpaulin for top-loading overheight cargo',
      'Flat Rack — 20\', 40\', and 40\' HC for heavy and overwidth loads',
      'Platform — 20\' and 40\' for oversized and non-domestic heavy cargo',
      'Ventilated Container — For cargo requiring airflow',
      'Refrigerated (Reefer) — Electrically cooled/heated with own power unit',
      'Insulated Container — Cooling supplied externally by terminal or reefer unit',
      'Tank Container — For liquid food transport (alcohols, juices, edible oils)',
    ],
  },
  {
    id: 'world-ports',
    title: 'World Ports (Countrywise)',
    desc: 'A complete A–Z reference of major cargo ports across 100+ countries.',
    icon: Map,
    image: '/images/resources/world-ports.png',
    category: 'Guide',
    file: '/files/world-ports.pdf',
    summary: 'An extensive reference document listing major cargo and commercial ports organized alphabetically by country. Covers over 100 countries from Alaska to Zimbabwe, including key regional hubs across Asia, Europe, the Americas, Africa, and Oceania.',
    highlights: [
      'Asia Pacific — Singapore, Shanghai, Mumbai, Jakarta, Hong Kong, Kolkata, Chennai',
      'Europe — Rotterdam, Hamburg, Antwerp, Le Havre, Marseilles, Genoa, Barcelona',
      'Middle East — Dubai, Abu Dhabi, Jebel Ali, Dammam, Jeddah, Muscat',
      'Americas — New York, Houston, Los Angeles, Santos, Buenos Aires, Vancouver',
      'Africa — Mombasa, Dar es Salaam, Cape Town, Durban, Lagos, Dakar',
      'India — Mumbai, Chennai, Kolkata, Haldia, Cochin, Kandla, Pipavav, Mundra',
      'Organized A–Z by country for quick lookup during shipment planning',
    ],
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    desc: 'Indus Group overview with structure, mission and services.',
    icon: Briefcase,
    image: '/images/resources/company-profile.png',
    category: 'PDF',
    file: '/files/indus-corporate-deck.pdf',
    summary: 'An overview of The Indus Group of Co. covering the company\'s history, organizational structure, mission and vision, and the five business verticals: Logistics, Enterprise Solutions, Skill Development, Real Estate, and HBC Franchise. Includes the full company presentation deck.',
    highlights: [
      '14+ years of industry experience',
      'Operations across Logistics, Enterprise Solutions, Skill Development, Real Estate, and Food Chain',
      'Mission: Delivering industry-leading solutions with reliability, innovation, and integrity',
      '1,000+ clients served across sectors',
      'MSME-focused approach to business empowerment',
    ],
  },
  {
    id: 'aircrafts-and-uld',
    title: 'Aircrafts and ULD',
    desc: 'Most-used aircraft types and Unit Load Devices for air cargo.',
    icon: BookOpen,
    image: '/images/resources/aircrafts-and-uld.png',
    category: 'Guide',
    file: '/files/aircrafts-and-uld.pdf',
    summary: 'A training reference on the most-used passenger and freighter aircraft and the Unit Load Devices (ULDs) used to move air cargo. Covers aircraft structure, narrow-body vs. wide-body classification, deck layouts, weight and volume limitations, ULD types and identification codes, and how to read loading charts.',
    highlights: [
      'Aircraft categories — conventional/narrow-body vs. high-capacity/wide-body',
      'Configurations — passenger, freighter (all-cargo), and mixed combi aircraft',
      'Deck layouts — main deck, lower deck, and bulk hold cargo positions',
      'Aircraft maximum payload, cargo hold, and door dimensions reference table',
      'Payload & take-off weight calculations (DOW, TOF, TOW, MZFW)',
      'ULD types — pallets, igloos, and lower/main deck containers (LD-3, AMA, etc.)',
      'ULD identification codes — category, base dimensions, contour, owner',
      'ULD weight & dimension limitations for lower and main deck cargo',
      'Reading loading charts to find maximum permissible cargo dimensions',
    ],
  },
  {
    id: 'business-brochure',
    title: 'Business Brochure',
    desc: 'Official client-facing brochure for partnerships.',
    icon: FileText,
    image: '/images/resources/business-brochure.png',
    category: 'PDF',
    file: null,
    summary: 'The official Indus Group client brochure designed for partnership introductions, business meetings, and tender submissions. Covers all five verticals with key service highlights and contact information.',
    highlights: [
      'Professional overview of all five business verticals',
      'Key statistics: 14+ years, 1,000+ clients, 100+ team members',
      'Service capabilities and USPs per vertical',
      'Contact details and social channels',
    ],
  },
]

export default function ResourcesClient() {
  const [activeGuide, setActiveGuide] = useState(null)

  function toggleGuide(id) {
    setActiveGuide((prev) => (prev === id ? null : id))
  }

  const expanded = GUIDES.find((g) => g.id === activeGuide)

  return (
    <div className="bg-white">

      {/* Quick Links & Tools */}
      <section className="py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold font-heading text-slate-900 text-center mb-10">
            Quick Links &amp; Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {QUICK_LINKS.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative bg-gradient-to-br ${link.bg} rounded-2xl overflow-hidden p-8 flex flex-col justify-end min-h-[200px] hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                    <Icon className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{link.title}</h3>
                  <p className="text-sm text-white/70">{link.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
                    Open <ExternalLink className="w-3 h-3" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold font-heading text-slate-900 text-center mb-10">
            Downloadable Guides
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {GUIDES.map((guide) => {
              const Icon = guide.icon
              const isActive = activeGuide === guide.id
              return (
                <button
                  key={guide.id}
                  onClick={() => toggleGuide(guide.id)}
                  className={`group text-left bg-white border rounded-2xl overflow-hidden transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] ${
                    isActive
                      ? 'border-blue-500 ring-2 ring-blue-100 shadow-md'
                      : 'border-slate-200 hover:shadow-lg hover:border-blue-200'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className={`relative h-36 flex items-center justify-center overflow-hidden transition-colors ${isActive ? 'bg-blue-600' : 'bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200'}`}>
                    {guide.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={guide.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <Icon className={`relative w-10 h-10 transition-colors ${isActive ? 'text-white' : 'text-blue-400 group-hover:text-blue-600'}`} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {guide.category}
                    </span>
                    <h3 className="font-semibold text-slate-900 mt-2 mb-1">{guide.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{guide.desc}</p>
                    <div className={`mt-4 flex items-center gap-1 text-xs font-bold transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`}>
                      {isActive ? 'Hide summary' : 'View summary'}
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Expanded Summary Panel */}
          {expanded && (
            <div className="mt-8 border border-blue-100 rounded-2xl bg-blue-50/40 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                    {expanded.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">{expanded.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{expanded.summary}</p>
                </div>
                <button
                  onClick={() => setActiveGuide(null)}
                  className="text-slate-400 hover:text-slate-600 shrink-0 mt-1"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <ul className="space-y-2 mb-6">
                {expanded.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>

              {expanded.file ? (
                <a
                  href={expanded.file}
                  download
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 bg-slate-100 text-slate-400 text-sm font-semibold px-5 py-2.5 rounded-lg cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                  Coming Soon
                </button>
              )}
            </div>
          )}

        </div>
      </section>

    </div>
  )
}
