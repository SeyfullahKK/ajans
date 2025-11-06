import { Lightbulb, ShieldCheck, Workflow } from "lucide-react";
import { whyConverta } from "@/data/features";

const icons = [Workflow, ShieldCheck, Lightbulb];

export function WhyConverta() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {whyConverta.map((item, index) => {
        const Icon = icons[index] ?? Lightbulb;
        return (
          <div
            key={item.title}
            className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-soft"
          >
            <Icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/12" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
