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
      "We trade livestock and livestock products — animal skins, hides and fish — sourced across Africa and supplied to tanneries, processors, wholesalers and international buyers with quality and care.",
    itemsLabel: "Commodities",
    items: ["Animal Skins & Hides", "Fish"],
    image: "/images/agriculture-photo.jpg",
    buttonLabel: "EXPLORE LIVESTOCK",
  },
];

export const businessPaths: Record<string, string> = {
  metals: "/businesses/metals",
  livestock: "/businesses/livestock",
};
