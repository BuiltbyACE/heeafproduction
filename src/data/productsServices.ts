import type { BlobTone } from "@/components/Blob";

export type SectorAccent = {
  tone: BlobTone;
  text: string;
  bg: string;
  border: string;
};

export const sectorAccents: Record<string, SectorAccent> = {
  metals: {
    tone: "metal",
    text: "text-metal",
    bg: "bg-metal",
    border: "border-metal/50",
  },
  livestock: {
    tone: "agri",
    text: "text-agri",
    bg: "bg-agri",
    border: "border-agri/50",
  },
};

export type Product = {
  slug: string;
  title: string;
  image: string;
  alt: string;
  copy: string;
};

export type SectorGroup = {
  slug: keyof typeof sectorAccents;
  label: string;
  intro: string;
  sectionBg: "white" | "cream";
  products: Product[];
};

export const productSectors: SectorGroup[] = [
  {
    slug: "metals",
    label: "Precious Metals",
    intro:
      "Gold, copper, diamonds and tantalite — sourced and supplied largely in partnership with trusted companies, with attention to grade, purity and timely delivery.",
    sectionBg: "cream",
    products: [
      {
        slug: "gold",
        title: "Gold",
        image: "/images/gold-bars-nuggets.jpg",
        alt: "A few gold bars beside a professional safety box filled with gold nuggets, displayed on a dark surface under warm lighting",
        copy: "Gold remains one of the most sought-after precious metals globally, serving as both a store of value and a critical input in electronics, jewelry and financial markets. HEEAF sources and supplies gold to refineries, bullion dealers and industrial buyers, managing assaying, documentation and cross-border logistics with the discretion and compliance that this trade demands. Our supply network is global, enabling us to serve clients across international markets.",
      },
      {
        slug: "copper",
        title: "Copper",
        image: "/images/products/copper.jpg",
        alt: "Stacked copper cathodes and coils in an industrial warehouse under cool overhead lighting",
        copy: "Copper is the backbone of modern infrastructure — essential for electrical wiring, plumbing, construction and electronics manufacturing. HEEAF supplies copper cathodes and refined copper products to manufacturers, construction firms and commodity traders who need consistent grade, clean certification and reliable delivery schedules. Our supply chain spans mining regions to smelters to end buyers, ensuring traceability and quality at every stage.",
      },
    ],
  },
  {
    slug: "livestock",
    label: "Livestock",
    intro:
      "Animal skins and hides — connecting Africa's producers to tanneries, processors and markets at home and abroad.",
    sectionBg: "white",
    products: [
      {
        slug: "animal-skins-hides",
        title: "Animal Skins & Hides",
        image: "/images/products/hides-skins.jpg",
        alt: "Neatly stacked cured animal hides in a processing warehouse with natural light through a window",
        copy: "HEEAF sources, grades and supplies quality-checked animal skins and hides to tanneries and manufacturers, with emphasis on proper curing, correct grading and timely export handling. We specialize in the supply of high-quality bovine and other animal hides and skins, available in both salted and air-dried forms, to buyers across domestic and international markets.",
      },
    ],
  },
];
