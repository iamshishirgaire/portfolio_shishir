import { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircleIcon, Info } from "lucide-react";

export function Callout({
  children,
  variant,
  title,
  description,
}: {
  children: ReactNode;
  variant: "destructive" | "default";
  title: string;
  description: string;
}) {
  return (
    <Alert variant={variant} className="max-w-2xl">
      {variant === "destructive" && <AlertCircleIcon></AlertCircleIcon>}
      {variant === "default" && <Info></Info>}
      <AlertTitle className="mx-2">{title}</AlertTitle>
      <AlertDescription className="mx-2">{description}</AlertDescription>
    </Alert>
  );
}
