import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface AvatarProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}
export function Avatar({ children, className, ...props }: AvatarProps) {
  return (
    <div 
    {...props}
     className={cn("size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900", className)}
      >
      {children}
    </div>
  );
}
