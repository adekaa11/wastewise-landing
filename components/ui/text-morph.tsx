"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useMemo } from "react";
import { cn } from "@/lib/utils";

export function TextMorph({ children, className }: { children: string; className?: string }) {
  const uid = useId();
  const chars = useMemo(() => {
    const seen: Record<string, number> = {};
    return children.split("").map((ch) => {
      const k = ch.toLowerCase();
      seen[k] = (seen[k] ?? 0) + 1;
      return { id: `${uid}-${k}${seen[k]}`, label: ch === " " ? " " : ch };
    });
  }, [children, uid]);

  return (
    <span className={cn("inline-block", className)} aria-label={children}>
      <AnimatePresence mode="popLayout" initial={false}>
        {chars.map((c) => (
          <motion.span
            key={c.id}
            layoutId={c.id}
            className="inline-block"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 18, mass: 0.3 }}
          >
            {c.label}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
}
