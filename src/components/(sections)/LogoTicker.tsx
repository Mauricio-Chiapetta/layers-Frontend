"use client";
import acmeLogo from "@/assets/images/acme-corp.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import echoLogo from "@/assets/images/echo-valley.svg";
import outsideLogo from "@/assets/images/outside.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import quantumLogo from "@/assets/images/quantum.svg";
import twiceLogo from "@/assets/images/twice.svg";
import { motion } from "motion/react";
import Image from "next/image";
const iconsData = [
  {
    src: acmeLogo,
    alt: "Acme Corp",
  },
  {
    src: apexLogo,
    alt: "Apex",
  },
  {
    src: celestialLogo,
    alt: "Celestial",
  },
  {
    src: echoLogo,
    alt: "Echo Valley",
  },
  {
    src: outsideLogo,
    alt: "Outside",
  },
  {
    src: pulseLogo,
    alt: "Pulse",
  },
  {
    src: quantumLogo,
    alt: "Quantum Mania",
  },
  {
    src: twiceLogo,
    alt: "Twice",
  },
];

export function LogoTicker() {
  return (
    <section className="lg:py-24 py-5 mx-auto container">
      <motion.h3
        className="text-center lg:text-xl text-md text-white/50 mb-8"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.3, ease: "easeIn" },
        }}
        viewport={{ once: true }}
      >
        Already chosen by these market leaders
      </motion.h3>
      <div className="flex overflow-hidden mt-5 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-100 after:w-50  relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#0a0a0a,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#0a0a0a,rgb(0,0,0,0))] before:z-10">
        <motion.div
          className="flex lg:gap-20 gap-4 flex-none pr-20"
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {iconsData.map(({ src, alt }) => (
            <Image
              src={src}
              alt={alt}
              key={alt}
              className="flex-none lg:h-10 h-5 w-auto hover:brightness-50 duration-300"
            />
          ))}
          {iconsData.map(({ src, alt }) => (
            <Image
              src={src}
              alt={alt}
              key={alt}
              className="flex-none lg:h-10 h-5 w-auto hover:brightness-50 duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
