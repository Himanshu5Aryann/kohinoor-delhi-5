import { img } from "./media";

export type Product = {
  slug: string;
  name: string;
  category: string;
  images: string[];
  description: string;
  longDescription: string;
  materials: string[];
  finishes: string[];
  colors: string[];
  dimensions: string;
  priceLabel: string;
  customization: string[];
};

export const categories = [
  "Sofas",
  "Beds",
  "Dining Tables",
  "Wardrobes",
  "TV Units",
  "Office Furniture",
  "Custom Furniture",
];

export const products: Product[] = [
  {
    slug: "signature-sofa",
    name: "The Signature Sofa",
    category: "Sofas",
    images: ["/signature_sofa_under_200kb.png", img.livingRoom2, img.livingRoom6],
    description:
      "A tailored sofa silhouette built on a solid hardwood frame, upholstered in a fabric or leather of your choosing.",
    longDescription:
      "The Signature Sofa is designed as a centrepiece for the modern living room. Every frame is built on solid hardwood with reinforced joinery, layered cushioning and upholstery tailored to your fabric and colour preference. Seat depth, arm profile and configuration — from a compact two-seater to a sprawling sectional — are adapted to your room dimensions.",
    materials: ["Solid hardwood frame", "High-density foam", "Fabric / genuine leather upholstery"],
    finishes: ["Matte fabric", "Textured weave", "Leather finish"],
    colors: ["Ivory", "Champagne", "Charcoal", "Forest green", "Custom fabric on request"],
    dimensions: "Made to your room — standard 2, 3 & corner-seater configurations available",
    priceLabel: "Price on Request",
    customization: ["Fabric & colour", "Seating configuration", "Arm & back profile", "Cushion firmness"],
  },
  {
    slug: "bespoke-bed",
    name: "The Bespoke Bed",
    category: "Beds",
    images: ["/bespoke_bed_under_100kb.png", img.bedroom2, img.bedroom4],
    description:
      "A upholstered or wooden bed frame designed around your bedroom's proportions and storage needs.",
    longDescription:
      "Designed to anchor the bedroom, the Bespoke Bed can be crafted with an upholstered or solid-wood headboard, integrated hydraulic storage, and a finish that complements your interior palette. Suitable for king, queen or custom dimensions.",
    materials: ["Engineered / solid wood", "Upholstered headboard", "Hydraulic storage hardware"],
    finishes: ["Natural wood veneer", "Matte lacquer", "Upholstered fabric or leatherette"],
    colors: ["Walnut", "Oak", "Ivory", "Champagne", "Custom"],
    dimensions: "Queen, King & custom sizes",
    priceLabel: "Custom Quote",
    customization: ["Headboard design", "Storage type", "Wood finish", "Upholstery"],
  },
  {
    slug: "designer-dining-table",
    name: "The Designer Dining Table",
    category: "Dining Tables",
    images: ["/luxury_dining_room_under_100kb.png", img.diningTable2, img.diningTable3],
    description:
      "A solid wood dining table crafted with precision joinery, sized to your dining space and family.",
    longDescription:
      "Built from carefully selected timber, the Designer Dining Table is finished with hand-applied polish that highlights the natural grain. Available in various seating capacities with matching chairs designed to complement the table's proportions.",
    materials: ["Solid wood", "Veneer options", "Metal or wood base"],
    finishes: ["Natural polish", "Matte lacquer", "PU coating"],
    colors: ["Natural wood", "Walnut", "Espresso", "Custom stain"],
    dimensions: "4, 6 & 8-seater configurations, custom sizes available",
    priceLabel: "Price on Request",
    customization: ["Seating capacity", "Table shape", "Wood species", "Base design"],
  },
  {
    slug: "custom-wardrobe",
    name: "The Custom Wardrobe",
    category: "Wardrobes",
    images: ["/custom_wardrobe_under_100kb.png", img.wardrobe2, img.wardrobe3],
    description:
      "Floor-to-ceiling wardrobes designed around your room dimensions, with tailored internal storage.",
    longDescription:
      "Every wardrobe is designed around the exact dimensions of your room and your storage requirements — from hanging space and drawers to shoe racks and accessory trays. Choose from sliding or hinged shutters in a range of finishes.",
    materials: ["Plywood / MDF carcass", "Laminate, veneer or acrylic shutters", "Soft-close hardware"],
    finishes: ["High-gloss laminate", "Matte laminate", "Natural veneer", "Lacquered glass"],
    colors: ["White", "Champagne", "Walnut", "Charcoal", "Custom"],
    dimensions: "Designed to room dimensions — 2, 3 & 4-door configurations",
    priceLabel: "Custom Quote",
    customization: ["Shutter style", "Internal layout", "Finish & colour", "Hardware"],
  },
  {
    slug: "luxury-tv-unit",
    name: "The Luxury TV Unit",
    category: "TV Units",
    images: ["/ChatGPT%20Image%20Sep%2021,%202026,%2002_14_14%20PM.png", img.tvUnit2, img.livingRoom5],
    description:
      "A floating or floor-standing media unit designed to complement your living room's architecture.",
    longDescription:
      "The Luxury TV Unit is designed as an extension of your living room's architecture — with integrated cable management, ambient lighting options and storage for media consoles, books and decor.",
    materials: ["Engineered wood", "Veneer / laminate finish", "Tempered glass accents"],
    finishes: ["Matte laminate", "Natural veneer", "High-gloss"],
    colors: ["Walnut", "Ivory", "Charcoal", "Custom"],
    dimensions: "Custom sized to wall dimensions",
    priceLabel: "Price on Request",
    customization: ["Wall or floor mounted", "Storage configuration", "Lighting", "Finish"],
  },
  {
    slug: "executive-office-desk",
    name: "The Executive Office Desk",
    category: "Office Furniture",
    images: ["/ChatGPT%20Image%20Sep%2021,%202026,%2002_18_37%20PM.png", img.office2, img.office3],
    description:
      "A refined executive desk and storage system designed for a productive, sophisticated workspace.",
    longDescription:
      "Designed for home offices and corporate workspaces alike, the Executive Office Desk pairs clean lines with integrated storage, cable management and a finish that matches your interior scheme.",
    materials: ["Solid wood / engineered wood", "Metal legs option", "Leatherette inlay"],
    finishes: ["Matte lacquer", "Natural veneer", "Laminate"],
    colors: ["Walnut", "Charcoal", "Ivory", "Custom"],
    dimensions: "Custom sizes for home & corporate offices",
    priceLabel: "Custom Quote",
    customization: ["Desk size", "Storage units", "Finish", "Cable management"],
  },
  {
    slug: "modular-kitchen-suite",
    name: "The Modular Kitchen Suite",
    category: "Custom Furniture",
    images: [img.kitchen1, img.kitchen3, img.kitchen4],
    description:
      "A complete modular kitchen designed around your workflow, storage needs and material preferences.",
    longDescription:
      "Every modular kitchen is planned around your workflow — from the placement of appliances to storage for everyday essentials. Choose from a range of cabinet finishes, countertop materials and hardware to complete the space.",
    materials: ["Marine plywood carcass", "Laminate / acrylic shutters", "Quartz or granite countertop"],
    finishes: ["High-gloss acrylic", "Matte laminate", "Natural veneer"],
    colors: ["White", "Champagne", "Charcoal", "Custom"],
    dimensions: "Designed to kitchen layout — L-shape, U-shape, parallel & island",
    priceLabel: "Custom Quote",
    customization: ["Layout", "Countertop material", "Shutter finish", "Appliance integration"],
  },
  {
    slug: "kids-furniture-set",
    name: "The Kids Furniture Set",
    category: "Custom Furniture",
    images: [img.bedroom3, img.wardrobe3, img.bedroom2],
    description:
      "Thoughtfully designed furniture for children's rooms — safe, durable and built to grow with them.",
    longDescription:
      "Designed with safety and durability in mind, our kids' furniture ranges from study units to storage beds and wardrobes, finished in child-safe materials and available in a range of colours.",
    materials: ["Engineered wood", "Child-safe laminate finish", "Rounded edge profiles"],
    finishes: ["Matte laminate", "Lacquered colour finish"],
    colors: ["Custom colour palette"],
    dimensions: "Custom sized to room",
    priceLabel: "Price on Request",
    customization: ["Storage configuration", "Colour palette", "Study/play integration"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
