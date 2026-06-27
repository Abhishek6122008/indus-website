'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'
import { cn } from '@/lib/utils'

// Helper function to set a cookie
const setCookie = (name, value, days) => {
  if (typeof document === 'undefined') return
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  const expires = '; expires=' + date.toUTCString()
  // Secure is omitted if not running on HTTPS locally, but Lax SameSite is standard
  document.cookie = `${name}=${value || ''}${expires}; path=/; SameSite=Lax`
}

// Helper function to get a cookie
const getCookie = (name) => {
  if (typeof document === 'undefined') return null
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const consent = getCookie('indus-cookie-consent')
    if (!consent) {
      // Small timeout to trigger slide-in transition after component mounting
      const timer = setTimeout(() => setVisible(true), 150)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    setCookie('indus-cookie-consent', 'accepted', 365) // 1 year expiry
    setVisible(false)
  }

  const handleDecline = () => {
    setCookie('indus-cookie-consent', 'declined', 365) // 1 year expiry
    setVisible(false)
  }

  // Avoid SSR hydration mismatches by returning null during server render
  if (!mounted) return null

  // Also don't render once the user has accepted or declined it and the closing transition has completed
  const consent = getCookie('indus-cookie-consent')
  if ((consent === 'accepted' || consent === 'declined') && !visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie Consent Banner"
      className={cn(
        'fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl z-[100]',
        'bg-navy-950/95 border border-navy-800 text-white rounded-2xl shadow-2xl p-4 md:p-5 backdrop-blur-md',
        'transition-all duration-500 ease-out transform',
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
      )}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Info / Message */}
        <div className="flex items-center gap-3.5 flex-1">
          <div className="p-2.5 bg-blue-600/10 text-blue-400 rounded-xl shrink-0 hidden sm:flex items-center justify-center">
            <Cookie className="w-5 h-5" aria-hidden="true" />
          </div>
          <p className="text-sm text-slate-200 text-center md:text-left leading-relaxed">
            We use cookies to improve your browsing experience and analyze site traffic.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0 justify-center md:justify-end">
          <Link
            href="/privacy-policy"
            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors px-4 py-2.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-navy-950 text-center min-w-[100px]"
            aria-label="Read our privacy policy to learn more about cookies"
          >
            Learn More
          </Link>
          <button
            onClick={handleDecline}
            className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-navy-950 active:scale-95 text-center min-w-[100px]"
            aria-label="Decline cookies"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-navy-950 active:scale-95 text-center min-w-[100px]"
            aria-label="Accept all cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
