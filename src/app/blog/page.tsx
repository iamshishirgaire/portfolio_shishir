import Link from "next/link";
import { Navbar } from "./components/navbar";

export default function BlogPage() {
  return (
    <div>
      <header className="bg-background py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 bg-popover md:grid-cols-2 md:items-center">
            <div className="order-first md:order-last">
              <img
                alt="Hero Image"
                className="rounded-lg bg-popover"
                height="400"
                src="/icons/react.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                The react 19 update
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Why react 19 update matters and how it will affect your web
                development perspective.
              </p>
              <div>
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-900"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <section className="mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50">
              Tags
            </h2>
            <Link
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              View all
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              Tailwind CSS
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              Web Development
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              Frontend
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              CSS
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              JavaScript
            </Link>
          </div>
        </section>

        <section className="mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50">
              Latest Posts
            </h2>
            <Link
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
              <Link className="block" href="#">
                <img
                  alt="Blog post thumbnail"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                    Unleash Your Creativity with Figma
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    Figma is a powerful design tool that has revolutionized the
                    way we create digital products. In this post, we'll explore
                    the key features of Figma and how you can use it to unleash
                    your creativity and design stunning user interfaces.
                  </p>
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
              <Link className="block" href="#">
                <img
                  alt="Blog post thumbnail"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                    Mastering React Hooks: A Comprehensive Guide
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    React Hooks have revolutionized the way we write React
                    components. In this comprehensive guide, we'll dive deep
                    into the world of React Hooks and explore how you can
                    leverage their power to create more efficient and
                    maintainable React applications.
                  </p>
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
              <Link className="block" href="#">
                <img
                  alt="Blog post thumbnail"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                    Exploring the Power of Serverless Computing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    Serverless computing has been a game-changer in the world of
                    web development. In this post, we'll explore the benefits of
                    serverless computing and how you can leverage it to build
                    scalable and cost-effective web applications.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50">
              Categories
            </h2>
            <Link
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              Tutorials
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              News
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              Guides
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              Opinions
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              Interviews
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              Reviews
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              Announcements
            </Link>
            <Link
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              href="#"
            >
              Trends
            </Link>
          </div>
        </section>
        <section className="mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50">
              Featured Posts
            </h2>
            <Link
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
              <Link className="block" href="#">
                <img
                  alt="Blog post thumbnail"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                    Building a Scalable E-commerce Platform with Next.js
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    Next.js is a powerful React framework that has become a
                    go-to choice for building scalable and performant e-commerce
                    platforms. In this post, we'll explore how you can leverage
                    the features of Next.js to build a robust and feature-rich
                    e-commerce application.
                  </p>
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
              <Link className="block" href="#">
                <img
                  alt="Blog post thumbnail"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                    Optimizing Web Performance with Lighthouse
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    Lighthouse is a powerful web performance auditing tool that
                    can help you identify and fix performance issues in your web
                    applications. In this post, we'll explore how you can use
                    Lighthouse to optimize the performance of your website and
                    provide a better user experience.
                  </p>
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-950">
              <Link className="block" href="#">
                <img
                  alt="Blog post thumbnail"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                    Exploring the Potential of WebAssembly
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    WebAssembly is a new low-level programming language that has
                    the potential to revolutionize the way we build web
                    applications. In this post, we'll explore the benefits of
                    WebAssembly and how you can leverage it to create
                    high-performance and efficient web applications.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
