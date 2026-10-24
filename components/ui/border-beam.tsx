import { cn } from "@/lib/utils";

interface BorderBeamProps { size?: number; duration?: number; delay?: number; colorFrom?: string; colorTo?: string; className?: string }

export const BorderBeam = ({ size = 220, duration = 12, delay = 0, colorFrom = "#5eea9a", colorTo = "#c6f432", className }: BorderBeamProps) => (
  <div
    style={{ "--size": size, "--duration": duration, "--delay": `-${delay}s`, "--color-from": colorFrom, "--color-to": colorTo } as React.CSSProperties}
    className={cn(
      "pointer-events-none absolute inset-0 rounded-[inherit] [border:2px_solid_transparent]",
      "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
      "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
      className
    )}
  />
);
