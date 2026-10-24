"use client";
import * as A from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = A.Root;
export const AccordionItem = ({ className, ...p }: A.AccordionItemProps) => (
  <A.Item className={cn("border-b border-white/10", className)} {...p} />
);
export const AccordionTrigger = ({ children, className, ...p }: A.AccordionTriggerProps) => (
  <A.Header>
    <A.Trigger className={cn("group flex w-full items-center justify-between py-5 text-left text-lg font-medium text-white", className)} {...p}>
      {children}
      <Plus className="h-5 w-5 shrink-0 text-leaf-400 transition-transform group-data-[state=open]:rotate-45" />
    </A.Trigger>
  </A.Header>
);
export const AccordionContent = ({ children, ...p }: A.AccordionContentProps) => (
  <A.Content className="overflow-hidden text-white/60 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...p}>
    <div className="pb-5">{children}</div>
  </A.Content>
);
