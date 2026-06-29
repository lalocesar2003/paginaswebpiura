import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://paginaswebpiura.dev";
const title = "Páginas Web en Piura | Diseño Web y Tiendas Online";
const description =
  "Creamos páginas web en Piura para captar clientes y vender por internet: landing pages, tiendas virtuales, ecommerce y desarrollo web para negocios locales.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Páginas Web en Piura para Captar Clientes",
    description:
      "Landing pages, tiendas virtuales y ecommerce para negocios de Piura que quieren convertir visitas en clientes, pedidos y ventas.",
    url: "/",
    siteName: "Páginas Web Piura",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE">
      <body>{children}</body>
    </html>
  );
}
