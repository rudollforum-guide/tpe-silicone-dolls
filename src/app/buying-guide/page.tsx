import type { Metadata } from "next";
import { RouteIntro } from "@/components/route-intro";

export const metadata: Metadata = { title: "Buying Guide", description: "Independent guidance for choosing a TPE or silicone doll." };

export default function BuyingGuidePage() {
  return <RouteIntro eyebrow="Buying guide" title="Make an informed choice" description="Practical guidance on materials, care, storage, and seller checks before you buy." />;
}
