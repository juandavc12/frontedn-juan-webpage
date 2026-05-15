/** Formatea fecha/hora en la zona horaria y locale del dispositivo. */
export function formatDeviceDateTime(
  date: Date,
  style: "header" | "hero" = "header"
): string {
  const clock = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const dayMonth = date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "numeric",
  });

  return style === "header" ? `${clock}, ${dayMonth}` : `${clock} | ${dayMonth}`;
}
