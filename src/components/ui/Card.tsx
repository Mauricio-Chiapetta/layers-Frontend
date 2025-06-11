import React from "react";

interface cardProps {
  title: string;
  paragraph: string;
  src?: string;
  children?: React.ReactNode;
}
export function Card(props: cardProps) {
  return (
    <div className="bg-neutral-900 border border-white/10 p-6 rounded-3xl ">
      <div className="aspect-video">{props.children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{props.title}</h3>
        <p className="text-white/50 mt-2">{props.paragraph}</p>
        
      </div>
    </div>
  );
}
