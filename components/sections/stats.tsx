import { ShiftCard } from "@/components/ui/shift-card";
import { NumberTicker } from "@/components/ui/number-ticker";

const STATS = [
  { label: "Отходов в год", value: 4.1, decimals: 1, suffix: "М т", hint: "Коммунальных отходов в год. Источник: БНС РК / Минэкологии РК, 2025." },
  { label: "Точность YOLO", value: 85.7, decimals: 1, suffix: "%", hint: "Средняя точность на тестовой выборке по 7 классам отходов." },
  { label: "Экобоксов", value: 1000, decimals: 0, suffix: "+", hint: "Экобоксов по стране. Источник: отчёт Правительства РК, «Таза Қазақстан», июнь 2025." },
  { label: "Школ", value: 129, decimals: 0, suffix: "", hint: "Школ в программе. Источник: отчёт Правительства РК, «Таза Қазақстан», июнь 2025." },
];

export function Stats() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 lg:grid-cols-4">
      {STATS.map((s) => (
        <ShiftCard
          key={s.label}
          top={s.label}
          middle={
            <span className="text-4xl font-bold text-white sm:text-5xl">
              <NumberTicker value={s.value} decimals={s.decimals} />
              <span className="text-leaf-400">{s.suffix}</span>
            </span>
          }
          bottom={s.hint}
        />
      ))}
      <p className="col-span-full mt-2 text-xs text-white/30">
        Источники: Бюро национальной статистики РК / Минэкологии РК (2025); материалы Правительства РК по программе «Таза Қазақстан» (июнь 2025). Точность модели — внутреннее тестирование WasteWise.
      </p>
    </section>
  );
}
