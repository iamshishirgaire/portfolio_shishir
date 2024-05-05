import Link from "next/link";
import { getLatestFeaturedPost, getPosts } from "../repository/getPosts";
import Image from "next/image";

const LatestFeaturedPost = () => {
  const latestFeatured = getLatestFeaturedPost();

  return (
    <section className="bg-background py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8  md:grid-cols-2 md:items-center">
          <div className="order-first md:order-last">
            <Image
              alt="Hero Image"
              className="rounded-lg bg-popover"
              height="400"
              src={latestFeatured.displayImage}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {latestFeatured.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {latestFeatured.description}
            </p>
            <div>
              <Link
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-900"
                href={`/blog/${latestFeatured.slugAsParams}`}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestFeaturedPost;
