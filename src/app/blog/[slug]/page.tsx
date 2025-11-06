import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd } from "next-seo";
import { Section } from "@/components/section";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/config/site";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  if (!params.slug) {
    return {
      title: "Blog Yazısı – Converta",
      description: siteConfig.description,
    };
  }
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Yazı bulunamadı – Converta",
    };
  }

  const canonical =
    `${process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.title} – Converta`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.cover
        ? [
            {
              url: post.cover,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    alternates: {
      canonical,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  if (!params.slug) {
    notFound();
  }
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const canonical =
    `${process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url}/blog/${post.slug}`;

  return (
    <div className="space-y-16 pb-24 pt-10 sm:space-y-24">
      <Section tone="muted" description={post.excerpt}>
        <div className="flex flex-col gap-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            <ArrowLeft className="size-4" />
            Blog&apos;a dön
          </Link>
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {post.category}
            </span>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("tr-TR")}
            </p>
          </div>
          {post.cover && (
            <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card/60">
              <Image
                src={post.cover}
                alt=""
                width={1200}
                height={630}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          )}
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            <span>{post.readingTime}</span>
          </div>
          <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-li:marker:text-primary dark:prose-invert">
            {post.content}
          </article>
        </div>
      </Section>
      <ArticleJsonLd
        type="BlogPosting"
        url={canonical}
        headline={post.title}
        image={post.cover ?? siteConfig.ogImage}
        datePublished={post.date}
        dateModified={post.date}
        author={siteConfig.name}
        publisher={{
          name: siteConfig.name,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}${siteConfig.ogImage}`,
          },
        }}
        description={post.excerpt}
      />
    </div>
  );
}
