import BlogNavbar from "./components/navbar";

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
