'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function FraudAlertModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Show once per browser session.
    if (typeof window === 'undefined') return
    const dismissed = sessionStorage.getItem('indus-fraud-alert-dismissed')
    if (!dismissed) setOpen(true)
  }, [])

  const close = () => {
    setOpen(false)
    try {
      sessionStorage.setItem('indus-fraud-alert-dismissed', '1')
    } catch {
      // ignore (private mode etc.)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fraud-alert-title"
      onClick={close}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg border-2 border-red-600 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close alert"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-10 border-t border-slate-100 mt-4">
          <h2 id="fraud-alert-title" className="text-lg md:text-xl font-bold text-slate-900 mb-6">
            Public Alert: Beware of Fraudulent Use of The Indus Group Name
          </h2>

          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
            <p>
              It has come to our notice that certain individuals and entities are impersonating
              The Indus Group Co. and issuing fake quotations, using our logo, GST/PAN details,
              and unauthorized bank accounts to defraud customers.
            </p>
            <p>
              We strongly urge customers not to make any payments based on such suspicious
              communications.
            </p>
            <p>
              Always verify details through our official channels before engaging in any transaction.
            </p>
            <p>
              We have initiated legal and cyber-crime action against such imposters.
            </p>
            <p>
              If you encounter any such instance, please report it immediately at{' '}
              <a
                href="mailto:info@theindusgroup.com"
                className="text-red-600 font-medium hover:underline"
              >
                info@theindusgroup.com
              </a>{' '}
              or call{' '}
              <a href="tel:+917011332238" className="text-red-600 font-medium hover:underline">
                +91 7011332238
              </a>
              .
            </p>
            <p className="text-red-600 font-bold">Stay alert. Stay safe.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
