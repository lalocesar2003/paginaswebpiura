import type { ComponentType } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  introduction: string;
  category: string;
  publishedAt: string;
  modifiedAt: string;
  readingTime: string;
  published: boolean;
  load: () => Promise<{ default: ComponentType }>;
};

const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-cuesta-una-pagina-web-en-piura",
    title: "¿Cuánto cuesta una página web en Piura?",
    seoTitle: "¿Cuánto cuesta una página web en Piura? | Guía 2026",
    description:
      "Conoce cuánto puede costar una página web en Piura, qué factores influyen en el precio y qué opción conviene para tu negocio: landing page, web corporativa o tienda online.",
    excerpt:
      "Una guía clara para elegir entre landing page, web corporativa o tienda online según los objetivos de tu negocio.",
    introduction:
      "Si tienes un negocio en Piura y estás pensando en crear una página web, es normal preguntarte cuánto deberías invertir. El precio varía según el tipo de proyecto, el diseño, las funciones y el objetivo comercial de la web.",
    category: "Guía para negocios de Piura",
    publishedAt: "2026-06-28",
    modifiedAt: "2026-06-28",
    readingTime: "5 minutos",
    published: true,
    load: () =>
      import("@/content/blog/cuanto-cuesta-una-pagina-web-en-piura.mdx"),
  },
  {
    slug: "como-una-landing-page-ayuda-a-conseguir-clientes-en-piura",
    title: "Cómo una landing page ayuda a conseguir clientes en Piura",
    seoTitle: "Landing Page en Piura: Cómo Conseguir Más Clientes",
    description:
      "Descubre cómo una landing page en Piura puede convertir visitas en consultas y clientes mediante una oferta clara, confianza local y contacto directo por WhatsApp.",
    excerpt:
      "Conoce por qué una landing page enfocada en conversión puede generar más consultas y oportunidades para un negocio local.",
    introduction:
      "Una landing page puede ayudar a un negocio de Piura a transformar el interés de sus visitantes en consultas reales. Su objetivo no es mostrar toda la empresa, sino presentar una oferta clara y facilitar que la persona dé el siguiente paso.",
    category: "Marketing digital en Piura",
    publishedAt: "2026-07-01",
    modifiedAt: "2026-07-01",
    readingTime: "6 minutos",
    published: true,
    load: () =>
      import(
        "@/content/blog/como-una-landing-page-ayuda-a-conseguir-clientes-en-piura.mdx"
      ),
  },
];

export function getPublishedPosts() {
  return blogPosts
    .filter((post) => post.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getPostBySlug(slug: string) {
  return getPublishedPosts().find((post) => post.slug === slug);
}
