import TopBanner from "@/components/banner";
import Footer from "@/components/footer";
import AppProvider from "@/components/provider/app-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shishir Gaire",
  applicationName: "Shishir Gaire",
  description:
    "Personal website of Shishir Gaire showcasing his work and blog posts.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
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
          " bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AppProvider>
          <div>{children}</div>
          <Footer></Footer>
        </AppProvider>
      </body>
    </html>
  );
}
