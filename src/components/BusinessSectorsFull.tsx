import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Fuel,
  Plane,
  Flame,
  Lamp,
  Container,
  TreePine,
  Globe,
  Package,
  Truck,
  ThumbsUp,
  ShieldCheck,
  ShoppingBag,
  Handshake,
  Key,
  Leaf,
  Coffee,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import GoldFrame from "@/components/GoldFrame";

const petroleumProducts = [
  {
    icon: Droplets,
    title: "Premium Motor Spirit (PMS)",
    text: "HEEAF supplies Premium Motor Spirit as part of its petroleum product portfolio. PMS is a widely used fuel product and forms a core part of the company's energy supply activities.",
  },
  {
    icon: Fuel,
    title: "Automotive Gas Oil (AGO)",
    text: "Automotive Gas Oil is included in HEEAF's range of petroleum products. The company is involved in the purchase and supply of AGO to meet the energy needs of its clients and partners.",
  },
  {
    icon: Plane,
    title: "Jet Fuel",
    text: "Jet Fuel is part of HEEAF's energy product offering. The company supplies jet fuel as part of its participation in the petroleum products market.",
  },
  {
    icon: Flame,
    title: "Liquefied Petroleum Gas (LPG)",
    text: "HEEAF supplies Liquefied Petroleum Gas as part of its portfolio. LPG is an important energy product and the company is involved in its purchase and supply.",
  },
  {
    icon: Lamp,
    title: "Kerosene",
    text: "Kerosene forms part of HEEAF's petroleum product range. The company participates in the supply of kerosene to clients and partners across its markets.",
  },
  {
    icon: Container,
    title: "Crude Oil",
    text: "HEEAF is also involved in the supply of crude oil. Crude oil is included in the company's energy business portfolio as part of its petroleum product activities.",
  },
];

const sdgGoals = [
  {
    number: "7",
    title: "Affordable and Clean Energy",
    text: "HEEAF's charcoal briquettes support the goal of providing more affordable energy solutions. As part of its green energy initiative, the company contributes to expanding access to cleaner alternatives.",
  },
  {
    number: "13",
    title: "Climate Action",
    text: "Through the production of charcoal briquettes, HEEAF supports efforts toward climate action by offering an alternative energy product that aligns with environmental responsibility.",
  },
];

const agriProducts = [
  {
    icon: ShieldCheck,
    title: "Hides & Skins",
    text: "HEEAF purchases and supplies hides and skins as part of its agricultural product portfolio. The company handles these products with attention to quality and proper packaging standards.",
  },
  {
    icon: ShoppingBag,
    title: "Meat",
    text: "HEEAF is involved in the supply of meat products to its clients and partners. The company ensures quality handling and delivery as part of its agricultural activities.",
  },
  {
    icon: Globe,
    title: "Fish",
    text: "HEEAF purchases and supplies fish products. The company includes fish in its range of agricultural products offered to clients across its markets.",
  },
  {
    icon: Leaf,
    title: "Spices",
    text: "HEEAF supplies spices as part of its agricultural product offering. The company sources and delivers spices to meet the needs of its clients and partners.",
  },
  {
    icon: TreePine,
    title: "Tea",
    text: "HEEAF purchases and supplies tea products. Tea is included in the company's agricultural portfolio as part of its supply activities across Africa and internationally.",
  },
  {
    icon: Coffee,
    title: "Coffee",
    text: "HEEAF purchases and supplies coffee products. The company is involved in the supply of coffee as part of its agricultural product range.",
  },
];

const supplyPillars = [
  {
    icon: Globe,
    title: "Worldwide Supply",
    text: "HEEAF can supply agricultural products worldwide. The company works with clients and partners across Africa and internationally to deliver products to their required destinations.",
  },
  {
    icon: Package,
    title: "Quality & Packaging",
    text: "HEEAF places emphasis on quality and sound and effective packaging. The company ensures that agricultural products are handled and packaged to maintain their condition throughout the supply process.",
  },
  {
    icon: Truck,
    title: "Efficient Delivery",
    text: "HEEAF works with fast and efficient shipping companies to ensure goods reach their expected destinations within the stipulated period. Timely delivery is a key part of the company's service.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    text: "Customer satisfaction and business fidelity are central to HEEAF's agricultural operations. The company is committed to meeting the expectations of its clients and partners.",
  },
];

