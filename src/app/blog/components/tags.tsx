import Link from "next/link";
import React from "react";
import { getTags } from "../repository/getPosts";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Tags = ({ onItemClick }: { onItemClick?: () => void }) => {
  const tags = getTags();
  return (
    <section className="mb-8 md:mb-12">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50">
          Tags
        </h2>
      </div>
      <ScrollArea className="h-[40px] w-[100vw]">
        {tags.map((tag) => (
          <Link
            onClick={onItemClick}
            key={tag}
            className=" mx-1 my-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
            href={`blog/search?tag=${tag.toLowerCase()}`}
          >
            {tag.toUpperCase()}
          </Link>
        ))}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default Tags;
