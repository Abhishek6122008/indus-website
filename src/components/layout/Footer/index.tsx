import Link from 'next/link'
import { Phone, Mail, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from 'lucide-react'

const quickLinks = [
  { label: 'Who We Are', href: '/about' },
  { label: 'Businesses', href: '/businesses' },
  { label: 'Knowledge Center', href: '/knowledge-center' },
  { label: 'Resources', href: '/resources' },
  { label: 'Tools', href: '/tools' },
  { label: 'Contact', href: '/contact' },
]

const businesses = [
  { label: 'Logistics & Supply Chain', href: '/businesses/logistics' },
  { label: 'Enterprise Solutions', href: '/businesses/enterprise-solutions' },
  { label: 'Skill Development', href: '/businesses/skill-development' },
  { label: 'Real Estate & Infra', href: '/businesses/real-estate' },
  { label: 'HBC Brand Franchise', href: '/businesses/hbc-franchise' },
]

const socials = [
  { Icon: Instagram, href: 'https://instagram.com/theindusgroupco', label: 'Instagram' },
  { Icon: Linkedin, href: 'https://linkedin.com/company/theindusgroupco', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://x.com/theindusgroupco', label: 'X (Twitter)' },
  { Icon: Youtube, href: 'https://youtube.com/@theindusgroupco', label: 'YouTube' },
  { Icon: MessageCircle, href: 'https://wa.me/917011332238', label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Col 1: Brand + contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">TIG</span>
              </div>
              <h3 className="text-white text-lg font-bold font-heading">The Indus Group of Co.</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Delivering industry-leading solutions across verticals with reliability, innovation, and integrity.
            </p>
            <div className="space-y-2.5">
              <a
                href="tel:+917011332238"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                +91 7011 332 238
              </a>
              <a
                href="mailto:info@theindusgroup.com"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                info@theindusgroup.com
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Businesses */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-5">Our Businesses</h4>
            <ul className="space-y-2.5">
              {businesses.map((b) => (
                <li key={b.href}>
                  <Link
                    href={b.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {b.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-gray-500">
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 shrink-0">
            © {new Date().getFullYear()} The Indus Group of Co.
          </p>
        </div>
      </div>
    </footer>
  )
}
