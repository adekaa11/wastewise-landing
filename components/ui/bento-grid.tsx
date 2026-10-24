import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("grid w-full auto-rows-[20rem] grid-cols-1 gap-4 md:grid-cols-3", className)}>{children}</div>
);

interface BentoCardProps {
  name: string;
  description: string;
  Icon: React.ElementType;
  background?: ReactNode;
  href?: string;
  cta?: string;
  className?: string;
}

export const BentoCard = ({ name, description, Icon, background, href, cta, className }: BentoCardProps) => (
  <div className={cn("group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-forest-900/60 [box-shadow:0_-20px_80px_-20px_#5eea9a1f_inset]", className)}>
    <div className="absolute inset-0">{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-8">
      <Icon className="h-12 w-12 origin-left text-leaf-400 transition-all duration-300 group-hover:scale-75" />
      <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
      <p className="max-w-lg text-sm text-white/60">{description}</p>
    </div>
    {href && cta && (
      <a href={href} target="_blank" rel="noreferrer" className="absolute bottom-0 z-10 flex translate-y-10 items-center gap-1 p-6 text-sm font-medium text-leaf-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {cta} <ArrowRight className="h-4 w-4" />
      </a>
    )}
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-leaf-400/[0.04]" />
  </div>
);
