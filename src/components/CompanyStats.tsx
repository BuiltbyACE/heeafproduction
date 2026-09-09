import { Calendar, MapPin, Globe, Handshake } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const stats = [
  {
    icon: Calendar,
    label: "ESTABLISHED",
    value: "2018",
    countFrom: 1990,
    countTo: 2018,
  },
  {
    icon: MapPin,
    label: "OPERATING IN",
    value: "KENYA & NIGERIA",
  },
  {
    icon: Globe,
    label: "SERVING CLIENTS IN",
    value: "AFRICA & BEYOND",
  },
  {
    icon: Handshake,
    label: "FOCUSED ON",
    value: "3 CORE SECTORS",
  },
];

export default function CompanyStats() {
  return (
    <section className="relative z-20 -mt-16 px-6 md:-mt-20">
      <Reveal variant="scale">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl border border-gold/15 bg-white/95 shadow-2xl shadow-black/15 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3 px-5 py-6 md:px-6 ${
                    idx < stats.length - 1 ? "md:border-r border-gold/15" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                    <Icon className="h-[18px] w-[18px] text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] md:text-[9px] font-semibold uppercase tracking-wider text-text-dark/50">
                      {stat.label}
                    </span>
                    <span className="text-[12px] md:text-sm font-bold text-text-dark leading-tight">
                      {stat.countFrom !== undefined ? (
                        <CountUp from={stat.countFrom} to={stat.countTo!} />
                      ) : (
                        stat.value
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
