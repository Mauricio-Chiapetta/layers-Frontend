"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
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
      <section className="py-28 flex justify-center lg:py-40">
        <div className="container ">
          <div className="sticky top-25">
            <div className="flex justify-center">
              <motion.div
                className="inline-flex py-1 px-3 bg-transparent rounded-full text-lime-400 font-semibold border text-sm  items-center gap-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  &#10058;
                </motion.span>
                <span>Introducign Layers</span>
              </motion.div>
            </div>

            <div className="text-center font-medium text-4xl md:text-6xl lg:text-7xl mt-8">
              <span>Your creative process deserves better.</span>
              <span className="text-white/15">
                {word.map((text, i) => (
                  <span
                    key={i}
                    className={cn(i < currentWord && "text-white")}
                  >{`${text} `}</span>
                ))}
              </span>
              <span className="text-lime-400 block">
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
