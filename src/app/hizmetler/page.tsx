import { Metadata } from "next";
import { Section } from "@/components/section";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { ContactDialogButton } from "@/components/contact/contact-dialog";

export const metadata: Metadata = {
  title: "Hizmetler – Converta",
  description:
    "E-ticaret kurulumu, dijital pazarlama, operasyon hızlandırma, analitik ve özel entegrasyon hizmetlerimiz.",
};

export const revalidate = 3600;

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-24 pt-10 sm:space-y-24">
      <Section
        eyebrow="Hizmetler"
        title="E-ticaret büyümesi için modüler hizmetler"
        description="Kurulumdan ölçeklemeye tüm süreci tek ekipte birleştiriyoruz. Her hizmeti tek başına kullanabilir ya da paket olarak birleştirebilirsiniz."
        tone="muted"
      >
        <div className="space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="grid gap-8 rounded-[2rem] border border-border/60 bg-card/80 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.6)] lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="space-y-4">
                <Badge className="rounded-full bg-primary/90 text-primary-foreground">
                  {service.name}
                </Badge>
                <h2 className="text-2xl font-semibold text-foreground">
                  {service.headline}
                </h2>
                <p className="text-base text-muted-foreground">
                  {service.summary}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Süre: {service.timeline}
                  </span>
                  {service.stack.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-6 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">
                    Teslimatlar
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">
                    Beklenen çıktılar
                  </h3>
                  <ul className="space-y-2">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.stack.map((tool) => (
                      <Badge
                        key={`${service.id}-${tool}`}
                        variant="outline"
                        className="rounded-full border-primary/25 bg-primary/5 text-xs font-medium text-primary"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Nasıl çalışıyoruz?"
        title="Keşif → Kurulum → Büyüme → Ölçekleme"
        description="Her projede ortak metodolojimizi uygular, sonuçları haftalık ve aylık ritimlerle raporlarız."
        align="center"
        tone="default"
      >
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Keşif",
              description:
                "Mevcut veriler, hedefler ve operasyon yapısı analiz edilir. Yol haritası belirlenir.",
            },
            {
              title: "Kurulum",
              description:
                "Altyapı, entegrasyonlar ve temel kampanya kurguları canlıya alınır.",
            },
            {
              title: "Büyüme",
              description:
                "Veri odaklı optimizasyonlar, içerik ve kampanya testleriyle ölçeklenir.",
            },
            {
              title: "Ölçekleme",
              description:
                "Yeni pazarlar, otomasyonlar ve ileri analitikle sürdürülebilir büyüme sağlanır.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-[1.75rem] border border-border/60 bg-card/80 p-6 text-left shadow-[0_20px_60px_-45px_rgba(15,23,42,0.6)]"
            >
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Birlikte çalışalım"
        title="Hangi hizmetle ilerlemek istersiniz?"
        description="İhtiyaçlarınıza göre modüler hizmetleri bir araya getirip kurumunuza özel bir program tasarlayalım."
        align="center"
        tone="muted"
      >
        <ContactDialogButton
          size="lg"
          className="shadow-soft"
          label="Danışmanlık Talebi Oluştur"
          source="services-page"
        />
      </Section>
    </div>
  );
}
