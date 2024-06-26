import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggler } from "./theme-toggler";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { LinkComponent } from "@/app/blog/components/navbar";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

const links = {
  Projects: "/#projects",
  Techstack: "/#skills-section",
  Blog: "/blog",
  Contact: "/#contact-section",
};
const Navbar = () => {
  return (
    <>
      <header className="px-4 lg:px-32 h-14 fixed w-full flex items-center border-b-2 border-border/40 top-0 z-10 bg-background/90 backdrop-blur-sm justify-between">
        <Link className="flex items-center justify-center" href="/">
          <p className="font-extrabold text-3xl">
            shishir<span className="text-primary">.dev</span>
          </p>
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6 h-full items-center justify-center">
          <ThemeToggler></ThemeToggler>
          {Object.entries(links).map(([key, value]) => (
            <Link
              key={key}
              className="text-sm font-medium  hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md px-2 py-2 "
              href={value}
            >
              {key}
            </Link>
          ))}
        </nav>
        <div className="lg:hidden flex justify-end w-full me-1">
          <ThemeToggler></ThemeToggler>
        </div>
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="lg:hidden px-2" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="grid gap-2 py-6">
              <LinkComponent href="/#projects" displayText="Projects" />
              <LinkComponent href="/#skills-section" displayText="Techstack" />
              <LinkComponent href="/blog" displayText="Blog" />

              <LinkComponent href="/#contact-section" displayText="Contact" />
            </div>
          </DrawerContent>
        </Drawer>
      </header>
    </>
  );
};

export default Navbar;
