"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSearchTags } from "../repository/getSearchTags";
import Autocomplete from "react-autocomplete";
import { cn } from "@/lib/utils";
import { MessageSquareText, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchForm = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  return (
    // <div className="relative hidden md:block w-full h-full max-w-md">
    //   <form
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       const query = new URLSearchParams();
    //       query.set("q", inputValue);
    //       router.push(`/blog/search?${query.toString()}`);
    //     }}
    //   >
    //     {/*
    //<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
    //     <Input
    //       className="w-full rounded-md  px-10 py-2 text-sm bg-popover"
    //       placeholder="Search blog posts..."
    //       type="search"
    //       id="search"
    //       name="search"
    //       value={inputValue}
    //       onChange={(e) => setInputValue(e.target.value)}
    //     />
    //     <div className="absolute mt-3">{}</div> */}
    //     <Autocomplete
    //       getItemValue={(item) => item.label}
    //       items={getSearchTags()}
    //       renderItem={(item, isHighlighted) => (
    //         <div
    //           className={cn(
    //             "px-2 py-1 rounded-md cursor-pointer",
    //             isHighlighted
    //               ? "bg-gray-100 dark:bg-gray-900"
    //               : "bg-white dark:bg-gray-800"
    //           )}
    //         >
    //           {item.label}
    //         </div>
    //       )}
    //       value={inputValue}
    //       onChange={(e) => setInputValue(e.target.value)}
    //       onSelect={(val) => setInputValue(val)}
    //     />
    //   </form>
    // </div>
    <Autocomplete
      getItemValue={(item) => item.label}
      items={getSearchTags()}
      renderMenu={(items, value, style) => (
        <div
          className="absolute z-10 mt-3 max-w-3xl w-[300px] border border-border/70 bg-background rounded-md shadow-lg"
          style={{
            ...style,
          }}
        >
          {items}
        </div>
      )}
      renderInput={(props) => (
        // <div className="relative flex items-center bg-popover p-2 border-border/40 ">
        //   <SearchIcon className=" text-gray-500 dark:text-gray-400" />
        //   <Input
        //     {...props}
        //     className="w-full rounded-md  p-2 border-none focus-visible:ring-0 focus-visible:border-none bg-popover ring-0  text-sm"
        //     placeholder="Search blog posts..."
        //   />
        // </div>
        <div className="relative h-10 w-full">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
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
            "px-2 py-1 m-1 rounded-md cursor-pointer border-b border-border/70",
            isHighlighted && "bg-gray-100 dark:bg-gray-500/30"
          )}
        >
          {item.label}
        </div>
      )}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onSelect={(val) => setInputValue(val)}
    />
  );
};

export default SearchForm;
