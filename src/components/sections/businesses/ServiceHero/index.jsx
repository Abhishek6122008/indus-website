import { PageHero } from '@/components/ui/PageHero'

export function ServiceHero({ title, subtitle, slug, backgroundImage }) {
  return (
    <PageHero
      label="Business Vertical"
      title={title}
      subtitle={subtitle}
      backgroundImage={backgroundImage}
      breadcrumbs={[
        { label: 'Businesses', href: '/businesses' },
        { label: title },
      ]}
    />
  )
}