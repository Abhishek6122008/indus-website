import { PageHero } from '@/components/ui/PageHero'
import { ContactDetails } from '@/components/sections/contact/ContactDetails'
import { ContactForm } from '@/components/sections/contact/ContactForm'

export const metadata = {
  title: 'Contact Us | The Indus Group Co.',
  description:
    'Get in touch with The Indus Group of Co. Call, email, or send us a message — we are always ready to help.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Talk to Us"
        title="Contact Us"
        subtitle="Have a question or a project in mind? We would love to hear from you."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <ContactDetails />
            </div>
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[2px] bg-blue-600" />
                <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase">Request a Callback</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-3">Let&apos;s Talk</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Tell us what you need and leave your number — a member of our team will call you back shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
