import Link from "next/link";
import { MobileNavigation } from "@/components/mobile-navigation";
import { GENERAL_WHATSAPP_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/#inicio" aria-label="Páginas Web Piura - Inicio">
        <i>P</i>Páginas Web <b>Piura</b>
      </Link>
      <nav className="desktop-navigation" aria-label="Navegación principal">
        <Link href="/#servicios">Servicios</Link>
        <Link href="/#beneficios">Beneficios</Link>
        <Link href="/#proceso">Proceso</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/#faq">FAQ</Link>
      </nav>
      <a className="btn sm desktop-header-cta" href={GENERAL_WHATSAPP_URL}>
        Empezar proyecto
      </a>
      <MobileNavigation />
    </header>
  );
}