const realEstateActivities = [
  {
    icon: ShoppingBag,
    title: "Property Purchase",
    text: "HEEAF Investment Limited is involved in the purchase of property. The company participates in property acquisition as part of its real estate activities, identifying opportunities that align with its business objectives.",
  },
  {
    icon: Handshake,
    title: "Property Sale",
    text: "HEEAF is involved in the sale of property. The company engages in property sales as part of its real estate operations, delivering value to clients and partners through its market knowledge and transactions.",
  },
  {
    icon: Key,
    title: "Property Rentals",
    text: "HEEAF operates in the property rental space. The company is involved in rentals as part of its real estate portfolio, providing opportunities for clients and partners seeking rental solutions.",
  },
];

/** Large faint Playfair numeral used as an editorial watermark behind sector intro blocks. */
function SectorNumeral({ n, tone }: { n: string; tone: "gold" | "energy" | "agri" | "estate" }) {
  const toneClass = {
    gold: "text-gold/10",
    energy: "text-energy/10",
    agri: "text-agri/15",
    estate: "text-estate/15",
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

const cardToneRing: Record<"energy" | "agri" | "estate", string> = {
  energy: "hover:border-energy/50 hover:shadow-energy/15",
  agri: "hover:border-agri/50 hover:shadow-agri/15",
  estate: "hover:border-estate/50 hover:shadow-estate/15",
};

function EnergySection() {
  return (
    <section className="relative overflow-hidden bg-primary-darker bg-grain">
      <Blob tone="energy" size={520} className="absolute -top-40 -right-40 z-0" opacity={0.28} />
      <SectorNumeral n="01" tone="energy" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-energy">
                OUR BUSINESS SECTORS
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold text-white leading-snug">
                ENERGY
              </h2>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-[16px] md:text-[20px] font-semibold text-white/80">
                Powering Access Through Energy Solutions
              </p>
              <div className="mt-4 h-[3px] w-16 bg-energy" />
              <p className="mt-6 max-w-[520px] text-[14px] leading-relaxed text-white/75">
                HEEAF Investment Limited operates in the energy sector through the
                purchase and supply of petroleum products. Through this business
                area, the company participates in the movement and supply of
                essential energy products to meet the needs of its clients and
                partners across Africa and beyond.
              </p>
              <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-white/75">
                HEEAF&apos;s energy portfolio includes a range of petroleum products
                that serve critical roles in transportation, industry, and daily
                energy needs. The company is also expanding into alternative energy
                solutions through its green energy initiative, demonstrating a
                commitment to providing more sustainable and affordable energy
                options.
              </p>
              <Link
                href="/contact"
                className="btn-shine mt-8 inline-flex h-[44px] items-center gap-2 rounded bg-energy px-6 text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:brightness-110 hover:scale-[1.03]"
              >
                TALK TO OUR ENERGY TEAM
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} variant="right">
            <GoldFrame
              src="/images/energy-sector.jpg"
              alt="HEEAF Energy — petroleum products and energy solutions"
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

function PetroleumProductsSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <Reveal className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-energy">
            ENERGY PORTFOLIO
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[24px] md:text-[30px] font-bold text-text-dark">
            PETROLEUM PRODUCTS
          </h2>
          <div className="mx-auto mt-3 flex items-center gap-2">
            <div className="h-[2px] w-6 bg-energy/40" />
            <div className="h-2 w-2 rotate-45 bg-energy" />
            <div className="h-[2px] w-6 bg-energy/40" />
          </div>
          <p className="mx-auto mt-4 max-w-[640px] text-[13px] leading-relaxed text-text-dark/65">
            HEEAF&apos;s energy portfolio comprises essential petroleum products that
            serve transportation, industrial, and domestic energy needs across
            the company&apos;s markets.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {petroleumProducts.map((product, i) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.title} delay={i * 80} variant="scale">
                <div
                  className={`group flex flex-col rounded-lg border border-gold/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cardToneRing.energy}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-energy bg-gradient-to-br from-energy/15 to-transparent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-energy" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-[13px] font-bold uppercase tracking-wider text-text-dark">
                    {product.title}
                  </h3>
                  <div className="mt-2 h-[2px] w-8 bg-energy" />
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

function CharcoalBriquettesSection() {
  return (
    <section className="relative overflow-hidden bg-primary-darker bg-grain">
      <Blob tone="energy" size={420} className="absolute -bottom-32 -left-32 z-0" opacity={0.22} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <GoldFrame
              src="/images/energy-photo.jpg"
              alt="HEEAF charcoal briquettes — green energy initiative"
              width={880}
              height={620}
              fill={false}
            />
          </Reveal>
          <Reveal delay={120} variant="right">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-energy">
                GREEN ENERGY INITIATIVE
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[24px] md:text-[30px] font-bold text-white leading-snug">
                CHARCOAL BRIQUETTES
              </h2>
              <div className="mt-4 h-[3px] w-16 bg-energy" />
              <p className="mt-6 max-w-[520px] text-[14px] leading-relaxed text-white/75">
                In addition to its petroleum product portfolio, HEEAF produces
                charcoal briquettes as part of its green energy initiative. This
                initiative supports the company&apos;s goal of providing more
                affordable green energy solutions to its clients and partners.
              </p>
              <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-white/75">
                Charcoal briquettes represent HEEAF&apos;s commitment to exploring
                alternative energy products that offer practical and accessible
                energy options. Through this initiative, the company contributes
                to broader efforts toward sustainable energy access.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {sdgGoals.map((goal, i) => (
                  <Reveal key={goal.number} delay={i * 100} variant="scale">
                    <div className="rounded-lg border border-energy/20 bg-white/5 p-5 transition-colors duration-300 hover:border-energy/40 hover:bg-white/[0.08]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-energy bg-gradient-to-br from-energy/25 to-transparent">
                          <span className="text-[14px] font-bold text-energy">
                            {goal.number}
                          </span>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-energy">
                            SDG {goal.number}
                          </p>
                          <p className="text-[12px] font-semibold text-white">
                            {goal.title}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-[12px] leading-relaxed text-white/65">
                        {goal.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AgricultureSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Blob tone="agri" size={520} className="absolute -top-40 -left-40 z-0" opacity={0.22} />
      <SectorNumeral n="02" tone="agri" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-agri">
                OUR BUSINESS SECTORS
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold text-text-dark leading-snug">
                AGRICULTURE
              </h2>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-[16px] md:text-[20px] font-semibold text-text-dark/80">
                Connecting Quality Agricultural Products to Markets
              </p>
              <div className="mt-4 h-[3px] w-16 bg-agri" />
              <p className="mt-6 max-w-[520px] text-[14px] leading-relaxed text-text-dark/75">
                HEEAF Investment Limited is involved in the purchase and supply
                of agricultural products within and outside Africa. The company
                provides a range of agricultural products to clients and partners,
                with emphasis on quality, sound and effective packaging, efficient
                delivery and customer satisfaction.
              </p>
              <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-text-dark/75">
                HEEAF&apos;s agricultural business spans multiple product categories,
                from hides and skins to tea and coffee. The company works to
                connect producers with markets, ensuring that products are handled
                with care and delivered efficiently to meet client expectations
                across Africa and internationally.
              </p>
              <Link
                href="/contact"
                className="btn-shine mt-8 inline-flex h-[44px] items-center gap-2 rounded bg-agri px-6 text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:brightness-110 hover:scale-[1.03]"
              >
                EXPLORE AGRICULTURE
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} variant="right">
            <GoldFrame
              src="/images/agriculture-sector.jpg"
              alt="HEEAF Agriculture — agricultural products and supply"
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

function AgriProductsSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <Reveal className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-agri">
            AGRICULTURAL PORTFOLIO
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[24px] md:text-[30px] font-bold text-text-dark">
            OUR AGRICULTURAL PRODUCTS
          </h2>
          <div className="mx-auto mt-3 flex items-center gap-2">
            <div className="h-[2px] w-6 bg-agri/40" />
            <div className="h-2 w-2 rotate-45 bg-agri" />
            <div className="h-[2px] w-6 bg-agri/40" />
          </div>
          <p className="mx-auto mt-4 max-w-[640px] text-[13px] leading-relaxed text-text-dark/65">
            HEEAF supplies a diverse range of agricultural products to clients
            and partners, maintaining quality standards across its entire
            portfolio.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agriProducts.map((product, i) => {
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
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-agri">
            GLOBAL SUPPLY
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[24px] md:text-[30px] font-bold text-text-dark">
            SUPPLY &amp; LOGISTICS
          </h2>
          <div className="mx-auto mt-3 flex items-center gap-2">
            <div className="h-[2px] w-6 bg-agri/40" />
            <div className="h-2 w-2 rotate-45 bg-agri" />
            <div className="h-[2px] w-6 bg-agri/40" />
          </div>
          <p className="mx-auto mt-4 max-w-[640px] text-[13px] leading-relaxed text-text-dark/65">
            HEEAF can supply agricultural products worldwide, working with fast
            and efficient shipping companies to ensure goods reach their expected
            destinations within the stipulated period.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supplyPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 80} variant="scale">
                <div className="group flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-agri bg-gradient-to-br from-agri/15 to-transparent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-agri" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-[12px] font-bold uppercase tracking-wider text-text-dark">
                    {pillar.title}
                  </h3>
                  <div className="mx-auto mt-2 h-[2px] w-8 bg-agri" />
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

function RealEstateSection() {
  return (
    <section className="relative overflow-hidden bg-primary-darker bg-grain">
      <Blob tone="estate" size={520} className="absolute -bottom-40 -right-40 z-0" opacity={0.26} />
      <SectorNumeral n="03" tone="estate" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <GoldFrame
              src="/images/realestate-sector.jpg"
              alt="HEEAF Real Estate — property purchase, sale and rentals"
              width={880}
              height={620}
              fill={false}
            />
          </Reveal>
          <Reveal delay={120} variant="right">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-estate">
                OUR BUSINESS SECTORS
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold text-white leading-snug">
                REAL ESTATE
              </h2>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-[16px] md:text-[20px] font-semibold text-white/80">
                Creating Opportunities Through Property
              </p>
              <div className="mt-4 h-[3px] w-16 bg-estate" />
              <p className="mt-6 max-w-[520px] text-[14px] leading-relaxed text-white/75">
                HEEAF Investment Limited operates in the real estate sector, with
                activities focused on the purchase and sale of property as well as
                rentals. Through this business area, the company participates in
                property transactions that deliver value to its clients and
                partners.
              </p>
              <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-white/75">
                HEEAF&apos;s real estate activities span three core areas: property
                acquisition, property sales, and property rentals. The company
                approaches each area with a focus on creating lasting value and
                identifying opportunities that serve the interests of its clients
                and partners.
              </p>
              <Link
                href="/contact"
                className="btn-shine mt-8 inline-flex h-[44px] items-center gap-2 rounded bg-estate px-6 text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:brightness-110 hover:scale-[1.03]"
              >
                CONTACT OUR REAL ESTATE TEAM
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RealEstateActivitiesSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <Reveal className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-estate">
            REAL ESTATE ACTIVITIES
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[24px] md:text-[30px] font-bold text-text-dark">
            OUR REAL ESTATE ACTIVITIES
          </h2>
          <div className="mx-auto mt-3 flex items-center gap-2">
            <div className="h-[2px] w-6 bg-estate/40" />
            <div className="h-2 w-2 rotate-45 bg-estate" />
            <div className="h-[2px] w-6 bg-estate/40" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {realEstateActivities.map((activity, i) => {
            const Icon = activity.icon;
            return (
              <Reveal key={activity.title} delay={i * 100} variant="scale">
                <div
                  className={`group flex flex-col rounded-lg border border-gold/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cardToneRing.estate}`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-estate bg-gradient-to-br from-estate/15 to-transparent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-estate" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-heading)] text-[16px] font-bold text-text-dark">
                    {activity.title}
                  </h3>
                  <div className="mt-2 h-[2px] w-10 bg-estate" />
                  <p className="mt-4 text-[13px] leading-relaxed text-text-dark/70">
                    {activity.text}
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
      <EnergySection />
      <PetroleumProductsSection />
      <CharcoalBriquettesSection />
      <AgricultureSection />
      <AgriProductsSection />
      <SupplyLogisticsSection />
      <RealEstateSection />
      <RealEstateActivitiesSection />
    </>
  );
}
