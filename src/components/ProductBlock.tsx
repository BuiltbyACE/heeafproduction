import Reveal from "@/components/Reveal";
import AutoVideo from "@/components/AutoVideo";
import OverlapVideos from "@/components/OverlapVideos";
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
    <div className="py-12 first:pt-0 last:pb-0">
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
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

      {product.videos && product.videos.length > 0 && (
        <Reveal delay={150} className="mt-12">
          <p className={`font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-[0.18em] ${accent.text}`}>
            On the ground
          </p>
          {product.overlapVideos && product.videos.length === 2 ? (
            <div className="mt-8">
              <OverlapVideos videos={[product.videos[0], product.videos[1]]} />
            </div>
          ) : (
          <div className="mt-5 flex flex-wrap gap-6">
            {product.videos.map((v) => (
              <figure key={v.src} className="w-full max-w-[260px]">
                <div className="gold-image-card aspect-[9/16] overflow-hidden rounded-xl bg-primary-darker">
                  <AutoVideo src={v.src} poster={v.poster} label={v.caption} />
                </div>
                <figcaption className="mt-3 text-[13px] leading-snug text-text-dark/70">
                  {v.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          )}
        </Reveal>
      )}
    </div>
  );
}
