import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Manrope } from "next/font/google";
import { OrganizationJsonLd } from "next-seo";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site";
import { PageViewTracker } from "@/components/analytics/pageview";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Converta – E-ticaret Danışmanlığı & Dijital Pazarlama Ajansı",
    template: "%s | Converta",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Converta – E-ticaret danışmanlığı & dijital pazarlama ajansı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@converta",
    creator: "@converta",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-background text-foreground antialiased`}
      >
        <OrganizationJsonLd
          type="Organization"
          name={siteConfig.name}
          url={siteConfig.url}
          logo={`${siteConfig.url}${siteConfig.ogImage}`}
          contactPoint={[
            {
              email: siteConfig.email,
              telephone: siteConfig.phone,
              contactType: "customer service",
            },
          ]}
          sameAs={siteConfig.socials.map((item) => item.href)}
          address={{
            streetAddress: siteConfig.address,
            addressLocality: "İstanbul",
            addressRegion: "İstanbul",
            addressCountry: "TR",
          }}
        />
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_top,_rgba(255,106,0,0.16),_transparent_55%),radial-gradient(circle_at_20%_80%,_rgba(124,77,255,0.12),_transparent_60%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background via-background/70 to-transparent" />
            <Navbar className="mt-6" />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-center" closeButton />
          <Suspense fallback={null}>
            <PageViewTracker />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
