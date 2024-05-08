import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import SearchForm from "./search-form";

const BlogNavbar = () => {
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
          <SearchForm></SearchForm>
          <div className="p-1">
            <ThemeToggler></ThemeToggler>
          </div>
        </div>
        <div className="lg:hidden flex justify-end w-full me-1">
          <ThemeToggler></ThemeToggler>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden px-2" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-2 py-6">
              <h1>To be implemented</h1>
            </div>
          </SheetContent>
        </Sheet>
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
    <SheetClose asChild>
      <Link
        className="text-sm font-medium  hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md px-2 py-2 "
        href={href}
      >
        {displayText}
      </Link>
    </SheetClose>
  );
}
