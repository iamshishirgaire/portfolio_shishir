"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const SearchForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative hidden md:block w-full max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const query = new URLSearchParams();
          query.set("q", inputValue);
          router.push(`/blog/search?${query.toString()}`);
        }}
      >
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <Input
          className="w-full rounded-md bg-white px-10 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 dark:bg-gray-950 dark:text-gray-50 dark:focus:ring-gray-400"
          placeholder="Search blog posts..."
          type="search"
          id="search"
          name="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
