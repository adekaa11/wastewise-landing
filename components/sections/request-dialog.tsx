"use client";
import { useState, FormEvent, ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/** shadcn Dialog + форма заявки. onSubmit → подключите Supabase / Formspree / Telegram-бот */
export function RequestDialog({ plan, children }: { plan: string; children: ReactNode }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <Dialog onOpenChange={(o) => !o && setSent(false)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        {sent ? (
          <div className="py-6 text-center">
            <div className="text-5xl">🌱</div>
            <DialogTitle className="mt-4">Заявка отправлена</DialogTitle>
            <DialogDescription className="mt-2">Свяжемся в течение 24 часов.</DialogDescription>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <DialogTitle>Заявка: {plan}</DialogTitle>
            <DialogDescription>Оставьте контакты — подготовим демо и план пилота.</DialogDescription>
            <Input required placeholder="Имя и должность" />
            <Input required placeholder="Организация (школа / ЖК / акимат)" />
            <Input required type="tel" placeholder="+7 (___) ___-__-__" />
            <Button type="submit" className="w-full">Отправить</Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
