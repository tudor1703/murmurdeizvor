"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans tracking-wider uppercase text-xs sm:text-[13px] transition-all duration-300 will-change-transform select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-200 hover:shadow-glow active:translate-y-px",
  secondary:
    "border border-gold/60 text-gold hover:border-gold hover:bg-gold/10 active:translate-y-px",
  ghost: "text-ivory/80 hover:text-gold",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-[13px] sm:text-sm",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...rest }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  ),
);
Button.displayName = "Button";

export function ButtonLink({
  href,
  external,
  className,
  variant = "primary",
  size = "md",
  children,
}: LinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}

export default Button;
