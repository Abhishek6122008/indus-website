'use client'

import { useState, useRef, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FreightEstimator } from '../FreightEstimator'
import { Truck, ArrowDown, FileSearch, Boxes, Leaf, ExternalLink } from 'lucide-react'

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
  const [activeTool, setActiveTool] = useState(null)
  const calculatorRef = useRef(null)

  function selectTool(tool) {
    setActiveTool(tool)
  }

  // Smooth scroll to the active calculator when selected
  useEffect(() => {
    if (activeTool && calculatorRef.current) {
      setTimeout(() => {
        calculatorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [activeTool])

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Access (external) tools */}
        <div className="mb-12">
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

        <div className="grid grid-cols-1 gap-8 mb-12 max-w-xl">
          {/* Card 1: Freight Estimator */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => selectTool('freight')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                selectTool('freight')
              }
            }}
            className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
          >
            <Card
              hover={true}
              className={`h-full flex flex-col justify-between transition-all duration-300 ${activeTool === 'freight'
                ? 'border-blue-600 ring-2 ring-blue-100 shadow-md bg-blue-50/10'
                : 'border-blue-100 hover:border-blue-200'
                }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl transition-colors ${activeTool === 'freight' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                    <Truck className="w-6 h-6" />
                  </div>
                  <Badge variant="blue">Logistics</Badge>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                  Freight Cost Estimator
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Calculate estimated shipping costs and transit times across major route hubs in India.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-600">
                <span>{activeTool === 'freight' ? 'Calculator Active' : 'Open Calculator'}</span>
                <ArrowDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeTool === 'freight' ? 'rotate-180' : ''}`} />
              </div>
            </Card>
          </div>
        </div>

        {/* Selected Calculator Expansion Area */}
        {activeTool && (
          <div
            ref={calculatorRef}
            className="pt-8 border-t border-slate-200 scroll-mt-24 transition-all duration-500"
          >
            <div className="mb-6 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Active Planning Tool
              </span>
              <button
                onClick={() => setActiveTool(null)}
                className="text-xs text-slate-500 hover:text-blue-600 font-bold hover:underline"
              >
                Close Calculator
              </button>
            </div>
            {activeTool === 'freight' && <FreightEstimator />}
          </div>
        )}
      </div>
    </section>
  )
}
