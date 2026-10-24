"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShiftCardProps { top: ReactNode; middle: ReactNode; bottom: ReactNode; className?: string }

/** Карточка, которая «раздувается» по высоте и раскрывает нижний слой при hover */
export const ShiftCard = ({ top, middle, bottom, className }: ShiftCardProps) => (
  <motion.div
    initial="rest"
    whileHover="hover"
    animate="rest"
    className={cn("group relative flex cursor-default flex-col overflow-hidden rounded-3xl border border-white/10 bg-forest-900/70 p-6", className)}
  >
    <motion.div variants={{ rest: { y: 0 }, hover: { y: -6 } }} className="text-sm uppercase tracking-widest text-white/50">{top}</motion.div>
    <motion.div variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }} className="origin-left py-3">{middle}</motion.div>
    <motion.div
      variants={{ rest: { height: 0, opacity: 0 }, hover: { height: "auto", opacity: 1 } }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="overflow-hidden text-sm text-white/60"
    >
      {bottom}
    </motion.div>
    <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-leaf-400/10 blur-3xl transition-all duration-500 group-hover:bg-leaf-400/30" />
  </motion.div>
);
