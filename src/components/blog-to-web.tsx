"use client";
import { cn } from "@/lib/utils";
import { SocialLinks } from "../data/links";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BlogToWeb = () => {
  const pathName = usePathname();
  const isVisible = pathName.includes("/blog");

  console.log(isVisible);
  return (
    <div>
      {isVisible && (
        <Link href={SocialLinks.web}>
          <div
            className={cn(
              "flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-lg",
              pathName === "/blog" && "xl:me-0 me-10 "
            )}
          >
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
