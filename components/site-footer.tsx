import Link from "next/link";
import {
  GENERAL_WHATSAPP_URL,
  WHATSAPP_DISPLAY,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="sitefoot">
      <div>
        <Link className="brand" href="/#inicio">
          <i>P</i>Páginas Web <b>Piura</b>
        </Link>
        <p>Experiencias digitales para negocios del norte del Perú.</p>
      </div>
      <div>
        <b>Servicios</b>
        <Link href="/#servicios">Landing pages</Link>
        <Link href="/#servicios">Tiendas virtuales</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div>
        <b>Contacto</b>
        <p>Piura, Perú</p>
        <a href={GENERAL_WHATSAPP_URL}>{WHATSAPP_DISPLAY}</a>
      </div>
    </footer>
  );
}

export function FloatingWhatsapp() {
  return (
    <a
      className="float"
      href={GENERAL_WHATSAPP_URL}
      aria-label="Cotizar por WhatsApp"
    >
      ◌
    </a>
  );
}
