import { SocialLinks } from "../data/links";
import { Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import BlogToWeb from "./blog-to-web";

const Footer = () => {
  return (
    <>
      <footer className="flex   gap-2 py-6 w-full justify-between px-4 md:px-6 border-t">
        <Link href={SocialLinks.github} target="_blank">
          <div className="flex flex-row gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-lg">
            <Github
              className="text-gray-500 dark:text-gray-400"
              size={17}
            ></Github>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              iamshishirgaire
            </p>
          </div>
        </Link>
        <div className="flex flex-col md:flex-row gap-2">
          <BlogToWeb></BlogToWeb>
          <Badge variant={"destructive"}>Under development</Badge>
        </div>
      </footer>
    </>
  );
};

export default Footer;
