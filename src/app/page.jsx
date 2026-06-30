import { HeroSection } from '@/components/sections/home/HeroSection'
import { WhoWeAreSection } from '@/components/sections/home/WhoWeAreSection'
import { PartnersStrip } from '@/components/sections/home/PartnersStrip'
import { TrustedByStrip } from '@/components/sections/home/TrustedByStrip'
import { BusinessesGrid } from '@/components/sections/home/BusinessesGrid'
import { StatsBar } from '@/components/sections/home/StatsBar'
import { WhyChooseUs } from '@/components/sections/home/WhyChooseUs'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { ContactCTA } from '@/components/sections/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <PartnersStrip />
      <BusinessesGrid />
      <StatsBar />
      <WhyChooseUs />
      <TrustedByStrip />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
