import { MDXContent } from "@/components/mdx-component";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "../repository/getPosts";
import "@/app/blog/styles/mdx.css";
import { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import SingleBlog from "../components/single-blog";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const doc = getPostBySlug(params.slug);

  if (!doc) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", doc.title ?? doc.description);
  ogUrl.searchParams.set("type", "Documentation");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogUrl.toString()],
    },
  };
}
export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}
export default function BlogDetailPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return <SingleBlog post={post}></SingleBlog>;
}
