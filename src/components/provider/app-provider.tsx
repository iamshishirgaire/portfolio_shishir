import { Toaster } from "sonner";
import { ThemeProvider } from "./next-theme-provider";
import NextTopLoader from "nextjs-toploader";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster richColors position="top-right" className="mt-10" closeButton />
    </ThemeProvider>
  );
}
AppProvider;
