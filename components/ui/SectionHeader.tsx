"use client";

import { motion } from "framer-motion";
import GoldDivider from "./GoldDivider";
import { cn } from "@/lib/cn";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-5 text-[11px] font-sans uppercase tracking-widest text-gold/80">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-balance text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
        <span className="text-ivory">{title}</span>
      </h2>
      {align === "center" && <GoldDivider className="mt-6" />}
      {description && (
        <p
          className={cn(
            "mt-6 max-w-xl text-pretty text-base text-beige/85 sm:text-[17px] leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </motion.header>
  );
}
