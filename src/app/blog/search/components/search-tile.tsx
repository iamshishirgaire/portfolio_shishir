import Link from "next/link";
import React from "react";
import { TPost } from "../../repository/getPosts";

const SearchTile = (post: TPost) => {
  return (
    <Link href={post.slugAsParams}>
      <div className="rounded-lg border bg-popover px-4 py-3 hover:bg-gray-50 dark:hover:bg-zinc-950">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">
            <p>{post.title}</p>
          </h3>
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span className=" font-bold">{"Shishir Gaire"}</span>
            <span>{new Date(post.date).toDateString()}</span>
          </div>
          <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchTile;
