import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { getAllPosts } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog – Converta",
  description:
    "E-ticaret büyümesi, entegrasyonlar ve dijital pazarlama üzerine Converta tarafından hazırlanan içerikler.",
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-16 pb-24 pt-10 sm:space-y-24">
      <Section
        eyebrow="Blog"
        title="E-ticaret büyümesine dair içgörüler"
        description="Operasyon, teknoloji ve pazarlamayı nasıl tek çatı altında buluşturduğumuzu deneyimlerden öğrenin."
        tone="muted"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col gap-4 rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <Badge className="rounded-full bg-primary/85 text-primary-foreground">
                  {post.category}
                </Badge>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("tr-TR")}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {post.readingTime}
              </div>
              <div className="mt-auto flex flex-wrap gap-2 text-xs text-muted-foreground">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
