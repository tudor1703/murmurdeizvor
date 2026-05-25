"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b border-gold/10 py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/images/murmurLogo.png"
                alt="Logo Symbol"
                width={70}
                height={70}
                className="object-contain"
              />

              <Image
                src="/images/murmurTextLogo.png"
                alt="Logo Text"
                width={220}
                height={60}
                className="object-contain"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="group relative text-[13px] uppercase tracking-widest text-ivory/80 transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contacte"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs uppercase tracking-widest text-charcoal transition-all duration-300 hover:bg-gold-200 hover:shadow-glow"
            >
              Contactează-ne
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Deschide meniul"
            className="rounded-full border border-gold/30 p-2.5 text-ivory transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-charcoal/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 pt-5 sm:px-8">
              <span className="font-serif text-xl">
                <span className="gold-gradient-text">Murmur</span>
                <span className="text-ivory/85"> de Izvor</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Închide meniul"
                className="rounded-full border border-gold/30 p-2.5 text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="mt-12 flex flex-1 flex-col items-center justify-center gap-7 text-center">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + idx * 0.06, duration: 0.5 }}
                  className="font-serif text-3xl text-ivory transition-colors hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-6 pb-10">
              <a
                href="#contacte"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-gold py-4 text-center text-xs uppercase tracking-widest text-charcoal"
              >
                Solicită rezervare
              </a>
              <p className="mt-5 text-center text-xs text-beige/70">
                {SITE.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky mobile CTA when not in menu */}
      {!open && (
        <a
          href="#contacte"
          className={cn(
            "fixed bottom-5 right-5 z-40 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-xs uppercase tracking-widest text-charcoal shadow-glow transition-opacity duration-500 lg:hidden",
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          Rezervă
        </a>
      )}
    </>
  );
}
