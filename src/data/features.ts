export type Feature = {
  title: string;
  description: string;
  icon: string;
  href?: string;
};

export const serviceHighlights: Feature[] = [
  {
    title: "E-Ticaret Kurulumu",
    description:
      "Altyapı seçimi, tema uyarlaması ve mağaza kurulumunu haftalar yerine günlerle tamamlayın.",
    icon: "Store",
    href: "/hizmetler#kurulum",
  },
  {
    title: "Dijital Pazarlama",
    description:
      "Reklam kampanyalarınızı performans odaklı yöneterek sürekli satış akışı sağlayın.",
    icon: "TrendingUp",
    href: "/hizmetler#pazarlama",
  },
  {
    title: "Operasyon Hızlandırma",
    description:
      "Sipariş, stok ve müşteri süreçlerini otomasyonla hızlandırın; hataları en aza indirin.",
    icon: "Gauge",
    href: "/hizmetler#operasyon",
  },
  {
    title: "İade Oranı Azaltma",
    description:
      "Analitik ile kritik kırılma noktalarını tespit edip iade oranlarını düşürün.",
    icon: "ArrowDownRight",
    href: "/hizmetler#iade",
  },
  {
    title: "Analitik & Raporlama",
    description:
      "Gerçek zamanlı paneller ve haftalık raporlarla kararları veriye dayandırın.",
    icon: "BarChart3",
    href: "/hizmetler#analitik",
  },
  {
    title: "Özel Entegrasyonlar",
    description:
      "Logo ve ERP sistemleri dahil tüm kritik entegrasyonları tek elden yönetin.",
    icon: "Network",
    href: "/hizmetler#entegrasyon",
  },
];

export type CaseStudy = {
  metric: string;
  description: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    metric: "%32",
    description: "3 ayda dönüşüm artışı",
    result: "ikas entegrasyonu sonrası hızlı büyüme",
  },
  {
    metric: "%18 → %11",
    description: "İade oranı iyileşmesi",
    result: "Ürün sayfaları için CRO ve A/B test",
  },
  {
    metric: "2.4x",
    description: "ROAS artışı",
    result: "Meta & Google kampanya optimizasyonu",
  },
  {
    metric: "+42",
    description: "Yeni entegrasyon",
    result: "ERP, muhasebe ve fulfillment bağlantıları",
  },
];

export const whyConverta = [
  {
    title: "Tek ekip: kurulum + pazarlama + operasyon",
    description: "Tüm uzmanlıkları tek çatı altında koordine ediyoruz.",
  },
  {
    title: "Veri odaklı büyüme ve şeffaf raporlama",
    description: "Her aksiyon ölçümlenebilir hedeflerle desteklenir.",
  },
  {
    title: "Logo gibi ERP’lerle güçlü entegrasyon",
    description: "Operasyonunuzu hızlandıran güvenilir entegrasyonlar.",
  },
];
