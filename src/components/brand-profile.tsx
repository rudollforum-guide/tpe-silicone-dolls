import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ModelCard } from "@/components/model-card";
import type { BrandProfile as BrandProfileData } from "@/config/site";
import { siteConfig } from "@/config/site";
import { getModelsByBrand } from "@/data/models";

type BrandProfileProps = {
  brand: BrandProfileData;
};

export function BrandProfile({ brand }: BrandProfileProps) {
  const { affiliate } = siteConfig;
  const brandModels = getModelsByBrand(brand.slug);

  return (
    <main>
      <section className="brand-profile-hero">
        <Container className="brand-profile-hero__grid">
          <div>
            <p className="eyebrow">Brand profile / Independent overview</p>
            <h1>{brand.name}</h1>
            <p className="brand-profile-hero__lede">{brand.positioning}</p>
            <div className="brand-profile-hero__actions">
              <ButtonLink href={brand.moonDollUrl} external>Shop this brand at {affiliate.partner}</ButtonLink>
              <ButtonLink href="#models" variant="secondary">View selected models</ButtonLink>
            </div>
            <p className="brand-profile-hero__disclosure">Affiliate link. We may earn a commission from qualifying purchases at no additional cost to you.</p>
          </div>
          <div className="brand-profile-hero__media">
            <Image
              src={brand.coverImage}
              alt={`${brand.name} brand cover artwork`}
              fill
              preload
              sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 980px) 40vw, 42vw"
            />
          </div>
        </Container>
      </section>

      <section className="brand-profile-content">
        <Container className="brand-profile-content__grid">
          <aside>
            <p>Profile contents</p>
            <a href="#about">About</a>
            <a href="#materials">Materials & construction</a>
            <a href="#technologies">Key technologies</a>
            <a href="#distinctive">Distinctive qualities</a>
            <a href="#models">Selected models</a>
          </aside>
          <div className="brand-profile-sections">
            <section id="about"><p className="eyebrow">01 / Overview</p><h2>About the brand</h2><p>{brand.about}</p></section>
            <section id="materials"><p className="eyebrow">02 / Product direction</p><h2>Materials & construction</h2><p>{brand.materials}</p></section>
            <section id="technologies"><p className="eyebrow">03 / Manufacturer terminology</p><h2>Key technologies</h2><ul>{brand.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></section>
            <section id="distinctive"><p className="eyebrow">04 / Positioning</p><h2>What makes this brand distinctive</h2><p>{brand.distinctive}</p></section>
          </div>
        </Container>
      </section>

      <section className="brand-models" id="models">
        <Container>
          <div className="section-heading"><div><p className="eyebrow">Selected models</p><h2>{brand.name} showroom</h2></div></div>
          {brandModels.length ? (
            <div className="model-grid brand-models__grid">{brandModels.map((model) => <ModelCard key={model.slug} model={model} />)}</div>
          ) : (
            <div className="brand-models__empty"><p>Selected models are being prepared.</p></div>
          )}
        </Container>
      </section>

      <section className="brand-profile-offer">
        <Container className="offer-card">
          <div><p className="eyebrow">Retail partner</p><h2>Explore {brand.name} at {affiliate.partner}</h2><p>Use code <strong>{affiliate.discountCode}</strong> for {affiliate.discountPercent}% off at checkout.</p></div>
          <div className="offer-card__action"><ButtonLink href={brand.moonDollUrl} external>Shop this brand at {affiliate.partner}</ButtonLink></div>
        </Container>
      </section>

      <Container className="brand-profile-disclaimer">
        <p>This independent editorial profile is not an official {brand.name} page. Technology names and product positioning reflect manufacturer-provided terminology and are not independent laboratory claims. Confirm current details directly with the manufacturer or retailer before purchasing.</p>
      </Container>
    </main>
  );
}
