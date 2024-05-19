import { cn } from "@/lib/utils";
import { Info, TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function Callout({
  variant,
  title,
  description,
}: {
  variant: "destructive" | "default";
  title: string;
  description: string;
}) {
  const dangerStyle = cn(
    "mx-2",
    variant === "destructive"
      ? "text-red-600 text-md font-normal"
      : "text-green-600 text-md font-normal"
  );
  return (
    <Alert variant={variant} className="max-w-2xl my-4">
      <div className={cn(dangerStyle, "gap-3 flex flex-row ")}>
        <div className="mt-1">
          {variant === "destructive" && <TriangleAlert></TriangleAlert>}
          {variant === "default" && <Info></Info>}
        </div>
        <div>
          <AlertTitle className={cn(dangerStyle, "text-xl")}>
            {title}
          </AlertTitle>
          <AlertDescription className={dangerStyle}>
            {description}
          </AlertDescription>
        </div>
      </div>
    </Alert>
  );
}

export function Information({
  title,
  description,
  variant = "default",
}: {
  title: string;
  description: string;
  variant?: "destructive" | "default";
}) {
  return (
    <div
      className={cn(
        "bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 my-4",
        variant === "destructive" && "bg-red-100 border-red-500 text-red-700"
      )}
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
}
