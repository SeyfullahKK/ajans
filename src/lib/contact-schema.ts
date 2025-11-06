import { z } from "zod";

export const budgetOptions = [
  "0 - 50.000 TL",
  "50.000 - 150.000 TL",
  "150.000 - 300.000 TL",
  "300.000 TL +",
] as const;

export const platformOptions = [
  "ikas",
  "İdeasoft",
  "Shopify",
  "T-Soft",
  "Logo",
  "Diğer",
] as const;

export const needsOptions = [
  "Mağaza kurulumu",
  "Reklam yönetimi",
  "Operasyon süreçleri",
  "İade & müşteri deneyimi",
  "Analitik & raporlama",
  "Özel entegrasyon (Logo vb.)",
] as const;

export const contactFormSchema = z.object({
  fullName: z.string().min(3, "Ad Soyad en az 3 karakter olmalı."),
  email: z.string().email("Geçerli bir e-posta adresi girin."),
  phone: z
    .string()
    .min(10, "Telefon numarası en az 10 karakter olmalı.")
    .regex(/^[0-9+\s-]+$/, "Telefon numarası yalnızca rakam içermelidir."),
  company: z.string().min(2, "Şirket/Marka adı gerekiyor."),
  budget: z
    .string()
    .min(1, "Aylık bütçe seçin.")
    .refine((value) => budgetOptions.includes(value as (typeof budgetOptions)[number]), {
      message: "Aylık bütçe seçin.",
    }),
  platform: z
    .string()
    .min(1, "Mevcut altyapınızı seçin.")
    .refine(
      (value) => platformOptions.includes(value as (typeof platformOptions)[number]),
      {
        message: "Mevcut altyapınızı seçin.",
      },
    ),
  needs: z.array(z.string()).min(1, "En az bir ihtiyaç seçin."),
  message: z.string().min(10, "Kısaca ihtiyaçlarınızı anlatın."),
  website: z.string().max(0, "Form geçersiz."),
  timestamp: z.number().int(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactOptions = {
  budgetOptions: [...budgetOptions],
  platformOptions: [...platformOptions],
  needsOptions: [...needsOptions],
} as const;
