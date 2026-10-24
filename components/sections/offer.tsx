import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { RequestDialog } from "./request-dialog";

const PLANS = [
  {
    name: "Школа",
    price: "Бесплатно",
    note: "на время пилота",
    features: ["Рейтинг классов и параллелей", "Отчёты для учителей и завучей", "Эко-викторина для классных часов", "Сертификаты лучшим классам"],
  },
  {
    name: "ЖК / ОСИ",
    price: "По запросу",
    note: "от 1 дома",
    featured: true,
    features: ["QR-наклейки на контейнерные площадки", "Рейтинг подъездов и жителей", "Карта ближайших экобоксов", "Ежемесячный отчёт по объёмам"],
  },
  {
    name: "Акимат / B2G",
    price: "По запросу",
    note: "район или город",
    features: [
      "Дашборд по школам района",
      "Отчётность под «Таза Қазақстан»",
      "Соответствие ст. 351 Экокодекса РК", // TODO: сверить номер статьи с текстом кодекса
      "Выгрузка данных для операторов ТБО",
    ],
  },
];

export function Offer() {
  return (
    <section id="offer" className="mx-auto max-w-7xl px-4 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-leaf-400">B2B · B2G</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">Для школ, ЖК и акиматов</h2>
        <p className="mt-4 text-white/60">Запустим пилот за неделю: подключение, обучение учителей и первый отчёт.</p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={cn(
              "relative flex flex-col rounded-3xl border p-8",
              p.featured ? "border-leaf-400/40 bg-leaf-400/[0.06]" : "border-white/10 bg-white/[0.02]"
            )}
          >
            {p.featured && <BorderBeam size={160} duration={9} />}
            {p.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-leaf-400 px-3 py-1 text-xs font-bold text-forest-950">Популярно</span>
            )}
            <h3 className="text-lg font-semibold text-white">{p.name}</h3>
            <p className="mt-4 text-4xl font-bold text-white">{p.price}</p>
            <p className="text-sm text-white/40">{p.note}</p>
            <ul className="mt-8 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-white/70">
                  <Check className="h-5 w-5 shrink-0 text-leaf-400" /> {f}
                </li>
              ))}
            </ul>
            <RequestDialog plan={p.name}>
              <Button variant={p.featured ? "default" : "outline"} className="mt-8 w-full">Оставить заявку</Button>
            </RequestDialog>
          </div>
        ))}
      </div>
    </section>
  );
}
