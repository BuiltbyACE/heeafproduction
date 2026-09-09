import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ContactMap() {
  return (
    <section className="relative">
      <div className="relative h-[400px] w-full md:h-[480px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.308372392698!2d36.8065!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c05b0b1b1%3A0x4e8b8b8b8b8b8b8b!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HEEAF Investment Limited — Nairobi, Kenya location"
          className="absolute inset-0"
        />
      </div>

      {/* Overlay card — bottom-left on desktop, above map on mobile */}
      <Reveal variant="scale" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-4 pb-4 sm:px-6 sm:pb-6 md:absolute md:inset-x-auto md:left-6 md:bottom-6 md:px-0 md:pb-0">
        <div className="pointer-events-auto mx-auto max-w-[380px] rounded-lg bg-primary-dark p-6 shadow-2xl shadow-black/30 md:mx-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold">
              <MapPin className="h-5 w-5 text-white" strokeWidth={1.8} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
              OUR LOCATION
            </span>
          </div>
          <h3 className="mt-3 font-[family-name:var(--font-heading)] text-[18px] font-bold text-white">
            Nairobi, Kenya
          </h3>
          <p className="mt-2 text-[12px] leading-relaxed text-white/65">
            We are strategically located and well-positioned to serve clients
            across Africa and beyond.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
