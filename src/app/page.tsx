import { HeroSection } from '@/components/sections/home/HeroSection'
import { WhoWeAreSection } from '@/components/sections/home/WhoWeAreSection'
import { BusinessesGrid } from '@/components/sections/home/BusinessesGrid'
import { StatsBar } from '@/components/sections/home/StatsBar'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { ContactCTA } from '@/components/sections/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <BusinessesGrid />
      <StatsBar />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
