import { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "İletişim – Converta",
  description:
    "Ücretsiz büyüme analizi, paketler ve özel entegrasyon ihtiyaçlarınız için Converta ile iletişime geçin.",
};

export const revalidate = 3600;

const workingHours = [
  { day: "Pazartesi – Cuma", hours: "09:00 – 19:00" },
  { day: "Cumartesi", hours: "10:00 – 16:00 (destek ekibi)" },
  { day: "Pazar", hours: "SLA müşterileri için 7/24" },
];

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-24 pt-10 sm:space-y-24">
      <Section
        eyebrow="İletişim"
        title="Ücretsiz büyüme analizine hemen başlayın"
        description="Formu doldurun, 1 saatlik ücretsiz danışmanlık seansınızı planlayalım. 2 iş saati içinde dönüş sağlıyoruz."
        tone="muted"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div className="space-y-6 text-sm text-muted-foreground">
            <div className="rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.6)]">
              <h2 className="text-lg font-semibold text-foreground">İletişim kanalları</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <span className="font-medium text-foreground">E-posta:</span>{" "}
                  {siteConfig.email}
                </li>
                <li>
                  <span className="font-medium text-foreground">Telefon:</span>{" "}
                  {siteConfig.phone}
                </li>
                <li>
                  <span className="font-medium text-foreground">Adres:</span>{" "}
                  {siteConfig.address}
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.6)]">
              <h2 className="text-lg font-semibold text-foreground">
                Çalışma saatleri ve SLA
              </h2>
              <ul className="mt-4 space-y-3">
                {workingHours.map((item) => (
                  <li key={item.day} className="flex items-center justify-between gap-2">
                    <span className="text-foreground">{item.day}</span>
                    <Badge variant="outline" className="rounded-full border-primary/25 bg-primary/5 text-primary">
                      {item.hours}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.6)]">
              <h2 className="text-lg font-semibold text-foreground">Ofis lokasyonu</h2>
              <p>İstanbul, Türkiye · Görüşmelerimizi çoğunlukla online gerçekleştiriyoruz.</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.6)]">
            <ContactForm source="contact-page" />
          </div>
        </div>
      </Section>
    </div>
  );
}
