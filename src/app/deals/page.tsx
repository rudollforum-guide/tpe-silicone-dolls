import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { RouteIntro } from "@/components/route-intro";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Deals", description: "Verified partner offers and discount codes." };

export default function DealsPage() {
  const { affiliate } = siteConfig;
  return (
    <RouteIntro eyebrow="Current offer" title="A better way to buy." description="We list straightforward, verified partner promotions without invented savings or inflated reference prices.">
      <Container className="deal-panel">
        <div><p className="eyebrow">Exclusive code</p><h2>{affiliate.discountPercent}% off at {affiliate.partner}</h2><p>Apply the code at checkout. Terms and eligibility may be set by the retailer.</p></div>
        <div className="offer-card__action"><div className="promo-code"><span>Code</span><strong>{affiliate.discountCode}</strong></div><ButtonLink href={affiliate.url} external>Shop at {affiliate.partner}</ButtonLink></div>
      </Container>
    </RouteIntro>
  );
}
