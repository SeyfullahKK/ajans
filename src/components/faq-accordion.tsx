"use client";

import { useCallback } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { trackEvent } from "@/lib/analytics";

export function FAQAccordion() {
  const handleChange = useCallback((value: string) => {
    if (value) {
      trackEvent("faq_open", { question: value });
    }
  }, []);

  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-3"
      onValueChange={handleChange}
    >
      {faqItems.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`faq-${index}`}
          className="overflow-hidden rounded-2xl border border-border/60 bg-card/70 px-4"
        >
          <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-sm text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
