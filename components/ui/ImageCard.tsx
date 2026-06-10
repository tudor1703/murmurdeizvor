"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export default function ImageCard({
  src,
  alt,
  className,
  onClick,
  priority = false,
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
  caption?: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative block w-full h-full overflow-hidden rounded-2xl bg-charcoal-50 luxury-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60",
        className,
      )}
    >
      <div className="relative aspect-[4/5] h-full w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-90" />
      </div>
      {caption && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5">
          <p className="text-[11px] uppercase tracking-widest text-gold/90">
            {caption}
          </p>
        </div>
      )}
    </motion.button>
  );
}