'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const businessVerticals = [
  { label: 'Logistics & Supply Chain', href: '/businesses/logistics' },
  { label: 'Enterprise Solutions', href: '/businesses/enterprise-solutions' },
  { label: 'Skill Development', href: '/businesses/skill-development' },
  { label: 'Real Estate & Infra', href: '/businesses/real-estate' },
  { label: 'HBC Brand Franchise', href: '/businesses/hbc-franchise' },
]

const navLinks = [
  { label: 'Who We Are', href: '/about' },
  { label: 'Businesses', href: '/businesses', dropdown: businessVerticals },
  { label: 'Knowledge Center', href: '/knowledge-center' },
  { label: 'Resources', href: '/resources' },
  { label: 'Tools', href: '/tools' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileBusinessesOpen, setMobileBusinessesOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-navy-800 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">TIG</span>
            </div>
            <span className="text-lg font-bold font-heading text-navy-800 hidden sm:block">
              The Indus Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy-800 rounded-md hover:bg-gray-50 transition-colors">
                    {link.label}
                    <ChevronDown
                      className={cn('w-4 h-4 transition-transform duration-200', dropdownOpen && 'rotate-180')}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy-800 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy-800 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:+917011332238"
            className="hidden lg:flex items-center gap-2 bg-navy-800 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-navy-900 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 7011 332 238
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => { setMobileOpen(!mobileOpen); setMobileBusinessesOpen(false) }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy-800 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileBusinessesOpen(!mobileBusinessesOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn('w-4 h-4 transition-transform duration-200', mobileBusinessesOpen && 'rotate-180')}
                    />
                  </button>
                  {mobileBusinessesOpen && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100 ml-3">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-500 hover:text-navy-800 hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy-800 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2 border-t border-gray-100">
              <a
                href="tel:+917011332238"
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-navy-800"
              >
                <Phone className="w-4 h-4" />
                +91 7011 332 238
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
