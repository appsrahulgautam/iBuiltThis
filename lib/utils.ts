import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
