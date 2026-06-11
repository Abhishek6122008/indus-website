'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

type FormState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5">Subject *</label>
          <select
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Select a subject</option>
            <option value="logistics">Logistics & Supply Chain</option>
            <option value="enterprise">Enterprise Solutions</option>
            <option value="skill-dev">Skill Development</option>
            <option value="real-estate">Real Estate & Infra</option>
            <option value="franchise">HBC Franchise</option>
            <option value="general">General Enquiry</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your requirement..."
          className={inputClass}
        />
      </div>
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
