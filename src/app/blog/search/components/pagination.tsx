import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

const BlogFooterPagination = () => {
  return (
    <Pagination>
      <PaginationPrevious />
      <PaginationItem>
        <PaginationLink>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>3</PaginationLink>
      </PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>
        <PaginationLink>10</PaginationLink>
      </PaginationItem>
      <PaginationNext />
    </Pagination>
  );
};

export default BlogFooterPagination;
