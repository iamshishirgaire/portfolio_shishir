"use client";
import React, { useState } from "react";
import { getSearchTags } from "../repository/getSearchTags";
import Link from "next/link";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const TagAutoCompletions = ({
  query,
  onSelect,
}: {
  query: string;
  onSelect: (query: string) => void;
}) => {
  const [hidden, sethidden] = useState(false);
  if (!query) {
    return null;
  }
  const tags = getSearchTags();
  return (
    !hidden && (
      <ScrollArea className="h-[300px] w-[300px]  p-4 bg-popover/95 shadow-lg rounded-md border border-border/40 backdrop-blur-2xl">
        <ul className="divide-y">
          {tags.map((tag) => {
            return (
              <li key={tag} className="p-2">
                <Link
                  onClick={() => {
                    onSelect(tag);
                    sethidden(true);
                  }}
                  href={`http://localhost:3100/blog/search?tag=${tag}`}
                  className="block text-sm dark:text-gray-200  rounded-md p-1  "
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    )
  );
};

export default TagAutoCompletions;
