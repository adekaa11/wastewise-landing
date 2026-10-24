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

## TODO перед публикацией
- `lib/data.ts`: Telegram, email, реальный рейтинг (Supabase), сверить 7 классов YOLO
- `offer.tsx`: проверить номер статьи Экокодекса
- `stats.tsx`: источник цифры 4.1М т и формулировку «129 школ»
- `ecobox-reveal.tsx`: заменить эмодзи-заглушки на скриншоты в `/public/screens`
