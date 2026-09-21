import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import GoldFrame from "@/components/GoldFrame";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark bg-grain">
      <Blob tone="gold" size={480} className="absolute -top-32 -left-24 z-0" opacity={0.2} />

      <div className="relative z-10 mx-auto grid min-h-[340px] max-w-[1400px] items-center gap-10 px-6 py-14 md:min-h-[420px] lg:grid-cols-[1fr_auto]">
        <Reveal variant="left" className="max-w-[600px]">
          <h1 className="font-[family-name:var(--font-heading)] text-[34px] leading-[1.1] md:text-[52px] font-bold text-white">
            ABOUT HEEAF
          </h1>
          <p className="mt-3 font-[family-name:var(--font-heading)] text-[18px] md:text-[22px] font-semibold text-gold">
            Built on Integrity. Driven by Satisfaction.
          </p>
          <div className="mt-4 h-[3px] w-16 bg-gold" />
          <p className="mt-5 max-w-[520px] text-[13px] leading-relaxed text-white/80">
            HEEAF Investment Limited is a commodity trading company. We trade
            metals, livestock and energy, connecting producers with buyers across
            Africa and beyond, with the ambition of expanding further.
          </p>
        </Reveal>

        <Reveal delay={140} variant="right" className="hidden lg:block">
          <GoldFrame
            src="/images/hero-photo.jpg"
            alt="HEEAF Investment Limited — international business and city skyline"
            wrapperClassName="h-[260px] w-[420px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
