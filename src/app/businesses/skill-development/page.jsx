import Image from 'next/image'

import { ServiceHero } from '@/components/sections/businesses/ServiceHero'
import { ServiceFeatures } from '@/components/sections/businesses/ServiceFeatures'
import { ServiceCTA } from '@/components/sections/businesses/ServiceCTA'

export const metadata = {
  title: 'Skill Development Solutions | The Indus Group Co.',
  description:
    'My Skills Academy — expert-designed certificate courses empowering students and professionals with future-ready skills for global leadership.',
}

const IMG = '/images/businesses/skill-development'

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

export default function SkillDevelopmentPage() {
  return (
    <>
      <ServiceHero
        title="Unlock Your Potential with My Skills Academy"
        subtitle="From Classroom to Boardroom: Equipping Talents with the Global Leadership Skills That Fuel Enterprise Growth"
        backgroundImage={`${IMG}/skill-dev-hero-bg.png`}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center py-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Transforming Learning into Real-World Impact
              </h2>

              <p className="text-lg text-slate-600 leading-8">
  Founded by Learning & Development (L&amp;D) thought leaders,
  academicians, and seasoned practitioners, we bring over{' '}
  <strong>35 years of hands-on, real-world experience</strong>{' '}
  to the table. We don&apos;t just teach theory — we&apos;ve lived it.
</p>

              <p className="mt-6 text-lg text-slate-600 leading-8">
                Today, we serve as a premier corporate training, skill
                development, and consulting ecosystem, delivering comprehensive
                growth solutions for individuals, teams, and enterprises under
                one roof.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src={`${IMG}/image.png`}
                alt="Skill development impact"
                width={650}
                height={450}
                className="w-full max-w-xl rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center py-16">

            <div className="flex justify-center">
              <Image
                src={`${IMG}/image2.png`}
                alt="Core training expertise"
                width={650}
                height={450}
                className="w-full max-w-xl rounded-2xl shadow-xl object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Core Training Expertise
              </h2>

              <p className="text-lg text-slate-600 leading-8 mb-8">
                We design and deliver high-impact training programs engineered
                to produce immediate benefits and sustainable, long-term
                organizational growth.
              </p>

              <ul className="space-y-4 text-lg text-slate-600">
                <li>
                  <strong className="text-slate-900">
                    Leadership Development:
                  </strong>{' '}
                  Nurturing the next generation of visionary leaders and
                  executives.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Sales Excellence:
                  </strong>{' '}
                  Empowering revenue teams with modern negotiation, closing,
                  and relationship-building strategies.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Soft Skills & Behavioural Training:
                  </strong>{' '}
                  Enhancing emotional intelligence, communication, and
                  workplace collaboration.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Functional & Technical Training:
                  </strong>{' '}
                  Upskilling your workforce with precise, role-specific tools
                  needed to excel.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Outbound Experiential Learning:
                  </strong>{' '}
                  Building elite team cohesion and resilience through dynamic,
                  immersive experiences.
                </li>
              </ul>
            </div>
          </div>


          <div className="grid lg:grid-cols-2 gap-16 items-center py-16">

            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Partner With Us
              </h2>

              <p className="text-lg text-slate-600 leading-8 mb-8">
                We are more than just a training agency — we are your dedicated
                partners in sustainable transformation. Backed by a global
                network of catalyst trainers, consultants, and industry leaders,
                we accelerate your growth journey while building lasting,
                long-term capabilities.
              </p>

              <ul className="space-y-4 text-lg text-slate-600">
                <li>
                  <strong className="text-slate-900">
                    Tailored Solutions:
                  </strong>{' '}
                  Our Subject Matter Experts design and deploy customized
                  capacity-building programs aligned with your unique business
                  goals.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Global Expertise:
                  </strong>{' '}
                  We blend international best practices with local market
                  insights to deliver high-impact learning experiences.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Result-Driven Approach:
                  </strong>{' '}
                  We empower your teams with actionable strategies that inspire
                  immediate performance improvements and foster a culture of
                  winning.
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <Image
                src={`${IMG}/image3.png`}
                alt="Why partner with us"
                width={600}
                height={500}
                className="w-full rounded-2xl"
              />
            </div>

          </div>

        </div>
      </section>


            <ServiceFeatures
        features={features}
        heading="Certificate Courses & Training Programs Offered"
      />

      <ServiceCTA
        title="Invest in Your Future"
        description="Speak to our team about enrolling in a course or building a custom training programme for your organisation."
      />
    </>
  )
}