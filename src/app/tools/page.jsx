import { PageHero } from '@/components/ui/PageHero'
import { ToolsGrid } from '@/components/sections/tools/ToolsGrid'

export const metadata = {
  title: 'Interactive Tools & Calculators | The Indus Group of Co.',
  description:
    'Use our interactive freight estimator and franchise return calculators to make smarter, data-driven planning decisions.',
}

export default function ToolsPage() {
  return (
    <>
      <PageHero
        label="Interactive"
        title="Tools"
        subtitle="Calculators and planning tools for better business decisions."
        breadcrumbs={[{ label: 'Tools' }]}
      />
      <ToolsGrid />
    </>
  )
}