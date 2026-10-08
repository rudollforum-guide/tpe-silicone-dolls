import type { ReactNode } from "react";
import { Container } from "@/components/container";

type RouteIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function RouteIntro({ eyebrow, title, description, children }: RouteIntroProps) {
  return (
    <main>
      <Container className="route-hero">
        <div className="route-hero__title">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <p className="route-hero__lede">{description}</p>
      </Container>
      {children ?? (
        <Container className="route-placeholder">
          <span>Collection in progress</span>
          <p>This section is being carefully curated. Explore the rest of the showroom in the meantime.</p>
        </Container>
      )}
    </main>
  );
}
