import type { Metadata } from "next";
import { RouteIntro } from "@/components/route-intro";

export const metadata: Metadata = { title: "Buying Guide", description: "Independent guidance for choosing a TPE or silicone doll." };

export default function BuyingGuidePage() {
  return <RouteIntro eyebrow="Knowledge, distilled" title="Choose with confidence." description="Our practical guide will cover the decisions worth understanding—from material and care to storage and seller checks—before you buy." />;
}
