import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PostsCategories from "./components/categories";
import FeaturedPosts from "./components/featured";
import LatestFeaturedPost from "./components/latest-featured";
import LatestPosts from "./components/latestPosts";
import Tags from "./components/tags";

export default function BlogPage() {
  return (
    <div className="bg-background">
      <LatestFeaturedPost></LatestFeaturedPost>
      <main className="container border-t mx-auto px-4 md:px-6 py-8 md:py-12">
        <Tags></Tags>
        <LatestPosts></LatestPosts>
        <PostsCategories></PostsCategories>
        <FeaturedPosts></FeaturedPosts>
      </main>
    </div>
  );
}
