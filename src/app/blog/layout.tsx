import { Metadata } from "next";
import BlogNavbar from "./components/navbar";

export const metadata: Metadata = {
  title: "shishir.dev",
  applicationName: "Shishir Gaire",
  description:
    "Personal website of Shishir Gaire showcasing his work and blog posts.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
};

export default function BlogDetailPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BlogNavbar />

      {children}
    </div>
  );
}
