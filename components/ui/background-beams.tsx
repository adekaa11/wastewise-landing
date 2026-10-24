"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const paths = Array.from({ length: 24 }, (_, i) => {
  const o = i * 14;
  return `M${-380 + o} ${-189 - i * 8}C${-380 + o} ${-189 - i * 8} ${-312 + o} ${216 - i * 8} ${152 + o} ${343 - i * 8}C${616 + o} ${470 - i * 8} ${684 + o} ${875 - i * 8} ${684 + o} ${875 - i * 8}`;
});

export const BackgroundBeams = ({ className }: { className?: string }) => (
  <div className={cn("pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]", className)}>
    <svg className="absolute h-full w-full" viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice">
      {paths.map((d, i) => (
        <path key={`s${i}`} d={d} stroke="#5eea9a" strokeOpacity="0.05" strokeWidth="0.5" />
      ))}
      {paths.map((d, i) => (
        <motion.path key={i} d={d} stroke={`url(#beam-${i})`} strokeWidth="0.6" />
      ))}
      <defs>
        {paths.map((_, i) => (
          <motion.linearGradient
            key={i}
            id={`beam-${i}`}
            initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
            animate={{ x1: ["0%", "100%"], x2: ["0%", "95%"], y1: ["0%", "100%"], y2: ["0%", `${93 + ((i * 37) % 8)}%`] }}
            transition={{ duration: 10 + (i % 7) * 2, ease: "easeInOut", repeat: Infinity, delay: (i % 5) * 1.3 }}
          >
            <stop stopColor="#22c97a" stopOpacity="0" />
            <stop stopColor="#5eea9a" />
            <stop offset="32.5%" stopColor="#c6f432" />
            <stop offset="100%" stopColor="#c6f432" stopOpacity="0" />
          </motion.linearGradient>
        ))}
      </defs>
    </svg>
  </div>
);
