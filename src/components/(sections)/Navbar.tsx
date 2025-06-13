import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/Button";
import {Menu , X} from "lucide-react"
import Link from "next/link";
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
  return (
    <header className="py-4 lg:py-8 flex justify-center">
      <div className="container max-w-5xl fixed z-50">
        <div className="flex justify-between border border-white/15 rounded-full items-center p-2 px-4 md:pr-2 bg-neutral-950/10 backdrop-blur-md shadow-md shadow-neutral-950/50">
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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu text-white md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg> */}
            <Menu className="text-white md:hidden"/>
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
      </div>
    </header>
  );
}
