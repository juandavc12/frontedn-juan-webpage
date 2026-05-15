"use client";

import { useEffect, useState } from "react";

/**
 * Hora del dispositivo. Devuelve `null` en SSR y en el primer render del cliente
 * para evitar hydration mismatch; luego se actualiza cada minuto.
 */
export function useDeviceDateTime(): Date | null {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  return now;
}
