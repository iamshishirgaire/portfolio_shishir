import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { getPosts } from "../repository/getPosts";
import SearchTile from "./components/search-tile";

export default function BlogSearch() {
  const posts = getPosts();
  return (
    <div className="container h-full px-4 py-8 md:px-6 lg:py-12">
      <div className="grid gap-8 min-h-[78vh]  lg:grid-cols-[400px_1fr]">
        <div className="space-y-6  flex  lg:sticky p-10 top-[10vh]  h-fit">
          <div className="space-y-4  min-w-[250px] w-full">
            <h2 className="text-2xl font-bold">Filters</h2>
            <Accordion collapsible type="single">
              <AccordionItem value="categories">
                <AccordionTrigger className="text-lg font-medium">
                  Categories
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox id="category-design" />
                      Design
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="category-development" />
                      Development
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="category-marketing" />
                      Marketing
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="category-business" />
                      Business
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tags">
                <AccordionTrigger className="text-lg font-medium">
                  Tags
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox id="tag-react" />
                      React
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="tag-tailwind" />
                      Tailwind
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="tag-seo" />
                      SEO
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox id="tag-productivity" />
                      Productivity
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="grid gap-6 grid-cols-1">
              {posts.map((post) => (
                <SearchTile {...post} />
              ))}
            </div>
            <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
