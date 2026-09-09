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
  image: string;
  buttonLabel: string;
  subItems?: BusinessSubItem[];
};

export const businesses: Business[] = [
  {
    slug: "energy",
    title: "ENERGY",
    description:
      "We deal with the purchase and supply of petroleum products and alternative energy solutions that power industries and economies.",
    itemsLabel: "Products",
    items: [
      "Premium Motor Spirit (PMS)",
      "Automotive Gas Oil (AGO)",
      "Jet Fuel",
      "Liquified Petroleum Gas (LPG)",
      "Kerosene",
      "Crude Oil",
      "Charcoal Briquettes",
    ],
    image: "/images/energy-photo.jpg",
    buttonLabel: "EXPLORE ENERGY",
  },
  {
    slug: "agriculture",
    title: "AGRICULTURE",
    description:
      "We purchase and supply a wide range of agricultural products across Africa and internationally with quality, care and efficiency.",
    itemsLabel: "Products",
    items: ["Hides & Skins", "Meat & Fish", "Spices", "Tea", "Coffee", "And more"],
    image: "/images/agriculture-photo.jpg",
    buttonLabel: "EXPLORE AGRICULTURE",
  },
  {
    slug: "real-estate",
    title: "REAL ESTATE",
    description:
      "We are involved in the purchase and sale of property, as well as rentals, delivering value and creating spaces that last.",
    itemsLabel: "Services",
    items: [
      "Property Purchase",
      "Property Sales",
      "Property Rentals",
      "Investment Opportunities",
    ],
    image: "/images/real-estate-photo.jpg",
    buttonLabel: "EXPLORE REAL ESTATE",
  },
  {
    slug: "metal",
    title: "METAL",
    description:
      "We deal in the sourcing and supply of precious and base metals, connecting producers with buyers across regional and international markets.",
    itemsLabel: "Products",
    items: ["Gold", "Copper"],
    image: "/images/metal-photo.jpg",
    buttonLabel: "EXPLORE METAL",
  },
];

export const businessPaths: Record<string, string> = {
  energy: "/businesses/energy",
  agriculture: "/businesses/agriculture",
  "real-estate": "/businesses/real-estate",
  metal: "/businesses/metal",
};
