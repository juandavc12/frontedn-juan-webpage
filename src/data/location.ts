import { LocationInfo } from "@/types/weather";

export function formatLocationLabel({ city, countryCode }: LocationInfo): string {
  return countryCode ? `${city}, ${countryCode}` : city;
}

/** Ciudad y país a partir de coordenadas (idioma del dispositivo vía API). */
export async function getLocationFromCoords(
  lat: number,
  lon: number
): Promise<LocationInfo> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=es`
  );

  if (!res.ok) throw new Error("No se pudo obtener la ubicación");

  const data = await res.json();

  return {
    city:
      data.city ||
      data.locality ||
      data.principalSubdivision ||
      "Ubicación desconocida",
    countryCode: data.countryCode ?? "",
  };
}
