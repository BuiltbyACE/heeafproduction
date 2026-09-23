import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#17130D]">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col rounded-md border border-gold/15 bg-[#1f1911] p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
              <Target className="h-5 w-5 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white tracking-wide">
              MISSION
            </h3>
            <div className="mt-3 h-[2px] w-10 bg-gold" />
            <p className="mt-4 text-[13px] leading-relaxed text-white/70">
              To ease accessibility and deliver quality commodities — metals
              and livestock — to our clients, while upholding company
              integrity and customer satisfaction.
            </p>
          </div>

          <div className="flex flex-col rounded-md border border-gold/15 bg-[#1f1911] p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
              <Eye className="h-5 w-5 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white tracking-wide">
              VISION
            </h3>
            <div className="mt-3 h-[2px] w-10 bg-gold" />
            <p className="mt-4 text-[13px] leading-relaxed text-white/70">
              To be a global beacon of trust in commodity trade, that our
              customers and partners smile as they interact with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
