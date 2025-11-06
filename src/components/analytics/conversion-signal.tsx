"use client";

import { useEffect, useMemo } from "react";
import { trackEvent } from "@/lib/analytics";

export function ConversionSignal({
  event,
  payload,
}: {
  event: string;
  payload?: Record<string, unknown>;
}) {
  const serialized = useMemo(
    () => JSON.stringify(payload ?? {}),
    [payload],
  );

  useEffect(() => {
    const data = serialized ? JSON.parse(serialized) : undefined;
    trackEvent(event, data);
  }, [event, serialized]);

  return null;
}
