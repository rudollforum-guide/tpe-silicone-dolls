import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { getBrandBySlug } from "@/config/site";

export type ModelMaterial = "Full Silicone" | "TPE" | "S-TPE" | "Hybrid" | "Other / Unknown";
export type ModelCategory = "Premium Realistic" | "Anime / Character" | "Technology & Customization";

export type Model = {
  slug: string;
  brandSlug: string;
  brandName: string;
  displayName: string;
  height?: string;
  cup?: string;
  material?: ModelMaterial;
  headCode?: string;
  technologyLabel?: string;
  category: ModelCategory;
  images: readonly [string, string, string];
  shortDescription: string;
  featured: boolean;
  sourceLabel: string;
};

const MODEL_ROOT = join(process.cwd(), "public", "images", "models");
const IMAGE_FILE = /^0([1-3])\.(?:webp|avif|png|jpe?g)$/i;

const brandDefaults: Record<string, { material?: ModelMaterial; category: ModelCategory }> = {
  fanreal: { material: "Full Silicone", category: "Premium Realistic" },
  "game-lady": { material: "Full Silicone", category: "Anime / Character" },
  gynoid: { material: "Full Silicone", category: "Premium Realistic" },
  irontech: { material: "Full Silicone", category: "Premium Realistic" },
  mmx: { material: "Full Silicone", category: "Premium Realistic" },
  "real-lady": { material: "Full Silicone", category: "Premium Realistic" },
  starpery: { material: "Full Silicone", category: "Premium Realistic" },
  "top-cydoll": { category: "Technology & Customization" },
  "top-fire": { material: "Full Silicone", category: "Premium Realistic" },
  "wm-doll": { category: "Technology & Customization" },
};

const featuredSlugs = new Set([
  "yuki-ros-2-155cm-f-cup",
  "169cm-33-1-f-cup",
  "arina-18-168cm-e-cup",
  "lina-153cm-ros-max-a3",
  "natalia-166cm-c-cup",
  "grace-162cm-t64-j-cup",
]);

function titleCase(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => (/^\d+$/.test(part) ? part : `${part.charAt(0).toUpperCase()}${part.slice(1).toLowerCase()}`))
    .join(" ");
}

function deriveTechnology(slug: string) {
  if (slug.includes("ros-max")) return "ROS MAX";
  if (/(?:^|-)ros-2(?:-|$)/.test(slug)) return "ROS 2";
  if (/(?:^|-)ros(?:-|$)/.test(slug)) return "ROS";
  return undefined;
}

function deriveHeadCode(slug: string, brandSlug: string) {
  const explicitHead = slug.match(/(?:^|-)head-([a-z0-9]+)(?:-|$)/i)?.[1];
  if (explicitHead) return explicitHead.toUpperCase();

  if (brandSlug === "gynoid") return slug.match(/^.+-([0-9]+)-\d{3}cm-/i)?.[1];
  if (brandSlug === "game-lady") return slug.match(/^\d{3}cm-(?:ros-)?(.+?)-[a-z]-cup$/i)?.[1]?.toUpperCase();
  if (brandSlug === "irontech") return slug.match(/-([abst]\d+)$/i)?.[1]?.toUpperCase();
  if (brandSlug === "real-lady") return slug.match(/^\d{3}cm-([rs]\d+)(?:-|$)/i)?.[1]?.toUpperCase();
  if (brandSlug === "top-fire") return slug.match(/-([t]\d+)-[a-z]-cup$/i)?.[1]?.toUpperCase() ?? slug.match(/^\d{3}cm-(\d+)-/i)?.[1];

  return undefined;
}

function deriveName(slug: string, brandSlug: string) {
  const heightIndex = slug.split("-").findIndex((part) => /^\d{3}cm$/i.test(part));
  if (heightIndex <= 0 || ["game-lady", "real-lady", "wm-doll"].includes(brandSlug)) return undefined;

  let nameParts = slug.split("-").slice(0, heightIndex);
  if (["fanreal", "starpery"].includes(brandSlug)) {
    nameParts = nameParts.filter((part) => part !== "ros" && part !== "max" && part !== "2");
  }
  if (brandSlug === "gynoid" && /^\d+$/.test(nameParts.at(-1) ?? "")) nameParts = nameParts.slice(0, -1);

  return nameParts.length ? titleCase(nameParts.join("-")) : undefined;
}

