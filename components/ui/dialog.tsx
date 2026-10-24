"use client";
import * as React from "react";
import * as D from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dialog = D.Root;
export const DialogTrigger = D.Trigger;
export const DialogTitle = ({ className, ...p }: D.DialogTitleProps) => <D.Title className={cn("text-2xl font-bold text-white", className)} {...p} />;
export const DialogDescription = ({ className, ...p }: D.DialogDescriptionProps) => <D.Description className={cn("text-sm text-white/60", className)} {...p} />;

export function DialogContent({ className, children, ...p }: D.DialogContentProps) {
  return (
    <D.Portal>
      <D.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
      <D.Content
        className={cn("fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-leaf-400/20 bg-forest-900 p-8 shadow-2xl", className)}
        {...p}
      >
        {children}
        <D.Close className="absolute right-4 top-4 rounded-full p-1 text-white/50 hover:text-white" aria-label="Закрыть">
          <X className="h-5 w-5" />
        </D.Close>
      </D.Content>
    </D.Portal>
  );
}
