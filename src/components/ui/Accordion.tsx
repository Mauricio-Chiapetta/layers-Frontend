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
      className="p-6 cursor-pointer bg-neutral-900 rounded-3xl border border-white/10"
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
            className="text-white/50"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
