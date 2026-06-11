import { PageHero } from '@/components/ui/PageHero'

type ServiceHeroProps = {
  title: string
  subtitle: string
  slug: string
}

export function ServiceHero({ title, subtitle, slug }: ServiceHeroProps) {
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
