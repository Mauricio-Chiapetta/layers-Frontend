import { useState } from "react";
import { X, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
interface AccordionProps {
  question?: string;
  answer?: string;
}
export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div
      onClick={() => setisOpen(!isOpen)}
      className="p-6 cursor-pointer bg-neutral-900 rounded-3xl border border-white/10 hover:bg-neutral-900/70 transition-all duration-300 flex flex-col max-w-3xl mx-auto"
    >
      <div className="text-center">
        <span className="text-lg font-bold transition flex justify-between gap-8">
          {question}
          {isOpen ? (
            <X className="text-lime-400" />
          ) : (
            <Plus className="text-lime-400" />
          )}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-white/50 overflow-hidden"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{duration:0.3,ease:"easeIn"}}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
