"use client";
import { cn } from "@/lib/utils";
import { useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Tag } from "../ui/Tag";
export function Introduction() {
  const text = `Your're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
  const word = text.split(" ");

  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, word.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <>
      <section className="py-28 flex justify-center lg:py-40 relative">
        <div className="container">
          {/* background blur effect */}
          <div className="bg-neutral-300/5 w-90 h-100 absolute -z-50 blur-3xl top-150"></div>
          <div className="sticky top-25">
            <div className="flex justify-center">
              <Tag>Introducign Layers</Tag>
            </div>

            <div className="text-center font-medium text-4xl md:text-6xl lg:text-7xl mt-8">
              <span>Your creative process deserves better.</span>
              <span className="text-white/5">
                {word.map((text, i) => (
                  <span
                    key={i}
                    className={cn(i < currentWord && "text-white")}
                  >{`${text} `}</span>
                ))}
              </span>
              <span className="text-lime-400 block hover:text-lime-600 duration-200">
                That&apos;s why we built Layers.
              </span>
            </div>
          </div>

          <div className="h-[150vh]" ref={targetRef}></div>
        </div>
      </section>
    </>
  );
}
