import { posts } from "@site/content";

export type TPost = (typeof posts)[0];

export const getPosts = () => {
  const publishedPosts = posts.filter((post) => post.published);
  publishedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return publishedPosts;
};
export const getPostByQueryFilter = ({
  query,
  categories,
  tags,
}: {
  query: string | null;
  categories: string[] | null;
  tags: string[] | null;
}) => {
  const publishedPosts = posts.filter((post) => post.published);
  if (!query && !categories && !tags) return publishedPosts;
  if (query && !categories && !tags) {
    return publishedPosts.filter((post) => {
      return post.title.toLowerCase().includes(query.toLowerCase());
    });
  }
  if (!query && categories && !tags) {
    return getPostByCategory(categories);
  }
  if (!query && !categories && tags) {
    return getPostByTag(tags);
  }
  if (query && categories && !tags) {
    return publishedPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query.toLowerCase()) &&
        categories.includes(post.category)
      );
    });
  }
  if (query && !categories && tags) {
    return publishedPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query.toLowerCase()) &&
        tags.some((t) => post.tags.includes(t))
      );
    });
  }
  if (!query && categories && tags) {
    return publishedPosts.filter((post) => {
      return (
        categories.includes(post.category) ||
        tags.some((t) => post.tags.includes(t))
      );
    });
  }
  if (query && categories && tags) {
    return publishedPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query.toLowerCase()) &&
        categories.includes(post.category) &&
        tags.some((t) => post.tags.includes(t))
      );
    });
  }
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
  if (!categories) return getPostByTag(tags!!);
  if (!tags) return getPostByCategory(categories);
  const filteredPosts = publishedPosts.filter((post) => {
    return (
      categories.includes(post.category) &&
      tags.some((t) => post.tags.includes(t))
    );
  });
  return filteredPosts;
};
