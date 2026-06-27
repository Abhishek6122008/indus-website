'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

// Vertical-specific options for the contact form.
const verticals = [
  {
    id: 'logistics',
    label: 'Logistics',
    name: 'Logistics & Supply Chain',
    pillLabel: 'Service required',
    pills: ['Air Freight', 'Sea Freight', 'Road Transport', 'Warehousing', 'Customs Clearance'],
    field: { name: 'shipmentDetails', label: 'Shipment / route details', placeholder: 'e.g. Delhi → Dubai, 2 containers' },
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    name: 'Enterprise Solutions',
    pillLabel: 'Solution area',
    pills: ['IT Services', 'Consulting', 'Procurement', 'Facility Management'],
    field: { name: 'companySize', label: 'Company size', placeholder: 'e.g. 50–200 employees' },
  },
  {
    id: 'skill-development',
    label: 'Skill Development',
    name: 'Skill Development',
    pillLabel: 'Program type',
    pills: ['Vocational Training', 'Corporate Upskilling', 'Placement Support', 'Certification'],
    field: { name: 'numTrainees', label: 'Number of trainees', placeholder: 'e.g. 25' },
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    name: 'Real Estate & Infra',
    pillLabel: 'Property type',
    pills: ['Residential', 'Commercial', 'Land / Plot', 'Infrastructure Project'],
    field: { name: 'budget', label: 'Budget range', placeholder: 'e.g. ₹50L – ₹1Cr' },
  },
]

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [vertical, setVertical] = useState('')
  const [pill, setPill] = useState('')
  const [extra, setExtra] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const activeVertical = verticals.find((v) => v.id === vertical)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function selectVertical(id) {
    setVertical(id)
    setPill('')
    setExtra('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: Wire up to an actual form endpoint (e.g. Formspree, Resend, or a Next.js server action)
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors'

  if (submitted) {
    return (
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-7 h-7 text-blue-600" />
        </div>
        <h3 className="text-slate-900 font-bold font-heading text-xl mb-2">Message Received</h3>
        <p className="text-slate-600">
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5">Phone *</label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 XXXXX XXXXX"
          className={inputClass}
        />
        <p className="mt-1.5 text-xs text-slate-400">
          Share your number and our team will call you back to talk it through.
        </p>
      </div>

      {/* Vertical selector */}
      <div>
        <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">
          What can we help you with? *
        </label>
        <div className="flex flex-wrap gap-2">
          {verticals.map((v) => {
            const active = v.id === vertical
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => selectVertical(v.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  active
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {v.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Vertical-specific sub-options + field */}
      {activeVertical && (
        <div className="space-y-5 rounded-xl border border-slate-100 bg-slate-50/60 p-5">
          <div>
            <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">
              {activeVertical.pillLabel}
            </label>
            <div className="flex flex-wrap gap-2">
              {activeVertical.pills.map((p) => {
                const active = p === pill
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPill(p)}
                    className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
                      active
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                    }`}
                  >
                    {p}
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5">
              {activeVertical.field.label}
            </label>
            <input
              type="text"
              name={activeVertical.field.name}
              value={extra}
              onChange={(e) => setExtra(e.target.value)}
              placeholder={activeVertical.field.placeholder}
              className={inputClass}
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
      >
        Send Message
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  )
}
