import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2 text-lg font-bold tracking-tight text-foreground",
        className,
      )}
      aria-label="Converta ana sayfa"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary/90 to-[#E25700] text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_rgba(255,106,0,0.6)] transition-transform duration-300 group-hover:-translate-y-0.5">
        C
      </span>
      <span className="text-balance text-lg font-semibold uppercase tracking-[0.2em] text-foreground transition-colors duration-200 group-hover:text-primary">
        Converta
      </span>
    </Link>
  );
}
