import { PageHero } from '@/components/ui/PageHero'

export const metadata = {
  title: 'Privacy Policy | The Indus Group of Co.',
  description:
    'Learn how The Indus Group of Co. collects, uses, and protects your personal information and business data.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="Last updated: June 2026. Learn how we protect and manage your personal and business data."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-slate-700">
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              At The Indus Group of Co., we are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website, use our services, or interact with us.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We may collect personal and business information directly from you when you interact with our website or services. This includes:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address.</li>
              <li><strong>Business Details:</strong> Company name, registration details, industry vertical (logistics, real estate, etc.), and operational metrics.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and details about your website usage pattern.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Indus Group of Co. uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-6 space-y-2">
              <li>To provide, maintain, and improve our services across our multiple business verticals.</li>
              <li>To respond to your inquiries, support requests, or application/franchise requests.</li>
              <li>To send newsletter updates, marketing communications, and corporate notifications (which you can opt-out of at any time).</li>
              <li>To analyze website usage to optimize user experience and platform functionality.</li>
              <li>To comply with legal obligations and protect our rights and property.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              3. Data Security
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We implement industry-standard administrative, physical, and technical security measures designed to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              4. Sharing Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We do not sell or trade your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-6 space-y-2">
              <li><strong>Subsidiaries & Affiliates:</strong> Trusted corporate entities under The Indus Group of Co. to deliver unified business solutions.</li>
              <li><strong>Service Providers:</strong> Third-party contractors and vendors who assist us in website hosting, logistics, operations, or analytical services.</li>
              <li><strong>Legal Requirements:</strong> Regulatory bodies or law enforcement authorities when required by law or to defend our legal rights.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              5. Cookies & Tracking Technologies
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our website uses cookies to store user preferences, analyze site traffic, and track interactions. You can adjust your browser settings to refuse cookies, though some features of our site may not function properly as a result.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              6. Your Rights & Choices
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Depending on your location, you may have rights to access, correct, delete, or limit the use of your personal data. To exercise any of these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              7. Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If you have any questions or concerns regarding this Privacy Policy or our data handling practices, please contact us at:
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-4">
              <p className="text-slate-800 font-bold mb-1">The Indus Group of Co.</p>
              <p className="text-slate-600 text-sm mb-1">New Delhi, India</p>
              <p className="text-slate-600 text-sm mb-1">
                Email:{' '}
                <a href="mailto:info@theindusgroup.com" className="text-blue-600 hover:underline">
                  info@theindusgroup.com
                </a>
              </p>
              <p className="text-slate-600 text-sm">
                Phone:{' '}
                <a href="tel:+917011332238" className="text-blue-600 hover:underline">
                  +91 7011 332 238
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
