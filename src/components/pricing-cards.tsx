"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactDialogButton } from "@/components/contact/contact-dialog";
import type { PricingTier } from "@/data/pricing";
import { trackEvent } from "@/lib/analytics";
import { MOTION_EASE } from "@/lib/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: MOTION_EASE,
    },
  }),
};

type PricingCardsProps = {
  tiers: PricingTier[];
};

export function PricingCards({ tiers }: PricingCardsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier, index) => (
        <motion.div
          key={tier.name}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={cardVariants}
        >
          <Card
            className={`relative h-full overflow-hidden rounded-[2rem] border border-border/60 bg-card/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft ${tier.popular ? "border-primary/40 bg-gradient-to-b from-primary/10 via-card/70 to-background/60 shadow-soft-strong" : ""}`}
          >
            {tier.popular && (
              <Badge className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground shadow-soft">
                <Sparkles className="size-3" />
                Önerilen
              </Badge>
            )}
            <CardHeader className="space-y-3 p-0">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  {tier.tagline}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {tier.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{tier.description}</p>
              <p className="text-lg font-semibold text-foreground">
                {tier.priceHint}
              </p>
            </CardHeader>
            <CardContent className="mt-6 space-y-3 p-0">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-8 p-0">
              <ContactDialogButton
                className={tier.popular ? "w-full shadow-soft" : "w-full"}
                size="lg"
                label={tier.cta}
                analyticsEvent="pricing_cta_click"
                variant={
                  tier.popular
                    ? "default"
                    : tier.name === "Başlangıç"
                      ? "secondary"
                      : "outline"
                }
                onClick={() =>
                  trackEvent("pricing_card_interaction", {
                    tier: tier.name,
                  })
                }
                source={`pricing-${tier.name.toLowerCase()}`}
              />
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
