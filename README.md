# WasteWise Landing — Next.js 14 · TS · Tailwind · Framer Motion

```bash
npm install
npm run dev   # http://localhost:3000
```

## Структура
- `app/page.tsx` — сборка секций
- `components/sections/*` — Hero, Stats, Partners, ProblemSolution, EcoboxReveal, Leaderboard, Offer, FAQ, Footer
- `components/ui/*` — локальные версии компонентов библиотек
- `lib/data.ts` — ссылки, 7 типов отходов, рейтинг (DEMO), партнёры

## Откуда какой компонент
| Файл | Библиотека-оригинал |
|---|---|
| button, card, input, dialog | shadcn/ui |
| bento-grid, animated-gradient-text, marquee, border-beam, number-ticker | Magic UI |
| spotlight, background-beams, card-3d | Aceternity UI |
| shift-card | CULT UI (паттерн) |
| scroll-reveal | Skiper UI (паттерн) |
| text-morph | Motion Primitives |
| accordion + offer + footer | Watermelon UI (паттерн) |

Компоненты переписаны локально (тот же API), без внешних registry — сборка не зависит от CLI.

## Источники цифр
- 4.1М т коммунальных отходов — БНС РК / Минэкологии РК (2025)
- 129 школ, 1000+ экобоксов — материалы Правительства РК по «Таза Қазақстан» (июнь 2025)

## TODO
- Заменить плейсхолдеры в `public/screens/` реальными скриншотами
- Рейтинг: подключить Supabase вместо DEMO-данных в `lib/data.ts`
