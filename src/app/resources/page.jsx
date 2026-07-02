import { PageHero } from "@/components/ui/PageHero";
import ResourcesClient from "@/components/sections/ResourcesClient";

export const metadata = {
  title: "Resources | The Indus Group Co.",
  description:
    "Downloadable resources, templates, and documents from The Indus Group.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Downloads"
        title="Resources"
        subtitle="Useful documents, templates, and reference materials for clients and partners."
        breadcrumbs={[{ label: "Resources" }]}
      />
      <ResourcesClient />
    </>
  );
}