"use client";

import { useEffect, useState } from "react";

/** Hora actual del dispositivo; se actualiza cada minuto. */
export function useDeviceDateTime(): Date {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const update = () => setNow(new Date());
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  return now;
}
