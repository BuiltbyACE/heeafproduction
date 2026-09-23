"use client";

import { motion } from "framer-motion";
import { Users, FileText, TrendingUp, Globe } from "lucide-react";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import GoldFrame from "@/components/GoldFrame";

const journey = [
  {
    icon: Users,
    period: "2018",
    title: "THE BEGINNING",
    caption: "Started as a small business buying and selling cow hides in Kenya.",
  },
  {
    icon: FileText,
    period: "2020",
    title: "REGISTERED",
    caption: "Officially registered as HEEAF Investment Limited in January 2020.",
  },
  {
    icon: TrendingUp,
    period: "EXPANSION",
    title: "GROWTH",
    caption: "Expanded our portfolio and extended presence to Nigeria.",
  },
  {
    icon: Globe,
    period: "TODAY",
    title: "SERVING",
    caption: "Serves clients and partners across Africa and beyond.",
  },
];

export default function WhoWeAreJourney() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <Blob tone="agri" size={420} className="absolute -left-40 top-0 z-0" opacity={0.14} />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:py-20 lg:grid-cols-2">
        {/* WHO WE ARE */}
        <div className="grid items-center gap-8 sm:grid-cols-[240px_1fr]">
          <Reveal variant="left">
            <GoldFrame
              src="/images/logistics-photo.jpg"
              alt="HEEAF Investment Limited — international trade and shipping logistics"
              wrapperClassName="h-[240px] sm:h-full sm:min-h-[300px]"
            />
          </Reveal>
          <Reveal delay={100}>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
              WHO WE ARE
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-[24px] md:text-[28px] font-bold text-text-dark leading-tight">
              WHO WE ARE
            </h2>
            <div className="mt-3 h-[3px] w-14 bg-gold" />
            <p className="mt-4 text-[13px] leading-relaxed text-text-dark/75">
              HEEAF Investment Limited is a commodity trading company dealing in
              precious metals and livestock. We are physically located in Nigeria
              and Kenya with the ambition of expanding to other countries.
            </p>
          </Reveal>
        </div>

        {/* OUR JOURNEY */}
        <div>
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
              OUR JOURNEY
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-[24px] md:text-[28px] font-bold text-text-dark leading-tight">
              OUR JOURNEY
            </h2>
            <div className="mt-3 h-[3px] w-14 bg-gold" />
          </Reveal>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {journey.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.period} delay={idx * 100} variant="scale">
                  <div className="relative flex gap-4">
                    {idx < journey.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className="absolute left-6 top-14 h-[calc(100%-16px)] w-[2px] border-l-2 border-dashed border-gold/40"
                      />
                    )}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-white shadow-sm shadow-gold/20">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-gold">
                        {step.period}
                      </span>
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-text-dark">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[12px] leading-relaxed text-text-dark/70">
                        {step.caption}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
