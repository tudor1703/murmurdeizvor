"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* Cinematic background image — replace with /public/images/hero.jpg */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/murmureni.jpeg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="absolute inset-0 bg-soft-noise" />
        <div className="absolute inset-0 bg-hero-vignette" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 pt-32 pb-24 text-center sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] uppercase tracking-[0.4em] text-gold/85"
        >
          Drăsliceni · Moldova
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 flex flex-col items-center gap-6"
        >
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48">
            <Image
              src="/images/IMG_4680.jpeg"
              alt="Murmur"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-24 w-80 sm:w-[36rem] md:w-[44rem]">
  <Image
    src="/images/murmurTextLogo.png"
    alt="de Izvor"
    fill
    className="object-contain"
  />
</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-9"
        >
          <GoldDivider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="mt-7 font-serif text-xl italic text-beige sm:text-2xl"
        >
          Rafinament în mijlocul naturii
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9 }}
          className="mx-auto mt-6 max-w-xl text-balance text-[15px] leading-relaxed text-beige/85 sm:text-base"
        >
          Un spațiu elegant pentru experiențe culinare, seri memorabile și
          evenimente speciale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <ButtonLink href="#contacte" size="lg" variant="primary">
            Contactează-ne
          </ButtonLink>
          <ButtonLink href="#galerie" size="lg" variant="secondary">
            Vezi galeria
          </ButtonLink>
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-beige/60">
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
