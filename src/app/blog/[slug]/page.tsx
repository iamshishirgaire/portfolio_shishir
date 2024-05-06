import { MDXContent } from "@/components/mdx-component";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "../repository/getPosts";
import "@/app/blog/styles/mdx.css";
import { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import { DashboardTableOfContents } from "../components/toc";
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

  return (
    <SingleBlog post={post}></SingleBlog>
    // <div className="flex">
    //   <div className="w-[300px]"></div>
    //   <div className="max-w-4xl  bg-red-300 flex flex-col items-start   pt-10 m-10">
    //     <div className="flex max-w-4xl flex-col justify-start items-start">
    //       <h1 className="font-bold text-3xl">{post.title}</h1>
    //       <h3 className="font-semibold text-xl my-4">{post.description}</h3>
    //       <div className="  my-5 p-3   flex flex-row gap-4">
    //         <Avatar>
    //           <Image
    //             className="object-cover"
    //             alt="Shishir Gaire"
    //             src="/images/profile.jpg"
    //             height={50}
    //             width={50}
    //           />
    //         </Avatar>
    //         <div className="flex flex-col">
    //           <p className="font-semibold">Shishir Gaire</p>
    //           <p className="text-gray-500">
    //             {new Date(post.date).toDateString()}
    //           </p>
    //         </div>
    //       </div>
    //       <hr className="bg-gray-500 w-full mb-10" />
    //     </div>

    //     <article className="prose-sm lg:prose-xl">
    //       <MDXContent code={post.body} />
    //     </article>
    //   </div>
    //   <div className="bg-background/50 border-r hidden lg:flex border-border/25 pt-10 w-[20rem] max-w-xl">
    //     <DashboardTableOfContents toc={post.toc}></DashboardTableOfContents>
    //   </div>
    // </div>
  );
}
