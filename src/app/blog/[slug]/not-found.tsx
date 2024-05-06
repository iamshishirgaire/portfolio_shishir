import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-[89dvh] bg-gray-100 dark:bg-gray-800">
      <div className="container max-w-4xl px-4 py-16 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <Image
            alt="404 Not Found"
            className="mx-auto mb-8 w-full max-w-[400px] dark:invert"
            height={500}
            src="/images/notfound.svg"
            style={{
              objectFit: "cover",
            }}
            width={500}
          />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
            Oops! Page not found.
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link href={"/blog"}>
              <Button variant="default">Go back to Blog</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
