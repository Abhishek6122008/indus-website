'use client'

import { useState, useRef, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FreightEstimator } from '../FreightEstimator'
import { FranchiseCalculator } from '../FranchiseCalculator'
import { Truck, Store, ArrowDown } from 'lucide-react'

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Freight Estimator */}
          <div onClick={() => selectTool('freight')} className="cursor-pointer">
            <Card
              hover={true}
              className={`h-full flex flex-col justify-between transition-all duration-300 ${
                activeTool === 'freight'
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

          {/* Card 2: Franchise ROI Planner */}
          <div onClick={() => selectTool('franchise')} className="cursor-pointer">
            <Card
              hover={true}
              className={`h-full flex flex-col justify-between transition-all duration-300 ${
                activeTool === 'franchise'
                  ? 'border-blue-600 ring-2 ring-blue-100 shadow-md bg-blue-50/10'
                  : 'border-blue-100 hover:border-blue-200'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl transition-colors ${activeTool === 'franchise' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                    <Store className="w-6 h-6" />
                  </div>
                  <Badge variant="blue">Food Chain</Badge>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                  Franchise ROI Planner
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Estimate projected revenues, payback cycles, and annual ROI for prospective HBC franchise outlets.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-600">
                <span>{activeTool === 'franchise' ? 'Calculator Active' : 'Open Calculator'}</span>
                <ArrowDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeTool === 'franchise' ? 'rotate-180' : ''}`} />
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
            {activeTool === 'franchise' && <FranchiseCalculator />}
          </div>
        )}
      </div>
    </section>
  )
}
