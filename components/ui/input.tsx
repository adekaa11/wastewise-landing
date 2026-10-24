import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...p }, ref) => (
  <input
    ref={ref}
    className={cn("h-11 w-full rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 focus:border-leaf-400/60 focus:outline-none", className)}
    {...p}
  />
));
Input.displayName = "Input";
