"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ContactDialogButton } from "@/components/contact/contact-dialog";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { MOTION_EASE } from "@/lib/motion";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15 * index,
      ease: MOTION_EASE,
    },
  }),
};

export function Hero() {
  return (
    <section className="container-xl relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-background via-card/70 to-background/70 px-6 py-16 shadow-soft-strong sm:px-10 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 mix-blend-soft-light [background:radial-gradient(circle_at_top_left,_rgba(255,106,0,0.25),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(124,77,255,0.22),transparent_60%)]" />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={heroVariants}
          >
            Yeni Nesil E-Ticaret Büyümesi
          </motion.span>
          <motion.h1
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={heroVariants}
          >
            E-ticaretinizi yeni nesil teknolojiyle büyütün.
          </motion.h1>
          <motion.p
            className="max-w-xl text-lg text-muted-foreground"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={heroVariants}
          >
            Converta; kurulum, pazarlama ve operasyonu tek çatı altında
            birleştirir. Mağazanızı hızlıca kurar, reklam performansınızı
            optimize eder, operasyonel yükü hafifletir.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={heroVariants}
          >
            <ContactDialogButton
              size="lg"
              className="shadow-soft-strong"
              analyticsEvent="cta_click"
              source="hero"
            />
            <Button
              variant="outline"
              size="lg"
              asChild
              onClick={() => trackEvent("pricing_view", { source: "hero" })}
              className="border-primary/30 bg-transparent text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/paketler">Paketleri Gör</Link>
            </Button>
          </motion.div>
          <motion.div
            className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={heroVariants}
          >
            <div className="rounded-2xl border border-border/70 bg-card/70 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                Tüm süreçler tek ekipte
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                Kurulumdan büyümeye uçtan uca yönetim
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/70 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                Operasyon + teknoloji
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                Hızlı entegrasyon, ölçümlenebilir sonuç
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="relative flex h-full w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: MOTION_EASE,
          }}
        >
          <div className="relative aspect-square w-full max-w-[420px] rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent p-6 shadow-[0_35px_90px_-45px_rgba(255,106,0,0.6)]">
            <div className="absolute inset-4 rounded-[2rem] border border-border/60 bg-card/80 backdrop-blur-2xl" />
            <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-[2.5rem] border border-dashed border-primary/30" />
            <div className="relative flex h-full flex-col justify-between rounded-[2rem] bg-gradient-to-br from-background/95 via-card/90 to-background/60 p-6">
              <div className="space-y-3">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Growth Ops
                </span>
                <p className="text-balance text-lg font-semibold text-foreground">
                  Kurulum + Pazarlama + Operasyon + Entegrasyon = Converta
                </p>
              </div>
              <div className="grid gap-3 text-sm text-muted-foreground">
                <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary">
                    SLA
                  </p>
                  <p className="mt-1 text-base font-semibold text-foreground">
                    4 saat içinde yanıt garantisi
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary">
                    Data Layer
                  </p>
                  <p className="mt-1 text-base font-semibold text-foreground">
                    GA4 + Ads + CRM tam entegre
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/hero-grid.svg"
            alt=""
            width={500}
            height={500}
            className="pointer-events-none absolute inset-0 -z-10 size-full opacity-30"
          />
        </motion.div>
      </div>
    </section>
  );
}
