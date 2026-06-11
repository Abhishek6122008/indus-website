import { PageHero } from "@/components/ui/PageHero";
import ResourcesClient from "./ResourcesClient";

export const metadata = {
  title: "Resources | The Indus Group of Co.",
  description:
    "Downloadable resources, templates, and documents from The Indus Group.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Downloads"
        title="Resources"
        subtitle="Access official documents, guides, and company materials."
        breadcrumbs={[{ label: "Resources" }]}
      />

      <ResourcesClient />
    </>
  );
}