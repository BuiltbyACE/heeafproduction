import Reveal from "@/components/Reveal";

export default function Founder() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1000px] items-center gap-10 px-6 py-16 md:grid-cols-[320px_1fr] md:py-20">
        <Reveal variant="left">
          <div className="gold-image-card mx-auto aspect-[602/732] w-full max-w-[320px]">
            <img
              src="/images/founder.jpeg"
              alt="The founder of HEEAF Investment Limited"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={100} variant="right">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            LEADERSHIP
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-[24px] md:text-[28px] font-bold text-text-dark leading-tight">
            OUR FOUNDER
          </h2>
          <div className="mt-3 h-[3px] w-14 bg-gold" />
          <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-text-dark/75">
            HEEAF Investment Limited started in 2018 as a small business buying
            and selling cow hides in Kenya. Officially registered in January
            2020, it now serves clients and partners across Africa and beyond.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
