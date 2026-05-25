"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageCard from "@/components/ui/ImageCard";
import { GALLERY_IMAGES } from "@/lib/constants";

const CATEGORIES = ["Toate", "Interior", "Exterior"] as const;
type Category = (typeof CATEGORIES)[number];

export default function Gallery() {
  const [active, setActive] = useState<Category>("Toate");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      active === "Toate"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((g) => g.category === active),
    [active],
  );

  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? null : (i - 1 + items.length) % items.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, items.length]);

  return (
    <section
      id="galerie"
      className="relative scroll-mt-24 bg-charcoal-100 py-28 sm:py-36 md:py-44"
    >
      <Container>
        <SectionHeader
          eyebrow="Galerie"
          title="Imagini din interior, bucătărie și evenimente"
          description="O selecție atent aleasă, care transmite atmosfera locului."
        />

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-widest transition-all duration-300 ${
                active === c
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-gold/20 text-beige/70 hover:border-gold/40 hover:text-ivory"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry-ish grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {items.map((img, i) => (
            <ImageCard
              key={img.src + i}
              src={img.src}
              alt={img.alt}
              caption={img.category}
              onClick={() => setOpenIndex(i)}
              className={
                i % 5 === 0 ? "md:row-span-2 md:col-span-1" : undefined
              }
            />
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {openIndex !== null && items[openIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/95 p-4 sm:p-8"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(null);
              }}
              className="absolute right-5 top-5 rounded-full border border-gold/30 p-2.5 text-ivory transition-colors hover:border-gold hover:text-gold"
              aria-label="Închide"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(
                  (i) => (i! - 1 + items.length) % items.length,
                );
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/30 p-2.5 text-ivory transition-colors hover:border-gold hover:text-gold sm:left-5"
              aria-label="Imagine anterioară"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i! + 1) % items.length);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/30 p-2.5 text-ivory transition-colors hover:border-gold hover:text-gold sm:right-5"
              aria-label="Imagine următoare"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>

            <motion.div
              key={items[openIndex].src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={items[openIndex].src}
                alt={items[openIndex].alt}
                fill
                sizes="100vw"
                className="rounded-2xl object-contain"
              />
              <p className="mt-4 text-center text-[11px] uppercase tracking-widest text-gold/80">
                {items[openIndex].category}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
