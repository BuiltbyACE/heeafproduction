import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

const infoItems = [
  {
    icon: MapPin,
    label: "OUR OFFICE",
    detail: "P.O Box 73447 - 00200 / Nairobi, Kenya",
  },
  {
    icon: Mail,
    label: "EMAIL US",
    detail: "heeafinvestmentltdk@gmail.com",
  },
  {
    icon: Phone,
    label: "CALL US",
    detail: "+254 726 653 542 (Kenya) / +234 7030157949 (Nigeria)",
  },
  {
    icon: Clock,
    label: "WORKING HOURS",
    detail:
      "Monday - Friday: 8:00 AM - 5:00 PM / Saturday: 9:00 AM - 1:00 PM / Sunday: Closed",
  },
];

export default function ContactQuickInfo() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 min-h-[60px] sm:grid-cols-2 md:grid-cols-4">
          {infoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={idx * 80} variant="scale">
                <div
                  className={`group flex flex-col items-center gap-3 px-6 py-6 text-center ${
                    idx < infoItems.length - 1
                      ? "md:border-r border-gold/15"
                      : ""
                  } ${idx < 2 ? "sm:border-r border-gold/15" : ""} ${
                    idx < 3 ? "border-b sm:border-b-0 md:border-b-0 border-gold/15" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-text-dark">
                    {item.label}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-text-dark/70">
                    {item.detail}
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
