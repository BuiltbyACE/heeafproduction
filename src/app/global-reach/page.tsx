"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import GoldFrame from "@/components/GoldFrame";
import ContinentIcon, { type Continent } from "@/components/ContinentIcon";
import {
  ArrowRight,
  MapPin,
  HeartHandshake,
  Building2,
  Network,
  ShieldCheck,
  BadgeCheck,
  Truck,
  Users,
  Leaf,
  List,
} from "lucide-react";

const regionColumns: {
  name: string;
  continent: Continent;
  countries: string[];
}[] = [
  {
    name: "AFRICA",
    continent: "africa",
    countries: [
      "Kenya",
      "Tanzania",
      "Uganda",
      "Somalia",
      "Malawi",
      "Sudan",
      "South Sudan",
      "Nigeria",
      "Benin Republic",
      "Niger Republic",
      "Togo",
      "Ghana",
    ],
  },
  {
    name: "AMERICAS",
    continent: "americas",
    countries: ["Brazil", "United States of America", "Venezuela"],
  },
  { name: "EUROPE", continent: "europe", countries: ["Italy"] },
  { name: "ASIA", continent: "asia", countries: ["China"] },
];

const presenceStats = [
  {
    icon: MapPin,
    label: "PHYSICAL PRESENCE",
    value: "KENYA & NIGERIA",
  },
  {
    icon: HeartHandshake,
    label: "SERVING CLIENTS IN",
    value: "AFRICA & BEYOND",
  },
  {
    icon: Building2,
    label: "FOCUSED ON",
    value: "3 COMMODITY SECTORS",
  },
];

const pillars = [
  {
    icon: Network,
    title: "Global Network",
    text: "Connect clients and partners across continents",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Integrity",
    text: "Relationships built on transparency and reliability",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    text: "Premium quality across products and services",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    text: "Efficient logistics, safe and on-time",
  },
  {
    icon: Users,
    title: "Customer Focused",
    text: "Clients and partners at the heart of everything",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    text: "Supporting sustainable solutions for a better tomorrow",
  },
];

const mapNodes = [
  { x: 22, y: 30, label: "Nairobi" },
  { x: 55, y: 38, label: "Lagos" },
  { x: 72, y: 24, label: "Rome" },
  { x: 82, y: 45, label: "Beijing" },
];

const mapConnections: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
];

