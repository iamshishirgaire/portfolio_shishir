import { MDXContent } from "@/components/mdx-component";
import Image from "next/image";
import { TPost } from "../repository/getPosts";
import { DashboardTableOfContents, FloatingToc } from "./toc";

export default function SingleBlog({ post }: { post: TPost }) {
  return (
    <div className="grid scroll-auto  sm:grid-cols-1 lg:grid-cols-[2fr_6fr_2fr] gap-8 w-full mx-auto py-12 px-4 md:px-6">
      <div />
      <FloatingToc post={post} />
      <div className="max-w-4xl">
        <article className="prose min-w-full  prose-gray dark:prose-invert">
          <h1 className="lg:text-4xl text-2xl whitespace-break-spaces font-bold mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-2">
            <div className=" w-[40px]">
              <Image
                src="/images/profile.jpg"
                alt="profileauthor"
                height={40}
                width={40}
                className="rounded-full mx-auto aspect-square object-cover"
              />
            </div>

            <div className="flex  flex-col ">
              <p className="text-gray-500 m-0 font-semibold p-0 dark:text-gray-400">
                Shishir Gaire
              </p>
              <p className="text-gray-500 m-0 p-0  dark:text-gray-400">
                Posted on {new Date(post.date).toDateString()}
              </p>
            </div>
          </div>
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
