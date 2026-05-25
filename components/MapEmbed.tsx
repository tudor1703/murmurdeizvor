"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function MapEmbed() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-ebony shadow-soft">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        <iframe
          src={SITE.mapEmbed}
          title="Locație Murmur de Izvor pe Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full grayscale-[30%] contrast-[0.95] saturate-[0.85] transition duration-700 group-hover:grayscale-0"
        />
        {/* Subtle dark frame for premium feel */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10" />
      </div>

      <div className="flex flex-col gap-4 border-t border-gold/10 bg-charcoal/85 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3 text-left">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
            <MapPin size={16} strokeWidth={1.5} />
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-gold/80">
              Adresă
            </p>
            <p className="mt-1 text-[14.5px] leading-snug text-ivory">
              {SITE.address}
            </p>
          </div>
        </div>
        <ButtonLink href={SITE.mapLink} external variant="secondary" size="md">
          Deschide în Google Maps
          <ExternalLink size={14} strokeWidth={1.5} />
        </ButtonLink>
      </div>
    </div>
  );
}
