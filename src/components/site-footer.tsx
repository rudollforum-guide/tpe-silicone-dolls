import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__main">
          <div>
            <p className="footer-mark">TPE <i>&</i> Silicone Dolls</p>
            <p className="footer-intro">An independent, considered guide to finding the right model, material, and maker.</p>
            <p className="footer-disclaimer">This is an independent affiliate-supported website and is not the official Moon-Doll website.</p>
          </div>
          <div className="footer-links">
            <div>
              <p className="footer-label">Explore</p>
              {siteConfig.navigation.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            </div>
            <div>
              <p className="footer-label">Information</p>
              <Link href="/deals">Deals</Link>
              <Link href="/about">About</Link>
              <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>This website is intended for adults aged 18 and over.</span>
        </div>
      </Container>
    </footer>
  );
}
