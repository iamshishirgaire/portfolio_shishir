"use client";
import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";

import { MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import SearchForm from "./search-form";
import { Suspense, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import PostsCategories from "./categories";
import Tags from "./tags";
import MobileSearchForm from "./mobile_search_form";

const BlogNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="px-4 lg:px-32 h-14 flex items-center sticky border-b-2 border-border/40 top-0 z-10 bg-background/90 backdrop-blur-sm justify-between">
        <Link className="flex items-center justify-center" href="/blog">
          <p className="font-extrabold text-3xl">
            shishir<span className="text-primary">.dev</span>
          </p>
          <span className="sr-only">Portfolio</span>
        </Link>
        <div className=" gap-3 items-center hidden lg:flex">
          <div className="flex md:hidden">
            <Button variant={"ghost"} size={"icon"}>
              <SearchIcon className=" text-gray-500 dark:text-gray-400" />
            </Button>
          </div>
          <Suspense>
            <SearchForm></SearchForm>
          </Suspense>
          <div className="p-1">
            <ThemeToggler></ThemeToggler>
          </div>
        </div>
        <div className="lg:hidden flex justify-end w-full me-1">
          <ThemeToggler></ThemeToggler>
        </div>
        <Drawer onOpenChange={setOpen} open={open}>
          <DrawerTrigger asChild>
            <Button className="lg:hidden px-2" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="p-4 pb-10">
            <div className="h-7"></div>
            <PostsCategories></PostsCategories>
            <Tags></Tags>
            <MobileSearchForm onSubmit={setOpen}></MobileSearchForm>
          </DrawerContent>
        </Drawer>
      </header>
    </>
  );
};

export default BlogNavbar;

export function LinkComponent({
  href,
  displayText,
}: {
  href: string;
  displayText: string;
}) {
  return (
    <DrawerClose asChild>
      <Link
        className="text-sm ps-4 font-medium border-b-2 border-border/25 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md px-2 py-2 "
        href={href}
      >
        {displayText}
      </Link>
    </DrawerClose>
  );
}
