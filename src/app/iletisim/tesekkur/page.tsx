import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Section } from "@/components/section";
import { ConversionSignal } from "@/components/analytics/conversion-signal";

export const metadata: Metadata = {
  title: "Teşekkürler – Converta",
  description:
    "Converta ile iletişime geçtiğiniz için teşekkür ederiz. Ekibimiz en kısa sürede dönüş yapacaktır.",
};

export default function ContactThankYouPage() {
  return (
    <div className="space-y-20 pb-24 pt-10 sm:space-y-24">
      <Section
        tone="muted"
        align="center"
        title="Başvurunuz alındı!"
        description="Büyüme analizi randevunuz için ekibimiz 2 iş saati içinde sizinle iletişime geçecek."
      >
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <CheckCircle className="size-16 text-primary" />
          <p className="text-sm text-muted-foreground">
            Bu sırada paketlerimizi inceleyebilir veya blog’umuzdaki içerikleri okuyabilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/paketler"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#E25700]"
            >
              Paketleri Görüntüle
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary"
            >
              Blog&apos;a Göz At
            </Link>
          </div>
        </div>
      </Section>
      <ConversionSignal event="conversion" payload={{ type: "contact" }} />
    </div>
  );
}
