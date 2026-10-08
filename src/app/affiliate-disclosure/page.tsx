import type { Metadata } from "next";
import { Container } from "@/components/container";
import { RouteIntro } from "@/components/route-intro";

export const metadata: Metadata = { title: "Affiliate Disclosure", description: "How affiliate links support TPE & Silicone Dolls." };

export default function AffiliateDisclosurePage() {
  return (
    <RouteIntro eyebrow="Transparency" title="Affiliate disclosure" description="We may earn a commission from qualifying purchases at no additional cost to you.">
      <Container className="prose-panel"><h2>How this site is supported</h2><p>TPE & Silicone Dolls contains affiliate links. If you follow one of these links and make a purchase, we may receive a commission from the retailer at no additional cost to you.</p><p>Moon-Doll is an affiliate partner of this website. Editorial presentation and buying guidance are developed for our readers; an affiliate relationship does not constitute a product endorsement or guarantee.</p><p>Discount availability, retailer terms, and product information may change. Confirm all details directly with the retailer before purchasing.</p></Container>
    </RouteIntro>
  );
}
