import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Pagination } from "@/components/ui/pagination";
import { SearchIcon } from "lucide-react";

export default function BlogSearch() {
  return (
    <div className="container h-screen px-4 py-8 md:px-6 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Filters</h2>
            <Accordion collapsible type="single">
              <AccordionItem value="categories">
                <AccordionTrigger className="text-lg font-medium">
                  Categories
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox id="category-design" />
                      Design
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="category-development" />
                      Development
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="category-marketing" />
                      Marketing
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="category-business" />
                      Business
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tags">
                <AccordionTrigger className="text-lg font-medium">
                  Tags
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox id="tag-react" />
                      React
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="tag-tailwind" />
                      Tailwind
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="tag-seo" />
                      SEO
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="tag-productivity" />
                      Productivity
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="date-range">
                <AccordionTrigger className="text-lg font-medium">
                  Date Range
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Blog Search</h1>
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <Input
                className="w-full rounded-md border border-gray-300 px-12 py-2 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-950 dark:focus:border-primary"
                placeholder="Search blog posts..."
                type="text"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    <Link className="hover:text-primary" href="#">
                      Mastering Responsive Design: Tips and Techniques
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>John Doe</span>
                    <span>May 6, 2024</span>
                  </div>
                  <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
                    In this blog post, we'll explore the key principles of
                    responsive web design and share practical tips to help you
                    create websites that adapt seamlessly to different devices
                    and screen sizes.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    <Link className="hover:text-primary" href="#">
                      Unleashing the Power of Tailwind CSS: A Comprehensive
                      Guide
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>Jane Smith</span>
                    <span>April 15, 2024</span>
                  </div>
                  <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
                    Discover how Tailwind CSS can revolutionize your web
                    development workflow. In this guide, we'll dive deep into
                    the utility-first approach, explore the extensive class
                    library, and learn how to customize and extend Tailwind to
                    fit your project's needs.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    <Link className="hover:text-primary" href="#">
                      Optimizing Your Website for Search Engine Success
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>Sarah Lee</span>
                    <span>March 28, 2024</span>
                  </div>
                  <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
                    In this comprehensive guide, we'll cover the essential
                    techniques for optimizing your website for search engines.
                    From keyword research to on-page optimization and link
                    building, you'll learn how to improve your website's
                    visibility and drive more organic traffic.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    <Link className="hover:text-primary" href="#">
                      Boost Your Productivity with These Essential Tools
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>Michael Chen</span>
                    <span>February 10, 2024</span>
                  </div>
                  <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
                    Discover a curated selection of productivity-boosting tools
                    that can help you streamline your workflow, manage your time
                    more effectively, and achieve your goals with greater
                    efficiency.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    <Link className="hover:text-primary" href="#">
                      The Future of Web Development: Trends and Predictions
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>Emily Wang</span>
                    <span>January 5, 2024</span>
                  </div>
                  <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
                    In this forward-looking article, we'll explore the emerging
                    trends and technologies that are shaping the future of web
                    development. From the rise of WebAssembly to the growing
                    importance of edge computing, you'll gain insights into the
                    evolving landscape of the web.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    <Link className="hover:text-primary" href="#">
                      Building a Successful Online Presence: A Step-by-Step
                      Guide
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>David Lee</span>
                    <span>December 20, 2023</span>
                  </div>
                  <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
                    In this comprehensive guide, we'll walk you through the
                    essential steps to building a strong online presence for
                    your business. From creating a professional website to
                    leveraging social media and content marketing, you'll learn
                    how to attract and engage your target audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
