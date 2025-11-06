export type ServiceDetail = {
  id: string;
  name: string;
  headline: string;
  summary: string;
  timeline: string;
  deliverables: string[];
  outcomes: string[];
  stack: string[];
};

export const services: ServiceDetail[] = [
  {
    id: "kurulum",
    name: "E-Ticaret Kurulumu",
    headline: "Altyapı seçimi, tema uyarlaması ve tam kurulum.",
    summary:
      "Markanız için doğru platformu seçip ürün, ödeme, kargo ve temel SEO yapı taşlarını hazır hale getiriyoruz.",
    timeline: "7–14 gün",
    deliverables: [
      "Altyapı danışmanlığı ve planlama",
      "Tema uyarlaması & görsel rehber",
      "Ödeme ve kargo entegrasyonları",
      "Temel SEO & izleme kurulumları",
      "Operasyon ekibi için başlangıç eğitimi",
    ],
    outcomes: [
      "Mağaza açılışı gecikmeden tamamlanır",
      "Operasyonel süreçler baştan doğru kurgulanır",
      "İlk satış için hazır bir vitrin elde edilir",
    ],
    stack: ["ikas", "İdeasoft", "Shopify", "T-Soft", "Opencart"],
  },
  {
    id: "pazarlama",
    name: "Dijital Pazarlama",
    headline: "Satış odaklı reklam ve içerik stratejisi.",
    summary:
      "Meta, Google ve pazar yeri kampanyalarıyla sürekli talep yaratırken içerik hattınızı data ile yönlendiriyoruz.",
    timeline: "Sürekli / aylık",
    deliverables: [
      "Reklam hesap kurulumu ve feed entegrasyonları",
      "Performans odaklı kreatif test planları",
      "Aylık 2 kampanya seti + optimizasyon",
      "İçerik takvimi ve iletişim şablonları",
      "Haftalık mini rapor + aylık derin rapor",
    ],
    outcomes: [
      "ROAS artışı ve sürdürülebilir gelir",
      "Kanal bazlı bütçe optimizasyonu",
      "Ekip içi iletişim ve içerik disiplininin oturması",
    ],
    stack: ["Meta Ads", "Google Ads", "TikTok Ads", "Klaviyo", "Google Analytics 4"],
  },
  {
    id: "operasyon",
    name: "Operasyon Hızlandırma",
    headline: "Siparişten iade sürecine kadar otomasyon.",
    summary:
      "ERP bağlantıları, stok senkronizasyonu ve destek süreçleriyle operasyonel yükü azaltıyor, müşteri memnuniyetini artırıyoruz.",
    timeline: "3–6 hafta",
    deliverables: [
      "ERP/Logo entegrasyonu analizi ve kurulumu",
      "Sipariş & stok otomasyonları",
      "Fulfillment ve kargo SLA tasarımı",
      "Müşteri hizmetleri makroları ve eğitimleri",
      "Performans dashboard’ları",
    ],
    outcomes: [
      "Operasyon maliyetlerinde azalma",
      "Hızlı sipariş/teslimat döngüsü",
      "İade süreçlerinde şeffaflık",
    ],
    stack: ["Logo", "Nebim", "SAP", "Zendesk", "Notion"],
  },
  {
    id: "analitik",
    name: "Analitik & Raporlama",
    headline: "Karar almayı hızlandıran veri altyapısı.",
    summary:
      "GA4, Looker Studio ve özel panellerle satış, kanal ve müşteri davranışlarını tek ekranda birleştiriyoruz.",
    timeline: "2–4 hafta",
    deliverables: [
      "Veri kaynakları keşfi ve şeması",
      "KPI ve OKR matrisleri",
      "Otomatik raporlama panelleri",
      "Alert & anomaly sistemi",
      "Ekip içi analitik eğitimleri",
    ],
    outcomes: [
      "Veriye dayalı karar süreçleri",
      "Tahmini stok ve bütçe planlama",
      "Anlık KPI takibi",
    ],
    stack: ["GA4", "Looker Studio", "BigQuery", "Segment", "HubSpot"],
  },
  {
    id: "entegrasyon",
    name: "Özel Entegrasyonlar",
    headline: "Logo ve ERP sistemleriyle tek yönetişim.",
    summary:
      "Satış kanallarınızı finans, muhasebe ve depo sistemleriyle uyumlu hale getirip uçtan uca izlenebilir süreçler kuruyoruz.",
    timeline: "Proje bazlı",
    deliverables: [
      "İhtiyaç analizi ve teknik dokümantasyon",
      "API & middleware geliştirme",
      "Test senaryoları ve UAT yönetimi",
      "Bakım & SLA sözleşmeleri",
      "Sürekli izleme ve destek",
    ],
    outcomes: [
      "El ile veri girişini ortadan kaldırma",
      "Gerçek zamanlı stok & finans görünürlüğü",
      "Operasyonel risklerin azalması",
    ],
    stack: ["Logo", "SAP", "Microsoft Dynamics", "Microservice API'leri"],
  },
];
