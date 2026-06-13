'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Store, AlertCircle, TrendingUp, Calendar, Coins, Percent } from 'lucide-react'

const OUTLET_SIZES = [
  { id: 'kiosk', name: 'Kiosk / Express (200 - 500 sq ft)', label: 'Kiosk' },
  { id: 'qsr', name: 'Medium / QSR (500 - 1000 sq ft)', label: 'QSR' },
  { id: 'dinein', name: 'Large / Dine-in (1000+ sq ft)', label: 'Dine-in' },
]

export function FranchiseCalculator() {
  const [investment, setInvestment] = useState(2500000) // Default 25 Lakhs
  const [cityTier, setCityTier] = useState('tier2')
  const [outletSize, setOutletSize] = useState('qsr')
  const [metrics, setMetrics] = useState({
    monthlyRevenue: 0,
    breakEven: 0,
    roi: 0,
  })

  // Recalculate metrics in real-time when inputs change
  useEffect(() => {
    // Determine ROI % based on tier and size
    let roi = 30 // Base 30% ROI

    // Tier modifiers
    if (cityTier === 'tier1') roi += 2 // Tier 1: higher volume, but higher rent offsets slightly
    else if (cityTier === 'tier2') roi += 8 // Tier 2: optimal volume and moderate rent
    else if (cityTier === 'tier3') roi += 0 // Tier 3: lower setup, but lower volume

    // Size modifiers
    if (outletSize === 'kiosk') roi += 4 // Kiosk: fast payback, high margin
    else if (outletSize === 'qsr') roi += 2 // QSR: standard
    else if (outletSize === 'dinein') roi -= 3 // Dine-in: heavy capital/staff cost, lower ROI percentage

    // Monthly profit margin (net)
    let netMargin = 0.22 // 22%
    if (outletSize === 'kiosk') netMargin = 0.25
    else if (outletSize === 'dinein') netMargin = 0.18

    // Annual Profit = Investment * (ROI / 100)
    const annualProfit = investment * (roi / 100)
    const monthlyProfit = annualProfit / 12

    // Monthly Gross Revenue = Monthly Profit / Net Margin
    const monthlyRevenue = Math.round(monthlyProfit / netMargin)

    // Payback period (break-even months)
    // Payback = (Investment / Annual Profit) * 12
    const breakEven = Math.round((investment / annualProfit) * 12)

    setMetrics({
      monthlyRevenue,
      breakEven,
      roi,
    })
  }, [investment, cityTier, outletSize])

  // Format currency into Lakhs/Crores for short badges
  function formatINRShort(val) {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakh`
    }
    return `₹${val.toLocaleString('en-IN')}`
  }

  // Format full Indian currency
  function formatINRCurrency(val) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val)
  }

  const inputClass =
    'w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors'

  return (
    <Card className="bg-white border-blue-100 shadow-sm" padding={false}>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Form Panel */}
        <div className="p-6 sm:p-8 lg:col-span-7 border-b lg:border-b-0 lg:border-r border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-slate-900">Franchise ROI Planner</h3>
              <p className="text-xs text-slate-500">Estimate earnings and payback period for HBC food franchise outlets</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Investment Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5 text-blue-500" /> Capital Investment
                </label>
                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  {formatINRShort(investment)}
                </span>
              </div>
              <input
                type="range"
                min="1000000" // 10 Lakhs
                max="10000000" // 1 Crore
                step="500000" // 5 Lakhs
                value={investment}
                onChange={(e) => setInvestment(parseInt(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹10 Lakhs</span>
                <span>₹50 Lakhs</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            {/* City Tier Radio Buttons */}
            <div>
              <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">
                Location City Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    cityTier === 'tier1'
                      ? 'border-blue-500 bg-blue-50/30 ring-2 ring-blue-100'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="cityTier"
                    value="tier1"
                    checked={cityTier === 'tier1'}
                    onChange={() => setCityTier('tier1')}
                    className="accent-blue-600"
                  />
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">Tier 1</span>
                    <span className="block text-[10px] text-slate-400">Metros (Mumbai, Delhi)</span>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    cityTier === 'tier2'
                      ? 'border-blue-500 bg-blue-50/30 ring-2 ring-blue-100'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="cityTier"
                    value="tier2"
                    checked={cityTier === 'tier2'}
                    onChange={() => setCityTier('tier2')}
                    className="accent-blue-600"
                  />
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">Tier 2</span>
                    <span className="block text-[10px] text-slate-400">Capitals (Pune, Hyd)</span>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    cityTier === 'tier3'
                      ? 'border-blue-500 bg-blue-50/30 ring-2 ring-blue-100'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="cityTier"
                    value="tier3"
                    checked={cityTier === 'tier3'}
                    onChange={() => setCityTier('tier3')}
                    className="accent-blue-600"
                  />
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">Tier 3</span>
                    <span className="block text-[10px] text-slate-400">Towns & Other Cities</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Outlet Size Select */}
            <div>
              <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5">
                Proposed Outlet Size *
              </label>
              <select
                name="outletSize"
                value={outletSize}
                onChange={(e) => setOutletSize(e.target.value)}
                className={inputClass}
              >
                {OUTLET_SIZES.map((size) => (
                  <option key={size.id} value={size.id}>
                    {size.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="p-6 sm:p-8 lg:col-span-5 bg-blue-50/50 flex flex-col justify-between">
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-800 uppercase tracking-wider mb-5">
              Indicative Estimates
            </h4>

            <div className="space-y-6">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1.5 mb-0.5">
                  <TrendingUp className="w-4 h-4 text-blue-500" /> Est. Monthly Revenue
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 mt-1">
                  {formatINRCurrency(metrics.monthlyRevenue)}
                </div>
                <span className="text-[10px] text-slate-400 block mt-1">
                  Gross monthly billings estimation
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-5 border-t border-blue-100">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                    <Percent className="w-3.5 h-3.5 text-blue-500" /> Annual ROI
                  </span>
                  <span className="text-xl font-extrabold text-slate-800">{metrics.roi.toFixed(1)}%</span>
                  <span className="text-[9px] text-slate-400 block">Net returns rate</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" /> Payback Period
                  </span>
                  <span className="text-xl font-extrabold text-slate-800">{metrics.breakEven} Months</span>
                  <span className="text-[9px] text-slate-400 block">Est. break-even period</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-blue-100">
            <div className="flex gap-2 text-[11px] text-slate-500 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>
                <strong>Indicative estimates only:</strong> Revenue projections and payback cycles are estimates modeled on average network performance. Actual returns depend heavily on location footfalls, local overhead, and franchise management.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
