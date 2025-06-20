"use client";
import { motion, useScroll } from "motion/react";

export function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="z-50 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#9ae600",
        }}
      />
    </>
  );
}
