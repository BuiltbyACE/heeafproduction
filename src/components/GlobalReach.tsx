import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";

const regions = [
  { name: "AFRICA", countries: "Kenya, Tanzania, Uganda, Somalia, Malawi, Sudan, South Sudan, Nigeria, Benin Republic, Niger Republic, Togo, Ghana and more." },
  { name: "AMERICAS", countries: "Brazil, United States of America, Venezuela" },
  { name: "EUROPE", countries: "Italy and more." },
  { name: "ASIA", countries: "China and more." },
];

const mapDots = [
  { left: "22%", top: "34%" },
  { left: "52%", top: "30%" },
  { left: "58%", top: "44%" },
  { left: "78%", top: "38%" },
];

export default function GlobalReach() {
  return (
    <section className="relative overflow-hidden bg-primary-darker bg-grain">
      <Blob tone="gold" size={500} className="absolute top-0 right-0 z-0" opacity={0.16} />

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-12 px-6 py-16 md:py-20 md:flex-row md:items-center">
        {/* LEFT — intro text */}
        <Reveal variant="left" className="w-full flex-1 md:max-w-[400px] text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            GLOBAL REACH
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold leading-snug text-white md:text-4xl">
            Connecting Continents.{" "}
            <span className="text-gold">Delivering Excellence.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Our clients and partners span across Africa and the world.
          </p>
          <Link
            href="/global-reach"
            className="btn-shine mt-6 inline-flex h-11 items-center gap-2 rounded border border-gold px-7 text-xs font-bold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-white"
          >
            VIEW OUR GLOBAL REACH
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        {/* CENTER — dotted map */}
        <Reveal delay={100} variant="scale" className="w-full max-w-[440px] flex-1">
          <div className="relative mx-auto w-full">
            <Image
              src="/images/world-map.svg"
              alt="HEEAF global reach — decorative world map"
              width={440}
              height={220}
              className="mx-auto h-auto w-full opacity-80"
            />
            {mapDots.map((dot, i) => (
              <span
                key={i}
                className="absolute h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(200,142,30,0.9)]"
                style={{ left: dot.left, top: dot.top }}
              >
                <span className="absolute inset-0 rounded-full bg-gold animate-pulse-dot" />
              </span>
            ))}
          </div>
        </Reveal>

        {/* RIGHT — region badges */}
        <div className="grid w-full flex-[1.2] grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          {regions.map((region, i) => (
            <Reveal key={region.name} delay={i * 80} variant="right">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-gold/10">
                  <Globe className="h-6 w-6 text-gold" strokeWidth={1.4} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    {region.name}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-white/55">
                    {region.countries}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
