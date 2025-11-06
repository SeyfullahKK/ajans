"use client";

import { trackEvent } from "@/lib/analytics";

const brands = [
  {
    name: "ikas",
    tagline: "Omnichannel platform",
    accent: "#FF6A00",
  },
  {
    name: "İdeasoft",
    tagline: "Türkiye lideri",
    accent: "#2563EB",
  },
  {
    name: "Shopify",
    tagline: "Global SaaS altyapı",
    accent: "#22C55E",
  },
  {
    name: "T-Soft",
    tagline: "Modüler çözüm",
    accent: "#7C3AED",
  },
  {
    name: "Logo",
    tagline: "ERP entegrasyonu",
    accent: "#EF4444",
  },
];

function BrandBadge({
  name,
  tagline,
  accent,
}: {
  name: string;
  tagline: string;
  accent: string;
}) {
  return (
    <div
      className="group/brand relative flex min-w-[200px] flex-col items-start justify-center gap-1 rounded-3xl border border-border/50 bg-card/80 px-5 py-4 text-left shadow-[0_25px_60px_-45px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
      style={{ ["--accent-color" as string]: accent }}
      onMouseEnter={() => trackEvent("brand_marquee_hover", { brand: name })}
    >
      <div className="flex items-center gap-2">
        <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-background/80 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 group-hover/brand:border-transparent group-hover/brand:bg-[color:var(--accent-color)] group-hover/brand:text-primary-foreground">
          {name[0]}
        </span>
        <span className="text-lg font-semibold tracking-tight text-muted-foreground transition-colors duration-300 group-hover/brand:text-foreground">
          {name}
        </span>
      </div>
      <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted-foreground transition-colors duration-300 group-hover/brand:text-primary">
        {tagline}
      </p>
      <div
        className="absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-300 group-hover/brand:opacity-100"
        style={{
          background: `linear-gradient(130deg, ${accent}1f, transparent 65%)`,
        }}
      />
    </div>
  );
}

export function MarqueeBrands() {
  return (
    <section className="container-xl mt-20 overflow-hidden rounded-[2.25rem] border border-border/60 bg-card/70 px-0 py-10 shadow-soft backdrop-blur-xl">
      <div className="flex flex-col items-center gap-4 px-6 text-center sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Güvenilir İş Ortakları
        </span>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Büyüttüğümüz e-ticaret altyapıları
        </h2>
      </div>
      <div className="mt-10 overflow-hidden">
        <div className="group relative flex gap-6">
          <div className="flex min-w-full shrink-0 gap-6 animate-[marquee] px-6 py-2 group-hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, index) => (
              <BrandBadge key={`${brand.name}-${index}`} {...brand} />
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background via-transparent to-background"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
