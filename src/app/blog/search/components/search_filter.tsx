"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Filter } from "lucide-react";
import { useState } from "react";
import { getCategories, getTags } from "../../repository/getPosts";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

const SearchFilter = () => {
  const tags = getTags();
  const categories = getCategories();
  const [paramsCategories, setparamsCategories] = useState<string[]>([]);
  const [paramsTags, setparamsTags] = useState<string[]>([]);
  const router = useRouter();
  return (
    <div className="space-y-4  min-w-[250px] w-full">
      <h2 className="text-2xl font-bold">Filters</h2>
      <Accordion collapsible type="single">
        <AccordionItem value="categories">
          <AccordionTrigger className="text-lg font-medium">
            Categories
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <Label key={category} className="flex items-center gap-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={paramsCategories.includes(category)}
                    onCheckedChange={(e) => {
                      if (e) {
                        setparamsCategories([...paramsCategories, category]);
                      } else {
                        setparamsCategories(
                          paramsCategories.filter((c) => c !== category)
                        );
                      }
                    }}
                  />
                  {category}
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tags">
          <AccordionTrigger className="text-lg font-medium">
            Tags
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {tags.map((tag) => (
                <Label key={tag} className="flex items-center gap-2">
                  <Checkbox
                    id={`tag-${tag}`}
                    checked={paramsTags.includes(tag)}
                    onCheckedChange={(e) => {
                      if (e) {
                        setparamsTags([...paramsTags, tag]);
                      } else {
                        setparamsTags(paramsTags.filter((t) => t !== tag));
                      }
                    }}
                  />
                  {tag}
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        variant={"outline"}
        onClick={() => {
          const query = new URLSearchParams();
          if (paramsCategories.length > 0) {
            query.append("category", paramsCategories.join(","));
          }
          if (paramsTags.length > 0) {
            query.append("tag", paramsTags.join(","));
          }
          router.push(`/blog/search?${query.toString()}`);
        }}
      >
        <Filter className="me-2 size-5"></Filter>
        Filter
      </Button>
    </div>
  );
};

export default SearchFilter;
