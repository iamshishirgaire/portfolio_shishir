import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AppProvider from "@/components/provider/app-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shishir Gaire",
  description:
    "Personal website of Shishir Gaire showcasing his work and blog posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProvider>
          <Navbar></Navbar>
          <div>{children}</div>
          <Footer></Footer>
        </AppProvider>
      </body>
    </html>
  );
}
