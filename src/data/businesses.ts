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
  imageWidth?: number;
  imageHeight?: number;
  imageWrapper?: string;
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
      Gold: "/images/gold-image.jpeg",
      Copper: "/images/products/copper.jpg",
    },
    image: "/images/gold-image.jpeg",
    imageWidth: 880,
    imageHeight: 620,
    imageWrapper: "h-[340px] md:h-[420px]",
    buttonLabel: "EXPLORE PRECIOUS METALS",
  },
  {
    slug: "agricultural-products",
    title: "AGRICULTURAL PRODUCTS",
    description:
      "We trade agricultural products — animal skins and hides sourced across Africa and supplied to tanneries, processors, wholesalers and international buyers with quality and care.",
    itemsLabel: "Commodities",
    items: ["Animal Skins & Hides"],
    itemImages: {
      "Animal Skins & Hides": "/images/hides2.jpeg",
    },
    image: "/images/hides2.jpeg",
    imageWidth: 880,
    imageHeight: 620,
    imageWrapper: "h-[340px] md:h-[420px]",
    buttonLabel: "EXPLORE AGRICULTURAL PRODUCTS",
  },
];

export const businessPaths: Record<string, string> = {
  metals: "/businesses/metals",
  "agricultural-products": "/businesses/agricultural-products",
};
