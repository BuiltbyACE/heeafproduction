import type { BlobTone } from "@/components/Blob";

export type SectorAccent = {
  tone: BlobTone;
  text: string;
  bg: string;
  border: string;
};

export const sectorAccents: Record<string, SectorAccent> = {
  energy: {
    tone: "energy",
    text: "text-energy",
    bg: "bg-energy",
    border: "border-energy/50",
  },
  agriculture: {
    tone: "agri",
    text: "text-agri",
    bg: "bg-agri",
    border: "border-agri/50",
  },
  "real-estate": {
    tone: "estate",
    text: "text-estate",
    bg: "bg-estate",
    border: "border-estate/50",
  },
  metal: {
    tone: "metal",
    text: "text-metal",
    bg: "bg-metal",
    border: "border-metal/50",
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
    slug: "energy",
    label: "Energy Products",
    intro:
      "Seven petroleum and green-energy products that keep transportation, industry and households running — sourced, handled and delivered with an emphasis on purity and punctuality.",
    sectionBg: "white",
    products: [
      {
        slug: "pms",
        title: "Premium Motor Spirit (PMS)",
        image: "/images/products/pms.jpg",
        alt: "Fuel tanker truck at a filling station during golden hour, driver refueling nozzle in focus",
        copy: "Premium Motor Spirit, commonly known as petrol, is the lifeblood of everyday transportation and small-scale industry. At HEEAF Investment Limited, we source and supply PMS that meets strict quality benchmarks, ensuring clean combustion, engine longevity, and consistent performance for our clients. Whether supplying independent fuel stations, corporate fleets, or bulk distributors, we manage the full chain — from sourcing to storage to delivery — with an emphasis on purity, correct octane rating, and zero contamination. Our logistics network ensures that supply disruptions are minimized, even across long-distance or cross-border deliveries.",
      },
      {
        slug: "ago",
        title: "Automotive Gas Oil (AGO)",
        image: "/images/products/ago.jpg",
        alt: "Diesel being pumped into a heavy-duty truck at dusk at an industrial fuel depot",
        copy: "AGO, or diesel, powers the heavy machinery, haulage trucks, generators, and industrial equipment that keep economies moving. We supply diesel to haulage companies, construction firms, agricultural operations, and power backup providers who need dependable fuel with minimal sulphur content and consistent combustion quality. Because downtime in heavy industry is costly, our supply chain is built around punctual, bulk, and scheduled deliveries — so our clients' operations never stall for lack of fuel.",
      },
      {
        slug: "jet-fuel",
        title: "Jet Fuel",
        image: "/images/products/jet-fuel.jpg",
        alt: "Aircraft refueling on an airport tarmac at golden hour, fuel truck alongside the plane",
        copy: "Aviation fuel demands the highest levels of purity, consistency, and regulatory compliance in the entire energy sector — a single contamination event can ground a fleet. HEEAF Investment Limited supplies jet fuel that meets international aviation safety and quality standards, working with certified depots and inspection protocols at every stage of handling. We work with aviation partners who require dependable, audited fuel supply chains for both commercial and charter operations.",
      },
      {
        slug: "lpg",
        title: "Liquified Petroleum Gas (LPG)",
        image: "/images/products/lpg.jpg",
        alt: "Stacked LPG gas cylinders in a warehouse under warm directional lighting",
        copy: "LPG is one of the cleanest-burning fossil fuels available, used widely for cooking, heating, and light industrial processes. We supply LPG in bulk and cylinder form to distributors, households, and businesses looking for a safer, more efficient alternative to traditional solid fuels. Our handling protocols prioritize cylinder integrity, leak-testing, and safe storage — because with gas, safety is not negotiable.",
      },
      {
        slug: "kerosene",
        title: "Kerosene",
        image: "/images/products/kerosene.jpg",
        alt: "Amber kerosene stored in metal drums under warm golden lighting in an industrial storage yard",
        copy: "Kerosene remains a vital fuel source in many households and small industries, particularly for lighting, heating, and certain manufacturing processes. HEEAF ensures a steady, quality-checked kerosene supply chain that reaches both urban distributors and underserved rural markets, helping bridge energy access gaps where grid power or gas infrastructure is limited.",
      },
      {
        slug: "crude-oil",
        title: "Crude Oil",
        image: "/images/products/crude-oil.jpg",
        alt: "Oil storage tanks and pipelines at sunset with an industrial refinery silhouette",
        copy: "As a raw energy commodity, crude oil sits at the foundation of the entire petroleum value chain. We facilitate sourcing and supply arrangements for crude oil in regional and international markets, connecting producers with refiners and industrial buyers. Our role spans market intelligence, logistics coordination, and contract facilitation — ensuring transactions are transparent, timely, and compliant with trade regulations.",
      },
      {
        slug: "charcoal-briquettes",
        title: "Charcoal Briquettes",
        image: "/images/products/charcoal-briquettes.jpg",
        alt: "Hands holding eco-friendly charcoal briquettes beside a rustic wooden crate",
        copy: "Charcoal briquettes represent HEEAF's commitment to sustainable energy alternatives. Made from compressed agricultural or biomass waste rather than raw timber, briquettes burn longer, produce less smoke, and reduce deforestation pressure — directly supporting UN Sustainable Development Goal 7 (Affordable and Clean Energy) and Goal 13 (Climate Action). We supply briquettes to households, restaurants, and institutional kitchens seeking an eco-conscious cooking fuel without sacrificing heat efficiency.",
      },
    ],
  },
  {
    slug: "agriculture",
    label: "Agricultural Products",
    intro:
      "Five agricultural product lines connecting Africa's producers to markets at home and abroad, handled with the care that quality, cold-chain and export-grade trade demand.",
    sectionBg: "cream",
    products: [
      {
        slug: "hides-skins",
        title: "Hides & Skins",
        image: "/images/products/hides-skins.jpg",
        alt: "Neatly stacked cured animal hides in a processing warehouse with natural light through a window",
        copy: "Hides and skins are a foundational raw material for the leather and textile industries. HEEAF sources, grades, and supplies quality-checked hides and skins from within Africa to tanneries and manufacturers both regionally and internationally. Our sourcing network emphasizes proper curing, correct grading, and timely export handling — critical factors that determine value in this trade.",
      },
      {
        slug: "meat-fish",
        title: "Meat & Fish",
        image: "/images/products/meat-fish.jpg",
        alt: "Fresh fish and cuts of meat displayed on ice in a clean cold-storage facility",
        copy: "Meat and fish products require an unbroken cold chain from source to shelf, and that's exactly what HEEAF is built to manage. We work with trusted producers to supply fresh and frozen meat and fish products, maintaining hygiene, temperature control, and freight speed throughout transit. Our clients range from wholesale distributors to food processing businesses who depend on consistent quality and supply reliability.",
      },
      {
        slug: "spices",
        title: "Spices",
        image: "/images/products/spices.jpg",
        alt: "Colorful spices including chili, turmeric and cinnamon in wooden bowls on a rustic table",
        copy: "Africa is home to some of the world's most sought-after spices, and HEEAF connects that agricultural richness to global markets. We supply a wide range of spices — sourced with attention to flavor integrity, moisture content, and proper packaging — to buyers across culinary, food processing, and export industries. Quality control at the sourcing stage ensures our spices retain potency and freshness through long-distance shipping.",
      },
      {
        slug: "tea",
        title: "Tea",
        image: "/images/products/tea.jpg",
        alt: "Tea plantation at golden hour with workers picking leaves across rolling green hills",
        copy: "Tea is one of Africa's most established export crops, and HEEAF sources leaves from reputable growing regions known for their altitude, soil, and climate advantages. We manage grading, packaging, and export logistics to ensure our tea reaches international buyers — from bulk processors to specialty blenders — in optimal condition, preserving aroma and leaf quality.",
      },
      {
        slug: "coffee",
        title: "Coffee",
        image: "/images/products/coffee.jpg",
        alt: "Roasted coffee beans spilling from a burlap sack onto a rustic wooden surface",
        copy: "From farm to export terminal, HEEAF supplies coffee beans sourced with attention to origin, processing method, and bean grade. We work with growers and cooperatives to secure consistent volumes for roasters, traders, and distributors — supporting fair, traceable trade relationships while delivering the quality that specialty and commercial coffee markets demand.",
      },
    ],
  },
  {
    slug: "real-estate",
    label: "Real Estate Services",
    intro:
      "Four property services spanning acquisition, sale, rental and investment — guiding clients through decisions that carry real financial weight.",
    sectionBg: "white",
    products: [
      {
        slug: "property-purchase",
        title: "Property Purchase",
        image: "/images/products/property-purchase.jpg",
        alt: "Modern glass-and-timber house exterior at dusk with warm interior lighting glowing through the windows",
        copy: "Buying property is one of the most significant financial decisions a client will make, and HEEAF guides that process from search to closing. We help clients identify properties that align with their investment goals, verify documentation and legal standing, and negotiate terms — reducing the risk and friction typically associated with property acquisition.",
      },
      {
        slug: "property-sales",
        title: "Property Sales",
        image: "/images/realestatethe.jpg",
        alt: "Real estate property for sale",
        copy: "For property owners looking to sell, HEEAF manages the process with transparency — from accurate market valuation and listing preparation to buyer vetting and closing. We aim to secure fair value for sellers while ensuring buyers receive full disclosure and confidence in the transaction.",
      },
      {
        slug: "property-rentals",
        title: "Property Rentals",
        image: "/images/products/property-rentals.jpg",
        alt: "Stylish, warmly lit modern apartment living room with large windows in the evening",
        copy: "HEEAF manages a portfolio of rental properties for individuals and businesses seeking flexible, well-maintained living or working spaces. From tenant screening to lease management and property upkeep, we handle the operational details so landlords enjoy passive income and tenants enjoy dependable service.",
      },
      {
        slug: "investment-opportunities",
        title: "Investment Opportunities",
        image: "/images/products/investment-opportunities.jpg",
        alt: "Modern residential development under construction at golden hour, cranes silhouetted against the sky",
        copy: "Beyond individual transactions, HEEAF identifies and structures real estate investment opportunities — from residential developments to commercial property ventures — for clients seeking long-term capital growth. We assess location potential, market trends, and development feasibility to help investors make informed, high-value decisions.",
      },
    ],
  },
];
