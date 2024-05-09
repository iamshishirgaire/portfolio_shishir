import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TPost } from "../repository/getPosts";
import { Badge } from "@/components/ui/badge";

const Post = ({ post }: { post: TPost }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md border transition-shadow duration-300 ">
      <Link className="block" href={`/blog/${post.slugAsParams}`}>
        <Image
          alt="Blog post thumbnail"
          className="w-full h-48 object-cover"
          height={250}
          src={post.displayImage}
          style={{
            aspectRatio: "400/250",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg min-h-10 font-bold text-gray-900 dark:text-gray-50 mb-2">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
            {post.description}
          </p>
        </div>
        <div className="flex flex-wrap p-4 gap-2  mt-2">
          {post.tags.map((tech, idx) => (
            <Badge
              key={idx}
              className="px-3 py-1 select-none"
              variant="secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Post;
