'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Truck, AlertCircle, ArrowRight, MapPin, Scale, Package, Clock } from 'lucide-react'

const CITIES = [
  'Delhi/NCR',
  'Mumbai',
  'Bengaluru',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Ahmedabad',
]

const CARGO_TYPES = [
  { id: 'standard', name: 'Standard (Dry Cargo)', rate: 12, base: 500, time: '4-6 Days' },
  { id: 'express', name: 'Express (Time-Critical)', rate: 25, base: 1200, time: '1-2 Days' },
  { id: 'fragile', name: 'Fragile / Sensitive', rate: 35, base: 1500, time: '3-4 Days' },
  { id: 'heavy', name: 'Heavy Machinery / Bulk', rate: 18, base: 1000, time: '5-7 Days' },
  { id: 'cold', name: 'Cold Chain (Temp Controlled)', rate: 45, base: 1800, time: '2-3 Days' },
]

export function FreightEstimator() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [weight, setWeight] = useState('')
  const [cargoType, setCargoType] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const inputClass = [
    'w-full',
    'bg-white',
    'border',
    'border-slate-200',
    'rounded-lg',
    'px-4',
    'py-3',
    'text-slate-900',
    'text-sm',
    'placeholder:text-slate-400',
    'focus:outline-none',
    'focus:border-blue-500',
    'focus:ring-2',
    'focus:ring-blue-100',
    'transition-colors',
  ].join(' ')

  function handleCalculate(e) {
    e.preventDefault()
    setError('')

    if (!origin || !destination || !weight || !cargoType) {
      setError('Please fill in all inputs.')
      return
    }

    if (origin === destination) {
      setError('Origin and destination cities must be different.')
      return
    }

    const w = parseFloat(weight)
    if (isNaN(w) || w <= 0) {
      setError('Please enter a valid positive weight.')
      return
    }

    setLoading(true)
    setResult(null)

    // Simulate network latency for a premium tool experience
    setTimeout(() => {
      const originIdx = CITIES.indexOf(origin)
      const destIdx = CITIES.indexOf(destination)
      const cargo = CARGO_TYPES.find((c) => c.id === cargoType)

      // Calculate mock distance index difference factor
      const distFactor = Math.abs(originIdx - destIdx)
      const distanceKm = distFactor * 280 + 150

      // Base formula: booking base fee + weight * cargo rate * distance multiplier
      const calculatedCost = cargo.base + (w * cargo.rate * (distanceKm / 500))

      // Multipliers for final range
      const minCost = Math.round(calculatedCost * 0.95)
      const maxCost = Math.round(calculatedCost * 1.05)

      // Adjust transit time for short distances
      let transitTime = cargo.time
      if (distFactor <= 1) {
        if (cargoType === 'express') transitTime = 'Next Day'
        else if (cargoType === 'standard') transitTime = '2-3 Days'
        else if (cargoType === 'cold') transitTime = '1-2 Days'
      }

      setResult({
        costMin: minCost,
        costMax: maxCost,
        transitTime,
        distanceKm,
      })
      setLoading(false)
    }, 600)
  }

  // Format currency
  function formatINR(val) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val)
  }

  return (
    <Card className="bg-white border-blue-100 shadow-sm" padding={false}>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Form Panel */}
        <div className="p-6 sm:p-8 lg:col-span-7 border-b lg:border-b-0 lg:border-r border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-slate-900">Freight Cost Estimator</h3>
              <p className="text-xs text-slate-500">Calculate shipping rates and transit times across India</p>
            </div>
          </div>

          <form onSubmit={handleCalculate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" /> Origin City *
                </label>
                <select
                  name="origin"
                  required
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select origin</option>
                  {CITIES.map((city) => (
                    <option key={`origin-${city}`} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" /> Destination City *
                </label>
                <select
                  name="destination"
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select destination</option>
                  {CITIES.map((city) => (
                    <option key={`dest-${city}`} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                  <Scale className="w-3.5 h-3.5 text-blue-500" /> Weight (kg) *
                </label>
                <input
                  type="number"
                  name="weight"
                  required
                  min="0.1"
                  step="any"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 250"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                  <Package className="w-3.5 h-3.5 text-blue-500" /> Cargo Type *
                </label>
                <select
                  name="cargoType"
                  required
                  value={cargoType}
                  onChange={(e) => setCargoType(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select cargo type</option>
                  {CARGO_TYPES.map((cargo) => (
                    <option key={cargo.id} value={cargo.id}>
                      {cargo.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg flex items-center gap-2 border border-red-100">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full mt-2 justify-center py-3.5"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Calculating...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Calculate Freight Estimate
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Right Output Panel */}
        <div className="p-6 sm:p-8 lg:col-span-5 bg-blue-50/50 flex flex-col justify-between">
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-800 uppercase tracking-wider mb-4">
              Indicative Estimates
            </h4>

            {loading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-6 bg-blue-100 rounded w-1/3" />
                <div className="h-12 bg-blue-100 rounded w-3/4" />
                <div className="h-6 bg-blue-100 rounded w-1/2" />
                <div className="h-8 bg-blue-100 rounded w-5/6" />
              </div>
            ) : result ? (
              <div className="space-y-6">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Estimated Cost Range</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 mt-1">
                    {formatINR(result.costMin)} – {formatINR(result.costMax)}
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Based on approx. {result.distanceKm} km route distance
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-100">
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" /> Transit Time
                    </span>
                    <span className="text-base font-bold text-slate-800">{result.transitTime}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                      <Package className="w-3.5 h-3.5 text-blue-500" /> Weight Entered
                    </span>
                    <span className="text-base font-bold text-slate-800">{weight} kg</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-8 flex flex-col items-center justify-center text-center text-slate-400">
                <Truck className="w-12 h-12 text-slate-300 stroke-[1.5] mb-3" />
                <p className="text-sm">Provide routes and weights to generate a real-time shipping cost and time estimate.</p>
              </div>
            )}
          </div>

          <div className="mt-8 pt-4 border-t border-blue-100">
            <div className="flex gap-2 text-[11px] text-slate-500 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>
                <strong>Indicative estimates only:</strong>{" "}
                Final values may vary based on market conditions,{" "}
                toll fees, exact dimensional weight, and special handling fees.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
