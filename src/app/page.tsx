import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CollectionCard } from "@/components/collection-card";
import { Container } from "@/components/container";
import { CopyCodeButton } from "@/components/copy-code-button";
import { ModelCard } from "@/components/model-card";
import { RewardsSection } from "@/components/rewards-section";
import { brandGroups, brands, homepageCollections, siteConfig } from "@/config/site";
import { getFeaturedModels } from "@/data/models";

export default function HomePage() {
  const { affiliate, community } = siteConfig;
  const featuredModels = getFeaturedModels();

  return (
    <main>
      <section className="hero">
        <Container className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow"><span>Independent showroom</span> / Curated selection</p>
            <h1>Curated TPE <em>&</em><br />Silicone Dolls</h1>
            <p className="hero__lede">Handpicked premium, anime, fantasy and realistic models from leading manufacturers.</p>
            <div className="hero__offer">
              <span className="hero__offer-label">Moon-Doll partner offer</span>
              <div className="hero__offer-summary">
                <strong>{affiliate.discountPercent}% off</strong>
                <span>at {affiliate.partner}</span>
                <span className="hero__offer-code-label">Code</span>
                <CopyCodeButton code={affiliate.discountCode} display="code" />
              </div>
            </div>
            <div className="hero__actions">
              <ButtonLink href="/models">Explore models</ButtonLink>
              <ButtonLink href={affiliate.url} variant="secondary" external>Shop at {affiliate.partner}</ButtonLink>
            </div>
          </div>
          <div className="hero__visual-wrap">
            <Image
              className="hero__image"
              src="/images/hero/homepage-cover.png"
              alt="Curated TPE and silicone doll showroom selection"
              fill
              preload
              sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 980px) 42vw, 44vw"
            />
          </div>
        </Container>
      </section>

      <section className="trust-strip" aria-label="Why use this showroom">
        <Container>
          <p>Independent curated showroom <span>•</span> Selected brands <span>•</span> Buying guides <span>•</span> Affiliate-supported</p>
        </Container>
      </section>

      <section className="section collection-section">
        <Container>
          <div className="section-heading">
            <div><p className="eyebrow">Shop by collection</p><h2>Discover your direction</h2></div>
            <a
              className="text-link"
              href={affiliate.catalogUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              Browse all at Moon-Doll
            </a>
          </div>
          <div className="collection-grid">
            {homepageCollections.map((collection) => (
              <CollectionCard key={collection.title} {...collection} />
            ))}
          </div>
        </Container>
      </section>

      <section className="featured-section">
        <Container>
          <div className="section-heading">
            <div><p className="eyebrow">Featured models</p><h2>The showroom edit</h2></div>
            <ButtonLink href="/models" variant="secondary">Explore all models</ButtonLink>
          </div>
          <div className="model-grid">
            {featuredModels.map((model) => <ModelCard key={`${model.brandSlug}-${model.slug}`} model={model} />)}
          </div>
        </Container>
      </section>

      <section className="brand-section">
        <Container>
          <div className="section-heading section-heading--light">
            <div><p className="eyebrow">Fourteen makers</p><h2>A considered brand index</h2></div>
            <ButtonLink href="/brands" variant="secondary">Explore all brands</ButtonLink>
          </div>
          {brandGroups.map((group, groupIndex) => (
            <div className="brand-group" key={group.label}>
              <p className="brand-group__label">{group.label}</p>
              <div className="brand-list">
                {group.slugs.map((slug, index) => {
                  const brand = brands.find((item) => item.slug === slug);
                  const precedingBrands = brandGroups.slice(0, groupIndex).reduce((count, item) => count + item.slugs.length, 0);
                  const position = precedingBrands + index + 1;
                  if (!brand) return null;
                  return <Link href={`/brands/${brand.slug}`} key={brand.slug}><span>{String(position).padStart(2, "0")}</span><strong>{brand.name}</strong></Link>;
                })}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="offer-section">
        <Container className="promo-offer">
          <div className="promo-offer__intro">
            <p className="eyebrow">Moon-Doll partner offer</p>
            <h2><span>{affiliate.discountPercent}%</span> off</h2>
            <p>Apply the code at checkout on {affiliate.partner}.</p>
          </div>
          <div className="promo-offer__coupon">
            <p className="promo-offer__label">Use code</p>
            <div className="promo-offer__code">{affiliate.discountCode}</div>
            <div className="promo-offer__actions">
              <CopyCodeButton code={affiliate.discountCode} />
              <ButtonLink href={affiliate.url} external>Shop {affiliate.partner}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <RewardsSection />

      <section className="community-section" id="telegram-community">
        <Container className="community-card">
          <div>
            <p className="eyebrow">Separate external community</p>
            <h2>Join our 18+ Telegram community</h2>
          </div>
          <div>
            <p>Discover additional model photos, community discussions, updates and uncensored materials. Telegram is a separate external 18+ community.</p>
            <a className="button button--primary" href={community.telegramUrl} target="_blank" rel="noopener noreferrer">
              {community.telegramUrlIsPlaceholder ? "Telegram link coming soon" : "Join the 18+ community"}
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
