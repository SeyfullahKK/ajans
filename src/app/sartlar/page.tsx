import { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Şartlar & Koşullar – Converta",
  description:
    "Converta danışmanlık ve ajans hizmetleri için genel şartlar ve koşullar.",
};

export default function TermsPage() {
  return (
    <div className="space-y-16 pb-24 pt-10 sm:space-y-24">
      <Section
        tone="muted"
        title="Şartlar & Koşullar"
        description="Converta ile çalıştığınızda geçerli olan genel şartlar ve sorumluluk çerçevesi."
      >
        <article className="prose max-w-none text-sm text-muted-foreground dark:prose-invert">
          <p>
            Bu sayfa, hizmet sözleşmesi imzalanmadan önce genel çerçeveyi özetler. Nihai sözleşmede proje detayları,
            teslimatlar ve SLA kapsama alanı yer alır.
          </p>
          <p>
            Hizmet kapsamında oluşturulan strateji, içerik ve yazılım çıktıları Converta&apos;nın fikri mülkiyet hakları
            kapsamındadır; kullanım hakları sözleşmede tanımlandığı şekilde müşteriye devredilir.
          </p>
        </article>
      </Section>
    </div>
  );
}
