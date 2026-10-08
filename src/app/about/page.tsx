import type { Metadata } from "next";
import { Container } from "@/components/container";
import { RouteIntro } from "@/components/route-intro";

export const metadata: Metadata = { title: "About", description: "About TPE & Silicone Dolls, an independent curated showroom and buying guide." };

export default function AboutPage() {
  return (
    <RouteIntro eyebrow="Our point of view" title="Less noise. Better choices." description="TPE & Silicone Dolls is an independent curated showroom created to make a complex purchase feel clearer, calmer, and more considered.">
      <Container className="prose-panel"><h2>Independent by design</h2><p>We organize brands, models, and practical buying knowledge into an editorial experience built around discovery. We do not manufacture or directly sell the products featured here.</p><p>Some links may earn us a commission. That support helps maintain the guide and does not change the price you pay.</p></Container>
    </RouteIntro>
  );
}
