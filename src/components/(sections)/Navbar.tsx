"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const navLinks = [
  { label: "Home", href: "#" },
  {
    label: "Features",
    href: "#Features",
  },
  {
    label: "integrations",
    href: "#Integrations",
  },
  {
    label: "FAQs",
    href: "#FAQs",
  },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="py-4 lg:py-8 flex justify-center">
      <div className="container max-w-5xl fixed z-50">
        <div className=" border border-white/15 rounded-[27px] bg-neutral-950/10 backdrop-blur-md shadow-md shadow-neutral-950/50">
          <div className="flex justify-between items-center p-2 px-4 md:pr-2 ">
            <div>
              <Image
                alt="logo"
                src={logo}
                className="h-9 md:h-auto w-auto hover:brightness-50 duration-300"
              />
            </div>
            <div>
              <nav className="lg:flex gap-6 hidden">
                {navLinks.map((item) => (
                  <Link
                    href={item.href}
                    key={`${item.label}-${item.href}`}
                    className="text-white font-medium relative inline-block  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-lime-500 before:transition-all before:duration-300 hover:before:w-[40%]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex justify-end gap-4">
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3 },
                    }}
                    exit={{
                      opacity: 0,
                      x: 20,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="text-white md:hidden "
                    onClick={() => setIsOpen(true)}
                  >
                    <Menu />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{
                      opacity: 0.2,
                      rotate: -90,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="text-lime-400 md:hidden"
                    onClick={() => setIsOpen(false)}
                  >
                    <X />
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                variant="primary"
                className="hidden md:inline-flex items-center"
              >
                Log In
              </Button>
              <Button
                variant="secondary"
                className="hidden md:inline-flex items-center"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 60 }}
              >
                <div className="flex flex-col items-center gap-2 p-6">
                  {navLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="py-2 font-semibold"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button variant="primary">Log In</Button>
                  <Button variant="secondary">Sign Up</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
