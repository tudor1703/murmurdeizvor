import { cn } from "@/lib/cn";

export default function GoldDivider({
  className,
  withDot = true,
}: {
  className?: string;
  withDot?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 text-gold",
        className,
      )}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70" />
      {withDot && <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />}
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}
