import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function BusinessesCTA() {
  return (
    <section className="bg-gold">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row md:gap-6">
        <Reveal>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-dark">
              <Phone className="h-5 w-5 text-white" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-[18px] font-bold text-primary-dark">
                Ready to partner with us?
              </h3>
              <p className="mt-1 max-w-[420px] text-[13px] leading-relaxed text-primary-dark/80">
                Let us help you find the best solutions for your business.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Link
            href="/contact"
            className="btn-shine inline-flex h-[46px] items-center gap-2 rounded bg-primary-dark px-8 text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:bg-primary-dark/90 hover:scale-[1.03]"
          >
            CONTACT OUR TEAM
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
