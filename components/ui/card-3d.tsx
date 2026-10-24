"use client";
import { createContext, useContext, useRef, useState, ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

const Ctx = createContext(false);

export function CardContainer({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / 25;
    const y = (e.clientY - r.top - r.height / 2) / 25;
    ref.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };
  const reset = () => {
    setHover(false);
    if (ref.current) ref.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };
  return (
    <Ctx.Provider value={hover}>
      <div className={cn("flex items-center justify-center", className)} style={{ perspective: "1000px" }}>
        <div ref={ref} onMouseEnter={() => setHover(true)} onMouseMove={onMove} onMouseLeave={reset} className="relative transition-transform duration-200 ease-linear [transform-style:preserve-3d]">
          {children}
        </div>
      </div>
    </Ctx.Provider>
  );
}

export const CardBody = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>{children}</div>
);

export function CardItem({ children, className, translateZ = 0 }: { children: ReactNode; className?: string; translateZ?: number }) {
  const hover = useContext(Ctx);
  return (
    <div className={cn("transition-transform duration-200 ease-linear", className)} style={{ transform: `translateZ(${hover ? translateZ : 0}px)` }}>
      {children}
    </div>
  );
}
