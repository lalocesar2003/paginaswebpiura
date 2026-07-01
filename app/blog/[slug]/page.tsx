import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingWhatsapp, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL, whatsappUrl } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const url = `/blog/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: SITE_NAME,
      locale: "es_PE",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
    },
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const { default: PostContent } = await post.load();
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };
  const quoteUrl = whatsappUrl(
    "Hola, quiero cotizar una página web para mi negocio en Piura.",
  );

  return (
    <>
      <SiteHeader />
      {[articleSchema, breadcrumbSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <main className="blog-post">
        <article>
          <nav className="breadcrumbs" aria-label="Migas de pan">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
          </nav>

          <header className="post-header">
            <p className="post-category">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="post-intro">{post.introduction}</p>
            <div className="post-meta">
              <time dateTime={post.publishedAt}>
                Publicado: {formatDate(post.publishedAt)}
              </time>
              <span>Lectura: {post.readingTime}</span>
            </div>
          </header>

          <div className="blog-content">
            <PostContent />
          </div>

          <aside className="article-cta">
            <h2>¿Quieres cotizar una página web para tu negocio en Piura?</h2>
            <p>
              Cuéntanos qué tipo de negocio tienes y te ayudamos a elegir entre
              una landing page, una tienda online o una solución a medida.
            </p>
            <a className="btn green" href={quoteUrl}>
              Cotizar por WhatsApp
            </a>
          </aside>
        </article>
      </main>
      <SiteFooter />
      <FloatingWhatsapp />
    </>
  );
}
