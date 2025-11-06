"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { trackEvent } from "@/lib/analytics";
import { ContactForm } from "./contact-form";

type ContactDialogButtonProps = React.ComponentProps<typeof Button> & {
  label?: string;
  analyticsEvent?: string;
  source?: string;
};

export function ContactDialogButton({
  label = "Ücretsiz Analiz Al",
  analyticsEvent = "cta_click",
  className,
  source = "modal",
  ...props
}: ContactDialogButtonProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (nextOpen) {
      trackEvent(analyticsEvent, { source: props.variant ?? "default" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className={className} {...props}>
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl bg-card/95 px-6 py-8 backdrop-blur-xl sm:w-[540px]">
        <DialogHeader className="space-y-2 text-left">
          <DialogTitle className="text-xl font-semibold text-foreground">
            1 saatlik ücretsiz büyüme analizi planlayın
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Ekibimiz iş modelinizi, hedeflerinizi ve mevcut kurulumunuzu inceleyip
            size özel bir yol haritası sunar.
          </DialogDescription>
        </DialogHeader>
        <ContactForm source={source} />
      </DialogContent>
    </Dialog>
  );
}
