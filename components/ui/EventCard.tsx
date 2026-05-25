"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function EventCard({
  icon,
  title,
  description,
  index = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full flex-col gap-5 rounded-2xl border border-gold/10 bg-gradient-to-b from-ebony/80 to-charcoal/60 p-7 transition-all duration-500 hover:border-gold/40 hover:shadow-glow"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-500 group-hover:border-gold/70 group-hover:bg-gold/10">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-2xl text-ivory">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-beige/80">
          {description}
        </p>
      </div>
      <div className="mt-auto h-px w-12 bg-gradient-to-r from-gold/60 to-transparent transition-all duration-500 group-hover:w-20" />
    </motion.article>
  );
}
