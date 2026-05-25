"use client";

import {
  Phone,
  Mail,
  MapPin,
  Car,
  Instagram,
  Facebook,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section
      id="contacte"
      className="relative scroll-mt-24 py-28 sm:py-36 md:py-44"
    >
      <Container>
        <SectionHeader
          eyebrow="Contacte"
          title="Hai să ne cunoaștem"
          description="Completați formularul, iar echipa noastră vă va contacta pentru detalii despre rezervări sau evenimente."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Form (wider) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact info */}
          <aside className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl border border-gold/15 bg-ebony/60 p-6 sm:p-7">
              <h3 className="font-serif text-2xl text-ivory">Detalii contact</h3>
              <ul className="mt-5 space-y-4 text-[14.5px]">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <MapPin size={15} strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-widest text-gold/80">
                      Adresă
                    </div>
                    <div className="mt-1 text-ivory/95">{SITE.address}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <Phone size={15} strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-widest text-gold/80">
                      Telefon
                    </div>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-ivory/95 transition-colors hover:text-gold"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <Mail size={15} strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-widest text-gold/80">
                      Email
                    </div>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 block text-ivory/95 transition-colors hover:text-gold"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <Car size={15} strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-widest text-gold/80">
                      Parcare
                    </div>
                    <div className="mt-1 text-ivory/95">Parcare disponibilă</div>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-3 border-t border-gold/10 pt-5">
                <span className="text-[10.5px] uppercase tracking-widest text-beige/60">
                  Urmăriți-ne
                </span>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-beige/70 transition-colors hover:text-gold"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                </a>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-beige/70 transition-colors hover:text-gold"
                >
                  <Facebook size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <MapEmbed />
          </aside>
        </div>
      </Container>
    </section>
  );
}
