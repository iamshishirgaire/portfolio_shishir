import { absoluteUrl } from "@/lib/utils";
import React from "react";
import { getPostBySlug } from "../repository/getPosts";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const doc = getPostBySlug(params.slug);

  if (!doc) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", doc.title ?? doc.description);
  ogUrl.searchParams.set("type", "post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      authors: ["Shishir Gaire"],
      publishedTime: doc.date,
      countryName: "Nepal",
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogUrl.toString()],
    },
  };
}
const SingleBlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default SingleBlogLayout;
