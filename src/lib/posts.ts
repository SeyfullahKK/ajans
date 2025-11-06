import fs from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";
import matter from "gray-matter";
import { z } from "zod";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

const frontMatterSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  cover: z.string().optional(),
});

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostFrontMatter = z.infer<typeof frontMatterSchema>;

export type BlogPostMeta = PostFrontMatter & {
  slug: string;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: ReactElement;
};

function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} dk okuma`;
}

async function readPostFile(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf-8");
  return { fileContent, filePath };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const { fileContent } = await readPostFile(slug);
        const { data, content } = matter(fileContent);
        const meta = frontMatterSchema.parse(data);
        return {
          ...meta,
          slug,
          readingTime: estimateReadingTime(content),
        };
      }),
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  try {
    const { fileContent } = await readPostFile(slug);
    const { frontmatter, content } = await compileMDX<PostFrontMatter>({
      source: fileContent,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
      },
    });

    const meta = frontMatterSchema.parse(frontmatter);

    return {
      ...meta,
      slug,
      readingTime: estimateReadingTime(fileContent),
      content,
    };
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
