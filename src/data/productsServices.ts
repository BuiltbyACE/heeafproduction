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
  energy: {
    tone: "energy",
    text: "text-energy",
    bg: "bg-energy",
    border: "border-energy/50",
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
        copy: "Copper is the backbone of modern infrastructure — essential for electrical wiring, plumbing, renewable energy systems and electronics manufacturing. HEEAF supplies copper cathodes and refined copper products to manufacturers, construction firms and commodity traders who need consistent grade, clean certification and reliable delivery schedules. Our supply chain spans mining regions to smelters to end buyers, ensuring traceability and quality at every stage.",
      },
    ],
  },
  {
    slug: "livestock",
    label: "Livestock",
    intro:
      "Livestock and livestock products — animal skins and hides, meat and fish — connecting Africa's producers to tanneries, processors and markets at home and abroad.",
    sectionBg: "white",
    products: [
      {
        slug: "animal-skins-hides",
        title: "Animal Skins & Hides",
        image: "/images/products/hides-skins.jpg",
        alt: "Neatly stacked cured animal hides in a processing warehouse with natural light through a window",
        copy: "Animal skins and hides are a foundational raw material for the leather and textile industries. HEEAF sources, grades and supplies quality-checked skins and hides from within Africa to tanneries and manufacturers both regionally and internationally. Our sourcing network emphasizes proper curing, correct grading and timely export handling — critical factors that determine value in this trade.",
      },
      {
        slug: "meat",
        title: "Meat",
        image: "/images/hero-agriculture-cows.jpg",
        alt: "Cattle grazing on open pasture, representing the livestock meat trade",
        copy: "Meat products require an unbroken cold chain from source to shelf, and that is exactly what HEEAF is built to manage. We work with trusted producers to supply fresh and frozen meat, maintaining hygiene, temperature control and freight speed throughout transit. Our clients range from wholesale distributors to food processing businesses who depend on consistent quality and supply reliability.",
      },
      {
        slug: "fish",
        title: "Fish",
        image: "/images/products/meat-fish.jpg",
        alt: "Fresh fish displayed on ice in a clean cold-storage facility",
        copy: "Fish is a vital protein commodity across African and international markets. HEEAF sources and supplies fresh and frozen fish, managing cold-chain handling, packaging and logistics so that product reaches buyers in optimal condition. We serve wholesalers, processors and distributors who value dependable supply and consistent grading.",
      },
    ],
  },
  {
    slug: "energy",
    label: "Energy",
    intro:
      "Six energy commodities — crude oil and refined petroleum products — that keep transportation, industry and households running, sourced, handled and delivered with an emphasis on quality and punctuality.",
    sectionBg: "cream",
    products: [
      {
        slug: "crude-oil",
        title: "Crude Oil",
        image: "/images/products/crude-oil.jpg",
        alt: "Oil storage tanks and pipelines at sunset with an industrial refinery silhouette",
        copy: "As a raw energy commodity, crude oil sits at the foundation of the entire petroleum value chain. We facilitate sourcing and supply arrangements for crude oil in regional and international markets, connecting producers with refiners and industrial buyers. Our role spans market intelligence, logistics coordination and contract facilitation — ensuring transactions are transparent, timely and compliant with trade regulations.",
      },
      {
        slug: "pms",
        title: "Premium Motor Spirit (PMS)",
        image: "/images/products/pms.jpg",
        alt: "Fuel tanker truck at a filling station during golden hour, driver refueling nozzle in focus",
        copy: "Premium Motor Spirit, commonly known as petrol, is the lifeblood of everyday transportation and small-scale industry. At HEEAF Investment Limited, we source and supply PMS that meets strict quality benchmarks, ensuring clean combustion, engine longevity and consistent performance for our clients. Whether supplying independent fuel stations, corporate fleets or bulk distributors, we manage the full chain — from sourcing to storage to delivery — with an emphasis on purity, correct octane rating and zero contamination.",
      },
      {
        slug: "ago",
        title: "Automotive Gas Oil (AGO)",
        image: "/images/products/ago.jpg",
        alt: "Diesel being pumped into a heavy-duty truck at dusk at an industrial fuel depot",
        copy: "AGO, or diesel, powers the heavy machinery, haulage trucks, generators and industrial equipment that keep economies moving. We supply diesel to haulage companies, construction firms, agricultural operations and power backup providers who need dependable fuel with minimal sulphur content and consistent combustion quality. Because downtime in heavy industry is costly, our supply chain is built around punctual, bulk and scheduled deliveries.",
      },
      {
        slug: "jet-fuel",
        title: "Jet Fuel",
        image: "/images/products/jet-fuel.jpg",
        alt: "Aircraft refueling on an airport tarmac at golden hour, fuel truck alongside the plane",
        copy: "Aviation fuel demands the highest levels of purity, consistency and regulatory compliance in the entire energy sector — a single contamination event can ground a fleet. HEEAF Investment Limited supplies jet fuel that meets international aviation safety and quality standards, working with certified depots and inspection protocols at every stage of handling.",
      },
      {
        slug: "lpg",
        title: "Liquified Petroleum Gas (LPG)",
        image: "/images/products/lpg.jpg",
        alt: "Stacked LPG gas cylinders in a warehouse under warm directional lighting",
        copy: "LPG is one of the cleanest-burning fossil fuels available, used widely for cooking, heating and light industrial processes. We supply LPG in bulk and cylinder form to distributors, households and businesses looking for a safer, more efficient alternative to traditional solid fuels. Our handling protocols prioritize cylinder integrity, leak-testing and safe storage — because with gas, safety is not negotiable.",
      },
      {
        slug: "kerosene",
        title: "Kerosene",
        image: "/images/products/kerosene.jpg",
        alt: "Amber kerosene stored in metal drums under warm golden lighting in an industrial storage yard",
        copy: "Kerosene remains a vital fuel source in many households and small industries, particularly for lighting, heating and certain manufacturing processes. HEEAF ensures a steady, quality-checked kerosene supply chain that reaches both urban distributors and underserved rural markets, helping bridge energy access gaps where grid power or gas infrastructure is limited.",
      },
    ],
  },
];
