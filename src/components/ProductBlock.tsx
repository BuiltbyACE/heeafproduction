import Reveal from "@/components/Reveal";
import GoldFrame from "@/components/GoldFrame";
import type { Product, SectorAccent } from "@/data/productsServices";

export default function ProductBlock({
  product,
  index,
  accent,
  reverse,
}: {
  product: Product;
  index: number;
  accent: SectorAccent;
  reverse: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="grid items-center gap-10 py-12 first:pt-0 last:pb-0 lg:grid-cols-2 lg:gap-16">
      <Reveal
        variant={reverse ? "right" : "left"}
        className={reverse ? "lg:order-2" : "lg:order-1"}
      >
        <div className="gold-image-card relative aspect-[880/620] w-full overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-darker/10" />
        </div>
      </Reveal>

      <Reveal
        delay={100}
        variant={reverse ? "left" : "right"}
        className={reverse ? "lg:order-1" : "lg:order-2"}
      >
        <span className={`font-[family-name:var(--font-heading)] text-sm font-bold ${accent.text}`}>
          {num}
        </span>
        <h3 className="mt-1 font-[family-name:var(--font-heading)] text-[24px] md:text-[28px] font-bold text-text-dark leading-snug">
          {product.title}
        </h3>
        <div className={`mt-3 h-[3px] w-14 ${accent.bg}`} />
        <p className="mt-5 max-w-[560px] text-[14px] leading-relaxed text-text-dark/75">
          {product.copy}
        </p>
      </Reveal>
    </div>
  );
}
