import { Phone, Mail } from 'lucide-react'

const channels = [
  {
    Icon: Phone,
    label: 'Phone',
    value: '+91 7011 332 238',
    href: 'tel:+917011332238',
    description: 'Mon – Sat, 9 am – 7 pm IST',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'info@theindusgroup.com',
    href: 'mailto:info@theindusgroup.com',
    description: 'We reply within one business day',
  },
  {
    Icon: Mail,
    label: 'Alternate Email',
    value: 'theindusgroup@outlook.com',
    href: 'mailto:theindusgroup@outlook.com',
    description: 'For document submissions',
  },
]

export function ContactDetails() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-[2px] bg-blue-600" />
        <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase">Reach Us</span>
      </div>
      <h2 className="text-2xl font-bold font-heading text-slate-900 mb-3">Get In Touch</h2>
      <p className="text-slate-600 mb-8 leading-relaxed">
        We are always available to answer your questions, discuss a project, or simply learn
        more about your business needs.
      </p>
      <div className="space-y-5">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-start gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
              <c.Icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">{c.label}</div>
              <div className="text-slate-900 font-semibold group-hover:text-blue-600 transition-colors">
                {c.value}
              </div>
              <div className="text-slate-500 text-xs">{c.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
