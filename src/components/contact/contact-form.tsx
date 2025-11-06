"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  contactFormSchema,
  contactOptions,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/config/site";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const defaultValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  budget: contactOptions.budgetOptions[0],
  platform: contactOptions.platformOptions[0],
  needs: [],
  message: "",
  website: "",
  timestamp: Date.now(),
};

export function ContactForm({ source = "modal" }: { source?: string }) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onSubmit",
  });

  useEffect(() => {
    form.register("timestamp", { valueAsNumber: true });
    const now = Date.now();
    form.setValue("timestamp", now, { shouldDirty: false });
  }, [form]);

  const onSubmit = (values: ContactFormValues) => {
    const elapsed = Date.now() - (values.timestamp ?? 0);
    if (elapsed < 2000) {
      toast.error("Form çok hızlı gönderildi. Lütfen tekrar deneyin.");
      return;
    }

    setIsPending(true);
    try {
      const subject = encodeURIComponent(
        `Converta iletişim isteği – ${values.fullName}`,
      );
      const bodyLines: string[] = [
        `Ad Soyad: ${values.fullName}`,
        `E-posta: ${values.email}`,
        `Telefon: ${values.phone}`,
        `Şirket / Marka: ${values.company}`,
        `Aylık bütçe: ${values.budget}`,
        `Mevcut altyapı: ${values.platform}`,
        `Mesaj: ${values.message}`,
      ];
      if (values.needs.length > 0) {
        bodyLines.push(`Öne çıkan ihtiyaçlar: ${values.needs.join(", ")}`);
      }
      if (values.website) {
        bodyLines.push(`Web sitesi: ${values.website}`);
      }
      const body = encodeURIComponent(bodyLines.join("\n"));
      const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

      if (typeof window !== "undefined") {
        window.location.href = mailtoUrl;
      }

      toast.success(
        "E-posta istemcinizde yeni bir taslak açıldı. Mesajınızı gönderin.",
      );
      trackEvent("contact_submit", { source });
      form.reset({ ...defaultValues, timestamp: Date.now() });
      router.push("/iletisim/tesekkur");
    } catch (error) {
      console.error(error);
      toast.error("E-posta taslağı oluşturulamadı. Lütfen doğrudan e-posta gönderin.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ad Soyad</FormLabel>
                <FormControl>
                  <Input placeholder="Adınız ve soyadınız" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>İş e-postası</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ornek@firma.com"
                    type="email"
                    inputMode="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input placeholder="+90 5xx xxx xx xx" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Şirket / Marka</FormLabel>
                <FormControl>
                  <Input placeholder="Şirket veya marka adı" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aylık bütçe</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Bütçe seçin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {contactOptions.budgetOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mevcut altyapı</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Altyapı seçin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {contactOptions.platformOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="needs"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Öne çıkan ihtiyaçlar</FormLabel>
              <div className="grid gap-2 sm:grid-cols-2">
                {contactOptions.needsOptions.map((need) => (
                  <label
                    key={need}
                    className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border/60 bg-background/80 p-3 text-sm transition-colors hover:border-primary/40 hover:bg-primary/10"
                  >
                    <Checkbox
                      checked={field.value?.includes(need)}
                      onCheckedChange={(checked) => {
                        const value = field.value ?? [];
                        if (checked === true) {
                          field.onChange([...value, need]);
                        } else {
                          field.onChange(value.filter((item) => item !== need));
                        }
                      }}
                    />
                    <span className="flex-1">{need}</span>
                  </label>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mesajınız</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Hedeflerinizi ve mevcut durumu kısaca anlatın."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <input
              type="text"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              {...field}
            />
          )}
        />

        <div className="flex flex-col gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-muted-foreground">
          <p>
            Bu formu göndererek KVKK kapsamında kişisel verilerinizin işlenmesine
            izin vermiş olursunuz. Detaylar için KVKK ve Çerez Politikası sayfalarını inceleyebilirsiniz.
          </p>
        </div>
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isPending}
        >
          {isPending ? "Gönderiliyor..." : "Ücretsiz Analiz Al"}
        </Button>
      </form>
    </Form>
  );
}
