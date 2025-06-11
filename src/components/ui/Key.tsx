import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface keyProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}
export function Key({ children, className, ...props }: keyProps) {
  return (
    <div
      {...props}
      className={cn(
        "size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium",
        className
      )}
    >
      {children}
    </div>
  );
}
