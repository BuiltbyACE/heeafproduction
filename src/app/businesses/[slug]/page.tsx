import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { businesses } from "@/data/businesses";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import GoldFrame from "@/components/GoldFrame";
import type { BlobTone } from "@/components/Blob";

type Props = { params: Promise<{ slug: string }> };

type SectorStyle = {
  tone: BlobTone;
  text: string;
  bg: string;
  border: string;
  dot: string;
  button: string;
};

const sectorStyles: Record<string, SectorStyle> = {
  energy: {
    tone: "energy",
    text: "text-energy",
    bg: "bg-energy",
    border: "border-energy/50",
    dot: "bg-energy",
    button: "bg-energy hover:brightness-110",
  },
  agriculture: {
    tone: "agri",
    text: "text-agri",
    bg: "bg-agri",
    border: "border-agri/50",
    dot: "bg-agri",
    button: "bg-agri hover:brightness-110",
  },
  "real-estate": {
    tone: "estate",
    text: "text-estate",
    bg: "bg-estate",
    border: "border-estate/50",
    dot: "bg-estate",
    button: "bg-estate hover:brightness-110",
  },
  metal: {
    tone: "metal",
    text: "text-metal",
    bg: "bg-metal",
    border: "border-metal/50",
    dot: "bg-metal",
    button: "bg-metal hover:brightness-110",
  },
};

const defaultStyle: SectorStyle = {
  tone: "gold",
  text: "text-gold",
  bg: "bg-gold",
  border: "border-gold/50",
  dot: "bg-gold",
  button: "bg-gold hover:bg-gold-light",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const biz = businesses.find((b) => b.slug === slug);
  return { title: biz ? `${biz.title} — HEEAF Investment Limited` : "HEEAF" };
}

export function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }));
}

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;
  const biz = businesses.find((b) => b.slug === slug);
  if (!biz) notFound();

  const s = sectorStyles[slug] ?? defaultStyle;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary-darker bg-grain">
          <Blob tone={s.tone} size={440} className="absolute -top-28 -right-20 z-0" opacity={0.24} />
          <Reveal className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-20">
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${s.text}`}>
              OUR BUSINESS SECTORS
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-[30px] md:text-[40px] font-bold text-white">
              {biz.title}
            </h1>
            <div className={`mt-3 h-[3px] w-16 ${s.bg}`} />
          </Reveal>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <Reveal variant="left">
                <GoldFrame
                  src={biz.image}
                  alt={biz.title}
                  width={880}
                  height={620}
                  fill={false}
                  wrapperClassName="h-[340px] md:h-[420px]"
                />
              </Reveal>
              <Reveal delay={120} variant="right">
                <h2 className="font-[family-name:var(--font-heading)] text-[22px] md:text-[26px] font-bold text-text-dark">
                  {biz.title}
                </h2>
                <div className={`mt-3 h-[3px] w-12 ${s.bg}`} />
                <p className="mt-5 text-[14px] leading-relaxed text-text-dark/75">
                  {biz.description}
                </p>
                <h3 className={`mt-6 text-[11px] font-bold uppercase tracking-wider ${s.text}`}>
                  {biz.itemsLabel}
                </h3>
                {biz.itemImages ? (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {biz.items.map((item) => (
                      <div key={item} className="overflow-hidden rounded-lg border border-black/5">
                        <img
                          src={biz.itemImages[item]}
                          alt={item}
                          className="h-[140px] w-full object-cover"
                        />
                        <div className="px-3 py-2">
                          <span className="text-[12px] font-semibold text-text-dark">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="mt-3 flex flex-col gap-2">
                    {biz.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[13px] text-text-dark/75"
                      >
                        <span className={`h-1 w-1 shrink-0 rounded-full ${s.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href="/contact"
                  className={`btn-shine mt-6 inline-flex h-[42px] items-center gap-2 rounded px-6 text-[11px] font-bold text-white uppercase tracking-wider transition-all ${s.button}`}
                >
                  CONTACT HEEAF
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
