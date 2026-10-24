"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

/** Скриншот «выезжает» из глубины и выпрямляется при скролле */
export function ScrollReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  return (
    <div ref={ref} className={className} style={{ perspective: 1200 }}>
      <motion.div style={{ rotateX, scale, opacity }}>{children}</motion.div>
    </div>
  );
}
