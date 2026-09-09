import { ShieldCheck, Leaf, Users, Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";

const values = [
  { icon: ShieldCheck, title: "INTEGRITY", text: "We do what is right" },
  { icon: Leaf, title: "SUSTAINABILITY", text: "For future generations" },
  { icon: Users, title: "COMMUNITY", text: "Stronger together" },
  { icon: Award, title: "EXCELLENCE", text: "In everything we do" },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-primary-darker bg-grain">
      <Blob tone="gold" size={440} className="absolute -bottom-32 -right-32 z-0" opacity={0.14} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            WHAT DRIVES US
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[26px] md:text-[32px] font-bold text-white">
            CORE VALUES
          </h2>
          <div className="mx-auto mt-3 flex items-center justify-center gap-2">
            <div className="h-[2px] w-6 bg-gold/40" />
            <div className="h-2 w-2 rotate-45 bg-gold" />
            <div className="h-[2px] w-6 bg-gold/40" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={idx * 100} variant="scale">
                <div className="group relative flex flex-col items-center p-3 text-center">
                  {idx > 0 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:block"
                    />
                  )}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-white/5 shadow-[0_0_0_0_rgba(200,144,30,0)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_4px_rgba(200,144,30,0.25)]">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-bold tracking-wide text-white">
                    {v.title}
                  </h3>
                  <div className="mt-2 h-[2px] w-8 bg-gold" />
                  <p className="mt-3 text-[12px] leading-relaxed text-white/65">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
