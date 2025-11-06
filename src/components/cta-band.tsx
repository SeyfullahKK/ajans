"use client";

import { motion } from "framer-motion";
import { ContactDialogButton } from "@/components/contact/contact-dialog";
import { MOTION_EASE, MOTION_DURATION } from "@/lib/motion";

export function CtaBand() {
  return (
    <motion.div
      className="container-xl relative overflow-hidden rounded-[2.5rem] border border-primary/30 bg-gradient-to-br from-primary/15 via-card/80 to-secondary/15 px-8 py-12 text-center shadow-soft backdrop-blur-xl"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: MOTION_DURATION, ease: MOTION_EASE }}
    >
      <div className="absolute inset-x-10 top-6 flex justify-center">
        <div className="h-20 w-20 rounded-full border border-primary/40 bg-primary/20 blur-3xl" />
      </div>
      <div className="relative space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Ücretsiz Analiz
        </p>
        <h3 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          1 saatlik ücretsiz büyüme analizi alın
        </h3>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          Mevcut mağazanızın kurulumu, pazarlama ve operasyon süreçlerini
          inceleyerek hızlı kazanımları ve uzun vadeli yol haritasını ortaya çıkarıyoruz.
        </p>
        <div className="flex justify-center">
          <ContactDialogButton
            size="lg"
            className="shadow-soft-strong animate-[pulse-glow_3.4s_ease-in-out_infinite]"
            analyticsEvent="cta_band_click"
            label="Analiz Randevusu Al"
            source="cta-band"
          />
        </div>
      </div>
    </motion.div>
  );
}
