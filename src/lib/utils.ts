import { twMerge } from "tailwind-merge";

export function cn(...classes: (string | undefined | null | false | boolean)[]) {
  return twMerge(classes.join(" "));
}