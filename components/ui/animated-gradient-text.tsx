import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const AnimatedGradientText = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span
    style={{ "--bg-size": "300%" } as React.CSSProperties}
    className={cn("inline animate-gradient bg-gradient-to-r from-leaf-400 via-lime-400 to-leaf-400 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent", className)}
  >
    {children}
  </span>
);
