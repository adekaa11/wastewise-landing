"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props { value: number; decimals?: number; className?: string; delay?: number }

export function NumberTicker({ value, decimals = 0, className, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 60, stiffness: 100 });
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => mv.set(value), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, value, delay, mv]);

  useEffect(
    () =>
      spring.on("change", (v) => {
        if (ref.current)
          ref.current.textContent = Intl.NumberFormat("ru-RU", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(Number(v.toFixed(decimals)));
      }),
    [spring, decimals]
  );

  return <span ref={ref} className={cn("tabular-nums", className)}>0</span>;
}
