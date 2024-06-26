"use client";
import { useSearchParams } from "next/navigation";
import { getPostByQueryFilter } from "../repository/getPosts";
import BlogFooterPagination from "./components/pagination";
import SearchTile from "./components/search-tile";
import SearchFilter from "./components/search_filter";
import { Suspense, useState } from "react";

function BlogSearch() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const query = params.get("q");
  const category = params.get("category");
  const tag = params.get("tag");
  const currentPage = parseInt(params.get("page") ?? "0");
  const posts = getPostByQueryFilter({
    query: query,
    categories: category ? [category] : null,
    tags: tag ? [tag] : null,
  });
  const [page, setPage] = useState<number>(currentPage);
  const postsInView = posts.slice(page * 10, page * 10 + 10);

  return (
    <div className="container h-full px-4 py-8 md:px-6 lg:py-12">
      <div className="grid gap-8 min-h-[78vh]  lg:grid-cols-[400px_1fr]">
        <div className="space-y-6  flex  lg:sticky p-10 top-[10vh]  h-fit">
          <SearchFilter></SearchFilter>
        </div>
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="grid gap-6 grid-cols-1">
              {
                /* Empty state */
                posts.length === 0 && (
                  <div className="flex items-center justify-center h-64">
                    <p className="text-lg font-medium text-gray-500">
                      No results found
                    </p>
                  </div>
                )
              }
              {postsInView.map((post) => (
                <SearchTile key={post.slugAsParams} {...post} />
              ))}
            </div>
            {posts.length > 0 && (
              <BlogFooterPagination
                onPageSet={setPage}
                totalPosts={posts.length}
                currentPage={currentPage}
              ></BlogFooterPagination>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function BlogPage() {
  return (
    <Suspense>
      <BlogSearch></BlogSearch>
    </Suspense>
  );
}
