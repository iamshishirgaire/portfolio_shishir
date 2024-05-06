import Link from "next/link";
import React from "react";
import { getPosts } from "../repository/getPosts";
import Image from "next/image";
import Post from "./post";

const LatestPosts = () => {
  const latestPosts = getPosts();
  return (
    <section className="mb-8 md:mb-12">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50">
          Latest Posts
        </h2>
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestPosts.map((post) => {
          return <Post key={post.slugAsParams} post={post}></Post>;
        })}
      </div>
    </section>
  );
};

export default LatestPosts;
