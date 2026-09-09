import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import GoldFrame from "@/components/GoldFrame";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark bg-grain">
      <Blob tone="gold" size={460} className="absolute -top-28 -right-20 z-0" opacity={0.2} />

      <div className="relative z-10 mx-auto grid min-h-[400px] max-w-[1400px] items-center gap-10 px-6 py-14 md:min-h-[480px] lg:grid-cols-[1fr_auto]">
        <Reveal variant="left">
          <div className="max-w-[560px]">
            <h1 className="font-[family-name:var(--font-heading)] text-[36px] leading-[1.1] md:text-[52px] font-bold text-white">
              CONTACT <span className="text-gold">US</span>
            </h1>
            <p className="mt-3 font-[family-name:var(--font-heading)] text-[18px] md:text-[22px] font-semibold text-gold">
              We Are Here To Help
            </p>
            <div className="mt-4 h-[3px] w-16 bg-gold" />
            <p className="mt-5 max-w-[480px] text-[13px] leading-relaxed text-white/80">
              We welcome opportunities, partnerships and inquiries. Get in touch
              with us and our team will be happy to assist you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} variant="right" className="hidden lg:block">
          <GoldFrame
            src="/images/contact-hero.jpg"
            alt="Modern office reception with floor-to-ceiling windows overlooking a city skyline at sunset"
            wrapperClassName="h-[280px] w-[440px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
