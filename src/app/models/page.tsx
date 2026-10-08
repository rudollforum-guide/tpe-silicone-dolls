import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ModelCatalogue } from "@/components/model-catalogue";
import { RouteIntro } from "@/components/route-intro";
import { models } from "@/data/models";

export const metadata: Metadata = { title: "Models", description: "Discover a curated selection of TPE and silicone doll models." };

export default function ModelsPage() {
  return (
    <RouteIntro eyebrow="Curated showroom" title="The model edit." description={`${models.length} prepared models from selected manufacturers, presented with real imagery and only the details available from their catalogue folders.`}>
      <Container className="catalogue-section"><ModelCatalogue models={models} /></Container>
    </RouteIntro>
  );
}
