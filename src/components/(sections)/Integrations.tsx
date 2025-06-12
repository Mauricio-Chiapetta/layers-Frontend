"use client";
import { IntegrationsColumn } from "../ui/IntegrationsColumn";
import { Tag } from "../ui/Tag";
import { integrations } from "../ui/IntegrationsColumn";
import { motion } from "motion/react";

export function Integrations() {
  return (
    <section className="py-24 flex justify-center overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag >Integrations</Tag>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{once:true}}
            >
              <h2 className="text-6xl font-medium mt-6">
                Plays well with{" "}
                <span className="text-lime-400 hover:text-lime-500 transition-colors">
                  others
                </span>
              </h2>
              <p className="text-white/50 font-lg mt-4">
                Layers seamlessly connects with your favorite tools, making it
                easy to plug into any workflow and collaborate across platforms.
              </p>
            </motion.div>
          </div>
          <div>
            {/* integrations cards */}
            <motion.div
             className="h-[400px] lg:h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 "
             initial={{opacity:0}}
             whileInView={{opacity:1,transition:{duration:1}}}
             viewport={{once:true}}
             >
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
