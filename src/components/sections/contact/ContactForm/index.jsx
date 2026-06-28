'use client'
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyBWgT0BxNF9b0tlGaqaM2ql9xJkEjYd4ArqZA66RKiVl_M3ZHpFqdpE98iAtWkG7B7/exec"

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const verticals = ['Logistics', 'Enterprise', 'Skill Development', 'Real Estate']

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    brief: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const body = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone,
        services: form.services,
        brief: form.brief,
      });

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body,
      });

      const text = await response.text();

      if (text === "SUCCESS") {

        setSubmitted(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          services: "",
          brief: "",
        });

      } else {

        alert(text);

      }

    } catch (err) {

      console.error(err);
      alert("Failed to submit.");

    }
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

      <div>
        <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">
          What can we help you with?
        </label>
        <div className="flex flex-wrap gap-2">
          {verticals.map((v) => {
            const active = v === form.services
            return (
              <button
                key={v}
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    services: v,
                  }))
                }
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${active
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                  }`}
              >
                {v}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5">
          How can we help? *
        </label>
        <textarea
          name="brief"
          required
          rows={5}
          value={form.brief}
          onChange={handleChange}
          placeholder="Tell us a bit about what you need..."
          className={`${inputClass} resize-y`}
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
