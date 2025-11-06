"use server";

import { contactFormSchema } from "@/lib/contact-schema";

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string };

export async function submitContactAction(
  formData: FormData,
): Promise<ContactActionResult> {
  "use server";
  const data = {
    fullName: (formData.get("fullName") ?? "") as string,
    email: (formData.get("email") ?? "") as string,
    phone: (formData.get("phone") ?? "") as string,
    company: (formData.get("company") ?? "") as string,
    budget: (formData.get("budget") ?? "") as string,
    platform: (formData.get("platform") ?? "") as string,
    needs: formData.getAll("needs").map(String),
    message: (formData.get("message") ?? "") as string,
    website: (formData.get("website") ?? "") as string,
    timestamp: Number(formData.get("timestamp") ?? 0),
  };

  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    const message =
      parsed.error.issues[0]?.message ?? "Form doğrulaması başarısız.";
    return { success: false, error: message };
  }

  const now = Date.now();
  if (now - parsed.data.timestamp < 2000) {
    return { success: false, error: "Form çok hızlı gönderildi." };
  }

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

    const response = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...parsed.data,
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const message = await response
        .json()
        .then((json) => json.error as string)
        .catch(() => "İstek sırasında bir hata oluştu.");
      return { success: false, error: message };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Gönderim sırasında beklenmedik bir hata oluştu.",
    };
  }
}
