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
    <div className=" flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#0a0a0a,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#0a0a0a,rgb(0,0,0,0))] before:z-10 hover:opacity-40 duration-300">
      <motion.div
        className="flex gap-20 flex-none pr-20 "
        initial={{ translateX: 0 }}
        animate={{ translateX: "-50%" }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      >
        {iconsData.map(({ src, alt }) => (
          <Image
            src={src}
            alt={alt}
            key={alt}
            className="flex-none h-7 w-auto"
          />
        ))}
        {iconsData.map(({ src, alt }) => (
          <Image
            src={src}
            alt={alt}
            key={alt}
            className="flex-none h-7 w-auto"
          />
        ))}
      </motion.div>
    </div>
  );
}
