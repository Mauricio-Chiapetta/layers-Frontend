"use client";
import Image from "next/image";
import {Fragment } from "react";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

interface IntegrationProps extends HTMLMotionProps<"div"> {
  className?: string;
  integrations: typeof integrations;
  reverse?: boolean;
}

export const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerfull team communication platform",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GithHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];
export function IntegrationsColumn({
  integrations,
  className,
  reverse,
  ...props
}: IntegrationProps) {
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      {...props}
      className={cn(
        "flex flex-col gap-4 pb-4 hover:opacity-[80%] transition-opacity",
        className
      )}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((item) => (
            <div
              key={item.name}
              className="bg-neutral-900 p-6 border border-white/10 rounded-3xl "
            >
              <div className="flex justify-center">
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="size-25"
                />
              </div>
              <h3 className="text-3xl text-center mt-6">{item.name}</h3>
              <p className="text-center text-white/20 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
