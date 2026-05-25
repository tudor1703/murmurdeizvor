"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewCard({
  name,
  text,
  rating,
  context,
  index = 0,
}: {
  name: string;
  text: string;
  rating: number;
  context?: string;
  index?: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-full flex-col gap-5 rounded-2xl border border-gold/10 bg-ebony/60 p-7"
    >
      <div className="flex items-center gap-1 text-gold" aria-label={`${rating} stele din 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            strokeWidth={1.5}
            className={i < rating ? "fill-gold text-gold" : "text-gold/30"}
          />
        ))}
      </div>
      <blockquote className="font-serif text-[19px] leading-relaxed text-ivory/95">
        “{text}”
      </blockquote>
      <figcaption className="mt-auto">
        <div className="text-sm font-medium text-ivory">{name}</div>
        {context && (
          <div className="text-xs uppercase tracking-widest text-gold/70 mt-1">
            {context}
          </div>
        )}
      </figcaption>
    </motion.figure>
  );
}
