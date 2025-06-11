import { motion } from "motion/react";
import { Asterisk } from "lucide-react";
interface AlternativeTagProps {
  item?: string;
}
export function AlternativeTag({ item }: AlternativeTagProps) {
  return (
    <div
      className="flex gap-3 items-center bg-neutral-900 px-4 py-3 rounded-lg border border-white/10 font-medium hover:bg-neutral-800 duration-200"
      key={item}
    >
      <motion.span
        key={item}
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
  );
}
