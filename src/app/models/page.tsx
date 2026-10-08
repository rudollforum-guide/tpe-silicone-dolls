import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ModelCatalogue } from "@/components/model-catalogue";
import { RouteIntro } from "@/components/route-intro";
import { models } from "@/data/models";

export const metadata: Metadata = { title: "Models", description: "Discover a curated selection of TPE and silicone doll models." };

export default function ModelsPage() {
  return (
    <RouteIntro eyebrow="Model catalogue" title="Explore the collection" description={`${models.length} prepared models from selected manufacturers, presented with real imagery and available catalogue details.`}>
      <Container className="catalogue-section"><ModelCatalogue models={models} /></Container>
    </RouteIntro>
  );
}
