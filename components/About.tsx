"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import GoldDivider from "@/components/ui/GoldDivider";
import { Leaf, Sparkles, UtensilsCrossed } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Bucătărie rafinată",
    text: "Preparate atent gândite, cu accent pe ingrediente locale și sezoniere.",
  },
  {
    icon: Sparkles,
    title: "Atmosferă elegantă",
    text: "Lemn natural, lumină caldă și detalii care creează o experiență memorabilă.",
  },
  {
    icon: Leaf,
    title: "Locație în natură",
    text: "Ferestre panoramice și un cadru liniștit, departe de agitația cotidianului.",
  },
];

export default function About() {
  return (
    <section
      id="despre"
      className="relative scroll-mt-24 py-28 sm:py-36 md:py-44"
    >
      <Container>
        <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 md:order-1"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl luxury-border">
              <Image
                src="images/IMG_4705.jpeg"
                alt="Interior elegant Murmur de Izvor"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-8 -right-4 hidden w-56 rounded-2xl border border-gold/20 bg-ebony/95 p-5 shadow-soft backdrop-blur-sm sm:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-gold">
                De vizitat
              </p>
              <p className="mt-2 font-serif text-base text-ivory">
                Drăsliceni — un colț liniștit, în mijlocul naturii din Moldova.
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[11px] uppercase tracking-[0.4em] text-gold/85"
            >
              Despre noi
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-5 font-serif text-balance text-3xl leading-[1.15] text-ivory sm:text-4xl md:text-5xl"
            >
              O destinație creată pentru momentele care merită trăite pe îndelete.
            </motion.h2>
            <GoldDivider className="mt-6 justify-start" />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-pretty text-[15.5px] leading-relaxed text-beige/85 sm:text-base"
            >
              Creat pentru momente care merită trăite pe îndelete,{" "}
              <span className="text-ivory">Murmur de Izvor</span> îmbină liniștea
              naturii cu eleganța unui spațiu contemporan. Lemnul, lumina caldă
              și priveliștea panoramică creează o atmosferă intimă, potrivită
              pentru evenimente memorabile.
            </motion.p>

            {/* Feature cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.7 }}
                    className="rounded-xl border border-gold/10 bg-ebony/50 p-5 transition-colors hover:border-gold/30"
                  >
                    <Icon size={20} strokeWidth={1.4} className="text-gold" />
                    <h3 className="mt-4 font-serif text-lg text-ivory">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-beige/75">
                      {f.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
