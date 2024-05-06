import React from "react";
import { TPost } from "../repository/getPosts";
import { MDXContent } from "@/components/mdx-component";
import { DashboardTableOfContents } from "./toc";

export default function SingleBlog({ post }: { post: TPost }) {
  return (
    <div className="grid  sm:grid-cols-1 lg:grid-cols-[2fr_6fr_2fr] gap-8 w-full mx-auto py-12 px-4 md:px-6">
      <div />
      <div className="max-w-4xl">
        <article className="prose min-w-full  prose-gray dark:prose-invert">
          <h1 className="text-4xl sm:text-2xl whitespace-break-spaces font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-gray-500  dark:text-gray-400 mb-8">
            Posted on {new Date(post.date).toDateString()}
          </p>
          <div className="  w-[95vw] lg:w-full">
            <MDXContent code={post.body} />
          </div>
        </article>
      </div>
      <div className="pr-[20px] hidden lg:flex sticky p-10 top-[10vh]  h-fit border rounded-md">
        <DashboardTableOfContents toc={post.toc} />
      </div>
    </div>
  );
}
