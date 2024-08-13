import Fuse from "fuse.js";
import { posts } from "@site/content";
import { get } from "http";

export type TPost = (typeof posts)[0];

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["tags", "category", "title", "body", "description"],
};

export const getPosts = () => {
  const publishedPosts = posts.filter((post) => post.published);
  publishedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return publishedPosts;
};
const transformTags = (tags?: string[]) => {
  return tags ? tags.map((tag) => ({ tags: tag })) : [];
};
const transformCategories = (catgs?: string[]) => {
  return catgs ? catgs.map((cat) => ({ category: cat })) : [];
};
const fuse = new Fuse(getPosts(), fuseOptions);

export const getPostByQueryFilter = ({
  query,
  categories,
  tags,
}: {
  query: string | null;
  categories: string[] | null;
  tags: string[] | null;
}) => {
  const fuseResult = fuse.search({
    $or: [
      ...transformCategories(categories ?? []),
      ...transformTags(tags ?? []),
      {
        title: query ?? "",
      },
    ],
  });
  return fuseResult.map((result) => result.item);
};

export const getCategories = () => {
  const categories = posts.map((post) => {
    return post.category;
  });
  return Array.from(new Set(categories));
};

export const getTags = () => {
  const tags = posts.flatMap((post) => {
    return post.tags;
  });
  const uniqueTags = Array.from(new Set(tags));
  const objTags = uniqueTags.map((tag) => {
    return { label: tag, value: tag.toLowerCase() };
  });
  return objTags;
};

export const getPostBySlug = (slug: string) => {
  return posts.find((post) => post.slugAsParams === slug);
};

export const getLatestFeaturedPost = () => {
  const featuredPosts = posts.filter(
    (post) => post.isFeatured && post.published
  );
  featuredPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return featuredPosts[0];
};

export const getFeaturedPosts = () => {
  const featuredPosts = posts.filter(
    (post) => post.isFeatured && post.published
  );
  featuredPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return featuredPosts;
};

export const getPostByCategory = (category: string[]) => {
  const publishedPosts = posts.filter((post) => post.published);
  const filteredPosts = publishedPosts.filter((post) => {
    return category.includes(post.category);
  });
  return filteredPosts;
};
export const getPostByTag = (tag: string[]) => {
  const publishedPosts = posts.filter((post) => post.published);
  const filteredPosts = publishedPosts.filter((post) => {
    return tag.some((t) => post.tags.includes(t));
  });
  return filteredPosts;
};

export const getPostByCategoryAndTag = ({
  categories,
  tags,
}: {
  categories: string[] | null;
  tags: string[] | null;
}) => {
  const publishedPosts = posts.filter((post) => post.published);
  if (!categories && !tags) return publishedPosts;
  if (!categories && tags) return getPostByTag(tags);
  if (!tags && categories) return getPostByCategory(categories);
  const filteredPosts = publishedPosts.filter((post) => {
    return (
      categories?.includes(post.category) &&
      tags?.some((t) => post.tags.includes(t))
    );
  });
  return filteredPosts;
};