function nodePath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - 10;
  return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-darker bg-grain">
      <div className="absolute inset-0">
        <Image
          src="/images/port-sunset.jpg"
          alt="Shipping port at sunset with cargo containers and cranes"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-darker/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-darker via-primary-darker/70 to-primary-darker/30" />
      </div>

      <Blob tone="gold" size={480} className="absolute -bottom-32 -right-24 z-[1]" opacity={0.2} />

      <div className="relative z-10 mx-auto grid min-h-[420px] max-w-[1400px] items-center px-6 py-20 md:min-h-[520px]">
        <div className="max-w-[640px]">
          <Reveal>
            <h1 className="font-[family-name:var(--font-heading)] text-[40px] leading-[1.05] font-bold text-white md:text-[64px]">
              GLOBAL <span className="text-gold">REACH</span>
            </h1>
            <p className="mt-4 font-[family-name:var(--font-heading)] text-[20px] font-semibold text-white md:text-[24px]">
              Connecting Continents. <span className="text-gold">Delivering Excellence.</span>
            </p>
            <div className="mt-4 h-[3px] w-16 bg-gold" />
            <p className="mt-6 max-w-[520px] text-[14px] leading-relaxed text-white/80">
              HEEAF Investment Limited works with clients and partners across
              Africa and beyond.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <Blob tone="agri" size={420} className="absolute -bottom-24 -left-24 z-0" opacity={0.14} />
      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <Reveal variant="left">
          <GoldFrame
            src="/images/containers-trucks.jpg"
            alt="Shipping containers and trucks at a logistics port yard"
            width={880}
            height={620}
            fill={false}
          />
        </Reveal>

        <Reveal delay={120} variant="right">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            OUR GLOBAL PRESENCE
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold text-text-dark leading-snug">
            Building Connections Across Difference and{" "}
            <span className="text-gold">Beyond Borders</span>
          </h2>
          <div className="mt-4 h-[3px] w-16 bg-gold" />
          <p className="mt-5 max-w-[560px] text-[14px] leading-relaxed text-text-dark/75">
            HEEAF Investment Limited is physically located in Kenya and Nigeria,
            serving clients and partners across Africa and beyond. Our presence
            on the ground enables us to deliver quality solutions that bridge
            markets and move value across continents.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {presenceStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} variant="scale">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-gold/10">
                    <stat.icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-[13px] font-bold text-text-dark">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ReachAcrossWorld() {
  return (
    <section className="relative overflow-hidden bg-primary-darker bg-grain">
      <Blob tone="metal" size={460} className="absolute -top-32 -right-24 z-0" opacity={0.18} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="relative mx-auto w-full max-w-[520px]">
              <Image
                src="/images/world-map.svg"
                alt="HEEAF global reach network across regions"
                width={520}
                height={260}
                loading="lazy"
                className="h-auto w-full opacity-90"
              />
              <svg
                viewBox="0 0 100 60"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {mapConnections.map(([a, b], i) => (
                  <motion.path
                    key={`${a}-${b}`}
                    d={nodePath(mapNodes[a], mapNodes[b])}
                    fill="none"
                    stroke="#C8901E"
                    strokeWidth={0.4}
                    strokeDasharray="2 1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: i * 0.2, ease: "easeInOut" }}
                  />
                ))}
              </svg>
              {mapNodes.map((node, i) => (
                <span
                  key={node.label}
                  className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_12px_rgba(200,142,30,0.9)]"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <span
                    className="absolute inset-0 rounded-full bg-gold animate-pulse-dot"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} variant="right">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
              GLOBAL NETWORK
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold text-white leading-snug">
              OUR REACH ACROSS THE{" "}
              <span className="text-gold">WORLD</span>
            </h2>
            <div className="mt-4 h-[3px] w-16 bg-gold" />
            <p className="mt-5 max-w-[560px] text-[14px] leading-relaxed text-white/70">
              HEEAF Investment Limited operates across multiple regions, working
              hand in hand with trusted clients and partners to connect demand
              with supply, and opportunity with delivery — from Africa to the
              Americas, Europe and Asia.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-16">
          <div className="overflow-hidden rounded-2xl bg-cream shadow-xl">
            <div className="grid grid-cols-1 divide-y divide-primary-dark/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 lg:divide-x sm:divide-x-0">
              {regionColumns.map((region, i) => (
                <Reveal key={region.name} delay={i * 80} variant="scale" className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-gold/10">
                      <ContinentIcon continent={region.continent} className="h-7 w-7" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-[18px] font-bold text-text-dark">
                      {region.name}
                    </h3>
                  </div>
                  <ul
                    className={`mt-6 grid gap-x-6 gap-y-2.5 ${
                      region.name === "AFRICA"
                        ? "grid-cols-1 min-[380px]:grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {region.countries.map((c) => (
                      <li
                        key={c}
                        className="flex items-center gap-2 text-[12.5px] text-text-dark/75"
                      >
                        <List className="h-3 w-3 shrink-0 text-gold" strokeWidth={2.5} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyPartner() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <Reveal className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            WHY HEEAF
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold text-text-dark">
            WHY PARTNER WITH <span className="text-gold">HEEAF?</span>
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-gold" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80} variant="scale">
              <div className="group flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-gold/10 transition-transform duration-300 group-hover:scale-110">
                  <pillar.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-[13px] font-bold text-text-dark uppercase tracking-wider">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-[200px] text-[12px] leading-relaxed text-text-dark/70">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-primary-darker">
      <div className="absolute inset-0">
        <Image
          src="/images/handshake.jpg"
          alt="Business handshake between partners"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-darker/70" />
        <div className="absolute inset-0 bg-opacity-20 opacity-20 bg-gold" />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
        <Reveal variant="left">
          <h2 className="max-w-[560px] font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold text-white leading-snug">
            Ready to grow together <span className="text-gold">across borders?</span>
          </h2>
          <p className="mt-3 max-w-[560px] text-[14px] leading-relaxed text-white/75">
            Let&apos;s build opportunities and deliver lasting value.
          </p>
        </Reveal>
        <Reveal delay={120} variant="right">
          <Link
            href="/contact"
            className="btn-shine inline-flex h-[48px] items-center gap-2 rounded bg-gold px-8 text-[12px] font-bold text-white uppercase tracking-wider transition-all hover:bg-gold-light hover:scale-[1.03]"
          >
            CONTACT OUR TEAM
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function GlobalReachPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <GlobalPresence />
        <ReachAcrossWorld />
        <WhyPartner />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
