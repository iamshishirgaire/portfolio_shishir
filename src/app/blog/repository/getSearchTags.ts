import { posts } from "@site/content";

export const getSearchTags = () => {
  const publishedPosts = posts.filter((post) => post.published);
  const tags = publishedPosts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
};
