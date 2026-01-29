import { type ClassValue, clsx } from "clsx";

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
