import type { Metadata } from "next";
import { RouteIntro } from "@/components/route-intro";

export const metadata: Metadata = { title: "Categories", description: "Browse TPE and silicone dolls by category." };

export default function CategoriesPage() {
  return <RouteIntro eyebrow="Browse by category" title="Explore collections" description="Browse curated directions across materials, styles, and model formats." />;
}
