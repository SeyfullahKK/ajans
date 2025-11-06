import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/paketler",
    "/hizmetler",
    "/hakkimizda",
    "/blog",
    "/iletisim",
    "/iletisim/tesekkur",
    "/kvkk",
    "/cerez-politikasi",
    "/sartlar",
  ];

  const posts = await getAllPosts();

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }));

  return [...routes, ...blogRoutes];
}
