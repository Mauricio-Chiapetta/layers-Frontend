import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

interface cardProps extends ComponentProps<"div">{
  title: string;
  paragraph: string;
  src?: string;
  children?: React.ReactNode;
}
export function Card({children,className,title,paragraph,...props}:cardProps) {
  return (
    <div 
    {...props}
    className={cn("bg-neutral-900 border border-white/10 p-6 rounded-3xl",className)}>
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 mt-2">{paragraph}</p>
        
      </div>
    </div>
  );
}
