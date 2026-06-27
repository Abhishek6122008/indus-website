import { ServiceHero } from '@/components/sections/businesses/ServiceHero'
import { ServiceFeatures } from '@/components/sections/businesses/ServiceFeatures'
import { ServiceCTA } from '@/components/sections/businesses/ServiceCTA'

export const metadata = {
  title: 'Skill Development Solutions | The Indus Group of Co.',
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

export default function SkillDevelopmentPage() {
  return (
    <>
      <ServiceHero
        title="Unlock Your Potential with My Skills Academy"
        subtitle="Empowering students and professionals with future-ready skills for global leadership through expert-designed courses."
        slug="skill-development"
      />
      <ServiceFeatures features={features} heading="Certificate Courses Offered" />
      <ServiceCTA
        title="Invest in Your Future"
        description="Speak to our team about enrolling in a course or building a custom training programme for your organisation."
      />
    </>
  )
}
