import {
  Award,
  ShieldCheck,
  Globe,
  Truck,
  Users,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    icon: Award,
    title: "Quality Assurance",
    text: "Ensure premium quality in all products and services.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We do the right thing even if unpopular or risky.",
  },
  {
    icon: Globe,
    title: "Global Network",
    text: "Clients and partners across Africa and beyond.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    text: "Efficient logistics ensure safe and on-time delivery.",
  },
  {
    icon: Users,
    title: "Client Focused",
    text: "Customer and partner satisfaction is at the heart of our decisions.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Impact",
    text: "We support sustainable solutions for a better tomorrow.",
  },
];

export default function WhyPartnerStrip() {
  return (
    <section className="bg-[#1a1410]">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 60} variant="scale">
                <div className="group flex flex-col items-center text-center">
                  <Icon className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <h3 className="mt-3 text-[11px] font-bold uppercase tracking-wider text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-white/55">
                    {pillar.text}
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
