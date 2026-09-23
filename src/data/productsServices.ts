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
    label: "Metals",
    intro:
      "Two metals — one precious, one industrial — sourced and supplied to buyers across regional and international markets with attention to grade, purity and timely delivery.",
    sectionBg: "cream",
    products: [
      {
        slug: "gold",
        title: "Gold",
        image: "/images/products/gold.jpg",
        alt: "Raw gold nuggets and refined bars displayed on a dark surface under warm lighting",
        copy: "Gold remains one of the most sought-after precious metals globally, serving as both a store of value and a critical input in electronics, jewelry and financial markets. HEEAF sources and supplies gold to refineries, bullion dealers and industrial buyers, managing assaying, documentation and cross-border logistics with the discretion and compliance this trade demands. Our network connects African mining operations with international buyers seeking conflict-free, properly certified gold supplies.",
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
        copy: "Animal skins and hides are a foundational raw material for the leather and textile industries. HEEAF sources, grades and supplies quality-checked skins and hides from within Africa to tanneries and manufacturers both regionally and internationally. Our sourcing network emphasizes proper curing, correct grading and timely export handling — critical factors that determine value in this trade.",
      },
    ],
  },
];
