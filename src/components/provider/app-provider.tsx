import { Toaster } from "sonner";
import { ThemeProvider } from "./next-theme-provider";
import ApolloClientProvider from "./apollo-provider";

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
      <ApolloClientProvider>{children}</ApolloClientProvider>
      <Toaster richColors position="top-right" className="mt-10" closeButton />
    </ThemeProvider>
  );
}
AppProvider;
