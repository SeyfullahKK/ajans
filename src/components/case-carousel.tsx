"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/data/features";
import { MOTION_EASE } from "@/lib/motion";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.5,
      ease: MOTION_EASE,
    },
  }),
};

export function CaseCarousel() {
  return (
    <div className="relative">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-[2rem] border border-border/60 bg-card/70 p-4 pr-16">
        {caseStudies.map((item, index) => (
          <motion.div
            key={item.metric}
            className="min-w-[240px] snap-start rounded-[1.75rem] border border-border/60 bg-background/80 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.6)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={index}
            variants={itemVariants}
          >
            <p className="text-3xl font-semibold tracking-tight text-primary">
              {item.metric}
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.4em] text-muted-foreground">
              {item.description}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{item.result}</p>
          </motion.div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent" />
    </div>
  );
}
