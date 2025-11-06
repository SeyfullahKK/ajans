import { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni – Converta",
  description:
    "Kişisel verilerin korunması kanunu kapsamında Converta'nın aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <div className="space-y-16 pb-24 pt-10 sm:space-y-24">
      <Section
        tone="muted"
        title="KVKK Aydınlatma Metni"
        description="Converta olarak kişisel verilerinizi KVKK ve ilgili mevzuata uygun şekilde işleriz."
      >
        <article className="prose max-w-none text-sm text-muted-foreground dark:prose-invert">
          <p>
            Bu sayfa, Converta tarafından kişisel verilerin işlenmesine ilişkin genel bilgilendirmeyi içerir.
            Nihai sözleşme sürecinde detaylandırılmış aydınlatma metni paylaşılır.
          </p>
          <p>
            Toplanan veriler yalnızca danışmanlık, teklif ve sözleşme süreçlerini yürütmek amacıyla kullanılır. Üçüncü
            taraflarla yalnızca hizmet sağlamak için gerekli olduğunda ve mevzuata uygun şekilde paylaşılır.
          </p>
        </article>
      </Section>
    </div>
  );
}
