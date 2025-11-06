export const siteConfig = {
  name: "Converta",
  description:
    "Converta; kurulumdan pazarlamaya, operasyon ve entegrasyonlara kadar uçtan uca e-ticaret büyümesi sağlar.",
  url: "https://converta.example.com",
  ogImage: "/og/default.svg",
  locale: "tr_TR",
  email: "merhaba@converta.com",
  phone: "+90 212 000 00 00",
  address: "İstanbul, Türkiye",
  nav: [
    { title: "Ana Sayfa", href: "/" },
    { title: "Paketler", href: "/paketler" },
    { title: "Hizmetler", href: "/hizmetler" },
    { title: "Hakkımızda", href: "/hakkimizda" },
    { title: "Blog", href: "/blog" },
    { title: "İletişim", href: "/iletisim" },
  ],
  socials: [
    { title: "LinkedIn", href: "https://www.linkedin.com/company/converta" },
    { title: "Instagram", href: "https://www.instagram.com/converta" },
    { title: "YouTube", href: "https://www.youtube.com/@converta" },
  ],
  footerLinks: {
    company: [
      { title: "Hakkımızda", href: "/hakkimizda" },
      { title: "Kariyer", href: "/kariyer" },
      { title: "Blog", href: "/blog" },
    ],
    services: [
      { title: "E-Ticaret Kurulumu", href: "/hizmetler#kurulum" },
      { title: "Dijital Pazarlama", href: "/hizmetler#pazarlama" },
      { title: "Operasyon Hızlandırma", href: "/hizmetler#operasyon" },
      { title: "Analitik & Raporlama", href: "/hizmetler#analitik" },
    ],
    legal: [
      { title: "KVKK", href: "/kvkk" },
      { title: "Çerez Politikası", href: "/cerez-politikasi" },
      { title: "Şartlar & Koşullar", href: "/sartlar" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
