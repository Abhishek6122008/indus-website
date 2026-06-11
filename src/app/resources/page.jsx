HEAD
import { PageHero } from '@/components/ui/PageHero'
import { FolderOpen } from 'lucide-react'

export const metadata = {
  title: 'Resources | The Indus Group of Co.',
  description: 'Downloadable resources, templates, and documents from The Indus Group.',
}

import { PageHero } from "@/components/ui/PageHero";
import ResourcesClient from "./ResourcesClient";

export const metadata = {
  title: "Resources | The Indus Group of Co.",
  description:
    "Downloadable resources, templates, and documents from The Indus Group.",
};
c375d87 (Fix resources page review comments)

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Downloads"
        title="Resources"
        subtitle="Useful documents, templates, and reference materials for clients and partners."
        breadcrumbs={[{ label: 'Resources' }]}
      />
HEAD
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white border border-blue-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <FolderOpen className="w-7 h-7 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-slate-900 mb-3">Resources Coming Soon</h2>
          <p className="text-slate-600 max-w-md mx-auto">
            We are preparing downloadable resources for our clients and partners. Contact us
            directly if you need specific documentation in the meantime.
          </p>
        </div>
      </section>


      <ResourcesClient />
      c375d87 (Fix resources page review comments)
    </>
  )
}
