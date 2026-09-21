import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Leaf, Gem, CircleCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const sectors = [
  {
    slug: "metals",
    title: "METALS",
    image: "/images/gold.jpeg",
    icon: Gem,
    description:
      "We source and trade precious and base metals, connecting mining producers with refiners, manufacturers and buyers across regional and international markets.",
    itemsLeft: ["Gold (Precious Metal)"],
    itemsRight: ["Copper (Base Metal)"],
    buttonLabel: "EXPLORE METALS",
  },
  {
    slug: "livestock",
    title: "LIVESTOCK",
    image: "/images/agriculture-sector.jpg",
    icon: Leaf,
    description:
      "We trade livestock and livestock products — animal skins and hides, meat and fish — with quality, care and efficiency.",
    itemsLeft: ["Animal Skins & Hides", "Meat"],
    itemsRight: ["Fish"],
    buttonLabel: "EXPLORE LIVESTOCK",
  },
  {
    slug: "energy",
    title: "ENERGY",
    image: "/images/energy-sector.jpg",
    icon: Zap,
    description:
      "We trade crude oil and refined petroleum products that power transportation, industry and households.",
    itemsLeft: ["Crude Oil", "Premium Motor Spirit (PMS)", "Automotive Gas Oil (AGO)"],
    itemsRight: ["Jet Fuel", "Liquified Petroleum Gas (LPG)", "Kerosene"],
    buttonLabel: "EXPLORE ENERGY",
  },
];

export default function BusinessSectorsCards() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <Reveal className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            OUR BUSINESS SECTORS
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold text-text-dark">
            OUR BUSINESS SECTORS
          </h2>
          <div className="mx-auto mt-3 flex items-center gap-2">
            <div className="h-[2px] w-6 bg-gold/40" />
            <div className="h-2 w-2 rotate-45 bg-gold" />
            <div className="h-[2px] w-6 bg-gold/40" />
          </div>
          <p className="mx-auto mt-4 max-w-[680px] text-[13px] leading-relaxed text-text-dark/65">
            Driven by integrity and commitment, we trade commodities across
            Metals, Livestock and Energy for clients and partners worldwide.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <Reveal key={sector.slug} delay={i * 100}>
                <div className="group flex flex-col overflow-hidden rounded-lg border border-gold/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  {/* Image header */}
                  <div className="relative h-[200px]">
                    <div className="gold-image-card absolute inset-0 rounded-b-none">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    {/* Badge overlapping bottom edge */}
                    <div className="absolute -bottom-[22px] left-6 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-gold shadow-md">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-6 pt-8 pb-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-[18px] font-bold text-text-dark tracking-wide">
                      {sector.title}
                    </h3>
                    <div className="mt-2 h-[2px] w-10 bg-gold" />
                    <p className="mt-3 text-[12px] leading-relaxed text-text-dark/65">
                      {sector.description}
                    </p>

                    {/* 2-column checklist */}
                    <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                      {sector.itemsLeft.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[11px] text-text-dark/75 list-none">
                          <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2} />
                          {item}
                        </li>
                      ))}
                      {sector.itemsRight.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[11px] text-text-dark/75 list-none">
                          <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2} />
                          {item}
                        </li>
                      ))}
                    </div>

                    <Link
                      href={`/businesses/${sector.slug}`}
                      className="mt-6 inline-flex h-[40px] items-center gap-2 self-start rounded bg-gold px-5 text-[10px] md:text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:bg-gold-light hover:scale-[1.02]"
                    >
                      {sector.buttonLabel}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
