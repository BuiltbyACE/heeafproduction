"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import Blob from "@/components/Blob";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Businesses", href: "/businesses" },
  { label: "Global Reach", href: "/global-reach" },
  { label: "Contact Us", href: "/contact" },
];

const businesses = [
  { label: "Energy", href: "/businesses/energy" },
  { label: "Agriculture", href: "/businesses/agriculture" },
  { label: "Real Estate", href: "/businesses/real-estate" },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="relative overflow-hidden bg-primary-dark bg-grain">
      <Blob tone="gold" size={420} className="absolute -top-24 -left-24 z-0" opacity={0.12} float={false} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex rounded-md bg-white p-3">
              <Image
                src="/images/logo-official.png"
                alt="HEEAF Investment Limited"
                width={170}
                height={72}
                className="h-[52px] w-auto object-contain"
              />
            </div>
            <p className="mt-5 text-[12px] leading-relaxed text-white/60">
              HEEAF Investment Limited is committed to delivering quality
              products and services with integrity, efficiency and excellence.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-gold">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-[12px] transition-colors ${
                        isActive ? "text-gold font-semibold" : "text-white/60 hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-gold">
              OUR BUSINESSES
            </h3>
            <ul className="flex flex-col gap-2.5">
              {businesses.map((biz) => (
                <li key={biz.label}>
                  <Link
                    href={biz.href}
                    className="flex items-center gap-2 text-[12px] text-white/60 transition-colors hover:text-gold"
                  >
                    <ArrowRight className="h-3 w-3 text-gold shrink-0" />
                    {biz.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wider text-gold">
              CONTACT US
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="text-[12px] text-white/60 leading-relaxed">
                  P.O Box 73447 - 00200 Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <a
                  href="mailto:heeafinvestmentltdk@gmail.com"
                  className="text-[12px] text-white/60 transition-colors hover:text-gold"
                >
                  heeafinvestmentltdk@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] text-white/60">
                    +254 726 653 542 (Kenya)
                  </span>
                  <span className="text-[12px] text-white/60">
                    +234 7030157949 (Nigeria)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gold">
        <div className="mx-auto max-w-[1400px] px-6 py-[10px] flex flex-col sm:flex-row items-center justify-between gap-1">
          <span className="text-[11px] font-semibold text-primary-dark tracking-wide">
            &copy; 2026 HEEAF INVESTMENT LIMITED. All Rights Reserved.
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary-dark">
            YOUR SATISFACTION IS OUR PRIDE
          </span>
        </div>
      </div>
    </footer>
  );
}
