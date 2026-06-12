import { PageHero } from '@/components/ui/PageHero'

export const metadata = {
  title: 'Terms & Conditions | The Indus Group of Co.',
  description: 'Read the terms and conditions of using The Indus Group of Co. website and services.',
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        subtitle="Last updated: June 2026. Review the rules and regulations for using our website."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-slate-700">
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              Welcome to the website of The Indus Group of Co. By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              By accessing, browsing, or using this website (theindusgroup.com), you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree, you must immediately cease using this website.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              2. Intellectual Property Rights
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              All content on this website—including text, graphics, logos, icons, images, audio/video clips, data compilations, software, and layouts—is the exclusive property of The Indus Group of Co. or its content suppliers and is protected by Indian and international copyright, trademark, and intellectual property laws.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              You are granted a limited, non-exclusive, non-transferable license to access the site for personal or internal business informational purposes. You may not copy, reproduce, distribute, republish, download, perform, display, or transmit any part of this website without our prior written consent.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              3. User Conduct & Prohibited Activities
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-6 space-y-2">
              <li>Use the website in any way that violates local, national, or international laws or regulations.</li>
              <li>Attempt to gain unauthorized access to our servers, database, or security systems.</li>
              <li>Introduce viruses, trojans, worms, or other malicious software designed to disrupt service.</li>
              <li>Engage in automated scraping, data extraction, or data harvesting activities without prior authorization.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              4. Disclaimer of Warranties
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              This website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. The Indus Group of Co. makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, or availability of the website. Your use of this site is entirely at your own risk.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              To the fullest extent permitted by law, The Indus Group of Co. and its directors, officers, employees, or agents shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your access, use, or inability to use this website.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              6. Third-Party Links
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our website may contain links to external third-party websites for your convenience. The Indus Group of Co. does not endorse, control, or assume liability for the content, privacy policies, or practices of any third-party websites.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              7. Governing Law & Jurisdiction
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">
              8. Contact Details
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If you have any questions about these Terms & Conditions, please reach out to us at:
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
