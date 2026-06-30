import { ServiceHero } from '@/components/sections/businesses/ServiceHero'
import { EnterpriseIntro } from '@/components/sections/businesses/EnterpriseIntro'
import { ServiceFeatures } from '@/components/sections/businesses/ServiceFeatures'

export const metadata = {
  title: 'Enterprise Solutions | The Indus Group of Co.',
  description: 'Comprehensive solutions from startup to scale-up, designed to fuel your success.',
}

const stepsData = [
  { num: '01 Step', text: 'You reach out to us with your product idea or project and we discuss your requirements.' },
  { num: '02 Step', text: 'We analyze everything and offer customized solutions to power your product.' },
  { num: '03 Step', text: 'We get together and draft a working plan to take your startup to new heights.' }
]

const servicesTableData = [
  { id: '1. Incorporation of Start-up', desc: 'Guidance on starting a business under the Start up India initiative, including strategic consulting for both new and growing start-ups.' },
  { id: '2. Corporate Compliances', desc: 'Ensuring that the company adheres to statutory regulations and requirements. This includes filing annual returns, maintaining statutory registers, and complying with corporate laws.' },
  { id: '3. IT-support and VAS', desc: 'Providing technical support and value-added services (VAS) such as software installation, network management, cybersecurity, and other IT-related services to enhance business operations.' }
]

const advantagesData = [
  { id: '1', title: 'Industry Expertise', text: 'We possess deep industry knowledge and a proven track record of success in delivering tailored solutions.' },
  { id: '2', title: 'Innovative Solutions', text: 'We are constantly exploring new technologies and approaches to develop innovative solutions that drive business results.' },
  { id: '3', title: 'Exceptional Customer Service', text: 'We prioritize customer satisfaction and provide dedicated support throughout the entire client journey.' }
]

const audienceData = [
  { title: 'Small and Medium Businesses', text: 'We provide tailored solutions to help small and medium businesses streamline their operations and achieve sustainable growth.' },
  { title: 'Large Enterprises', text: 'We offer robust and scalable solutions to support the complex needs of large enterprises and help them maintain a competitive edge.' },
  { title: 'Startup', text: 'We provide guidance and support to startups seeking to establish themselves in the market and navigate the challenges of early-stage growth.' }
]

const strategiesData = [
  { id: '1', title: 'Innovation', text: 'We invest heavily in research and development to create innovative solutions that address emerging market needs.' },
  { id: '2', title: 'Market Expansion', text: 'We are actively exploring new markets and expanding our reach to serve a wider customer base.' },
  { id: '3', title: 'Strategic Partnerships', text: 'We are forming strategic partnerships with key players in the industry to enhance our service offerings and expand our market reach.' }
]

const gridImagesData = [
  { title: 'INCORPORATION OF STARTUP', image: '/images/businesses/enterprise/services/incorporation.png' },
  { title: 'CORPORATE COMPLIANCES', image: '/images/businesses/enterprise/services/corporate-compliances.png' },
  { title: 'IT-SUPPORT AND VAS', image: '/images/businesses/enterprise/services/it-support.png' },
  { title: 'LEGAL ASSISTANCE AND CONSULTING', image: '/images/businesses/enterprise/services/legal-assistance.png' },
  { title: 'GST/ACCOUNTING AND TAXATION CONSULTING', image: '/images/businesses/enterprise/services/gst-accounting.png' },
  { title: 'FUND RAISING ASSISTANCE', image: '/images/businesses/enterprise/services/fund-raising.png' }
]

export default function EnterpriseSolutionsPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-12">
      <ServiceHero
        title="Empowering Your Business for Unprecedented Growth"
        subtitle="Comprehensive solutions from startup to scale-up, designed to fuel your success."
        backgroundImage="/images/businesses/enterprise/enterprise-hero-bg.png"
        imagePosition="object-bottom"
      />

      <EnterpriseIntro steps={stepsData} />

      <ServiceFeatures 
        heading="Our Products and Services" 
        customLayout={true}
        servicesTable={servicesTableData}
        advantages={advantagesData}
        audience={audienceData}
        strategies={strategiesData}
        gridImages={gridImagesData}
      />
    </div>
  )
}