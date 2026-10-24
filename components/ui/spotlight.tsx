import { cn } from "@/lib/utils";

export const Spotlight = ({ className, fill = "#5eea9a" }: { className?: string; fill?: string }) => (
  <svg className={cn("pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-0 animate-[spotlight_2s_ease_.75s_1_forwards] lg:w-[84%]", className)} viewBox="0 0 3787 2842" fill="none" aria-hidden>
    <g filter="url(#spot)">
      <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill={fill} fillOpacity="0.21" />
    </g>
    <defs>
      <filter id="spot" x="0.86" y="0.84" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" result="shape" />
        <feGaussianBlur stdDeviation="151" />
      </filter>
    </defs>
  </svg>
);