function deriveMaterial(slug: string, brandSlug: string) {
  if (/(?:^|-)stpe(?:-|$)/i.test(slug)) return "S-TPE" as const;
  if (/(?:^|-)tpe(?:-|$)/i.test(slug)) return "TPE" as const;
  if (slug.includes("silicone-head")) return "Other / Unknown" as const;
  return brandDefaults[brandSlug]?.material;
}

function createDisplayName(slug: string, brandSlug: string) {
  const height = slug.match(/(?:^|-)(\d{3})cm(?:-|$)/i)?.[1];
  const cup = slug.match(/(?:^|-)([a-z])-cup(?:-|$)/i)?.[1]?.toUpperCase();
  const technologyLabel = deriveTechnology(slug);
  const headCode = deriveHeadCode(slug, brandSlug);
  let name = deriveName(slug, brandSlug);
  const secondaryIrontechName = brandSlug === "irontech" ? slug.match(/^.+-\d{3}cm-([a-z]+)-[abst]\d+$/i)?.[1] : undefined;
  if (name && secondaryIrontechName) name = `${name} / ${titleCase(secondaryIrontechName)}`;
  const facts = [height ? `${height} cm` : undefined, technologyLabel, headCode ? `Head ${headCode}` : undefined, cup ? `${cup}-Cup` : undefined].filter(Boolean);

  return name ? `${name} — ${facts.join(" / ")}` : facts.join(" / ");
}

function discoverModels(): readonly Model[] {
  if (!existsSync(MODEL_ROOT)) return [];

  const discovered: Model[] = [];
  const seenSlugs = new Set<string>();

  for (const brandEntry of readdirSync(MODEL_ROOT, { withFileTypes: true }).filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
    const brand = getBrandBySlug(brandEntry.name);
    const defaults = brandDefaults[brandEntry.name];
    if (!brand || !defaults) continue;

    const brandPath = join(MODEL_ROOT, brandEntry.name);
    for (const modelEntry of readdirSync(brandPath, { withFileTypes: true }).filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
      if (seenSlugs.has(modelEntry.name)) throw new Error(`Duplicate model slug detected: ${modelEntry.name}`);
      seenSlugs.add(modelEntry.name);

      const modelPath = join(brandPath, modelEntry.name);
      const numberedFiles = readdirSync(modelPath)
        .filter((file) => IMAGE_FILE.test(file))
        .sort((a, b) => Number(a.slice(0, 2)) - Number(b.slice(0, 2)));

      if (numberedFiles.length !== 3 || numberedFiles.some((file, index) => Number(file.slice(0, 2)) !== index + 1)) {
        throw new Error(`Model ${brandEntry.name}/${modelEntry.name} must contain exactly 01, 02, and 03 image files.`);
      }

      const heightValue = modelEntry.name.match(/(?:^|-)(\d{3})cm(?:-|$)/i)?.[1];
      const cupValue = modelEntry.name.match(/(?:^|-)([a-z])-cup(?:-|$)/i)?.[1]?.toUpperCase();
      const displayName = createDisplayName(modelEntry.name, brandEntry.name);
      const images = numberedFiles.map((file) => `/images/models/${brandEntry.name}/${modelEntry.name}/${file}`) as [string, string, string];

      discovered.push({
        slug: modelEntry.name,
        brandSlug: brand.slug,
        brandName: brand.name,
        displayName,
        ...(heightValue ? { height: `${heightValue} cm` } : {}),
        ...(cupValue ? { cup: `${cupValue}-Cup` } : {}),
        ...(deriveMaterial(modelEntry.name, brandEntry.name) ? { material: deriveMaterial(modelEntry.name, brandEntry.name) } : {}),
        ...(deriveHeadCode(modelEntry.name, brandEntry.name) ? { headCode: deriveHeadCode(modelEntry.name, brandEntry.name) } : {}),
        ...(deriveTechnology(modelEntry.name) ? { technologyLabel: deriveTechnology(modelEntry.name) } : {}),
        category: defaults.category,
        images,
        shortDescription: `${displayName} is included in our independent ${brand.name} showroom. Confirm current product details and availability directly with the manufacturer or retailer.`,
        featured: featuredSlugs.has(modelEntry.name),
        sourceLabel: "Prepared showroom image set",
      });
    }
  }

  return discovered;
}

export const models = discoverModels();

export function getModelBySlug(slug: string) {
  return models.find((model) => model.slug === slug);
}

export function getModelsByBrand(brandSlug: string) {
  return models.filter((model) => model.brandSlug === brandSlug);
}

export function getFeaturedModels() {
  return models.filter((model) => model.featured).slice(0, 6);
}
