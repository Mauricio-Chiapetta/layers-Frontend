import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface SpanProps extends ComponentProps<"span"> {
  children?: React.ReactNode;
}
export function Span({className, children, ...props }: SpanProps) {
  return (
    <span
      {...props}
      className={cn("bg-gradient-to-r from-lime-400 to-lime-400/10 hover:to-lime-400 transition duration-300 text-transparent bg-clip-text",className)}
    >
      {children}
    </span>
  );
}
