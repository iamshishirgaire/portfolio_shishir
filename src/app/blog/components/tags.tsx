import Link from "next/link";
import React from "react";
import { getTags } from "../repository/getPosts";

const Tags = () => {
  const tags = getTags();
  return (
    <section className="mb-8 md:mb-12">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50">
          Tags
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
            href={`blog/search?tag=${tag.toLowerCase()}`}
          >
            {tag.toUpperCase()}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Tags;
