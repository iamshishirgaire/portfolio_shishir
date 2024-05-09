"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getCategories, getTags } from "../../repository/getPosts";

const SearchFilter = () => {
  const tags = getTags();
  const categories = getCategories();

  const [paramsCategories, setparamsCategories] = useState<string[]>([]);
  const [paramsTags, setparamsTags] = useState<string[]>([]);
  const router = useRouter();
  return (
    <div className="space-y-4  min-w-[250px] w-full">
      <h2 className="text-2xl font-bold">Filters</h2>
      <Accordion type="multiple" className="no-underline">
        <AccordionItem value="categories">
          <AccordionTrigger className="text-lg  font-medium">
            Categories
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="items-top flex space-x-2">
                  <Checkbox
                    className="scale-105"
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
                  ></Checkbox>
                  <label
                    key={category}
                    htmlFor={`category-${category}`}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
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
                <div key={tag} className="items-top flex space-x-2">
                  <Checkbox
                    className="scale-105"
                    id={`tag-${tag}`}
                    checked={paramsTags.includes(tag)}
                    onCheckedChange={(e) => {
                      if (e) {
                        setparamsTags([...paramsTags, tag]);
                      } else {
                        setparamsTags(paramsTags.filter((t) => t !== tag));
                      }
                    }}
                  ></Checkbox>
                  <label
                    key={tag}
                    htmlFor={`tag-${tag}`}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {tag}
                  </label>
                </div>
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
