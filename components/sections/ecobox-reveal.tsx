import { ScrollReveal } from "@/components/ui/scroll-reveal";

/** Замените заглушки на реальные скриншоты: <Image src="/screens/ecobox-1.png" ... /> */
const SHOTS = [
  { title: "Карта экобоксов", emoji: "🗺️" },
  { title: "История сканирований", emoji: "📸" },
  { title: "Эко-викторина", emoji: "🧠" },
];

export function EcoboxReveal() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-28 md:grid-cols-3">
      {SHOTS.map((s) => (
        <ScrollReveal key={s.title}>
          <div className="grid aspect-[4/5] place-items-center rounded-3xl border border-white/10 bg-gradient-to-br from-forest-800 to-forest-950">
            <div className="text-center">
              <div className="text-7xl">{s.emoji}</div>
              <p className="mt-4 font-medium text-white/70">{s.title}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
