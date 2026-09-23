import Image from "next/image";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";

export default function BusinessesHero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark bg-grain">
      <div className="absolute inset-0">
        <Image
          src="/images/businesses-hero.jpg"
          alt="Precious metals and livestock — the commodity sectors of HEEAF Investment Limited"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-primary-dark/30" />
      </div>

      <Blob tone="gold" size={480} className="absolute -bottom-32 -right-24 z-[1]" opacity={0.22} />

      <div className="relative z-10 mx-auto grid min-h-[420px] max-w-[1400px] items-center px-6 py-20 md:min-h-[520px]">
        <Reveal>
          <div className="max-w-[640px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
              OUR BUSINESSES
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-[40px] leading-[1.05] font-bold text-white md:text-[60px]">
              Two Commodity Sectors.{" "}
              <span className="text-gold">Unlimited Opportunities.</span>
            </h1>
            <div className="mt-4 h-[3px] w-16 bg-gold" />
            <p className="mt-6 max-w-[520px] text-[14px] leading-relaxed text-white/80">
              HEEAF Investment Limited trades commodities across two key
              sectors — precious metals and livestock — delivering quality, value
              and long-term impact.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
