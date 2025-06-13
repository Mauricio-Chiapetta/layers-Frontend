"use client";
import { Asterisk, ArrowRight } from "lucide-react";
import { AnimationPlaybackControls, motion, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";
export function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      {
        x: "-50%",
      },
      { duration: 30, repeat: Infinity, ease: "linear" }
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      animation.current.speed = isHovered ? 0.5 : 1;
    }
  }, [isHovered]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return (
    <section className="py-24 relative">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center">
              <motion.div
                animate={{ rotate: 180 }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Asterisk size={90} className="text-lime-400" />
              </motion.div>
              <span className="group-hover:text-lime-400">Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
      {isHovered && (
        <div
          className="fixed pointer-events-none bg-yellow-400 text-black text-lg px-2 py-1 rounded flex items-center font-semibold gap-2"
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            zIndex: 9999,
          }}
        >
          <ArrowRight size={15} className="font-semibold" />
          click to learn more
        </div>
      )}
    </section>
  );
}

//   useEffect(() => {
//     animation.current = animate(
//       scope.current,
//       { x: "-50%" },
//       { duration: 30, repeat: Infinity, ease: "linear" }
//     );
//   }, []);

//   useEffect(() => {
//     if (animation.current) {
//       animation.current.speed = isHovered ? 0.5 : 1;
//     }
//   }, [isHovered]);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     if (isHovered) {
//       window.addEventListener("mousemove", handleMouseMove);
//     } else {
//       window.removeEventListener("mousemove", handleMouseMove);
//     }

//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [isHovered]);

//   return (
//     <section className="py-24 relative">
//       <div className="overflow-x-clip p-4 flex">
//         <motion.div
//           ref={scope}
//           className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-none"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {Array.from({ length: 10 }).map((_, i) => (
//             <div key={i} className="flex items-center">
//               <motion.div
//                 animate={{ rotate: 180 }}
//                 transition={{
//                   repeat: Infinity,
//                   repeatDelay: 1,
//                 }}
//               >
//                 <Asterisk size={90} className="text-lime-400" />
//               </motion.div>
//               <span className="group-hover:text-lime-400">Try it for free</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Texto no cursor */}
//       {isHovered && (
//         <div
//           className="fixed pointer-events-none bg-black text-white text-sm px-2 py-1 rounded"
//           style={{
//             top: cursorPosition.y + 10,
//             left: cursorPosition.x + 10,
//             zIndex: 9999,
//           }}
//         >
//           👉 Clique para saber mais
//         </div>
//       )}
//     </section>
//   );
// }
