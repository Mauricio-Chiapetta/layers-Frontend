"use client";
import { Tag } from "../ui/Tag";
import { Card } from "../ui/Card";
import { motion } from "motion/react";
import { Asterisk } from "lucide-react";
import { FramerMagnetic } from "../ui/FramerMagnetic";
export function Features() {
  const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
  ];
  return (
    <section className="py-24 flex justify-center">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeIn" },
          }}
          viewport={{ once: true }}
          className="text-6xl text-center font-medium mt-6"
        >
          Where power meets <br />
          <span className="text-lime-400 hover:text-lime-600 duration-200">
            simplicity
          </span>
        </motion.h2>
        {/* features */}
        <div className="mt-12 grid lg:grid-cols-3 gap-5 grid-cols-1">
          {/* first feature */}
          <motion.div
            initial={{ translateY: 100 }}
            whileInView={{ translateY: 0, transition: { duration: 0.3 } }}
          >
            <Card
              paragraph="Work together seamlessly with conflict-free team editing"
              title="Real time collaboration"
            ></Card>
          </motion.div>
          {/* second feature */}
          <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0, transition: { duration: 0.6 } }}
          >
            <Card
              paragraph="Engage your clients with prototypes that react to user actions"
              title="Interactive Prototyping"
            ></Card>
          </motion.div>
          {/* third feature */}
          <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0, transition: { duration: 0.9 } }}
          >
            <Card
              title="Keyboard Quick Actions"
              paragraph="Powerful commands to help you create designs more quickly"
            ></Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: { ease: "easeInOut", duration: 0.5 },
          }}
          className="flex mt-12 justify-center gap-2 flex-wrap"
        >
          {features.map((item) => (
            <FramerMagnetic key={item}>
              <div className="flex gap-1 items-center bg-neutral-900 px-5 py-3 rounded-lg border border-white/10 font-medium hover:bg-neutral-800 duration-200">
                <motion.span
                  animate={{ rotate: [0, 0, 360, 360, 0] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <Asterisk className="bg-lime-400 text-black rounded-full" />
                </motion.span>
                <span>{item}</span>
              </div>
            </FramerMagnetic>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
