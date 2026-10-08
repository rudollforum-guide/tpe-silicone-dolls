import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link className="wordmark" href="/" aria-label={`${siteConfig.name} home`}>
          <Image className="wordmark__mark" src="/images/branding/site-mark.png" alt="" width={42} height={42} sizes="(max-width: 720px) 36px, 42px" />
          <span className="wordmark__name">TPE <i>&</i> Silicone Dolls</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span>Menu</span><i aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </details>
      </Container>
    </header>
  );
}
