export type BusinessSubItem = {
  label: string;
  anchor: string;
};

export type Business = {
  slug: string;
  title: string;
  description: string;
  itemsLabel: string;
  items: string[];
  itemImages?: Record<string, string>;
  image: string;
  buttonLabel: string;
  subItems?: BusinessSubItem[];
};

export const businesses: Business[] = [
  {
    slug: "metals",
    title: "METALS",
    description:
      "We source and trade precious and base metals, connecting mining producers with refiners, manufacturers and buyers across regional and international markets with attention to grade, purity and timely delivery.",
    itemsLabel: "Commodities",
    items: ["Gold", "Copper"],
    itemImages: {
      Gold: "/images/products/gold.jpg",
      Copper: "/images/products/copper.jpg",
    },
    image: "/images/gold.jpeg",
    buttonLabel: "EXPLORE METALS",
  },
  {
    slug: "livestock",
    title: "LIVESTOCK",
    description:
      "We trade livestock and livestock products — animal skins and hides, meat and fish — sourced across Africa and supplied to tanneries, processors, wholesalers and international buyers with quality and care.",
    itemsLabel: "Commodities",
    items: ["Animal Skins & Hides", "Meat", "Fish"],
    image: "/images/agriculture-photo.jpg",
    buttonLabel: "EXPLORE LIVESTOCK",
  },
  {
    slug: "energy",
    title: "ENERGY",
    description:
      "We trade energy commodities — crude oil and refined petroleum products — connecting producers and refiners with industrial buyers, distributors and fleets across regional and international markets.",
    itemsLabel: "Commodities",
    items: [
      "Crude Oil",
      "Premium Motor Spirit (PMS)",
      "Automotive Gas Oil (AGO)",
      "Jet Fuel",
      "Liquified Petroleum Gas (LPG)",
      "Kerosene",
    ],
    itemImages: {
      "Crude Oil": "/images/products/crude-oil.jpg",
      "Premium Motor Spirit (PMS)": "/images/products/pms.jpg",
      "Automotive Gas Oil (AGO)": "/images/products/ago.jpg",
      "Jet Fuel": "/images/products/jet-fuel.jpg",
      "Liquified Petroleum Gas (LPG)": "/images/products/lpg.jpg",
      Kerosene: "/images/products/kerosene.jpg",
    },
    image: "/images/energy-photo.jpg",
    buttonLabel: "EXPLORE ENERGY",
  },
];

export const businessPaths: Record<string, string> = {
  metals: "/businesses/metals",
  livestock: "/businesses/livestock",
  energy: "/businesses/energy",
};
