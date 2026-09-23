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
    title: "PRECIOUS METALS",
    description:
      "We source and trade precious metals — gold, copper, diamonds and tantalite — largely in partnership with specialised companies, connecting producers with refiners, manufacturers and buyers across regional and international markets with attention to grade, purity and timely delivery.",
    itemsLabel: "Commodities",
    items: ["Gold", "Copper", "Diamonds", "Tantalite"],
    itemImages: {
      Gold: "/images/products/gold.jpg",
      Copper: "/images/products/copper.jpg",
    },
    image: "/images/gold.jpeg",
    buttonLabel: "EXPLORE PRECIOUS METALS",
  },
  {
    slug: "livestock",
    title: "LIVESTOCK",
    description:
      "We trade animal skins and hides — sourced across Africa and supplied to tanneries, processors, wholesalers and international buyers with quality and care.",
    itemsLabel: "Commodities",
    items: ["Animal Skins & Hides"],
    image: "/images/agriculture-photo.jpg",
    buttonLabel: "EXPLORE LIVESTOCK",
  },
];

export const businessPaths: Record<string, string> = {
  metals: "/businesses/metals",
  livestock: "/businesses/livestock",
};
