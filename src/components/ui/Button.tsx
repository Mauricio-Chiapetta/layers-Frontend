import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
interface buttonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: buttonProps) {
  const variants = {
    primary:
      "border-white text-white hover:border-white/90 hover:bg-white duration-300 bg-transparent hover:text-neutral-950",
    secondary:
      "bg-lime-400  border-lime-400 text-neutral-950 hover:bg-lime-400/80 hover:outline-2 duration-300",
  };

  return (
      <button
      {...props}
      className={cn(
        "border rounded-full h-12 px-7 font-medium cursor-pointer",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
    
  );
}
