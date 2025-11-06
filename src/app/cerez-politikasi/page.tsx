import { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Çerez Politikası – Converta",
  description:
    "Converta web sitesinin çerez kullanım politikası ve tercih yönetimi.",
};

export default function CookiePolicyPage() {
  return (
    <div className="space-y-16 pb-24 pt-10 sm:space-y-24">
      <Section
        tone="muted"
        title="Çerez Politikası"
        description="Converta web deneyimini iyileştirmek için çerezleri kullanır. Tercihlerinizi aşağıda yönetebilirsiniz."
      >
        <article className="prose max-w-none text-sm text-muted-foreground dark:prose-invert">
          <p>
            Zorunlu çerezler site güvenliği ve temel işlevler için gereklidir. Analitik çerezler kullanıcı deneyimini
            iyileştirmek amacıyla anonim veriler toplar. Reklam çerezleri ise kampanya performansını ölçmek için
            kullanılır.
          </p>
          <p>
            Tarayıcı ayarlarınızdan çerez tercihlerinizi değiştirebilir veya daha fazla bilgi için{" "}
            <a href="mailto:merhaba@converta.com">merhaba@converta.com</a> adresine ulaşabilirsiniz.
          </p>
        </article>
      </Section>
    </div>
  );
}
