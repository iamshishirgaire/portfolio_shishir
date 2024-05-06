import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "../repository/getPosts";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-component";
import { SocialLinks } from "@/data/links";
import { Avatar } from "@/components/ui/avatar";

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
    <div className="flex">
      <div className="bg-gray-50 pt-10 w-[20rem] max-w-xl"></div>
      <div className="max-w-4xl pt-10 m-10">
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-bold text-3xl">{post.title}</h1>
          <h3 className="font-semibold text-xl my-4">{post.description}</h3>
          <div className="  my-5 p-3   flex flex-row gap-4">
            <Avatar>
              <Image
                className="object-cover"
                alt="Shishir Gaire"
                src="/images/profile.jpg"
                height={50}
                width={50}
              />
            </Avatar>
            <div className="flex flex-col">
              <p className="font-semibold">Shishir Gaire</p>
              <p className="text-gray-500">
                {new Date(post.date).toDateString()}
              </p>
            </div>
          </div>
          <hr className="bg-gray-500 w-full mb-10" />
        </div>

        <article className="prose lg:prose-xl">
          <MDXContent code={post.body} />
        </article>
      </div>
    </div>
  );
}
