"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { businesses } from "@/data/businesses";

export default function BusinessDropdown() {
  const [open, setOpen] = useState(false);
  const [subOpenSlug, setSubOpenSlug] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setSubOpenSlug(null);
      }
    }
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative z-[1100]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setSubOpenSlug(null);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-text-dark transition-colors hover:text-gold"
      >
        OUR BUSINESSES
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div className="absolute left-0 top-full pt-2">
        <div
          className={`min-w-[220px] overflow-visible rounded border border-gray-100 bg-white shadow-lg transition-all duration-200 ${
            open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
          }`}
        >
          {businesses.map((biz) =>
            biz.subItems && biz.subItems.length > 0 ? (
              <div
                key={biz.slug}
                className="relative"
                onMouseEnter={() => setSubOpenSlug(biz.slug)}
                onMouseLeave={() =>
                  setSubOpenSlug((current) => (current === biz.slug ? null : current))
                }
              >
                <Link
                  href={`/businesses#${biz.slug}`}
                  className="flex items-center gap-3 px-4 py-2.5 text-[11px] font-medium tracking-wider uppercase text-text-dark transition-colors hover:bg-cream hover:text-gold"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <ArrowRight className="h-3 w-3 text-gold" />
                  </span>
                  <span className="flex-1">{biz.title}</span>
                  <ChevronRight className="h-3 w-3 text-gold/60" />
                </Link>

                <div
                  className={`absolute left-full top-0 pl-2 transition-all duration-200 ${
                    subOpenSlug === biz.slug
                      ? "opacity-100 visible translate-x-0"
                      : "opacity-0 invisible -translate-x-1"
                  }`}
                >
                  <div className="min-w-[200px] overflow-hidden rounded border border-gray-100 bg-white shadow-lg">
                    {biz.subItems.map((sub) => (
                      <Link
                        key={sub.anchor}
                        href={`/businesses#${sub.anchor}`}
                        className="flex items-center gap-3 px-4 py-2.5 text-[11px] font-medium tracking-wider uppercase text-text-dark transition-colors hover:bg-cream hover:text-gold"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10">
                          <ArrowRight className="h-3 w-3 text-gold" />
                        </span>
                        <span className="flex-1">{sub.label}</span>
                        <ArrowRight className="h-3 w-3 text-gold/60" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={biz.slug}
                href={`/businesses#${biz.slug}`}
                className="flex items-center gap-3 px-4 py-2.5 text-[11px] font-medium tracking-wider uppercase text-text-dark transition-colors hover:bg-cream hover:text-gold"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <ArrowRight className="h-3 w-3 text-gold" />
                </span>
                <span className="flex-1">{biz.title}</span>
                <ArrowRight className="h-3 w-3 text-gold/60" />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
