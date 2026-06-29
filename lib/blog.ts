import type { ComponentType } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
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
    description:
      "Conoce cuánto puede costar una página web en Piura, qué factores influyen en el precio y qué opción conviene para tu negocio: landing page, web corporativa o tienda online.",
    excerpt:
      "Una guía clara para elegir entre landing page, web corporativa o tienda online según los objetivos de tu negocio.",
    category: "Guía para negocios de Piura",
    publishedAt: "2026-06-28",
    modifiedAt: "2026-06-28",
    readingTime: "5 minutos",
    published: true,
    load: () =>
      import("@/content/blog/cuanto-cuesta-una-pagina-web-en-piura.mdx"),
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
