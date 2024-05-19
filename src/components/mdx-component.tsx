import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout, Information } from "./callout";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertCircle,
  Information,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
