"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
export function LogoImage({ src, alt }: { src: string; alt: string }) {
  const theme = useTheme();
  const iconsToInvert = ["/icons/nextjs.svg", "/icons/expo.svg"];
  if (iconsToInvert.find((i) => i === src) && theme.resolvedTheme === "dark") {
    return (
      <Image className="invert" alt={alt} src={src} height={40} width={40} />
    );
  }

  return <Image alt={alt} src={src} height={40} width={40} />;
}
