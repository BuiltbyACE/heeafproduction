import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="gold-image-card relative h-[320px] md:h-[400px]">
            <Image
              src="/images/logistics-photo.jpg"
              alt="HEEAF Investment Limited — international trade and logistics"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
              ABOUT HEEAF
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-[24px] md:text-[30px] font-bold text-text-dark leading-tight">
              HEEAF INVESTMENT LIMITED
            </h2>
            <div className="mt-3 h-[3px] w-14 bg-gold" />
            <p className="mt-5 text-[13px] leading-relaxed text-text-dark/75 max-w-[560px]">
              HEEAF Investment Limited is a commodity trading company dealing in
              precious metals and livestock. We are physically located in Nigeria
              and Kenya with the ambition of expanding to other countries.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex h-[42px] items-center gap-2 rounded bg-primary-dark px-6 text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:bg-text-dark hover:scale-[1.02]"
            >
              LEARN MORE ABOUT US
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
