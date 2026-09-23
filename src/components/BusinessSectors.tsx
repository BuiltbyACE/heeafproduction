import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { businesses, businessPaths } from "@/data/businesses";

export default function BusinessSectors() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[26px] md:text-[32px] font-bold text-text-dark">
            OUR BUSINESS SECTORS
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 bg-gold" />
          <p className="mt-4 text-[13px] leading-relaxed text-text-dark/70">
            Driven by integrity and commitment, we trade commodities across
            Metals and Livestock for clients and partners worldwide.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {businesses.map((biz) => (
            <div
              key={biz.slug}
              className="group flex flex-col overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="gold-image-card relative h-[170px] rounded-b-none">
                <Image
                  src={biz.image}
                  alt={biz.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="relative flex flex-1 flex-col px-6 pb-6">
                <div className="absolute left-6 -top-[22px] flex h-11 w-11 items-center justify-center rounded-full bg-gold shadow-md">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-bold text-text-dark tracking-wide">
                  {biz.title}
                </h3>
                <p className="mt-2 flex-1 text-[12px] leading-relaxed text-text-dark/70">
                  {biz.description}
                </p>

                <ul className="mt-4 flex flex-col gap-1.5 border-t border-gold/15 pt-4">
                  {biz.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[12px] text-text-dark/75"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={businessPaths[biz.slug]}
                  className="mt-6 inline-flex h-[40px] items-center gap-2 self-start rounded bg-gold px-5 text-[10px] md:text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:bg-gold-light hover:scale-[1.02]"
                >
                  {biz.buttonLabel}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
