# TPE & Silicone Dolls

An English-language curated showroom and buying guide built with Next.js, TypeScript, and the App Router.

## Development

```bash
pnpm install
pnpm dev
```

## Static export

```bash
pnpm build
```

The production-ready static site is generated in `out/`. The project uses trailing slashes and unoptimized images so it can be configured for GitHub Pages later.

Before deployment, add the final public URL to the site metadata and configure the repository base path if the site is published below a GitHub Pages project subdirectory.

## Adding models

The model catalogue is discovered at build time from:

```text
public/images/models/<brand-slug>/<model-slug>/
```

Each model folder must contain exactly three numbered images: `01`, `02`, and `03`. WebP, AVIF, PNG, JPG, and JPEG files are supported, including mixed formats within one model folder.

The folder name becomes the public model slug, so it must be unique across every brand. Safe metadata such as height, cup, head code, material token, and ROS label is derived from the folder name. Brand-level material and category context is maintained in `src/data/models.ts`.
