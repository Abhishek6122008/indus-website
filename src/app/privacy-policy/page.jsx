import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import {
  Shield,
  Database,
  Settings,
  Cookie,
  Share2,
  Clock,
  Lock,
  ExternalLink,
  UserCheck,
  RefreshCw,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | The Indus Group Co.',
  description:
    'Learn how The Indus Group Co. collects, uses, and protects your personal information.',
}

const sections = [
  {
    id: 'introduction',
    number: '01',
    icon: Shield,
    title: 'Introduction',
    content: (
      <>
        <p>
          The Indus Group Co. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting
          your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website at theindusgroup.com or interact with our
          services.
        </p>
        <p>
          Please read this policy carefully. If you disagree with its terms, please discontinue
          use of our site.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    number: '02',
    icon: Database,
    title: 'Information We Collect',
    content: (
      <>
        <p>We may collect information about you in the following ways:</p>
        <div className="mt-4 space-y-4">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="font-semibold text-slate-800 mb-1">Information you provide voluntarily</p>
            <p className="text-sm">
              When you fill out our contact form, enquire about our services, or send us an email,
              you may provide your name, email address, phone number, company name, and the content
              of your message.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="font-semibold text-slate-800 mb-1">Automatically collected information</p>
            <p className="text-sm">
              When you visit our website, our servers may automatically log standard data such as
              your IP address, browser type, pages visited, time spent on pages, and referring URLs.
              This data is used solely to improve our website.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'how-we-use',
    number: '03',
    icon: Settings,
    title: 'How We Use Your Information',
    content: (
      <>
        <p>We use the information we collect in the following ways:</p>
        <ul>
          <li>To respond to your enquiries and provide the services you request.</li>
          <li>To send you relevant updates about our services, where you have consented.</li>
          <li>To improve and optimise our website and user experience.</li>
          <li>To comply with legal obligations and resolve any disputes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    number: '04',
    icon: Cookie,
    title: 'Cookies',
    content: (
      <p>
        Our website may use &quot;cookies&quot; — small data files stored on your device — to enhance
        your browsing experience. Cookies help us remember your preferences and understand how
        visitors use our site. You can instruct your browser to refuse all cookies or to indicate
        when a cookie is being sent. However, if you do not accept cookies, some parts of our site
        may not function correctly.
      </p>
    ),
  },
  {
    id: 'sharing',
    number: '05',
    icon: Share2,
    title: 'Sharing Your Information',
    content: (
      <>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share
          your information in limited circumstances:
        </p>
        <ul>
          <li>
            With trusted service providers who assist us in operating our website and conducting our
            business, under strict confidentiality agreements.
          </li>
          <li>When required by law, regulation, or legal process.</li>
          <li>
            To protect the rights, property, or safety of The Indus Group, our clients, or others.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-retention',
    number: '06',
    icon: Clock,
    title: 'Data Retention',
    content: (
      <p>
        We retain your personal information only for as long as is necessary to fulfil the purposes
        for which it was collected, or as required by applicable laws. When your data is no longer
        needed, we will securely delete or anonymise it.
      </p>
    ),
  },
  {
    id: 'security',
    number: '07',
    icon: Lock,
    title: 'Security',
    content: (
      <p>
        We implement reasonable administrative, technical, and physical security measures to protect
        your information from unauthorised access, disclosure, alteration, or destruction. However,
        no transmission of data over the internet can be guaranteed to be 100% secure, and we
        cannot warrant the absolute security of your information.
      </p>
    ),
  },
  {
    id: 'third-party',
    number: '08',
    icon: ExternalLink,
    title: 'Third-Party Links',
    content: (
      <p>
        Our website may contain links to third-party websites. We have no control over and assume
        no responsibility for the content, privacy policies, or practices of any third-party sites.
        We encourage you to review the privacy policy of every website you visit.
      </p>
    ),
  },
  {
    id: 'your-rights',
    number: '09',
    icon: UserCheck,
    title: 'Your Rights',
    content: (
      <p>
        Depending on your jurisdiction, you may have the right to access, correct, or delete the
        personal information we hold about you. To exercise any of these rights, or to raise a
        concern about how we handle your data, please contact us at{' '}
        <a href="mailto:info@theindusgroup.com" className="text-blue-600 underline hover:text-blue-800 transition-colors">
          info@theindusgroup.com
        </a>
        .
      </p>
    ),
  },
  {
    id: 'changes',
    number: '10',
    icon: RefreshCw,
    title: 'Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this
        page with an updated &quot;Last updated&quot; date. We encourage you to review this page
        periodically to stay informed about how we protect your information.
      </p>
    ),
  },
]

const highlights = [
  {
    icon: Shield,
    title: 'We Never Sell Your Data',
    description: 'Your personal information is never sold or rented to third parties.',
  },
  {
    icon: Lock,
    title: 'Secure by Default',
    description: 'We use industry-standard security measures to protect your information.',
  },
  {
    icon: UserCheck,
    title: 'You Stay in Control',
    description: 'You can request access, correction, or deletion of your data at any time.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and safeguard the information you share with us."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      {/* Key Highlights */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => {
              const Icon = h.icon
              return (
                <div key={h.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm font-heading">{h.title}</p>
                    <p className="text-blue-100 text-xs leading-relaxed mt-0.5">{h.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-4">
                {/* TOC Card */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 font-heading">
                    Contents
                  </p>
                  <nav className="space-y-1">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 py-1.5 rounded-lg hover:bg-blue-50 px-2 transition-all group"
                      >
                        <ChevronRight className="w-3 h-3 text-blue-300 group-hover:text-blue-600 shrink-0 transition-colors" />
                        {s.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Meta Card */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-5">
                  <p className="text-xs text-slate-400 mb-1">Last updated</p>
                  <p className="text-sm font-semibold text-slate-700">June 2025</p>
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-[#0b1f5c] to-blue-700 rounded-2xl p-5 text-white">
                  <p className="font-semibold font-heading text-sm mb-1">Have questions?</p>
                  <p className="text-blue-200 text-xs leading-relaxed mb-4">
                    Our team is happy to explain anything in this policy.
                  </p>
                  <a
                    href="mailto:info@theindusgroup.com"
                    className="flex items-center gap-2 text-xs text-blue-200 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    info@theindusgroup.com
                  </a>
                  <a
                    href="tel:+917011332238"
                    className="flex items-center gap-2 text-xs text-blue-200 hover:text-white transition-colors mt-2"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    +91 7011332238
                  </a>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3 space-y-6">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <div
                    key={section.id}
                    id={section.id}
                    className="bg-white rounded-2xl border border-blue-100 shadow-sm p-8 scroll-mt-8"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="flex flex-col items-center gap-1.5 shrink-0">
                        <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-bold text-blue-300 font-heading">{section.number}</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 font-heading leading-tight">
                          {section.title}
                        </h2>
                        <div className="w-10 h-0.5 bg-blue-200 mt-2" />
                      </div>
                    </div>
                    <div className="prose-section">
                      {section.content}
                    </div>
                  </div>
                )
              })}

              {/* Contact Section */}
              <div className="bg-gradient-to-br from-[#0b1f5c] via-[#1e40af] to-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-[2px] bg-blue-300" />
                  <span className="text-blue-200 text-xs font-semibold tracking-widest uppercase font-heading">Get in Touch</span>
                </div>
                <h2 className="text-2xl font-bold font-heading mb-2">Contact Us</h2>
                <p className="text-blue-100 leading-relaxed mb-6 max-w-lg">
                  If you have any questions or concerns about this Privacy Policy, we&apos;re here to help.
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
        </div>
      </section>


    </>
  )
}
