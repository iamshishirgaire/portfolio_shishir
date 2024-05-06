import Link from "next/link";
import { getCategories } from "../repository/getPosts";

const PostsCategories = () => {
  const categories = getCategories();
  return (
    <section className="mb-8 md:mb-12">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50">
          Categories
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            href="#"
          >
            {category.toUpperCase()}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PostsCategories;
