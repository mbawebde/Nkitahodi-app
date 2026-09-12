import { twMerge } from "tailwind-merge";

export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function formatPct(n: number) {
  return `${Math.round(n * 100)}%`;
}

export function formatNum(n: number, digits = 2) {
  return n.toFixed(digits);
}
