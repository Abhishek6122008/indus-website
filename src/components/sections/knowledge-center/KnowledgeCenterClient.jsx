'use client'

import { ArrowRight, ExternalLink, FileText, Download } from 'lucide-react'

const BLOGS = [
  {
    title: 'Unlocking Success: The Power of an End-to-End Supply Chain Partner',
    desc: 'How integrated global logistics solutions drive excellence and spark growth across the industrial world.',
    image: '/images/blog/unlocking-success.png',
    file: '/files/unlocking-success.pdf',
  },
  {
    title: 'The Future of Business Intelligence: Leveraging Big Data and Analytics for Growth',
    desc: 'Innovation, optimization, and adaptability — how data-driven enterprise solutions transform businesses globally.',
    image: '/images/blog/business-intelligence.png',
    file: '/files/future-business-intelligence.pdf',
  },
  {
    title: 'Future-Proofing Your Career: Essential Skills for the Digital Age',
    desc: 'My Skills Academy on the skills that matter most and how lifelong learning keeps you ahead of the curve.',
    image: '/images/blog/future-proofing.png',
    file: '/files/future-proofing.pdf',
  },
  {
    title: 'Cold Chain Supply Chain Management: The Invisible Backbone of Modern Commerce',
    desc: 'Discover how cold chain ensures safe storage, transport, and delivery of temperature-sensitive goods.',
    image: '/images/blog/cold-chain-scm.png',
    file: '/files/cold-chain-scm.pdf',
  }
]

const NEWS = [
  {
    date: 'July 20, 2025',
    title: 'Latest Exim News Update',
    desc: 'Stay current with the latest export-import regulations and global trade developments.',
    href: 'https://www.theindusgroup.com',
  },
]

const GLOSSARY = [
  {
    heading: 'Airlines Terms',
    terms: [
      { term: 'AWB (Air Waybill)', def: 'A non-negotiable transport document.' },
      { term: 'Cargo Manifest', def: 'A document listing all cargo on a flight.' },
      { term: 'IATA', def: 'International Air Transport Association.' },
    ],
  },
  {
    heading: 'Shipping Terms',
    terms: [
      { term: 'B/L (Bill of Lading)', def: 'A document issued by a carrier.' },
      { term: 'FOB (Free On Board)', def: "An Incoterm stating seller's responsibility." },
      { term: 'TEU', def: 'Twenty-foot Equivalent Unit.' },
    ],
  },
]

const IMPORTANT_WEBSITES = [
  { label: 'Indian Trade Portal', href: 'https://www.indiantradeportal.in/' },
  { label: 'Ministry of Commerce & Industry', href: 'https://commerce.gov.in/' },
  { label: 'Federation of Indian Export Organisations (FIEO)', href: 'https://www.fieo.org/' },
  { label: 'World Trade Organization (WTO)', href: 'https://www.wto.org/' },
  { label: 'Central Board of Indirect Taxes and Customs (CBIC)', href: 'https://www.cbic.gov.in/' },
  { label: 'International Chamber of Commerce (ICC)', href: 'https://iccwbo.org/' },
  { label: 'Startup India', href: 'https://www.startupindia.gov.in/' },
  { label: 'UN Conference on Trade and Development (UNCTAD)', href: 'https://unctad.org/' },
  { label: 'Maps of World', href: 'https://www.mapsofworld.com/' },
  { label: 'International Air Transport Association (IATA)', href: 'https://www.iata.org/' },
  { label: 'Directorate General of Foreign Trade (DGFT)', href: 'https://www.dgft.gov.in/' },
  { label: 'Department of Commerce - Trade Statistics', href: 'https://tradestat.commerce.gov.in/' },
]

export default function KnowledgeCenterClient() {
  return (
    <div className="bg-white">
      {/* Latest Blogs & Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 text-center mb-10">
            Latest Blogs &amp; Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOGS.map((blog) => (
              <div
                key={blog.title}
                className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <a
                  href={blog.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-44 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden"
                >
                  {blog.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={blog.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <FileText className="w-10 h-10 text-blue-300" />
                  )}
                </a>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{blog.desc}</p>
                  <div className="mt-auto pt-1">
                    <a
                      href={blog.file}
                      download
                      className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 text-center mb-10">
            News &amp; Updates
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {NEWS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-white border border-slate-200 rounded-xl px-6 py-5 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <span className="text-sm font-bold text-blue-600 shrink-0">{item.date}</span>
                <span className="text-sm font-semibold text-slate-900">{item.title}</span>
                <span className="text-sm text-slate-500 flex-1">{item.desc}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 shrink-0 group-hover:gap-2.5 transition-all">
                  Read News Here <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Terms & Glossary */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 text-center mb-10">
            Industry Terms &amp; Glossary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GLOSSARY.map((group) => (
              <div key={group.heading} className="bg-white border border-slate-200 rounded-2xl p-7">
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-5">{group.heading}</h3>
                <ul className="space-y-4">
                  {group.terms.map((t) => (
                    <li key={t.term} className="text-sm">
                      <span className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-2">
                        {t.term}
                      </span>
                      <span className="text-slate-500">: {t.def}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Websites */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 text-center mb-10">
            Important Websites
          </h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {IMPORTANT_WEBSITES.map((site) => (
                <a
                  key={site.label}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 hover:underline underline-offset-2 transition-colors"
                >
                  {site.label}
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
