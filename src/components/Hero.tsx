"use client";

import Image from "next/image";
import {
  Droplets,
  Leaf,
  Home as HomeIcon,
  Fuel,
  Flame,
  ShoppingBag,
  Drumstick,
  Fish,
  Building2,
  Landmark,
  LandPlot,
  Handshake,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#080a0e] overflow-hidden">
      {/* ── DESKTOP VIEW (md+): Exact 1:1 Pixel-Perfect Layout with coded live typography ── */}
      <div className="relative mx-auto hidden md:block w-full max-w-[1920px] aspect-[1536/872] select-none">
        {/* Crisp clean photo backdrop (3 sectors, sky, tanker, cows/meats, luxury villa & gold divider lines) */}
        <Image
          src="/images/hero-clean-bg.jpg"
          alt="HEEAF Investment Limited - Powering Growth Across Key Sectors"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* ── 1. Top-Left Headline & Copy (100% Coded Vector Typography) ── */}
        <div className="absolute top-[4.5%] left-[3.2%] w-[35%] z-20 pointer-events-auto">
          <p className="text-[10px] lg:text-[11.5px] font-bold uppercase tracking-[0.32em] text-[#1b2533]">
            WELCOME TO HEEAF INVESTMENT LIMITED
          </p>

          <h1 className="mt-1 font-[family-name:var(--font-heading)] text-[28px] lg:text-[42px] xl:text-[46px] font-black leading-[1.08] text-[#0f172a] tracking-tight">
            Connecting Opportunities.
            <span className="block text-[#d4941c]">Delivering Value Across Borders.</span>
          </h1>

          <p className="mt-2.5 lg:mt-3 max-w-[340px] text-[11px] lg:text-[13px] font-medium leading-relaxed text-[#334155]">
            We provide quality and affordable solutions in Energy, Agriculture
            and Real Estate to clients and partners across Africa and beyond.
          </p>

          <div className="mt-2 h-[3px] w-12 bg-[#d4941c]" />
        </div>

        {/* ── 2. Sector 1 (ENERGY) Card Content (Coded Live Text & Vector Icons) ── */}
        <div className="absolute top-[51%] left-[2%] w-[29.5%] z-20 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#d4941c] bg-[#0c0e12] shadow-lg">
              <Droplets className="h-6 w-6 lg:h-7 lg:w-7 text-[#d4941c]" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-base lg:text-[20px] font-black uppercase tracking-wider text-white">
                ENERGY
              </h2>
              <p className="text-[12px] lg:text-[13.5px] font-semibold text-[#d4941c]">
                Petroleum Products
              </p>
            </div>
          </div>

          <p className="mt-3 text-[10.5px] lg:text-[12px] leading-relaxed text-white/85">
            We supply and trade in quality petroleum products, ensuring reliable
            energy solutions for homes, businesses and industries.
          </p>

          {/* Product Tag Icons */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-white/10 pt-2.5">
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <Fuel className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Diesel
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <Flame className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Petrol
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <Droplets className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Lubricants
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <Fuel className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Fuel Oils
            </span>
          </div>
        </div>

        {/* ── 3. Sector 2 (AGRICULTURE) Card Content (Coded Live Text & Vector Icons) ── */}
        <div className="absolute top-[51%] left-[36%] w-[29.5%] z-20 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#d4941c] bg-[#0c0e12] shadow-lg">
              <Leaf className="h-6 w-6 lg:h-7 lg:w-7 text-[#d4941c]" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-base lg:text-[20px] font-black uppercase tracking-wider text-white">
                AGRICULTURE
              </h2>
              <p className="text-[12px] lg:text-[13.5px] font-semibold text-[#d4941c]">
                Animal Skin, Hides, Meat & Fish
              </p>
            </div>
          </div>

          <p className="mt-3 text-[10.5px] lg:text-[12px] leading-relaxed text-white/85">
            We deal in high-quality animal skins and hides, fresh meat and fish,
            supporting farmers, communities and the food value chain.
          </p>

          {/* Product Tag Icons */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-white/10 pt-2.5">
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <ShoppingBag className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Animal Skins & Hides
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <Drumstick className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Meat
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <Fish className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Fish
            </span>
          </div>
        </div>

        {/* ── 4. Sector 3 (REAL ESTATE) Card Content (Coded Live Text & Vector Icons) ── */}
        <div className="absolute top-[51%] left-[69.5%] w-[28.5%] z-20 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#d4941c] bg-[#0c0e12] shadow-lg">
              <HomeIcon className="h-6 w-6 lg:h-7 lg:w-7 text-[#d4941c]" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-base lg:text-[20px] font-black uppercase tracking-wider text-white">
                REAL ESTATE
              </h2>
              <p className="text-[12px] lg:text-[13.5px] font-semibold text-[#d4941c]">
                Property Development & Investment
              </p>
            </div>
          </div>

          <p className="mt-3 text-[10.5px] lg:text-[12px] leading-relaxed text-white/85">
            We invest in prime properties, develop modern spaces and help our
            clients achieve long-term value and secure their future.
          </p>

          {/* Product Tag Icons */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-white/10 pt-2.5">
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <Building2 className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Residential
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <Landmark className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Commercial
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <LandPlot className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Land
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] lg:text-[11.5px] font-medium text-white/80">
              <Handshake className="h-3.5 w-3.5 text-[#d4941c]" strokeWidth={1.75} />
              Investment
            </span>
          </div>
        </div>

        {/* ── 5. Bottom Core Values Bar (100% Coded Live Text & Vector Icons) ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[12.8%] z-20 flex items-center justify-between px-6 lg:px-12 divide-x divide-white/10">
          <div className="flex-1 flex items-center justify-center gap-3 px-3">
            <div className="flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full border border-[#d4941c]">
              <Handshake className="h-4 w-4 lg:h-5 lg:w-5 text-[#d4941c]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[12px] lg:text-[13px] font-bold text-white">Integrity</p>
              <p className="text-[10px] lg:text-[11px] text-white/60">We do what is right</p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center gap-3 px-3">
            <div className="flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full border border-[#d4941c]">
              <Leaf className="h-4 w-4 lg:h-5 lg:w-5 text-[#d4941c]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[12px] lg:text-[13px] font-bold text-white">Sustainability</p>
              <p className="text-[10px] lg:text-[11px] text-white/60">For future generations</p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center gap-3 px-3">
            <div className="flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full border border-[#d4941c]">
              <Users className="h-4 w-4 lg:h-5 lg:w-5 text-[#d4941c]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[12px] lg:text-[13px] font-bold text-white">Community</p>
              <p className="text-[10px] lg:text-[11px] text-white/60">Stronger together</p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center gap-3 px-3">
            <div className="flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full border border-[#d4941c]">
              <ShieldCheck className="h-4 w-4 lg:h-5 lg:w-5 text-[#d4941c]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[12px] lg:text-[13px] font-bold text-white">Excellence</p>
              <p className="text-[10px] lg:text-[11px] text-white/60">In everything we do</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE / TABLET VIEW (< md): Clean, Responsive, Stacked & Legible ── */}
      <div className="md:hidden flex flex-col bg-[#0c0e12] text-white">
        {/* Top Headline Section */}
        <div className="relative bg-[#0c0e12] px-6 py-10 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(120% 100% at 20% 0%, rgba(212,148,28,0.18) 0%, transparent 55%)",
            }}
          />
          <div className="relative">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f5d76e]">
              WELCOME TO HEEAF INVESTMENT LIMITED
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-heading)] text-[clamp(1.85rem,6vw,2.6rem)] font-black leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
              Connecting Opportunities.{" "}
              <span className="block text-[#f5d76e]">Delivering Value Across Borders.</span>
            </h1>
            <div className="mt-3 h-[3px] w-12 bg-[#f5d76e]" />
            <p className="mt-3 text-sm leading-relaxed text-white/85 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
              We provide quality and affordable solutions in Energy, Agriculture
              and Real Estate to clients and partners across Africa and beyond.
            </p>
          </div>
        </div>

        {/* Sector 1: Energy */}
        <div className="border-b border-white/10">
          <div className="relative h-56 w-full">
            <Image
              src="/images/hero-energy-truck-clean.jpg"
              alt="HEEAF Energy"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 bg-[#0c0e12]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4941c]">
                <Droplets className="h-6 w-6 text-[#d4941c]" />
              </div>
              <div>
                <h2 className="text-lg font-black uppercase text-white">ENERGY</h2>
                <p className="text-sm font-semibold text-[#d4941c]">Petroleum Products</p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/70">
              We supply and trade in quality petroleum products, ensuring reliable
              energy solutions for homes, businesses and industries.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 border-t border-white/10 pt-3">
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <Fuel className="h-3.5 w-3.5 text-[#d4941c]" /> Diesel
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <Flame className="h-3.5 w-3.5 text-[#d4941c]" /> Petrol
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <Droplets className="h-3.5 w-3.5 text-[#d4941c]" /> Lubricants
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <Fuel className="h-3.5 w-3.5 text-[#d4941c]" /> Fuel Oils
              </span>
            </div>
          </div>
        </div>

        {/* Sector 2: Agriculture */}
        <div className="border-b border-white/10">
          <div className="relative h-56 w-full">
            <Image
              src="/images/hero-agriculture-cows.jpg"
              alt="HEEAF Agriculture"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 bg-[#0c0e12]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4941c]">
                <Leaf className="h-6 w-6 text-[#d4941c]" />
              </div>
              <div>
                <h2 className="text-lg font-black uppercase text-white">AGRICULTURE</h2>
                <p className="text-sm font-semibold text-[#d4941c]">
                  Animal Skin, Hides, Meat & Fish
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/70">
              We deal in high-quality animal skins and hides, fresh meat and fish,
              supporting farmers, communities and the food value chain.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 border-t border-white/10 pt-3">
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <ShoppingBag className="h-3.5 w-3.5 text-[#d4941c]" /> Animal Skins & Hides
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <Drumstick className="h-3.5 w-3.5 text-[#d4941c]" /> Meat
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <Fish className="h-3.5 w-3.5 text-[#d4941c]" /> Fish
              </span>
            </div>
          </div>
        </div>

        {/* Sector 3: Real Estate */}
        <div className="border-b border-white/10">
          <div className="relative h-56 w-full">
            <Image
              src="/images/hero-realestate-villa.jpg"
              alt="HEEAF Real Estate"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 bg-[#0c0e12]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4941c]">
                <HomeIcon className="h-6 w-6 text-[#d4941c]" />
              </div>
              <div>
                <h2 className="text-lg font-black uppercase text-white">REAL ESTATE</h2>
                <p className="text-sm font-semibold text-[#d4941c]">
                  Property Development & Investment
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/70">
              We invest in prime properties, develop modern spaces and help our
              clients achieve long-term value and secure their future.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 border-t border-white/10 pt-3">
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <Building2 className="h-3.5 w-3.5 text-[#d4941c]" /> Residential
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <Landmark className="h-3.5 w-3.5 text-[#d4941c]" /> Commercial
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <LandPlot className="h-3.5 w-3.5 text-[#d4941c]" /> Land
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                <Handshake className="h-3.5 w-3.5 text-[#d4941c]" /> Investment
              </span>
            </div>
          </div>
        </div>

        {/* Core Values Mobile Strip */}
        <div className="grid grid-cols-2 gap-4 p-6 bg-[#07090c]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4941c]">
              <Handshake className="h-4 w-4 text-[#d4941c]" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Integrity</p>
              <p className="text-[10px] text-white/50">We do what is right</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4941c]">
              <Leaf className="h-4 w-4 text-[#d4941c]" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Sustainability</p>
              <p className="text-[10px] text-white/50">For future generations</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4941c]">
              <Users className="h-4 w-4 text-[#d4941c]" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Community</p>
              <p className="text-[10px] text-white/50">Stronger together</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4941c]">
              <ShieldCheck className="h-4 w-4 text-[#d4941c]" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Excellence</p>
              <p className="text-[10px] text-white/50">In everything we do</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}