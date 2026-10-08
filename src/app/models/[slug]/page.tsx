import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ModelGallery } from "@/components/model-gallery";
import { getModelBySlug, models } from "@/data/models";
import { siteConfig } from "@/config/site";

type ModelPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) return {};
  return { title: `${model.displayName} by ${model.brandName}`, description: model.shortDescription };
}

export default async function ModelPage({ params }: ModelPageProps) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) notFound();

  const { affiliate, community } = siteConfig;
  const facts = [
    ["Brand", model.brandName],
    ["Height", model.height],
    ["Cup", model.cup],
    ["Material", model.material],
    ["Head", model.headCode],
    ["Technology", model.technologyLabel],
    ["Category", model.category],
  ].filter((fact): fact is [string, string] => Boolean(fact[1]));

  return (
    <main>
      <Container className="model-breadcrumb"><Link href="/models">Models</Link><span>/</span><Link href={`/brands/${model.brandSlug}`}>{model.brandName}</Link><span>/</span><span>{model.displayName}</span></Container>
      <section className="model-detail-hero">
        <Container className="model-detail-hero__grid">
          <ModelGallery images={model.images} modelName={model.displayName} />
          <div className="model-detail-summary">
            <p className="eyebrow">{model.brandName} / {model.category}</p>
            <h1>{model.displayName}</h1>
            <p className="model-detail-summary__description">{model.shortDescription}</p>
            <div className="model-detail-actions">
              <ButtonLink href={affiliate.url} external>Check current availability at {affiliate.partner}</ButtonLink>
              <Link className="button button--secondary" href={`/brands/${model.brandSlug}`}>View {model.brandName}</Link>
            </div>
            <p className="model-detail-offer">Save {affiliate.discountPercent}% with code <strong>{affiliate.discountCode}</strong></p>
          </div>
        </Container>
      </section>

      <section className="model-facts-section">
        <Container className="model-facts-layout">
          <div><p className="eyebrow">Catalogue record</p><h2>Key facts</h2><p>Details below are derived from the prepared catalogue folder and existing brand context. Confirm current specifications directly before purchasing.</p></div>
          <dl>{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </Container>
      </section>

      <section className="model-community-section">
        <Container className="model-community-card">
          <div><p className="eyebrow">Separate external community</p><h2>Continue the conversation</h2><p>Discover additional model photos, discussions, and updates in our external 18+ Telegram community.</p></div>
          <a className="button button--primary" href={community.telegramUrl} target="_blank" rel="noopener noreferrer">Join the 18+ Telegram Community</a>
        </Container>
      </section>

      <Container className="model-disclaimer"><p>This is an independent editorial catalogue, not an official {model.brandName} or Moon-Doll product page. Inclusion does not confirm retailer stock or availability. Verify all current product details with the manufacturer or retailer.</p></Container>
    </main>
  );
}
