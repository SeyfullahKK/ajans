export type PricingTier = {
  name: string;
  tagline: string;
  priceHint: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Başlangıç",
    tagline: "E-Ticaret Kurulumu",
    priceHint: "Talebe göre",
    description: "Hızlı başlangıç için mağazanızı eksiksiz kuruyoruz.",
    features: [
      "Mağaza açılışı ve tema kurulumu",
      "Ödeme & kargo entegrasyonları",
      "20 ürün girişi",
      "Temel SEO ayarları",
      "1 saat eğitim",
    ],
    cta: "Bu Paketle Başla",
  },
  {
    name: "Büyüme",
    tagline: "Kurulum + Dijital Pazarlama",
    priceHint: "Aylık yönetim",
    description: "Satış odaklı pazarlama ile sürdürülebilir büyüme.",
    features: [
      "Başlangıç paketinin tamamı",
      "Meta/Google Ads kurulumu",
      "Aylık 2 kampanya yönetimi",
      "Temel SEO ve içerik planı",
      "Aylık raporlama",
    ],
    cta: "Teklif Al",
    popular: true,
  },
  {
    name: "Özel",
    tagline: "Kurumsal Çözüm",
    priceHint: "Proje bazlı",
    description: "İşinize özel entegrasyon ve premium destek.",
    features: [
      "Strateji atölyesi",
      "Özel entegrasyonlar (ERP/Logo)",
      "A/B test ve CRO",
      "Gelişmiş SEO",
      "Öncelikli destek (SLA)",
    ],
    cta: "Görüşme Planla",
  },
];
