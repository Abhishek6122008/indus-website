const alerts = [
  'Be alert: fraudulent parties may falsely claim to represent The Indus Group Co. to solicit money or personal details.',
  'Please do not transfer money to any account or payment link that is not shared through The Indus Group’s official channels.',
  'The Indus Group never asks for OTPs, passwords, or card/bank credentials over call, SMS, or email.',
  'Always verify communication via our official number +91 7011332238 or email info@theindusgroup.com before acting.',
]

export function FraudAlertBar() {
  // Duplicate the list once so the marquee loops seamlessly (100% -> -50% translate).
  const items = [...alerts, ...alerts]

  return (
    <div className="bg-transparent text-red-900 text-xs md:text-sm overflow-hidden border-y border-red-300">
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-2.5" style={{ animationDuration: '28s' }}>
          {items.map((text, i) => (
            <span key={i} className="flex items-center px-6">
              <span className="font-bold uppercase tracking-wider text-red-600 mr-3">Updates:</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
