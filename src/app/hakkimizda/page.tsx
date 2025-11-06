import { Metadata } from "next";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { ContactDialogButton } from "@/components/contact/contact-dialog";

const values = [
  {
    title: "Tek ekip",
    description:
      "Kurulum, pazarlama ve operasyon uzmanlarını tek bir projede birleştirerek siloları ortadan kaldırıyoruz.",
  },
  {
    title: "Veri merkezli",
    description:
      "Kararları hissiyata değil, müşteri davranışlarına ve gelir etkisine göre veriyoruz.",
  },
  {
    title: "Şeffaf",
    description:
      "Raporlama, bütçe yönetimi ve aksiyon planlarını her zaman paylaşırız; sürpriz kalem yok.",
  },
];

const team = [
  {
    name: "Selin Arslan",
    role: "Kurucu Ortak / Growth Lead",
    bio: "12+ yıllık e-ticaret deneyimi. Trendyol ve Amazon projelerinde büyüme liderliği yaptı.",
  },
  {
    name: "Yusuf Karaca",
    role: "Teknoloji & Entegrasyon Lead",
    bio: "Logo, SAP ve özel ERP entegrasyonlarında geniş deneyim. 30+ mağaza devreye aldı.",
  },
  {
    name: "Aylin Demir",
    role: "Dijital Pazarlama Direktörü",
    bio: "Meta ve Google Ads sertifikalı uzman. Dönüşüm odaklı kampanyalar ve CRO projeleri yönetiyor.",
  },
];

export const metadata: Metadata = {
  title: "Hakkımızda – Converta",
  description:
    "Converta, e-ticaretinizi büyütmek için teknoloji, pazarlama ve operasyon ekiplerini tek çatı altında buluşturur.",
};

export const revalidate = 3600;

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24 pt-10 sm:space-y-24">
      <Section
        eyebrow="Hakkımızda"
        title="E-ticaretinizi büyütmek için teknoloji ve operasyonu birleştiriyoruz"
        description="Converta, markaların e-ticarete hızlı giriş yapmasını ve ölçeklenmesini sağlayan hibrit bir danışmanlık ajansıdır. Kurulumdan pazarlamaya, operasyon ve entegrasyonlara kadar tek ekipte yönetir."
        tone="muted"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-base text-muted-foreground">
            <p>
              Misyonumuz, ölçeklenebilir e-ticaret operasyonlarını her büyüklükteki markaya erişilebilir kılmak. Bunu
              yaparken kurumsal danışmanlığın disiplinini, ajans çevikliğini ve ürün geliştirme yaklaşımını bir araya getiriyoruz.
            </p>
            <p>
              Kurduğumuz her mağaza için veri altyapısını, reklam kampanyalarını ve operasyon akışlarını uçtan uca kurguluyoruz.
              Logo gibi ERP sistemleriyle entegrasyonlardan, reklam verimliliğini artıran creative test planlarına kadar tüm süreçleri yönetiyoruz.
            </p>
          </div>
          <div className="flex h-full flex-col gap-3 rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.6)]">
            <h3 className="text-lg font-semibold text-foreground">Yaklaşımımız</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• İş hedefleri ile teknoloji altyapısını hizalarız.</li>
              <li>• Growth ve operasyon ekipleri arasında gerçek zamanlı iletişim kurarız.</li>
              <li>• Raporlama ve karar süreçlerini paylaşılan dashboard’larla şeffaflaştırırız.</li>
              <li>• Ölçekleme aşamasında yeni pazar ve kanal testlerini hızla devreye alırız.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Değerlerimiz"
        title="Hızlı, şeffaf ve ölçümlenebilir büyüme"
        description="E-ticaret ekiplerinin sürdürülebilir başarı elde etmesi için üç temel değere odaklanıyoruz."
        tone="default"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[2rem] border border-border/60 bg-card/80 p-6 text-left shadow-[0_20px_60px_-45px_rgba(15,23,42,0.6)]"
            >
              <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Metodoloji"
        title="Keşif → Kurulum → Büyüme → Ölçekleme"
        description="Projelerimizi hızlı sonuç alacağınız şekilde sprint’lerle planlar, şirket içi ekiplerinizle entegre çalışırız."
        tone="muted"
      >
        <div className="grid gap-6 text-sm text-muted-foreground lg:grid-cols-4">
          {[
            {
              title: "Keşif",
              description:
                "Pazar, hedef kitle ve mevcut veri yapılarını analiz ederek birebir hedefler belirleriz.",
            },
            {
              title: "Kurulum",
              description:
                "Mağaza, entegrasyon ve izleme altyapısını kurar; ilk kampanyaları canlıya alırız.",
            },
            {
              title: "Büyüme",
              description:
                "Reklam, içerik ve CRO testleriyle sürekli büyüme ivmesi oluştururuz.",
            },
            {
              title: "Ölçekleme",
              description:
                "Yeni pazarlar, otomasyonlar ve operasyon optimizasyonlarıyla uzun vadeli başarı sağlarız.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-[1.75rem] border border-border/60 bg-card/80 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.6)]"
            >
              <Badge className="rounded-full bg-primary/90 text-primary-foreground">
                {step.title}
              </Badge>
              <p className="mt-3">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Ekip"
        title="Sizinle çalışan çekirdek ekip"
        description="Strateji, teknoloji ve pazarlama liderlerinden oluşan çekirdek ekibimiz her projede birebir sizinle çalışır."
        tone="default"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex h-full flex-col gap-3 rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.6)]"
            >
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-foreground">{member.name}</span>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  {member.role}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="İletişim"
        title="Birlikte çalışmaya hazır mısınız?"
        description="İşletmenizin hedeflerini dinleyelim, nasıl destek olabileceğimizi birlikte keşfedelim."
        align="center"
        tone="muted"
      >
        <ContactDialogButton
          size="lg"
          className="shadow-soft"
          label="Toplantı Planla"
          source="about-page"
        />
      </Section>
    </div>
  );
}
