'use client'

import { useState } from 'react'
import { Download, BookOpen, Briefcase, Map, X, ChevronRight } from 'lucide-react'



const GUIDES = [
  {
    id: 'container-types',
    title: 'Container Types Overview',
    desc: 'Dimensions, weight limits, and specs for all major shipping container types.',
    icon: Briefcase,
    image: '/images/resources/container-types.png',
    category: 'Guide',
    file: '/files/types-of-shipping.pdf',
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
    summary: 'An overview of The Indus Group Co. covering the company\'s history, organizational structure, mission and vision, and the four business verticals: Logistics, Enterprise Solutions, Skill Development, and Real Estate. Includes the full company presentation deck.',
    highlights: [
      '200+ years of Collective experience',
      'Operations across Logistics, Enterprise Solutions, Skill Development, and Real Estate',
      'Mission: Delivering industry-leading solutions with reliability, innovation, and integrity',
      '5,000+ trusted clients across sectors',
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
]

export default function DownloadableGuides() {
  const [activeGuide, setActiveGuide] = useState(null)

  function toggleGuide(id) {
    setActiveGuide((prev) => (prev === id ? null : id))
  }

  const expanded = GUIDES.find((g) => g.id === activeGuide)

  return (
    <div className="bg-white">

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
                  className={`group text-left bg-white border rounded-2xl overflow-hidden transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] ${isActive
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
                  <div className="p-5 flex flex-col h-[240px]">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {guide.category}
                    </span>
                    <h3 className="font-semibold text-slate-900 mt-2 mb-1">{guide.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{guide.desc}</p>
                    <div
                      className={`mt-auto flex items-center gap-1 text-xs font-bold transition-colors ${isActive
                          ? 'text-blue-600'
                          : 'text-slate-400 group-hover:text-blue-500'
                        }`}
                    >
                      {isActive ? 'Hide summary' : 'View summary'}

                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-90' : ''
                          }`}
                      />
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
                expanded.id === "world-ports" ? (
                  <a
                    href={expanded.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Open PDF
                  </a>
                ) : (
                  <a
                    href={expanded.file}
                    download
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                )
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
