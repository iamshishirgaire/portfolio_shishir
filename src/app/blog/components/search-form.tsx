"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { RabbitIcon, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Autocomplete from "react-autocomplete";
import { getSearchTags } from "../repository/getSearchTags";

const SearchForm = ({ onSubmit }: { onSubmit?: () => void }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      getItemValue={(item) => item.label}
      items={getSearchTags().filter((tag) => {
        return tag.label.toLowerCase().includes(inputValue.toLowerCase());
      })}
      renderMenu={(items, value, style) => (
        <div
          className="absolute hidden md:flex flex-col z-10 mt-3 max-w-3xl w-[300px] border border-border/45 bg-popover/95 backdrop-blur-2xl backdrop-brightness-200  rounded-md shadow-lg"
          style={{
            ...style,
          }}
        >
          {items}

          {items.length === 0 && (
            <div className="p-2 text-center text-gray-500 dark:text-gray-400">
              <RabbitIcon className="w-6 h-6 pt-1 mx-auto" />
              <p className="text-sm pt-2">No results found</p>
            </div>
          )}
        </div>
      )}
      renderInput={(props) => (
        <div className="relative h-10 w-full cursor-pointer">
          <SearchIcon
            onClick={() => {
              if (inputValue) {
                const query = new URLSearchParams();
                query.set("q", inputValue);
                router.push(`/blog/search?${query.toString()}`);
                onSubmit && onSubmit();
              }
            }}
            className="absolute cursor-pointer bg-primary/30 hover:scale-105 transition-transform duration-150 text-primary rounded-md p-1 left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
          />
          <Input
            {...props}
            type="text"
            placeholder="Search blog posts..."
            className="pl-10 pr-3 py-2 text-md w-full border  rounded shadow-sm focus:outline-none  focus:border-transparent" // Add additional styling as needed
          />
        </div>
      )}
      renderItem={(item, isHighlighted) => (
        <div
          className={cn(
            "px-2 py-1 m-1 rounded-md cursor-pointer flex  border-b border-border/70",
            isHighlighted && "bg-gray-100 dark:bg-gray-500/30"
          )}
        >
          {Array.from(item.label as string).map((char, index) => {
            return (
              <p key={index}>
                <span
                  className={cn(
                    inputValue.toLowerCase().includes(char.toLowerCase()) &&
                      "text-primary"
                  )}
                >
                  {char}
                </span>
              </p>
            );
          })}
        </div>
      )}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onSelect={(val) => {
        onSubmit && onSubmit();
        setInputValue(val);
        const query = new URLSearchParams();
        query.set("q", val);
        router.push(`/blog/search?${query.toString()}`);
      }}
    />
  );
};

export default SearchForm;
