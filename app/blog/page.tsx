import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, FloatingWhatsapp } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPublishedPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Blog de Diseño Web y SEO para Negocios en Piura";
const description =
  "Guías sobre páginas web, landing pages, tiendas virtuales, ecommerce y SEO local para ayudar a crecer a los negocios de Piura.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title,
    description,
    url: "/blog",
    siteName: SITE_NAME,
    locale: "es_PE",
    type: "website",
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export default function BlogPage() {
  const posts = getPublishedPosts();
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${SITE_URL}/blog`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className="blog-index">
        <section className="blog-hero">
          <span>RECURSOS PARA NEGOCIOS DE PIURA</span>
          <h1>Ideas para convertir tu presencia digital en crecimiento</h1>
          <p>
            Guías prácticas sobre páginas web, landing pages, tiendas virtuales,
            ecommerce y SEO local para tomar mejores decisiones digitales.
          </p>
        </section>

        <section className="post-grid" aria-label="Artículos del blog">
          {posts.map((post) => (
            <article className="post-card" key={post.slug}>
              <span>{post.category}</span>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.excerpt}</p>
              <div className="post-meta">
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span>Lectura: {post.readingTime}</span>
              </div>
              <Link className="post-link" href={`/blog/${post.slug}`}>
                Leer artículo →
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsapp />
    </>
  );
}
