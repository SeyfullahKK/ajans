import { Metadata } from "next";
import { ProductJsonLd } from "next-seo";
import { Section } from "@/components/section";
import { pricingTiers } from "@/data/pricing";
import { FAQAccordion } from "@/components/faq-accordion";
import { ContactDialogButton } from "@/components/contact/contact-dialog";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const metadata: Metadata = {
  title: "Paketler – Converta",
  description:
    "E-ticaret kurulumundan dijital pazarlamaya ve özel entegrasyonlara kadar Converta paketleriyle büyümeye başlayın.",
};

export const revalidate = 3600;

const comparisonRows = [
  {
    label: "Kurulum süresi",
    values: ["7–14 gün", "14–21 gün", "Proje bazlı"],
  },
  {
    label: "Reklam yönetimi",
    values: ["-", "Meta & Google Ads", "Çok kanallı özel strateji"],
  },
  {
    label: "SEO & içerik",
    values: ["Temel SEO ayarları", "Temel SEO + içerik planı", "Gelişmiş SEO + içerik üretimi"],
  },
  {
    label: "Ürün girişi",
    values: ["20 ürün", "50 ürün", "Sınırsız + feed yönetimi"],
  },
  {
    label: "Raporlama",
    values: ["Aylık özet", "Aylık detaylı rapor", "Özel dashboard + SLA"],
  },
  {
    label: "Entegrasyonlar",
    values: ["Ödeme & kargo", "Pazaryeri & CRM", "Logo/ERP + özel geliştirme"],
  },
  {
    label: "Destek",
    values: ["1 saat eğitim", "Haftalık check-in", "Öncelikli destek (SLA)"],
  },
];

const technologyStack = [
  "ikas",
  "İdeasoft",
  "Shopify",
  "T-Soft",
  "Logo ERP",
  "Google Ads",
  "Meta Ads",
  "GA4",
  "BigQuery",
  "Segment",
];

export default function PackagesPage() {
  return (
    <div className="space-y-20 pb-24 pt-10 sm:space-y-24">
      <ProductJsonLd
        type="ProductGroup"
        productGroupID="converta-paketler"
        name="Converta Paketleri"
        description="E-ticaret kurulumu, dijital pazarlama ve entegrasyon paketleri."
        brand={{ name: "Converta" }}
        hasVariant={pricingTiers.map((tier) => {
          const slug = slugify(tier.name);
          return {
            "@type": "Product",
            name: `${tier.name} – ${tier.tagline}`,
            description: tier.description,
            url: `${siteConfig.url}/paketler#${slug}`,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "TRY",
              availability: "https://schema.org/InStock",
            },
          };
        })}
      />
      <Section
        eyebrow="Paketler"
        title="Her büyüme aşamasına uygun plan"
        description="Başlangıç, Büyüme ve Özel paketlerimizle mağazanızın kurulumunu, pazarlama stratejisini ve entegrasyonlarını tek ekip yönetir."
        tone="muted"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => {
            const slug = slugify(tier.name);
            return (
            <div
              key={tier.name}
              id={slug}
              className="flex h-full flex-col gap-4 rounded-[2rem] border border-border/60 bg-card/80 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.6)]"
            >
              {tier.popular && (
                <Badge className="w-fit rounded-full bg-primary/90 text-primary-foreground">
                  En çok tercih edilen
                </Badge>
              )}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  {tier.tagline}
                </p>
                <h2 className="text-2xl font-semibold text-foreground">
                  {tier.name}
                </h2>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
                <p className="text-lg font-semibold text-foreground">
                  {tier.priceHint}
                </p>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ContactDialogButton
                className="mt-auto w-full"
                size="lg"
                label={tier.cta}
                source={`packages-${slug}`}
              />
            </div>
          );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Karşılaştırma"
        title="Paketlerin kapsamını detaylı karşılaştırın"
        tone="default"
      >
        <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card/80">
          <div className="grid grid-cols-[minmax(200px,0.8fr)_repeat(3,1fr)] text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground">
            <div className="border-b border-border/70 px-6 py-4">Özellik</div>
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="border-b border-border/70 px-6 py-4">
                {tier.name}
              </div>
            ))}
          </div>
          {comparisonRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[minmax(200px,0.8fr)_repeat(3,1fr)] border-t border-border/50 text-sm"
            >
              <div className="px-6 py-4 font-medium text-foreground">{row.label}</div>
              {row.values.map((value, index) => (
                <div
                  key={`${row.label}-${index}`}
                  className="border-l border-border/50 px-6 py-4 text-muted-foreground"
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Kullandığımız Teknolojiler"
        title="Teknoloji stack’i ve çözüm ortaklarımız"
        description="En güncel e-ticaret platformları, reklam araçları ve veri altyapıları ile çalışıyoruz."
        align="center"
        tone="default"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {technologyStack.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="rounded-full border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
            >
              {item}
            </Badge>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Sık Sorulanlar"
        title="Paketlerle ilgili sorular"
        description="Kurulum takvimi, reklam bütçesi ve entegrasyon kapsamı hakkında sık gelen soruların yanıtları."
        tone="muted"
      >
        <FAQAccordion />
      </Section>

      <Section
        eyebrow="Hazır mısınız?"
        title="Doğru paketi birlikte seçelim"
        description="İhtiyaçlarınızı dinleyip hangi paketin daha uygun olduğunu birlikte belirleyelim. 30 dakika içinde dönüş yapıyoruz."
        align="center"
        tone="default"
      >
        <ContactDialogButton
          size="lg"
          className="shadow-soft"
          label="Hemen İletişime Geç"
          source="packages-page"
        />
      </Section>
    </div>
  );
}
