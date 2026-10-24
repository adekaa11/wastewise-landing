import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps { children: ReactNode; className?: string; reverse?: boolean; pauseOnHover?: boolean; repeat?: number }

export const Marquee = ({ children, className, reverse, pauseOnHover = true, repeat = 4 }: MarqueeProps) => (
  <div
    style={{ "--duration": "40s", "--gap": "1rem" } as React.CSSProperties}
    className={cn("group flex overflow-hidden p-2 [gap:var(--gap)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}
  >
    {Array.from({ length: repeat }).map((_, i) => (
      <div
        key={i}
        aria-hidden={i > 0}
        className={cn("flex shrink-0 justify-around [gap:var(--gap)] animate-marquee", reverse && "[animation-direction:reverse]", pauseOnHover && "group-hover:[animation-play-state:paused]")}
      >
        {children}
      </div>
    ))}
  </div>
);
