import { posts } from "@site/content";

export type TPost = (typeof posts)[0];

export const getPosts = () => {
  const publishedPosts = posts.filter((post) => post.published);
  publishedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return publishedPosts;
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
  return Array.from(new Set(tags));
};

export const getPostBySlug = (slug: string) => {
  return posts.find((post) => post.slug === slug);
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
