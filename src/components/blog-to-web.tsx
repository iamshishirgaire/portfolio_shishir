"use client";
import { SocialLinks } from "../data/links";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BlogToWeb = () => {
  const pathname = usePathname();
  const isVisible = pathname.includes("/blog");

  return (
    <div>
      {isVisible && (
        <Link href={SocialLinks.web}>
          <div className="flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-lg">
            <GlobeIcon
              className="text-gray-500 dark:text-gray-400"
              size={17}
            ></GlobeIcon>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Portfolio
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default BlogToWeb;
