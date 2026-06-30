import { PageHero } from '@/components/ui/PageHero'

export function ServiceHero({ title, subtitle, backgroundImage, imagePosition }) {
  return (
    <PageHero
      label="Business Vertical"
      title={title}
      subtitle={subtitle}
      backgroundImage={backgroundImage}
      imagePosition={imagePosition}
      breadcrumbs={[
        { label: 'Businesses', href: '/businesses' },
        { label: title },
      ]}
    />
  )
}