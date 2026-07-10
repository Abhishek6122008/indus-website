import Image from 'next/image'
import { ServiceHero } from '@/components/sections/businesses/ServiceHero'
import { ServiceFeatures } from '@/components/sections/businesses/ServiceFeatures'
import { ServiceCTA } from '@/components/sections/businesses/ServiceCTA'
import { GraduationCap, Building2, BriefcaseBusiness, Factory, Users } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata = {
  title: 'Skill Development Solutions | The Indus Group Co.',
  description:
    'My Skills Academy — expert-designed certificate courses empowering students and professionals with future-ready skills for global leadership.',
}

const IMG = '/images/businesses/skill-development'

// Certificate courses offered through My Skills Academy — theindusgroup.com/skills.html
const features = [
  {
    image: `${IMG}/logistics.jpeg`,
    title: 'Logistics & Supply Chain Management',
    description:
      'Build expertise in modern logistics and supply chain operations for domestic and global trade.',
  },
  {
    image: `${IMG}/hacking.jpeg`,
    title: 'Ethical Hacking and Cyber Security',
    description:
      'Hands-on training in ethical hacking, network defence, and cyber security fundamentals.',
  },
  {
    image: `${IMG}/genai.jpeg`,
    title: 'GenAI Digital Marketing',
    description:
      'Master modern digital marketing powered by generative AI tools and strategies.',
  },
  {
    image: `${IMG}/datascience.jpeg`,
    title: 'Data Science and Analytics',
    description:
      'Learn data analysis, visualisation, and analytics to drive data-informed decisions.',
  },
  {
    image: `${IMG}/posh.jpeg`,
    title: 'POSH Training',
    description:
      'Prevention of Sexual Harassment training for safe, compliant, and respectful workplaces.',
  },
  {
    image: `${IMG}/s.courses5.webp`,
    title: 'Basic Freight Forwarding',
    description:
      'Foundational knowledge of freight forwarding, shipping, and cargo movement.',
  },
  {
    image: `${IMG}/s.courses6.jpeg`,
    title: 'Certified E-commerce Professionals',
    description:
      'Become a certified e-commerce professional ready for the digital retail economy.',
  },
  {
    image: `${IMG}/inco.jpeg`,
    title: 'Masterclass On INCOTERMS',
    description:
      'In-depth masterclass on INCOTERMS and their application in international trade.',
  },
  {
    image: `${IMG}/s.courses9.png`,
    title: 'EXIM Documentations & Procedures',
    description:
      'Practical training on export-import documentation and trade procedures.',
  },
  {
    image: `${IMG}/sales.jpeg`,
    title: 'Training on Sales and Marketing',
    description:
      'Develop core sales and marketing skills to grow businesses and careers.',
  },
  {
    image: `${IMG}/start.jpeg`,
    title: 'Start-Up & Scale-Up in International Trade',
    description:
      'Guidance for starting and scaling ventures in the international trade space.',
  },
  {
    image: `${IMG}/s.courses13.jpeg`,
    title: 'WMS & Inventory Management',
    description:
      'Learn warehouse management systems and effective inventory control practices.',
  },
]

const impactStats = [
  {
    icon: GraduationCap,
    stat: '300K+',
    title: 'Professionals Trained',
    description: 'Empowering professionals with industry-relevant skills through expert-led learning programs.',
  },
  {
    icon: Building2,
    stat: '286+',
    title: 'Corporate Clients',
    description: 'Trusted by organizations across India for workforce development and training solutions.',
  },
  {
    icon: BriefcaseBusiness,
    stat: '100+',
    title: 'Businesses Consulted',
    description: 'Supporting businesses with strategic consulting and workforce capability development.',
  },
  {
    icon: Factory,
    stat: '20+',
    title: 'Industries Served',
    description: 'Delivering customized learning and consulting solutions across diverse industries.',
  },
  {
    icon: Users,
    stat: '1,000+',
    title: 'Expert Trainers & Consultants',
    description: 'A nationwide network of experienced trainers and industry consultants.',
  },
]

export default function SkillDevelopmentPage() {
  return (
    <>
      <ServiceHero
        title="Unlock Your Potential with My Skills Academy"
        subtitle="From Classroom to Boardroom: Equipping Talents with the Global Leadership Skills That Fuel Enterprise Growth"
        backgroundImage="/images/businesses/skill-development/skill-dev-hero-bg.png"
      />

      {/* Problem Statement / Eclectic Learning-Courses banner */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100">
            <Image
              src="/images/businesses/skill-development/intro-image.jpeg"
              alt="My Skills Academy — Eclectic Learning Courses"
              width={1000}
              height={560}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <ServiceFeatures features={features} heading="Certificates Courses & Traning Programs Offered" />

      {/* Our Impact in Numbers Section */}
      <section className="section-padding bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Impact in Numbers"
            subtitle="Our numbers reflect the trust, expertise, and impact we've built through industry-focused training and consulting."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {impactStats.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 shrink-0">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold font-heading text-slate-900 mb-0.5">{item.stat}</div>
                  <div className="text-sm font-semibold text-slate-700 mb-2">{item.title}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Invest in Your Future"
        description="Speak to our team about enrolling in a course or building a custom training programme for your organisation."
      />
    </>
  )
}
