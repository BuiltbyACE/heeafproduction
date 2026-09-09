import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import ProductBlock from "@/components/ProductBlock";
import { sectorAccents, type SectorGroup } from "@/data/productsServices";

export default function ProductSectorSection({ sector }: { sector: SectorGroup }) {
  const accent = sectorAccents[sector.slug];
  const bgClass = sector.sectionBg === "cream" ? "bg-cream" : "bg-white";

  return (
    <section
      id={sector.slug}
      className={`relative scroll-mt-28 overflow-hidden ${bgClass}`}
    >
      <Blob
        tone={accent.tone}
        size={480}
        className="absolute -top-32 -right-32 z-0"
        opacity={sector.sectionBg === "cream" ? 0.14 : 0.1}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <Reveal className="max-w-[720px]">
          <h2 className="font-[family-name:var(--font-heading)] text-[32px] md:text-[42px] font-bold text-text-dark">
            {sector.label}
          </h2>
          <div className={`mt-4 h-[3px] w-16 ${accent.bg}`} />
          <p className="mt-5 max-w-[620px] text-[14px] leading-relaxed text-text-dark/70">
            {sector.intro}
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-primary-dark/8">
          {sector.products.map((product, i) => (
            <ProductBlock
              key={product.slug}
              product={product}
              index={i}
              accent={accent}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
