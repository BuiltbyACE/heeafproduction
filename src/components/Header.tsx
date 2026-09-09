"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import BusinessDropdown from "@/components/BusinessDropdown";
import { businesses } from "@/data/businesses";

const borderNav = "border-b-2 border-transparent transition-colors hover:border-gold hover:text-gold";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-[1000] border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-100 bg-white/90 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(43,31,20,0.15)]"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div
          className={`flex items-center justify-between gap-6 transition-all duration-300 ${
            scrolled ? "h-[76px]" : "h-[100px]"
          }`}
        >
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo-official.png"
              alt="HEEAF Investment Limited"
              width={190}
              height={80}
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-[52px]" : "h-[70px]"
              }`}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={
                isActive("/")
                  ? "relative text-[11px] font-semibold tracking-wider uppercase text-gold transition-colors hover:text-gold-light"
                  : `text-[11px] font-semibold tracking-wider uppercase text-text-dark ${borderNav}`
              }
            >
              HOME
              {isActive("/") && (
                <span className="absolute -bottom-[18px] left-0 h-[2px] w-full bg-gold" />
              )}
            </Link>

            <Link
              href="/about"
              aria-current={isActive("/about") ? "page" : undefined}
              className={
                isActive("/about")
                  ? "relative text-[11px] font-semibold tracking-wider uppercase text-gold transition-colors hover:text-gold-light"
                  : `text-[11px] font-semibold tracking-wider uppercase text-text-dark ${borderNav}`
              }
            >
              ABOUT US
              {isActive("/about") && (
                <span className="absolute -bottom-[18px] left-0 h-[2px] w-full bg-gold" />
              )}
            </Link>

            <BusinessDropdown />

            <Link
              href="/global-reach"
              aria-current={isActive("/global-reach") ? "page" : undefined}
              className={
                isActive("/global-reach")
                  ? "relative text-[11px] font-semibold tracking-wider uppercase text-gold transition-colors hover:text-gold-light"
                  : `text-[11px] font-semibold tracking-wider uppercase text-text-dark ${borderNav}`
              }
            >
              GLOBAL REACH
              {isActive("/global-reach") && (
                <span className="absolute -bottom-[18px] left-0 h-[2px] w-full bg-gold" />
              )}
            </Link>

            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              className={
                isActive("/contact")
                  ? "relative text-[11px] font-semibold tracking-wider uppercase text-gold transition-colors hover:text-gold-light"
                  : `text-[11px] font-semibold tracking-wider uppercase text-text-dark ${borderNav}`
              }
            >
              CONTACT US
              {isActive("/contact") && (
                <span className="absolute -bottom-[18px] left-0 h-[2px] w-full bg-gold" />
              )}
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 rounded bg-gold px-6 py-[12px] text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:bg-gold-light hover:scale-[1.03]"
          >
            TALK TO US
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <button
            className="lg:hidden p-2 text-text-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden relative z-[1100] bg-white border-t shadow-lg">
          <nav className="flex flex-col px-6 py-5 gap-5" aria-label="Mobile navigation">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              aria-current={isActive("/") ? "page" : undefined}
              className={`text-sm font-semibold tracking-wider uppercase ${isActive("/") ? "text-gold" : "text-text-dark"}`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              aria-current={isActive("/about") ? "page" : undefined}
              className={`text-sm font-semibold tracking-wider uppercase ${isActive("/about") ? "text-gold" : "text-text-dark"}`}
            >
              ABOUT US
            </Link>

            <div>
              <button
                onClick={() => setBusinessOpen(!businessOpen)}
                aria-expanded={businessOpen}
                aria-haspopup="true"
                className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-text-dark"
              >
                OUR BUSINESSES
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${businessOpen ? "rotate-180" : ""}`}
                />
              </button>
              {businessOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-2.5 border-l-2 border-gold/30 pl-4">
                  {businesses.map((biz) =>
                    biz.subItems && biz.subItems.length > 0 ? (
                      <div key={biz.slug}>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileSubOpen((current) => (current === biz.slug ? null : biz.slug))
                          }
                          aria-expanded={mobileSubOpen === biz.slug}
                          className="flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-text-dark/70 transition-colors hover:text-gold"
                        >
                          {biz.title}
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-200 ${
                              mobileSubOpen === biz.slug ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileSubOpen === biz.slug && (
                          <div className="mt-2.5 ml-4 flex flex-col gap-2 border-l-2 border-gold/20 pl-4">
                            {biz.subItems.map((sub) => (
                              <Link
                                key={sub.anchor}
                                href={`/businesses#${sub.anchor}`}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm font-medium tracking-wider uppercase text-text-dark/60 transition-colors hover:text-gold"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={biz.slug}
                        href={`/businesses#${biz.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm font-medium tracking-wider uppercase text-text-dark/70 transition-colors hover:text-gold"
                      >
                        {biz.title}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            <Link
              href="/global-reach"
              onClick={() => setMobileOpen(false)}
              aria-current={isActive("/global-reach") ? "page" : undefined}
              className={`text-sm font-semibold tracking-wider uppercase ${isActive("/global-reach") ? "text-gold" : "text-text-dark"}`}
            >
              GLOBAL REACH
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              aria-current={isActive("/contact") ? "page" : undefined}
              className={`text-sm font-semibold tracking-wider uppercase ${isActive("/contact") ? "text-gold" : "text-text-dark"}`}
            >
              CONTACT US
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded bg-gold px-6 py-3 text-sm font-bold text-white uppercase tracking-wider transition-all hover:bg-gold-light"
            >
              TALK TO US
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
