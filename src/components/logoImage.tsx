"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
export function LogoImage({ src, alt }: { src: string; alt: string }) {
  const theme = useTheme();
  if (
    src === "/icons/nextjs.svg" ||
    (src === "/icons/expo.svg" && theme.theme === "dark")
  ) {
    return (
      <Image className="invert" alt={alt} src={src} height={40} width={40} />
    );
  }
  return <Image alt={alt} src={src} height={40} width={40} />;
}
