import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  const [firstName, lastName] = name.split(" ");
  return firstName.charAt(0) + lastName.charAt(0);
}

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const getRandomBorder = () => {
  const colors = [
    "border-blue-500",
    "border-red-400",
    "border-teal-500",
    "border-green-500",
    "border-pink-500",
    "border-slate-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
