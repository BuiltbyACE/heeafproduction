import Link from "next/link";
import {
  ArrowRight,
  Gem,
  Zap,
  ShieldCheck,
  Fish,
  Globe,
  Package,
  Truck,
  ThumbsUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import GoldFrame from "@/components/GoldFrame";

const metals = [
  {
    icon: Gem,
    title: "Gold",
    text: "HEEAF sources and supplies gold to refineries, bullion dealers and industrial buyers, managing assaying, documentation and cross-border logistics with the discretion and compliance this precious metal trade demands.",
  },
  {
    icon: Zap,
    title: "Copper",
    text: "HEEAF supplies copper cathodes and refined copper products to manufacturers, construction firms and commodity traders who need consistent grade, clean certification and reliable delivery schedules.",
  },
];

const livestock = [
  {
    icon: ShieldCheck,
    title: "Animal Skins & Hides",
    text: "HEEAF sources, grades and supplies quality-checked animal skins and hides to tanneries and manufacturers, with emphasis on proper curing, correct grading and timely export handling.",
  },
  {
    icon: Fish,
    title: "Fish",
    text: "HEEAF sources and supplies fresh and frozen fish, managing cold-chain handling, packaging and logistics so that product reaches buyers in optimal condition.",
  },
];

const supplyPillars = [
  {
    icon: Globe,
    title: "Worldwide Supply",
    text: "HEEAF supplies commodities worldwide, working with clients and partners across Africa and internationally to deliver products to their required destinations.",
  },
  {
    icon: Package,
    title: "Quality & Packaging",
    text: "HEEAF places emphasis on quality and sound, effective packaging so that commodities are handled and protected throughout the supply process.",
  },
  {
    icon: Truck,
    title: "Efficient Delivery",
    text: "HEEAF works with fast and efficient shipping companies to ensure goods reach their expected destinations within the stipulated period.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    text: "Customer satisfaction and business fidelity are central to HEEAF's commodity operations. We are committed to meeting the expectations of our clients and partners.",
  },
];

/** Large faint Playfair numeral used as an editorial watermark behind sector intro blocks. */
function SectorNumeral({ n, tone }: { n: string; tone: "gold" | "metal" | "agri" }) {
  const toneClass = {
    gold: "text-gold/10",
    metal: "text-metal/15",
    agri: "text-agri/15",
  }[tone];
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute -top-6 right-0 select-none font-[family-name:var(--font-heading)] text-[140px] md:text-[220px] font-bold leading-none ${toneClass}`}
    >
      {n}
    </span>
  );
}

const cardToneRing: Record<"metal" | "agri", string> = {
  metal: "hover:border-metal/50 hover:shadow-metal/15",
  agri: "hover:border-agri/50 hover:shadow-agri/15",
};

function MetalsSection() {
  return (
    <section className="relative overflow-hidden bg-primary-darker bg-grain">
      <Blob tone="metal" size={520} className="absolute -top-40 -right-40 z-0" opacity={0.28} />
      <SectorNumeral n="01" tone="metal" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-metal">
                COMMODITY TRADE
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold text-white leading-snug">
                METALS
              </h2>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-[16px] md:text-[20px] font-semibold text-white/80">
                Precious and Base Metals
              </p>
              <div className="mt-4 h-[3px] w-16 bg-metal" />
              <p className="mt-6 max-w-[520px] text-[14px] leading-relaxed text-white/75">
                HEEAF Investment Limited trades metals as part of its commodity
                business, sourcing and supplying precious and base metals to
                buyers across regional and international markets.
              </p>
              <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-white/75">
                From gold, a store of value and industrial input, to copper, the
                backbone of modern infrastructure, our metals portfolio connects
                mining producers with refiners, manufacturers and traders. We
                manage grading, assaying, documentation and cross-border
                logistics with the compliance this trade demands.
              </p>
              <Link
                href="/businesses/metals"
                className="btn-shine mt-8 inline-flex h-[44px] items-center gap-2 rounded bg-metal px-6 text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:brightness-110 hover:scale-[1.03]"
              >
                EXPLORE METALS
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} variant="right">
            <GoldFrame
              src="/images/gold.jpeg"
              alt="HEEAF Metals — gold and copper commodity trading"
              width={880}
              height={620}
              fill={false}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MetalsGridSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <Reveal className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-metal">
            METALS PORTFOLIO
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[24px] md:text-[30px] font-bold text-text-dark">
            OUR METALS
          </h2>
          <div className="mx-auto mt-3 flex items-center gap-2">
            <div className="h-[2px] w-6 bg-metal/40" />
            <div className="h-2 w-2 rotate-45 bg-metal" />
            <div className="h-[2px] w-6 bg-metal/40" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {metals.map((product, i) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.title} delay={i * 80} variant="scale">
                <div
                  className={`group flex flex-col rounded-lg border border-gold/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cardToneRing.metal}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-metal bg-gradient-to-br from-metal/15 to-transparent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-metal" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-[13px] font-bold uppercase tracking-wider text-text-dark">
                    {product.title}
                  </h3>
                  <div className="mt-2 h-[2px] w-8 bg-metal" />
                  <p className="mt-3 text-[12px] leading-relaxed text-text-dark/65">
                    {product.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LivestockSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Blob tone="agri" size={520} className="absolute -top-40 -left-40 z-0" opacity={0.22} />
      <SectorNumeral n="02" tone="agri" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-agri">
                COMMODITY TRADE
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold text-text-dark leading-snug">
                LIVESTOCK
              </h2>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-[16px] md:text-[20px] font-semibold text-text-dark/80">
                Animal Skins, Hides &amp; Fish
              </p>
              <div className="mt-4 h-[3px] w-16 bg-agri" />
              <p className="mt-6 max-w-[520px] text-[14px] leading-relaxed text-text-dark/75">
                HEEAF Investment Limited trades livestock and livestock products
                within and outside Africa, providing a dependable route to market
                for producers and a reliable source for processors, wholesalers
                and international buyers.
              </p>
              <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-text-dark/75">
                Our livestock portfolio covers animal skins and hides for the
                leather and textile industries, as well as fish for the
                food value chain. We emphasize quality handling, cold-chain
                integrity, sound packaging and efficient delivery.
              </p>
              <Link
                href="/businesses/livestock"
                className="btn-shine mt-8 inline-flex h-[44px] items-center gap-2 rounded bg-agri px-6 text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:brightness-110 hover:scale-[1.03]"
              >
                EXPLORE LIVESTOCK
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} variant="right">
            <GoldFrame
              src="/images/agriculture-photo.jpg"
              alt="HEEAF Livestock — animal skins, hides and fish"
              width={880}
              height={620}
              fill={false}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LivestockGridSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <Reveal className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-agri">
            LIVESTOCK PORTFOLIO
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[24px] md:text-[30px] font-bold text-text-dark">
            OUR LIVESTOCK PRODUCTS
          </h2>
          <div className="mx-auto mt-3 flex items-center gap-2">
            <div className="h-[2px] w-6 bg-agri/40" />
            <div className="h-2 w-2 rotate-45 bg-agri" />
            <div className="h-[2px] w-6 bg-agri/40" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {livestock.map((product, i) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.title} delay={i * 80} variant="scale">
                <div
                  className={`group flex flex-col rounded-lg border border-gold/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cardToneRing.agri}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-agri bg-gradient-to-br from-agri/15 to-transparent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-agri" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-[13px] font-bold uppercase tracking-wider text-text-dark">
                    {product.title}
                  </h3>
                  <div className="mt-2 h-[2px] w-8 bg-agri" />
                  <p className="mt-3 text-[12px] leading-relaxed text-text-dark/65">
                    {product.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SupplyLogisticsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <Reveal className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            GLOBAL SUPPLY
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[24px] md:text-[30px] font-bold text-text-dark">
            SUPPLY &amp; LOGISTICS
          </h2>
          <div className="mx-auto mt-3 flex items-center gap-2">
            <div className="h-[2px] w-6 bg-gold/40" />
            <div className="h-2 w-2 rotate-45 bg-gold" />
            <div className="h-[2px] w-6 bg-gold/40" />
          </div>
          <p className="mx-auto mt-4 max-w-[640px] text-[13px] leading-relaxed text-text-dark/65">
            HEEAF can supply commodities worldwide, working with fast and
            efficient shipping companies to ensure goods reach their expected
            destinations within the stipulated period.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supplyPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 80} variant="scale">
                <div className="group flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-gradient-to-br from-gold/15 to-transparent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-[12px] font-bold uppercase tracking-wider text-text-dark">
                    {pillar.title}
                  </h3>
                  <div className="mx-auto mt-2 h-[2px] w-8 bg-gold" />
                  <p className="mt-3 max-w-[240px] text-[12px] leading-relaxed text-text-dark/65">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function BusinessSectorsFull() {
  return (
    <>
      <MetalsSection />
      <MetalsGridSection />
      <LivestockSection />
      <LivestockGridSection />
      <SupplyLogisticsSection />
    </>
  );
}
