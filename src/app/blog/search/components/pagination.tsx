import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const BlogFooterPagination = ({
  totalPosts,
  currentPage,
  onPageSet,
}: {
  totalPosts: number;
  currentPage: number;
  onPageSet: (page: number) => void;
}) => {
  const params = useSearchParams();
  const router = useRouter();

  const itemsPerPage = 10;
  const handlePrevPage = () => {
    if (currentPage > 0) onPageSet(currentPage - 1);
    const params = new URLSearchParams();
    params.append("page", (currentPage - 1).toString());
    router.push(`\blog\search\?${params.toString()}`);
  };
  const handleNextPage = () => {
    if (currentPage < totalPosts / itemsPerPage - 1) onPageSet(currentPage + 1);
    const params = new URLSearchParams();
    params.append("page", (currentPage + 1).toString());
    router.push(`\blog\search\?${params.toString()}`);
  };
  return (
    <Pagination className="pt-32">
      <PaginationContent>
        <PaginationPrevious
          onClick={handlePrevPage}
          aria-disabled={currentPage <= 1}
          tabIndex={currentPage <= 1 ? -1 : undefined}
          className={
            currentPage <= 1 ? "pointer-events-none opacity-50" : undefined
          }
        ></PaginationPrevious>
        <PaginationNext
          onClick={handleNextPage}
          aria-disabled={currentPage >= totalPosts / itemsPerPage - 1}
          tabIndex={
            currentPage >= totalPosts / itemsPerPage - 1 ? -1 : undefined
          }
          className={
            currentPage >= totalPosts / itemsPerPage - 1
              ? "pointer-events-none opacity-50"
              : undefined
          }
        ></PaginationNext>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogFooterPagination;
