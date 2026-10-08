import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { RouteIntro } from "@/components/route-intro";
import { brands } from "@/config/site";

export const metadata: Metadata = { title: "Brands", description: "Explore our curated index of TPE and silicone doll makers." };

export default function BrandsPage() {
  return (
    <RouteIntro eyebrow="Brand directory" title="Explore leading makers" description="Independent profiles of established TPE and silicone doll manufacturers.">
      <Container className="brand-directory">
        {brands.map((brand, index) => <Link href={`/brands/${brand.slug}`} key={brand.slug}><span>{String(index + 1).padStart(2, "0")}</span><h2>{brand.name}</h2><p>View brand profile</p></Link>)}
      </Container>
    </RouteIntro>
  );
}
