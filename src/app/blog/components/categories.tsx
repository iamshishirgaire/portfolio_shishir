import Link from "next/link";
import { getCategories } from "../repository/post";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PostsCategories = ({ onItemClick }: { onItemClick?: () => void }) => {
  const categories = getCategories();
  return (
    <section className="mb-8 md:mb-12">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50">
          Categories
        </h2>
      </div>
      <ScrollArea className="h-[40px] w-[100vw]">
        {categories.map((category) => (
          <Link
            onClick={onItemClick}
            key={category}
            className="m-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
            href={`blog/search?category=${category.toLowerCase()}`}
          >
            {category.toUpperCase()}
          </Link>
        ))}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default PostsCategories;
