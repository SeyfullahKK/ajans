import Link from "next/link";
import type { Route } from "next";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const footerColumns = [
  { title: "Şirket", key: "company" as const },
  { title: "Hizmetler", key: "services" as const },
  { title: "Yasal", key: "legal" as const },
];

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "relative mt-24 border-t border-border/60 bg-background/80 backdrop-blur-xl",
        className,
      )}
    >
      <div className="container-xl grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Converta
          </Link>
          <p className="max-w-sm text-sm text-muted-foreground">
            E-ticaretinizi büyütmek için kurulum, pazarlama, operasyon ve
            entegrasyonları tek ekipte birleştiriyoruz.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Phone className="size-4 text-primary" /> {siteConfig.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="size-4 text-primary" /> {siteConfig.email}
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-4 py-2 text-xs text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {siteConfig.address}
          </div>
        </div>
        {footerColumns.map(({ title, key }) => (
          <div key={key} className="space-y-4 text-sm">
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks[key].map((item) => {
                const href = item.href as Route;
                return (
                  <li key={item.href}>
                    <Link
                      href={href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <div className="space-y-4 text-sm">
          <h3 className="text-base font-semibold text-foreground">
            Bültenimize katılın
          </h3>
          <p className="text-sm text-muted-foreground">
            E-ticaret trendleri, vaka analizleri ve Converta&apos;dan haberler.
          </p>
          <form className="flex w-full items-center gap-2 rounded-full border border-border bg-card/80 p-1">
            <input
              type="email"
              name="newsletter"
              placeholder="İş e-posta adresiniz"
              className="h-11 flex-1 rounded-full bg-transparent px-4 text-sm outline-none"
              required
            />
            <button
              type="submit"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-[#E25700]"
              aria-label="Bültene kaydol"
            >
              <Send className="size-4" />
            </button>
          </form>
          <div className="flex items-center gap-3 pt-2">
            {siteConfig.socials.map((social) => (
              <a
                key={social.title}
                href={social.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/70 text-sm font-medium text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                {social.title[0]}
                <span className="sr-only">{social.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 bg-background/60 py-6">
        <div className="container-xl flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Converta. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <Link href="/kvkk" className="hover:text-primary">
              KVKK
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-primary">
              Çerez Politikası
            </Link>
            <Link href="/sartlar" className="hover:text-primary">
              Şartlar &amp; Koşullar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
