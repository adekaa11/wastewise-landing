"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { LEADERBOARD } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

const MEDALS = ["🥇", "🥈", "🥉"];

export function Leaderboard() {
  const [rows, setRows] = useState(LEADERBOARD);

  // DEMO: имитация live-обновлений. В проде — Supabase Realtime подписка.
  useEffect(() => {
    const t = setInterval(() => {
      setRows((prev) =>
        prev
          .map((r) => ({ ...r, points: r.points + Math.floor(Math.random() * 400) }))
          .sort((a, b) => b.points - a.points)
      );
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="leaderboard" className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-28 lg:grid-cols-2">
      <div>
        <span className="text-sm uppercase tracking-[0.3em] text-leaf-400">Live</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">Рейтинг школ Астаны</h2>
        <p className="mt-4 max-w-md text-white/60">
          Каждое сканирование, правильный ответ в викторине и исправление модели приносят баллы классу. Лидеры обновляются в реальном времени.
        </p>
      </div>

      <Card className="relative overflow-hidden p-2">
        <BorderBeam size={180} duration={8} />
        <ul className="relative">
          <AnimatePresence initial={false}>
            {rows.map((r, idx) => (
              <motion.li
                key={r.school}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex items-center gap-4 rounded-2xl px-4 py-4 hover:bg-white/5"
              >
                <span className="w-8 text-center text-xl">{MEDALS[idx] ?? <span className="text-sm text-white/40">{idx + 1}</span>}</span>
                <div className="flex-1">
                  <p className="font-medium text-white">{r.school}</p>
                  <p className="text-xs text-white/40">{r.city}</p>
                </div>
                <span className="flex items-center gap-1 text-xs text-leaf-400">
                  <TrendingUp className="h-3 w-3" />+{r.delta}
                </span>
                <span className="w-20 text-right font-mono font-semibold tabular-nums text-white">{r.points.toLocaleString("ru-RU")}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <p className="px-4 pb-3 text-[11px] text-white/30">Демо-данные</p>
      </Card>
    </section>
  );
}
