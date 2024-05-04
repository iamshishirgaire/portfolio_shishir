import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet";
import { MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

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
          <div className="relative hidden md:block w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full rounded-md bg-white px-10 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 dark:bg-gray-950 dark:text-gray-50 dark:focus:ring-gray-400"
              placeholder="Search blog posts..."
              type="search"
            />
          </div>
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
              <Link
                className="text-sm font-medium  hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md px-2 py-2 "
                href="/#projects"
              >
                Projects
              </Link>
              <Link
                className="text-sm font-medium  hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md px-2 py-2"
                href="/#skills-section"
              >
                Techstack
              </Link>
              <Link
                className="text-sm font-medium  hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md px-2 py-2 "
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="text-sm font-medium  hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md px-2 py-2 "
                href="/#contact-section"
                scroll={true}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

export default BlogNavbar;
