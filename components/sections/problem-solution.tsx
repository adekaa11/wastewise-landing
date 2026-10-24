import { Bot, BrainCircuit, Eye, Trophy } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { WASTE_TYPES, LINKS } from "@/lib/data";

const PROBLEMS = [
  { n: "25.3%", t: "казахстанцев сортируют отходы" },
  { n: "1.1%", t: "реально становится вторсырьём" },
  { n: "98%", t: "заполненность полигона Астаны" },
];

const FEATURES = [
  {
    Icon: Eye,
    name: "AI Vision",
    description: "YOLO распознаёт 7 типов отходов по фото с точностью 85.7% и подсказывает нужный контейнер.",
    className: "md:col-span-2",
    background: (
      <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-2 opacity-70 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]">
        {WASTE_TYPES.map((w) => (
          <span key={w.name} className="rounded-full border border-leaf-400/20 bg-leaf-400/10 px-3 py-1.5 text-sm text-leaf-300">
            {w.emoji} {w.name}
          </span>
        ))}
      </div>
    ),
  },
  {
    Icon: Bot,
    name: "Smart Assistant",
    description: "ИИ-консультант на GPT-4o-mini: «куда выбросить блистер от таблеток?» — ответ за секунду.",
    background: (
      <div className="absolute inset-x-6 top-6 space-y-2 text-xs">
        <div className="ml-auto w-fit rounded-2xl rounded-br-sm bg-white/10 px-3 py-2 text-white/80">Куда выбросить чек?</div>
        <div className="w-fit rounded-2xl rounded-bl-sm bg-leaf-400/20 px-3 py-2 text-leaf-300">Термобумага не перерабатывается — в смешанные 🗑️</div>
      </div>
    ),
  },
  {
    Icon: Trophy,
    name: "Геймификация",
    description: "Викторина из 60 вопросов, рейтинг классов и школ, баллы за каждое сканирование.",
    background: <div className="absolute -right-6 -top-6 text-[9rem] opacity-10">🏆</div>,
  },
  {
    Icon: BrainCircuit,
    name: "RLHF-дообучение",
    description: "Нашёл ошибку модели — исправь её и получи +15 баллов. Модель становится точнее с каждой правкой.",
    className: "md:col-span-2",
    href: LINKS.github,
    cta: "Смотреть код на GitHub",
    background: (
      <div className="absolute right-6 top-6 font-mono text-xs leading-relaxed text-leaf-400/60">
        <p>pred: glass (0.54) ✗</p>
        <p>user: plastic ✓ → dataset</p>
        <p className="text-lime-400">+15 pts · retrain queued</p>
      </div>
    ),
  },
];

export function ProblemSolution() {
  return (
    <section id="solution" className="mx-auto max-w-7xl px-4 py-28">
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
        Проблема огромна. <AnimatedGradientText>Решение — в кармане каждого школьника.</AnimatedGradientText>
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {PROBLEMS.map((p) => (
          <div key={p.t} className="rounded-3xl border border-red-400/20 bg-red-500/[0.04] p-6">
            <p className="text-5xl font-bold text-red-300">{p.n}</p>
            <p className="mt-2 text-white/60">{p.t}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-white/40">
        Госпрограмма «Таза Қазақстан»: 40% переработки к 2031 г. и 40% школьников в экологическом воспитании к 2029 г.
      </p>

      <BentoGrid className="mt-12">
        {FEATURES.map((f) => (
          <BentoCard key={f.name} {...f} />
        ))}
      </BentoGrid>
    </section>
  );
}
