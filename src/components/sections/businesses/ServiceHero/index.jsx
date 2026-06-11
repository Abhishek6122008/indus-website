import { PageHero } from '@/components/ui/PageHero'

export function ServiceHero({ title, subtitle, slug }) {
  return (
    <PageHero
      label="Business Vertical"
      title={title}
      subtitle={subtitle}
      breadcrumbs={[
        { label: 'Businesses', href: '/businesses' },
        { label: title },
      ]}
    />
  )
}
