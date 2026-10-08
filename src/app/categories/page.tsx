import type { Metadata } from "next";
import { RouteIntro } from "@/components/route-intro";

export const metadata: Metadata = { title: "Categories", description: "Browse TPE and silicone dolls by category." };

export default function CategoriesPage() {
  return <RouteIntro eyebrow="Browse the collection" title="Find your direction." description="A clear path through materials, formats, and collections. Our category index is currently being curated." />;
}
