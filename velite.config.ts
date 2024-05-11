import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// const blogPosts = defineCollection({
//   name: "blogPost",
//   pattern: "blog/**/*.mdx",
//   schema: s.object({
//     slug: s.path(),
//     title: s.string(),
//     description: s.string(),
//     published: s.boolean().default(false),
//     displayImage: s.string(),
//     date: s.date(),
//     content: s.mdx(),
//     tags: s.array(s.string()),
//     category: s.string(),
//     isFeatured: s.boolean().default(false),
//     toc: s.toc(),
//   }),
// });

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/")[1].replaceAll(" ", "-"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blogs/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      body: s.mdx(),
      category: s.string(),
      isFeatured: s.boolean().default(false),
      displayImage: s.string(),
      toc: s.toc(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,

      [rehypePrettyCode, { theme: "dark-plus" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
