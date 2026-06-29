export const SITE_URL = "https://paginaswebpiura.dev";
export const SITE_NAME = "Páginas Web Piura";
export const WHATSAPP_NUMBER = "51955996535";
export const WHATSAPP_DISPLAY = "+51 955 996 535";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WHATSAPP_URL = whatsappUrl(
  "Hola, quiero cotizar mi página web",
);
