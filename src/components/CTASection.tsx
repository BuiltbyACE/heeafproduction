import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden bg-primary-darker bg-grain"
      aria-labelledby="cta-heading"
    >
      <Blob tone="gold" size={520} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" opacity={0.2} />

      <Reveal variant="scale" className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 text-center relative z-10">
        <div className="mx-auto inline-block px-4 py-px text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
          PARTNER WITH US
        </div>
        <h2
          id="cta-heading"
          className="mx-auto mt-5 max-w-[680px] font-[family-name:var(--font-heading)] text-[26px] md:text-[34px] font-bold text-white leading-snug"
        >
          Looking for the right business partner?
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-[13px] leading-relaxed text-white/65">
          Let us help you achieve growth, efficiency and long-term value.
        </p>
        <Link
          href="/contact"
          className="btn-shine mt-8 inline-flex h-[46px] items-center gap-2 rounded bg-gold px-8 text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:bg-gold-light hover:scale-[1.03]"
        >
          CONTACT OUR TEAM
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
