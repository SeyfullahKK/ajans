import type { ComponentType } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import type { Route } from "next";
import { serviceHighlights } from "@/data/features";
import { cn } from "@/lib/utils";

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {serviceHighlights.map((feature) => {
        const IconComponent = (Icons[
          feature.icon as keyof typeof Icons
        ] ?? Icons.Sparkles) as ComponentType<{ className?: string }>;
        const href = (feature.href ?? "/hizmetler") as Route;
        return (
          <Link
            key={feature.title}
            href={href}
            className={cn(
              "group relative flex h-full flex-col gap-4 overflow-hidden rounded-[1.75rem] border border-border/60 bg-card/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft",
            )}
          >
            <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              <IconComponent className="size-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary">
              Detayları keşfet
              <Icons.ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
