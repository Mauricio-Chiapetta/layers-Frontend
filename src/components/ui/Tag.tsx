import { motion} from "motion/react";
import {Asterisk} from "lucide-react"
type tagTypes = {
  children: React.ReactNode;
  text?: string;
};
export function Tag({ children, ...props }: tagTypes) {
  return (
    <motion.div
      {...props}
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
        <Asterisk/>
      </motion.span>
      <span>{children}</span>
    </motion.div>
  );
}
