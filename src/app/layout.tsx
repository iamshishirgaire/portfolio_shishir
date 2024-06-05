import TopBanner from "@/components/banner";
import Footer from "@/components/footer";
import AppProvider from "@/components/provider/app-provider";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import { ScrollArea } from "@/components/ui/scroll-area";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shishir Gaire",
  applicationName: "Shishir Gaire",
  authors: [
    {
      name: "Shishir Gaire",
    },
  ],
  description:
    "Personal website of Shishir Gaire showcasing his work and blog posts.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-[10vh]">
      <body
        className={cn(
          " bg-background font-sans antialiased select-none",
          fontSans.variable
        )}
      >
        <AppProvider>
          <ScrollArea className="h-[100vh]">
            <div>{children}</div>
            <Footer></Footer>
          </ScrollArea>
        </AppProvider>
      </body>
    </html>
  );
}
