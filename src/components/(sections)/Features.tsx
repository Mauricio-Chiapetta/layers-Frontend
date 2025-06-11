"use client";
import { Tag } from "../ui/Tag";
import { Card } from "../ui/Card";
import { motion } from "motion/react";
import { AlternativeTag } from "../ui/AlternativeTag";
import { Avatar } from "../ui/Avatar";
import { Key } from "../ui/Key";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";

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
        <div className="mt-12 grid lg:grid-cols-3 gap-8 grid-cols-1">
          {/* first feature */}
          <motion.div
            initial={{ translateY: 100 }}
            whileInView={{ translateY: 0, transition: { duration: 0.3 } }}
          >
            <Card
              paragraph="Work together seamlessly with conflict-free team editing"
              title="Real time collaboration"
            >
              {/* avatar div */}
              <div className="aspect-video flex items-center justify-center">
                <Avatar className="z-40">
                  <Image
                    src={avatar1}
                    alt="avatar 1"
                    className="rounded-full"
                  />
                </Avatar>

                <Avatar className="-ml-6 border-indigo-500 z-30">
                  <Image
                    src={avatar2}
                    alt="avatar 2"
                    className="rounded-full"
                  />
                </Avatar>

                <Avatar className="-ml-6 border-amber-500 z-20">
                  <Image
                    src={avatar3}
                    alt="avatar 3"
                    className="rounded-full"
                  />
                </Avatar>

                <Avatar className="-ml-6 border-transparent z-10">
                  <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                    <Image src={avatar4} alt="avatar 4" className="size-full absolute rounded-full"/>
                    {/*render 3 span tags*/}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span
                        key={i}
                        className="size-1.5 bg-white rounded-full inline-flex"
                      ></span>
                    ))}
                  </div>
                </Avatar>
              </div>
            </Card>
          </motion.div>
          {/* second feature */}
          <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0, transition: { duration: 0.6 } }}
          >
            <Card
              paragraph="Engage your clients with prototypes that react to user actions"
              title="Interactive Prototyping"
            >
              <div className="aspect-video flex items-center justify-center">
                <p className="text-4xl font-extrabold text-white/20 text-center">
                  We&apos;ve achieved{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text hover:from-indigo-500 hover:to-purple-400 duration-300 transition-colors">
                    incredible
                  </span>{" "}
                  growth this year
                </p>
              </div>
            </Card>
          </motion.div>
          {/* third feature */}
          <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0, transition: { duration: 0.9 } }}
          >
            <Card
              title="Keyboard Quick Actions"
              paragraph="Powerful commands to help you create designs more quickly"
            >
              <div className="aspect-video flex items-center justify-center gap-4">
                <Key className="w-28">shift</Key>
                <Key>alt</Key>
                <Key>C</Key>
              </div>
            </Card>
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
            <AlternativeTag key={item} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
