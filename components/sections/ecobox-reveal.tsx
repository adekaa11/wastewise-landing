import { ScrollReveal } from "@/components/ui/scroll-reveal";

/** Плейсхолдеры в /public/screens — замените на реальные PNG/JPG с теми же именами (или поменяйте src) */
const SHOTS = [
  { title: "Карта экобоксов", src: "/screens/ecobox-1.svg" },
  { title: "История сканирований", src: "/screens/ecobox-2.svg" },
  { title: "Эко-викторина", src: "/screens/ecobox-3.svg" },
];

export function EcoboxReveal() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-28 md:grid-cols-3">
      {SHOTS.map((s) => (
        <ScrollReveal key={s.title}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt={s.title} loading="lazy" className="aspect-[4/5] w-full rounded-3xl border border-white/10 object-cover" />
        </ScrollReveal>
      ))}
    </section>
  );
}
