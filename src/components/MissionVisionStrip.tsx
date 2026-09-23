import { Target, Eye, UserRound } from "lucide-react";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";

const items = [
  {
    icon: Target,
    title: "MISSION",
    text: "To ease accessibility and deliver quality commodities — precious metals and livestock — to our clients, while upholding integrity.",
  },
  {
    icon: Eye,
    title: "VISION",
    text: "To be a global beacon of trust in commodity trade, where our customers and partners smile as they interact with us.",
  },
  {
    icon: UserRound,
    title: "PHILOSOPHY",
    text: "Our decision-making is customer and partner centered, focused on delivering unparalleled products and services.",
  },
];

export default function MissionVisionStrip() {
  return (
    <section className="relative overflow-hidden bg-primary-dark bg-grain">
      <Blob tone="gold" size={480} className="absolute -top-32 left-1/2 -translate-x-1/2 z-0" opacity={0.16} />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:py-20 md:grid-cols-3">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={idx * 100} variant="scale">
              <div
                className={`group relative flex h-full flex-col items-start md:items-center md:text-center ${
                  idx < items.length - 1 ? "md:pr-8" : ""
                } ${idx > 0 ? "md:pl-8" : ""}`}
              >
                {idx > 0 && (
                  <div className="absolute left-0 top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:block" />
                )}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-white/5 shadow-[0_0_0_0_rgba(200,144,30,0)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_4px_rgba(200,144,30,0.25)]">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white tracking-wide">
                  {item.title}
                </h2>
                <div className="mt-2 h-[2px] w-10 bg-gold" />
                <p className="mt-4 text-[12px] leading-relaxed text-white/65 max-w-[340px]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
