import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Gem,
  Zap,
  ShieldCheck,
  Handshake,
  Leaf,
  Users,
} from "lucide-react";

type Sector = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: LucideIcon;
  tags: { label: string; icon: LucideIcon }[];
};

const sectors: Sector[] = [
  {
    slug: "metals",
    title: "PRECIOUS METALS",
    tagline: "Precious Metals",
    description:
      "We source and trade precious metals, connecting mining producers with refiners, manufacturers and buyers worldwide.",
    image: "/images/gold.jpeg",
    icon: Gem,
    tags: [
      { label: "Gold", icon: Gem },
      { label: "Copper", icon: Zap },
    ],
  },
  {
    slug: "livestock",
    title: "LIVESTOCK",
    tagline: "Animal Skins & Hides",
    description:
      "We trade animal skins and hides, serving tanneries, processors and buyers across markets.",
    image: "/images/agriculture-photo.jpg",
    icon: ShieldCheck,
    tags: [
      { label: "Animal Skins & Hides", icon: ShieldCheck },
    ],
  },
];

const values = [
  { icon: Handshake, title: "Integrity", text: "We do what is right" },
  { icon: Leaf, title: "Sustainability", text: "For future generations" },
  { icon: Users, title: "Community", text: "Stronger together" },
  { icon: ShieldCheck, title: "Excellence", text: "In everything we do" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080a0e]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-photo.jpg"
          alt="HEEAF Investment Limited — global commodity trade"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#080a0e]/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#080a0e] via-[#080a0e]/85 to-[#080a0e]/40" />
      </div>
      <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[#d4941c]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        {/* Headline */}
        <div className="max-w-[780px]">
          <p className="text-[10px] md:text-[11.5px] font-bold uppercase tracking-[0.32em] text-gold">
            WELCOME TO HEEAF INVESTMENT LIMITED
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-[34px] md:text-[52px] lg:text-[58px] font-black leading-[1.06] text-white tracking-tight">
            Connecting Opportunities.
            <span className="block text-gold">Delivering Value Across Borders.</span>
          </h1>
          <div className="mt-5 h-[3px] w-16 bg-gold" />
          <p className="mt-5 max-w-[560px] text-[13px] md:text-[15px] leading-relaxed text-white/80">
            HEEAF Investment Limited is a commodity trading company. We source,
            trade and supply commodities — precious metals and livestock —
            connecting producers with buyers across Africa and beyond.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/businesses"
              className="btn-shine inline-flex h-[48px] items-center gap-2 rounded bg-gold px-7 text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:bg-gold-light hover:scale-[1.03]"
            >
              EXPLORE OUR COMMODITIES
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-[48px] items-center gap-2 rounded border border-gold px-7 text-[11px] font-bold text-gold uppercase tracking-wider transition-colors hover:bg-gold hover:text-white"
            >
              TALK TO US
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Commodity sectors */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link
                key={sector.slug}
                href={`/businesses/${sector.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.07]"
              >
                <div className="relative h-[180px]">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e] via-[#080a0e]/45 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-[#0c0e12]">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h2 className="text-[16px] font-black uppercase tracking-wider text-white">
                        {sector.title}
                      </h2>
                      <p className="text-[11px] font-semibold text-gold">
                        {sector.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[12px] leading-relaxed text-white/70">
                    {sector.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-white/10 pt-3">
                    {sector.tags.map((tag) => {
                      const TagIcon = tag.icon;
                      return (
                        <span
                          key={tag.label}
                          className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-white/75"
                        >
                          <TagIcon className="h-3.5 w-3.5 text-gold" strokeWidth={1.75} />
                          {tag.label}
                        </span>
                      );
                    })}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                    EXPLORE {sector.title}
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Core values bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#07090c]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-6 px-6 py-8 md:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold">
                  <Icon className="h-[18px] w-[18px] text-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[12px] md:text-[13px] font-bold text-white">
                    {value.title}
                  </p>
                  <p className="text-[10px] md:text-[11px] text-white/55">
                    {value.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
