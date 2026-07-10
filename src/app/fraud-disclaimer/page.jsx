import { PageHero } from '@/components/ui/PageHero'
import {
  ShieldAlert,
  MailCheck,
  Fish,
  Lock,
  Briefcase,
  UserX,
  Siren,
  Globe,
  Share2,
  AlertTriangle,
  Mail,
  Phone,
} from 'lucide-react'

export const metadata = {
  title: 'Fraud Disclaimer | The Indus Group Co.',
  description:
    'Fraud awareness and customer support notice. Learn how to protect yourself from fraudulent use of The Indus Group Co. name and how to report suspicious activity.',
}

const sections = [
  {
    number: '01',
    icon: MailCheck,
    title: 'Verify Official Communications',
    content: (
      <ul>
        <li>
          Official emails from The Indus Group Co. will only be sent from authorized{' '}
          <strong>@theindusgroup.com</strong> email addresses.
        </li>
        <li>
          Do not trust communications from unofficial domains, free email services, WhatsApp numbers,
          or personal email accounts claiming to represent The Indus Group.
        </li>
        <li>Always verify the sender before responding or sharing any information.</li>
      </ul>
    ),
  },
  {
    number: '02',
    icon: Fish,
    title: 'Beware of Phishing Attempts',
    content: (
      <>
        <p>Fraudsters may send fake SMS messages, emails, or WhatsApp messages claiming:</p>
        <ul>
          <li>Delivery failure</li>
          <li>Shipment held for clearance</li>
          <li>Additional delivery charges</li>
          <li>Customs or verification fees</li>
          <li>Reward or cashback offers</li>
        </ul>
        <p>
          Never click on suspicious links or download attachments from unknown sources. Always verify
          that the website address belongs to the official Indus Group domain before entering any
          personal information.
        </p>
      </>
    ),
  },
  {
    number: '03',
    icon: Lock,
    title: 'Protect Your Personal Information',
    content: (
      <>
        <p>The Indus Group will never ask you to:</p>
        <ul>
          <li>Share OTPs or verification codes</li>
          <li>Reveal ATM PINs or banking passwords</li>
          <li>Provide debit or credit card CVV numbers</li>
          <li>Transfer money to personal bank accounts</li>
          <li>Make payments through unofficial payment links or QR codes</li>
        </ul>
        <p>
          If anyone requests this information while claiming to represent The Indus Group Co., treat
          it as fraudulent.
        </p>
      </>
    ),
  },
  {
    number: '04',
    icon: Briefcase,
    title: 'Recruitment & Franchise Scams',
    content: (
      <>
        <p>Be cautious of fake employment or franchise offers. The Indus Group Co.:</p>
        <ul>
          <li>
            Never charges candidates any fee for recruitment, interviews, training, documentation, or
            onboarding.
          </li>
          <li>
            Never requests franchise payments through personal bank accounts or unofficial
            communication channels.
          </li>
        </ul>
        <p>Always verify recruitment and business opportunities through our official website.</p>
      </>
    ),
  },
  {
    number: '05',
    icon: UserX,
    title: 'Fake Customer Support & Impersonation',
    content: (
      <>
        <p>
          Fraudsters may impersonate customer support representatives or delivery personnel. If you
          receive suspicious calls requesting payments, personal information, or urgent action:
        </p>
        <ul>
          <li>Do not share any confidential information.</li>
          <li>End the conversation immediately.</li>
          <li>
            Contact Indus Group using the official contact details published on our website.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: '06',
    icon: Siren,
    title: 'If You Suspect Fraud',
    content: (
      <>
        <p>
          If you believe you have been targeted or have suffered financial loss, immediately contact
          your bank and call the National Cyber Crime Helpline <strong>1930</strong>.
        </p>
        <ul>
          <li>
            Report the incident through the National Cyber Crime Reporting Portal:{' '}
            <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
              cybercrime.gov.in
            </a>
          </li>
          <li>
            Report suspicious telecom communications through:{' '}
            <a href="https://sancharsaathi.gov.in" target="_blank" rel="noopener noreferrer">
              sancharsaathi.gov.in
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    number: '07',
    icon: Globe,
    title: 'Official Website',
    content: (
      <>
        <p>
          Always access Indus Group services only through our official website:{' '}
          <a href="https://www.theindusgroup.com" target="_blank" rel="noopener noreferrer">
            www.theindusgroup.com
          </a>
        </p>
        <p>Before responding to any communication, always verify that:</p>
        <ul>
          <li>The website URL is correct.</li>
          <li>The email originates from the official Indus Group domain.</li>
          <li>The contact details match those published on our official website.</li>
        </ul>
      </>
    ),
  },
  {
    number: '08',
    icon: Share2,
    title: 'Official Social Media',
    content: (
      <p>
        Please interact only with our verified social media accounts listed on our official website.
        Messages received from unverified accounts claiming to represent The Indus Group Co. should be
        treated as suspicious.
      </p>
    ),
  },
  {
    number: '09',
    icon: AlertTriangle,
    title: 'Common Warning Signs of Fraud',
    content: (
      <ul>
        <li>Unexpected requests for advance payment.</li>
        <li>Requests for OTPs, passwords, or banking details.</li>
        <li>Fake delivery failure notifications.</li>
        <li>Urgent messages demanding immediate action.</li>
        <li>Misspelled website addresses or email domains.</li>
        <li>Job or franchise offers requiring upfront payment.</li>
        <li>Unofficial customer care numbers found through internet searches.</li>
      </ul>
    ),
  },
]

export default function FraudDisclaimerPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Fraud Disclaimer"
        subtitle="Fraud Awareness & Customer Support Notice — please read this important notice to protect yourself."
        breadcrumbs={[{ label: 'Fraud Disclaimer' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro alert */}
          <div className="flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-6 mb-12">
            <ShieldAlert className="w-8 h-8 text-red-600 shrink-0 mt-0.5" />
            <div className="prose-section">
              <h2 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Please Contact Us Only Through Official Channels
              </h2>
              <p>
                For all delivery, shipment, and customer support-related queries, please use only the
                official communication channels available on The Indus Group Co. website{' '}
                <a href="https://www.theindusgroup.com" target="_blank" rel="noopener noreferrer">
                  www.theindusgroup.com
                </a>
                . Any customer care numbers, email addresses, websites, or social media accounts not
                listed on our official website may be fraudulent. To protect your personal information
                and financial security, please rely only on our verified communication channels.
              </p>
              <p className="font-semibold text-slate-900">
                Your Security Is Our Priority. Cybercriminals may misuse our brand name to deceive
                customers through fake calls, messages, emails, websites, or social media accounts.
                Please stay vigilant and keep the following precautions in mind.
              </p>
            </div>
          </div>

          {/* Numbered sections */}
          <div className="space-y-10">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <div key={section.number} className="flex gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                      <span className="text-blue-600 mr-2">{section.number}.</span>
                      {section.title}
                    </h3>
                    <div className="prose-section">{section.content}</div>
                  </div>
                </div>
              )
            })}

            {/* Report / contact */}
            <div className="bg-gradient-to-br from-[#0b1f5c] via-[#1e40af] to-blue-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-[2px] bg-blue-300" />
                <span className="text-blue-200 text-xs font-semibold tracking-widest uppercase font-heading">Stay Vigilant</span>
              </div>
              <h2 className="text-2xl font-bold font-heading mb-2">Stay Alert. Stay Secure. Stay Protected.</h2>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-lg">
                If you have any concerns regarding a communication claiming to be from The Indus Group,
                please verify it through our official customer support before taking any action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@theindusgroup.com"
                  className="flex items-center gap-2.5 bg-white/15 hover:bg-white/25 transition-all rounded-xl px-5 py-3 text-sm font-medium"
                >
                  <Mail className="w-4 h-4" />
                  info@theindusgroup.com
                </a>
                <a
                  href="tel:+917011332238"
                  className="flex items-center gap-2.5 bg-white/15 hover:bg-white/25 transition-all rounded-xl px-5 py-3 text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  +91 7011332238
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
