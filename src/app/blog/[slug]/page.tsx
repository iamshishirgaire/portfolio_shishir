import "@/app/blog/styles/mdx.css";
import { notFound } from "next/navigation";
import SingleBlog from "../components/single-blog";
import { getPostBySlug, getPosts } from "../repository/getPosts";

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
