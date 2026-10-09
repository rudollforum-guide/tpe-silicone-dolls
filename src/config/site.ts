export const siteConfig = {
  name: "TPE & Silicone Dolls",
  shortName: "TSD",
  description: "An independent curated showroom and buying guide for premium TPE and silicone dolls.",
  affiliate: {
    partner: "Moon-Doll",
    url: "https://www.moon-doll.com/?aff=40",
    discountCode: "MOONDOLLCORE",
    discountPercent: 5,
  },
  community: {
    telegramUrl: "https://t.me/tpe_silicone_dolls",
    telegramUrlIsPlaceholder: false,
  },
  navigation: [
    { label: "Brands", href: "/brands" },
    { label: "Categories", href: "/categories" },
    { label: "Models", href: "/models" },
    { label: "Buying Guide", href: "/buying-guide" },
    { label: "Deals", href: "/deals" },
    { label: "About", href: "/about" },
  ],
} as const;

export type BrandProfile = {
  slug: string;
  name: string;
  coverImage: string;
  moonDollUrl: string;
  positioning: string;
  about: string;
  materials: string;
  technologies: readonly string[];
  distinctive: string;
};

export const brands = [
  {
    slug: "fanreal",
    name: "Fanreal Doll",
    coverImage: "/images/brands/fanreal/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/fanreal-collection?aff=40",
    positioning: "A premium realistic brand focused mainly on platinum silicone, expressive finishing, and reduced-weight construction.",
    about: "Fanreal Doll positions its collection around premium realism. The brand highlights detailed presentation and a product direction centered mainly on silicone models.",
    materials: "The manufacturer focuses mainly on platinum silicone and highlights weight-reduction construction within its range.",
    technologies: ["Yoga Skeleton", "Realistic painting", "Weight-reduction construction"],
    distinctive: "Fanreal brings together realistic painting, its Yoga Skeleton terminology, and weight-conscious construction in a premium-focused range.",
  },
  {
    slug: "irontech",
    name: "Irontech Doll",
    coverImage: "/images/brands/irontech/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/irontech-collection?aff=40",
    positioning: "A premium, technology-focused manufacturer known for platinum silicone and advanced skeleton development.",
    about: "Irontech Doll presents itself as a technology-led premium manufacturer, with an emphasis on continuing development across its silicone and skeleton systems.",
    materials: "The manufacturer highlights platinum silicone and advanced internal skeleton systems.",
    technologies: ["ROS development", "ROS MAX development", "Advanced skeleton systems"],
    distinctive: "Its positioning places engineering and skeletal development at the center of the brand, particularly through the ROS and ROS MAX names.",
  },
  {
    slug: "mmx",
    name: "MMX Doll",
    coverImage: "/images/brands/mmx/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/mmx-collection-pr0t?aff=40",
    positioning: "A premium artistic silicone brand focused on sculpting, facial realism, lighter construction, and character-led recreations.",
    about: "MMX Doll takes an art-led approach to silicone models, with the brand emphasizing sculptural work and expressive face design.",
    materials: "The brand focuses on silicone models and highlights lightweight construction within its product development.",
    technologies: ["Lightweight construction", "Detailed sculpting", "Face-realism finishing"],
    distinctive: "MMX is especially associated with artistic presentation and special character or licensed-style recreations.",
  },
  {
    slug: "gynoid",
    name: "Gynoid",
    coverImage: "/images/brands/gynoid/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/gynoid-collection?aff=40",
    positioning: "A high-end hyper-realistic manufacturer focused on platinum silicone, surface detail, layered painting, and skeletal construction.",
    about: "Gynoid positions its work at the high end of the realistic silicone market, with close attention to visual finishing and construction.",
    materials: "The manufacturer highlights platinum silicone, detailed skin texture, and multilayer painting.",
    technologies: ["Multilayer painting", "Skin-texture detailing", "Advanced skeletal construction"],
    distinctive: "The brand’s stated focus combines hyper-realistic surface treatment with advanced internal construction.",
  },
  {
    slug: "real-lady",
    name: "Real Lady",
    coverImage: "/images/brands/real-lady/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/real-lady-collection-cwog?aff=40",
    positioning: "A premium realistic silicone brand connected to the Irontech ecosystem, with luxury presentation and ROS MAX positioning.",
    about: "Real Lady is presented within the wider Irontech ecosystem and emphasizes a luxury-oriented approach to realistic models.",
    materials: "The brand focuses on premium realistic silicone construction within its current positioning.",
    technologies: ["ROS MAX technology", "Realistic silicone construction", "Luxury-focused presentation"],
    distinctive: "Real Lady pairs the ROS MAX name with a more elevated, presentation-led identity.",
  },
  {
    slug: "starpery",
    name: "Starpery",
    coverImage: "/images/brands/starpery/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/starpery-collection-oijf?aff=40",
    positioning: "A realistic silicone manufacturer highlighting reduced weight, Real Skin Texture, and evolving skeleton systems.",
    about: "Starpery presents a realism-focused silicone range and continues to emphasize updates to construction and skeletal systems.",
    materials: "The manufacturer offers silicone models and highlights weight-reduction systems as part of its construction approach.",
    technologies: ["Real Skin Texture", "Weight-reduction systems", "Evolving skeletal systems"],
    distinctive: "Its manufacturer messaging connects skin-surface presentation with ongoing skeleton and weight-reduction development.",
  },
  {
    slug: "top-fire",
    name: "Top Fire",
    coverImage: "/images/brands/top-fire/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/top-fire-collection-kcn4?aff=40",
    positioning: "A newer premium silicone manufacturer focused on ROS, full-silicone construction, and customization.",
    about: "Top Fire is a newer name in the premium segment, presenting a silicone-led range with an emphasis on configurable choices.",
    materials: "The manufacturer highlights full-silicone construction within its current range.",
    technologies: ["ROS", "Full-silicone construction", "Customization options"],
    distinctive: "Its positioning combines a newer premium identity with ROS terminology and a broad customization focus.",
  },
  {
    slug: "top-cydoll",
    name: "Top-CYDOLL",
    coverImage: "/images/brands/top-cydoll/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/top-cydoll-collection-pw1s?aff=40",
    positioning: "A versatile manufacturer spanning silicone, TPE/silicone hybrid, and S-TPE products.",
    about: "Top-CYDOLL presents a broad material range and highlights multiple construction and skeleton options across its catalogue.",
    materials: "The manufacturer offers silicone, TPE/silicone hybrid, and S-TPE products, with weight-reduction options highlighted in parts of the range.",
    technologies: ["Weight-reduction construction", "Real skin texture", "Advanced skeleton options"],
    distinctive: "The breadth of its material formats and manufacturer-highlighted technology options gives the range a versatile position.",
  },
  {
    slug: "wm-doll",
    name: "WM Doll",
    coverImage: "/images/brands/wm-doll/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/wmdoll-collection?aff=40",
    positioning: "A large established manufacturer with a wide range of materials, body sizes, and technology options.",
    about: "WM Doll is an established large-scale manufacturer known for the breadth of its catalogue and the number of configurations it presents.",
    materials: "The manufacturer offers TPE, S-TPE, silicone, and hybrid dolls across numerous body sizes.",
    technologies: ["Multiple material formats", "Broad body-size range", "Multiple manufacturer technology options"],
    distinctive: "WM Doll’s defining feature is range breadth rather than one narrow material or visual category.",
  },
  {
    slug: "zelex",
    name: "Zelex",
    coverImage: "/images/brands/zelex/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/zelex-collection-96rs?aff=40",
    positioning: "A technology- and customization-focused manufacturer organized around several distinct product families.",
    about: "Zelex presents its range through named product families and emphasizes technology and customization within its catalogue.",
    materials: "Construction varies across the manufacturer’s product families. Buyers should confirm the current material and construction details for each model directly.",
    technologies: ["EXP skeleton platform", "Inspiration product family", "Fusion, SLE, and K-Series product families"],
    distinctive: "Its named product families and EXP skeleton platform give the brand a structured, technology-led identity.",
  },
  {
    slug: "game-lady",
    name: "Game Lady",
    coverImage: "/images/brands/game-lady/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/game-lady-collection-f6dq?aff=40",
    positioning: "A character-focused silicone brand specializing in gaming, cosplay, and recognizable fictional-style designs.",
    about: "Game Lady focuses on character-led designs, drawing its visual direction from gaming, cosplay, and familiar fictional archetypes.",
    materials: "The brand specializes in silicone models within its character-focused range.",
    technologies: ["Character-focused sculpting", "Gaming and cosplay styling", "Silicone construction"],
    distinctive: "Its catalogue is distinguished by a clear focus on recognizable character language rather than conventional realism alone.",
  },
  {
    slug: "moonvale",
    name: "Moonvale / SY Dolls",
    coverImage: "/images/brands/moonvale/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/moonvale-collection?aff=40",
    positioning: "A fantasy and furry-oriented silicone line centered on anthropomorphic characters and stylized designs.",
    about: "Moonvale is presented by SY Dolls as a character-led line with a strong fantasy and anthropomorphic direction.",
    materials: "The line focuses on silicone models within its stylized fantasy and furry catalogue.",
    technologies: ["Stylized character design", "Anthropomorphic concepts", "Silicone construction"],
    distinctive: "Moonvale stands apart through its dedicated fantasy and furry visual language.",
  },
  {
    slug: "irokebijin",
    name: "Irokebijin",
    coverImage: "/images/brands/irokebijin/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/irokebijin-collection?aff=40",
    positioning: "An anime-oriented manufacturer offering S-TPE and HSS / hyper-soft silicone product lines.",
    about: "Irokebijin organizes its catalogue around anime-inspired styling and distinct soft-material product lines.",
    materials: "The manufacturer offers S-TPE and HSS / hyper-soft silicone product lines.",
    technologies: ["S-TPE product line", "HSS / hyper-soft silicone line", "Anime-oriented styling"],
    distinctive: "Its combination of anime design and clearly named soft-material lines gives the brand a focused identity.",
  },
  {
    slug: "elsa-babe",
    name: "Elsa Babe",
    coverImage: "/images/brands/elsa-babe/brand-cover.png",
    moonDollUrl: "https://www.moon-doll.com/collections/elsababe-collection?aff=40",
    positioning: "A large anime and furry manufacturer offering both TPE and silicone models across stylized character categories.",
    about: "Elsa Babe presents a large catalogue built around anime, furry, and other stylized character directions.",
    materials: "The manufacturer offers both TPE and silicone dolls across its character-focused categories.",
    technologies: ["TPE construction", "Silicone construction", "Anime and furry character styling"],
    distinctive: "The scale and variety of its stylized character catalogue distinguish Elsa Babe within the anime and furry segment.",
  },
] as const satisfies readonly BrandProfile[];

export const brandGroups = [
  {
    label: "Premium & realistic",
    slugs: ["fanreal", "irontech", "mmx", "gynoid", "real-lady", "starpery", "top-fire", "top-cydoll", "wm-doll", "zelex"],
  },
  {
    label: "Anime & character",
    slugs: ["game-lady", "moonvale", "irokebijin", "elsa-babe"],
  },
] as const;

export function getBrandBySlug(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}
