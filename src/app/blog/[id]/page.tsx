export default function BlogDetailPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return <div>{id}</div>;
}
