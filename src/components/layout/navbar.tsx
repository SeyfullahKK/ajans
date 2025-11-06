"use client";

import * as React from "react";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { ContactDialogButton } from "@/components/contact/contact-dialog";
import { trackEvent } from "@/lib/analytics";

function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2 py-1 text-sm backdrop-blur-xl transition-colors md:flex">
      {siteConfig.nav.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === item.href
            : pathname.startsWith(item.href);
        const href = item.href as Route;
        return (
          <Link
            key={item.href}
            href={href}
            className={cn(
              "relative rounded-full px-3.5 py-2 font-medium text-muted-foreground transition-colors",
              "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
              isActive &&
                "text-foreground after:absolute after:inset-0 after:rounded-full after:bg-primary/10",
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}

function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const close = React.useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    close();
  }, [pathname, close]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-10 w-10 md:hidden"
          aria-label="Menüyü aç"
          onClick={() => trackEvent("navigation_open")}
        >
          <Menu className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="fixed bottom-0 left-0 right-0 top-auto z-[60] mx-auto h-auto max-h-[85vh] w-full rounded-t-3xl border-border/50 bg-background/95 px-6 pb-10 pt-6 backdrop-blur-xl sm:max-w-md">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle className="text-left text-lg font-semibold text-foreground">
            Menü
          </DialogTitle>
          <DialogDescription className="sr-only">
            Converta mobil navigasyon
          </DialogDescription>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-3"
            onClick={() => setOpen(false)}
            aria-label="Menüyü kapat"
          >
            <X className="size-5" />
          </Button>
        </DialogHeader>
        <div className="mt-4 space-y-1">
          {siteConfig.nav.map((item) => {
            const href = item.href as Route;
            return (
              <Link
                key={item.href}
                href={href}
                className={cn(
                  "flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-muted-foreground transition-colors",
                  "hover:border-primary/20 hover:bg-primary/5 hover:text-foreground",
                  pathname.startsWith(item.href) &&
                    "border-primary/30 bg-primary/10 text-foreground",
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <Button asChild variant="outline" className="w-full">
            <Link href="/paketler">Paketleri Gör</Link>
          </Button>
          <ContactDialogButton className="w-full" size="lg" source="mobile-nav" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Navbar({ className }: { className?: string }) {
  return (
    <header className={cn("sticky top-0 z-50 w-full px-4 sm:px-6", className)}>
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-3 rounded-full border border-border/60 bg-background/80 px-4 py-3 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.65)] backdrop-blur-2xl transition-all duration-300 md:px-6 md:py-4">
        <div className="flex flex-1 items-center gap-3">
          <Logo />
          <DesktopNav />
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            variant="ghost"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
            onClick={() => trackEvent("pricing_view", { source: "navbar" })}
          >
            <Link href={"/paketler" as Route}>Paketleri Gör</Link>
          </Button>
          <ContactDialogButton className="shadow-soft" size="lg" source="navbar" />
          <ThemeToggle />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
