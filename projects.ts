export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  year: string;
  images: string[];
  thumbnail: string;
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "al-bahrain-tv",
    title: "Al Bahrain TV",
    category: "Media",
    client: "Al Bahrain TV",
    description: "A comprehensive brand identity and proposal presentation for Al Bahrain TV, modernizing their digital and physical presence to appeal to a contemporary audience.",
    year: "2026",
    images: ["/images/al_bahrain_tv.png"],
    thumbnail: "/images/al_bahrain_tv.png",
  },
  {
    id: "chez-kateline",
    title: "Chez Kateline",
    category: "F&B",
    client: "Chez Kateline",
    description: "Premium restaurant branding and visual identity. Creating a cohesive aesthetic that translates the culinary excellence into a visual feast.",
    year: "2025",
    images: ["/images/chez_kateline.png"],
    thumbnail: "/images/chez_kateline.png",
  },
  {
    id: "jettz-burger",
    title: "Jettz Burger",
    category: "F&B",
    client: "Jettz Burger",
    description: "Dynamic and bold branding for a fast-casual burger joint. The identity was designed to be instantly recognizable and highly engaging.",
    year: "2025",
    images: ["/images/fb_branding.png"],
    thumbnail: "/images/fb_branding.png",
  },
  {
    id: "mtg",
    title: "MTG CONTRACTING",
    category: "CONSTRUCTION",
    client: "MTG Contracting",
    description: "Leading Construction & Engineering Solutions. Delivering commercial, residential, and infrastructure projects with exceptional quality, precision, and innovation.",
    year: "2026",
    images: ["/images/mtg_construction.png"],
    thumbnail: "/images/mtg_construction.png",
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Years Experience", value: "15+" },
      { label: "Client Satisfaction", value: "100%" }
    ]
  },
  {
    id: "metl-valley",
    title: "Metl Valley",
    category: "Industrial / B2B",
    client: "Metl Valley",
    description: "A solid and reliable brand identity for an industrial powerhouse. The design language communicates trust, strength, and innovation.",
    year: "2024",
    images: ["/images/metl_valley.png"],
    thumbnail: "/images/metl_valley.png",
  },
  {
    id: "drip-coffee",
    title: "Drip Coffee",
    category: "F&B",
    client: "Drip Coffee",
    description: "Minimalist and artisanal branding for a specialty coffee shop, focusing on the craft of coffee making.",
    year: "2025",
    images: ["/images/drip_coffee.png"],
    thumbnail: "/images/drip_coffee.png",
  },
  {
    id: "el-ghawy",
    title: "El Ghawy",
    category: "Automotive",
    client: "El Ghawy",
    description: "High-end visual branding for an elite automotive enthusiast brand. The identity captures the sleek, adrenaline-fueled passion of luxury car culture with cinematic lighting and dark, premium aesthetics.",
    year: "2026",
    images: ["/images/el_ghawy_cars.png"],
    thumbnail: "/images/el_ghawy_cars.png",
  },
  {
    id: "kataleya",
    title: "Kataleya",
    category: "F&B",
    client: "Kataleya",
    description: "Elegant and sophisticated branding for a high-end dining experience.",
    year: "2024",
    images: ["/images/kataleya.png"],
    thumbnail: "/images/kataleya.png",
  },
  {
    id: "octa",
    title: "Octa Ads",
    category: "Advertising",
    client: "Octa",
    description: "A bold, geometric, and highly scalable advertising campaign structure.",
    year: "2025",
    images: ["/images/madbird_hero.png"],
    thumbnail: "/images/madbird_hero.png",
  },
  {
    id: "labus",
    title: "LABUS Fashion",
    category: "FASHION",
    client: "LABUS",
    description: "LABUS is a modern streetwear and lifestyle fashion brand focused on premium quality apparel, contemporary design, and bold identity.",
    year: "2026",
    images: ["/images/labus_fashion.png"],
    thumbnail: "/images/labus_fashion.png",
    stats: [
      { label: "Social Reach", value: "+250K" },
      { label: "Engagement", value: "+80K" },
      { label: "Brand Positioning", value: "Premium" },
      { label: "Product Launch", value: "Successful" }
    ]
  },
  {
    id: "gattuso",
    title: "GATTUSO",
    category: "SPORTS",
    client: "GATTUSO",
    description: "Sports-focused creative campaigns designed to maximize engagement, reach, and brand awareness. Developed premium campaign artwork, match-day graphics, player promotions, social media creatives, and sports branding assets.",
    year: "2026",
    images: [
      "/images/gattuso_campaign_1.png",
      "/images/gattuso_campaign_2.png"
    ],
    thumbnail: "/images/gattuso_hero.png",
    stats: [
      { label: "Reach", value: "+500K" },
      { label: "Engagement", value: "+120K" },
      { label: "Campaigns", value: "High Performing" },
      { label: "Brand Visibility", value: "Strong" }
    ]
  },
  {
    id: "alshurooq-factory",
    title: "ALSHUROOQ FACTORY",
    category: "BRANDING",
    client: "ALSHUROOQ Factory",
    description: "ALSHUROOQ Factory is an established frozen food manufacturer since 1982. The project focused on creating a modern premium visual identity and packaging system that strengthens market presence across Bahrain and GCC markets.",
    year: "2026",
    images: [
      "/images/alshurooq_brand_1.png",
      "/images/alshurooq_packaging_1.png"
    ],
    thumbnail: "/images/alshurooq_hero.png",
    stats: [
      { label: "Shelf Presence", value: "Enhanced" },
      { label: "Brand Positioning", value: "Premium" },
      { label: "Product Presentation", value: "Improved" },
      { label: "GCC Market Appeal", value: "Strong" }
    ]
  }
];
