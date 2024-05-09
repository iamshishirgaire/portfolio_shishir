"use client";

import * as React from "react";
import { LaptopIcon, Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunIcon className="me-2 size-4"></SunIcon> Light
        </DropdownMenuItem>
        <hr />
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonIcon className="me-2 size-4"></MoonIcon> Dark
        </DropdownMenuItem>
        <hr />
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <LaptopIcon className="me-2 size-4"></LaptopIcon> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
