import { posts } from "@site/content";

export const getSearchTags = () => {
  const publishedPosts = posts.filter((post) => post.published);
  const tags = publishedPosts.flatMap((post) => post.tags);
  const uniqueTags = Array.from(new Set(tags));
  const tagObjects = uniqueTags.map((tag) => ({
    value: tag.toLocaleLowerCase(),
    label: tag,
  }));
  return Array.from(tagObjects);
};
