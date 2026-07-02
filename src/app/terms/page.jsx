import { PageHero } from '@/components/ui/PageHero'
import {
  FileCheck,
  Ban,
  Copyright,
  Briefcase,
  AlertTriangle,
  ShieldOff,
  Globe,
  Lock,
  RefreshCw,
  Scale,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react'

export const metadata = {
  title: 'Terms & Conditions | The Indus Group Co.',
  description:
    'Read the Terms & Conditions governing your use of The Indus Group Co. website and services.',
}

const sections = [
  {
    id: 'acceptance',
    number: '01',
    icon: FileCheck,
    title: 'Acceptance of Terms',
    content: (
      <p>
        By accessing or using the website of The Indus Group Co. (&quot;the Company&quot;,
        &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) at theindusgroup.com, you agree to be bound by these
        Terms &amp; Conditions. If you do not agree to all the terms stated here, please do not use
        our website or services.
      </p>
    ),
  },
  {
    id: 'use-of-website',
    number: '02',
    icon: Ban,
    title: 'Use of the Website',
    content: (
      <>
        <p>
          You agree to use this website only for lawful purposes and in a manner that does not
          infringe the rights of others or restrict their use and enjoyment of the site. Prohibited
          uses include, but are not limited to:
        </p>
        <ul>
          <li>Transmitting unsolicited commercial communications (spam).</li>
          <li>
            Attempting to gain unauthorised access to any part of the website or its related
            systems.
          </li>
          <li>
            Uploading or distributing malicious code, viruses, or any software that may damage or
            disrupt the website.
          </li>
          <li>Using the site to collect personal data about other users without their consent.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    number: '03',
    icon: Copyright,
    title: 'Intellectual Property',
    content: (
      <>
        <p>
          All content on this website — including but not limited to text, graphics, logos, icons,
          images, and software — is the property of The Indus Group Co. or its content suppliers
          and is protected by applicable intellectual property laws.
        </p>
        <p>
          You may not reproduce, duplicate, copy, sell, or exploit any portion of this website
          without the express written permission of The Indus Group Co.
        </p>
      </>
    ),
  },
  {
    id: 'services',
    number: '04',
    icon: Briefcase,
    title: 'Services & Business Information',
    content: (
      <>
        <p>
          Information on this website regarding our services, pricing, and business verticals is
          provided for general informational purposes only. It is subject to change without notice.
          The Indus Group Co. makes no warranty that the information is accurate, complete, or
          current.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
          <p className="text-sm text-amber-800 font-medium">
            ⚠️ Any tools or calculators on this website produce indicative results only and should
            not be relied upon as professional financial or operational advice.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'disclaimer',
    number: '05',
    icon: AlertTriangle,
    title: 'Disclaimer of Warranties',
    content: (
      <p>
        This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. The Indus Group of
        Co. makes no representations or warranties of any kind, express or implied, regarding the
        operation of the website, the accuracy of information, or the suitability of the content
        for any purpose.
      </p>
    ),
  },
  {
    id: 'liability',
    number: '06',
    icon: ShieldOff,
    title: 'Limitation of Liability',
    content: (
      <p>
        To the fullest extent permitted by law, The Indus Group Co. shall not be liable for any
        direct, indirect, incidental, consequential, or punitive damages arising from your use of,
        or inability to use, this website or any information contained herein.
      </p>
    ),
  },
  {
    id: 'third-party',
    number: '07',
    icon: Globe,
    title: 'Third-Party Links',
    content: (
      <p>
        This website may contain links to third-party websites. These links are provided for your
        convenience only. We have no control over the content of those sites and accept no
        responsibility for them or for any loss or damage that may arise from your use of them.
      </p>
    ),
  },
  {
    id: 'privacy',
    number: '08',
    icon: Lock,
    title: 'Privacy',
    content: (
      <p>
        Your use of this website is also governed by our{' '}
        <a href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800 transition-colors">
          Privacy Policy
        </a>
        , which is incorporated into these Terms &amp; Conditions by reference. Please review it to
        understand our practices.
      </p>
    ),
  },
  {
    id: 'changes',
    number: '09',
    icon: RefreshCw,
    title: 'Changes to These Terms',
    content: (
      <p>
        We reserve the right to revise these Terms &amp; Conditions at any time. Changes will be
        effective immediately upon posting to the website. Your continued use of the website
        following any changes constitutes your acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: 'governing-law',
    number: '10',
    icon: Scale,
    title: 'Governing Law',
    content: (
      <p>
        These Terms &amp; Conditions shall be governed by and construed in accordance with the laws
        of India. Any disputes arising in connection with these terms shall be subject to the
        exclusive jurisdiction of the courts located in New Delhi, India.
      </p>
    ),
  },
]

const highlights = [
  {
    icon: FileCheck,
    title: 'By Using This Site',
    description: 'You agree to these terms. Please read them before continuing.',
  },
  {
    icon: Copyright,
    title: 'All Content Is Ours',
    description: 'Do not copy, reproduce, or exploit site content without permission.',
  },
  {
    icon: Scale,
    title: 'Indian Jurisdiction',
    description: 'All disputes are governed by Indian law, courts in New Delhi.',
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        subtitle="The rules and guidelines that govern your use of our website and services."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
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

                {/* Also See Card */}
                <div className="bg-gradient-to-br from-[#0b1f5c] to-blue-700 rounded-2xl p-5 text-white">
                  <p className="font-semibold font-heading text-sm mb-1">Also see</p>
                  <p className="text-blue-200 text-xs leading-relaxed mb-4">
                    Our Privacy Policy explains how we handle your personal data.
                  </p>
                  <a
                    href="/privacy-policy"
                    className="inline-flex items-center gap-2 text-xs bg-white/15 hover:bg-white/25 transition-all rounded-lg px-3 py-2 font-medium"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    Privacy Policy
                  </a>
                </div>

                {/* Contact Card */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-5">
                  <p className="text-sm font-semibold text-slate-700 mb-3 font-heading">Questions?</p>
                  <a
                    href="mailto:info@theindusgroup.com"
                    className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors mb-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    info@theindusgroup.com
                  </a>
                  <a
                    href="tel:+917011332238"
                    className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
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
                  If you have any questions about these Terms &amp; Conditions, we&apos;re here to help.
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
