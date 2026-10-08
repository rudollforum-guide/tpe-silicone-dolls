import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandProfile } from "@/components/brand-profile";
import { brands, getBrandBySlug } from "@/config/site";

type BrandPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) return {};

  return {
    title: brand.name,
    description: `${brand.positioning} Read an independent overview and browse the brand at Moon-Doll.`,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) notFound();

  return <BrandProfile brand={brand} />;
}
