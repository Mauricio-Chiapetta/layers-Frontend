"use client";
import { Button } from "../ui/Button";
import Image from "next/image";
import designExample from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import { motion } from "motion/react";
import { Pointer } from "../ui/Pointer";
export function Hero() {
  return (
    <section className="py-24 flex justify-center relative overflow-hidden">
      <div className="container">
        <div className="flex justify-center ">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
          <motion.div
            className="absolute top-35 lg:right-90 right-10 cursor-pointer"
            initial={{ x: 200 }}
            animate={{ x: [200, 350, 0] }}
            transition={{ duration: 0.9 }}
            drag
            dragConstraints={{ left: -500, right: 50, top: -90, bottom: 100 }}
          >
            <Pointer Pathfill="rgba(154, 230, 0, 0.82)" />
          </motion.div>

          <motion.div
            className="absolute top-90 lg:left-90 left-10 cursor-pointer"
            initial={{ x: -200 }}
            animate={{ x: [-200, -350, 0] }}
            transition={{ duration: 0.9 }}
            drag
            dragConstraints={{ left: -50, right: 500, top: -90, bottom: 100 }}
          >
            <Pointer Pathfill="#c27aff" />
          </motion.div>
        </div>
        <motion.h1
          className="text-6xl font-medium text-center mt-6 md:text-7xl bg-gradient-to-b from-lime-50 to-lime-500 text-transparent bg-clip-text hover:to-lime-50 duration-500 transition-colors"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.3 }}
        >
          Impactful design,
          <br className="hidden lg:block" /> created effortlessly
        </motion.h1>
        <motion.p
          className="text-center text-xl text-white/50 mt-8"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Design tools shouldn&apos;t slow you down. Layers powerful
          <br className="hidden lg:block" />
          features with an intuitive interface that keeps you in your creative
          flow
        </motion.p>

        <motion.form
          className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <input
            type="email"
            placeholder="Enter in your email"
            className="bg-transparent px-4 outline-0"
          />

          <Button
            type="submit"
            variant="secondary"
            className="flex-1 whitespace-nowrap"
          >
            Sign Up
          </Button>
        </motion.form>

        <motion.div
          className="absolute -right-[5%] top-[110px] drop-shadow-lg shadow-neutral-950 hidden sm:inline opacity-50"
          drag
          dragSnapToOrigin
          whileDrag={{
            scale: 1.1,
            rotate: 0,
            transition: { duration: 0.3 },
            opacity: 1,
          }}
          whileTap={{ scale: 0.9, rotate: 5 }}
          animate={{ rotate: -5, x: [0, 100, 0] }}
          whileHover={{ translateX: -30 }}
        >
          <Image
            src={designExample2}
            alt="Design example image"
            className="hover:cursor-grab w-auto max-w-none h-[470px]"
            draggable="false"
          />
        </motion.div>
        <motion.div
          className="absolute -left-[8%] top-[90px] hidden sm:inline opacity-50"
          drag
          dragSnapToOrigin
          whileDrag={{
            scale: 1.1,
            rotate: 0,
            transition: { duration: 0.3 },
            opacity: 1,
          }}
          whileTap={{ scale: 0.9, rotate: -5 }}
          animate={{ rotate: 5, x: [0, -100, 0] }}
          whileHover={{ translateX: 30 }}
        >
          <Image
            src={designExample}
            alt="Design example image 2.0"
            className="cursor-grab h-auto"
            draggable="false"
          />
        </motion.div>
      </div>
    </section>
  );
}
