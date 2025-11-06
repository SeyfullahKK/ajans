import { FAQJsonLd } from "next-seo";
import { Hero } from "@/components/hero";
import { MarqueeBrands } from "@/components/marquee-brands";
import { Section } from "@/components/section";
import { PricingCards } from "@/components/pricing-cards";
import { pricingTiers } from "@/data/pricing";
import { FeatureGrid } from "@/components/feature-grid";
import { CaseCarousel } from "@/components/case-carousel";
import { WhyConverta } from "@/components/why-converta";
import { FAQAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { faqItems } from "@/data/faq";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <div className="space-y-20 pb-24 pt-10 sm:space-y-24">
        <Hero />
        <MarqueeBrands />
        <Section
          eyebrow="Paketler"
          title="Büyüme hedeflerinize uygun üç çözüm"
          description="Kurulumdan dijital pazarlamaya, özel entegrasyonlara kadar tüm süreçleri tek ekip yönetir. Paketiniz seçildikten sonra 48 saat içinde kickoff toplantısı yapılır."
          tone="muted"
        >
          <PricingCards tiers={pricingTiers} />
        </Section>
        <Section
          eyebrow="Hizmet Bileşenleri"
          title="Yüksek etkili hizmet kartlarımız"
          description="E-ticaretinizi kurmak, büyütmek ve ölçümlemek için hazırladığımız hizmet bileşenlerinden dilediğinizi seçin."
          tone="default"
        >
          <FeatureGrid />
        </Section>
        <Section
          eyebrow="Sonuçlar"
          title="Ölçümlenebilir büyüme hikayeleri"
          description="Performans odaklı yaklaşımımızla dönüşüm oranlarından iade yönetimine kadar somut sonuçlar elde ediyoruz."
          tone="default"
        >
          <CaseCarousel />
        </Section>
        <Section
          eyebrow="Neden Converta?"
          title="Tek ekip, uçtan uca e-ticaret büyümesi"
          description="Teknoloji, pazarlama ve operasyonu hibrit bir ekipte buluşturur; tamamen ölçülebilir sonuçlar sunarız."
          tone="muted"
        >
          <WhyConverta />
        </Section>
        <Section
          eyebrow="SSS"
          title="En sık sorulan sorular"
          description="Kurulum süreleri, reklam yönetimi, entegrasyonlar ve eğitim süreçlerine dair tüm merak edilenler."
          tone="default"
        >
          <FAQAccordion />
        </Section>
        <CtaBand />
      </div>
      <FAQJsonLd
        questions={faqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />
    </>
  );
}
