import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "muted" | "contrast";
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
  actions?: ReactNode;
};

const toneStyles: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-transparent",
  muted:
    "bg-card/80 border border-border/60 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.5)]",
  contrast:
    "bg-gradient-to-br from-primary/10 via-background/70 to-secondary/10 border border-primary/20 shadow-soft",
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
  containerClassName,
  actions,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden rounded-[2.25rem]",
        toneStyles[tone],
        className,
      )}
    >
      <div
        className={cn(
          "container-xl flex flex-col gap-10 py-16 sm:py-20",
          containerClassName,
        )}
      >
        {(eyebrow || title || description || actions) && (
          <div
            className={cn(
              "flex flex-col gap-4",
              align === "center" && "items-center text-center",
            )}
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-balance text-base text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
            {actions && <div className="flex flex-wrap items-center gap-3">{actions}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
