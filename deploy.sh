#!/usr/bin/env bash
# Создаёт репозиторий adekaa11/wastewise-landing и заливает код.
# Запуск из корня проекта:  chmod +x deploy.sh && ./deploy.sh
set -euo pipefail

REPO="adekaa11/wastewise-landing"
VISIBILITY="${VISIBILITY:-public}"   # VISIBILITY=private ./deploy.sh
BRANCH="main"

# 1. Проверки
command -v git >/dev/null || { echo "❌ git не установлен"; exit 1; }
command -v gh  >/dev/null || { echo "❌ GitHub CLI не установлен: https://cli.github.com"; exit 1; }
gh auth status >/dev/null 2>&1 || { echo "🔑 Нужен вход в GitHub"; gh auth login; }
[ -f package.json ] || { echo "❌ Запусти скрипт из корня проекта"; exit 1; }

# 2. Проверка сборки перед пушем
echo "📦 Установка зависимостей и проверка сборки..."
npm install --no-audit --no-fund
npm run build

# 3. Git
[ -d .git ] || git init -b "$BRANCH"
git add -A
git diff --cached --quiet || git commit -m "feat: WasteWise promo landing (Next.js 14, Tailwind, Framer Motion)"

# 4. Репозиторий: создать или переиспользовать
if gh repo view "$REPO" >/dev/null 2>&1; then
  echo "ℹ️  $REPO уже существует — пушу в него"
  git remote get-url origin >/dev/null 2>&1 || git remote add origin "https://github.com/$REPO.git"
  git push -u origin "$BRANCH"
else
  gh repo create "$REPO" --"$VISIBILITY" \
    --description "Промо-лендинг WasteWise — ИИ-сортировка отходов для школ Казахстана" \
    --source=. --remote=origin --push
fi

gh repo edit "$REPO" --homepage "https://wastewise-kz.streamlit.app" --add-topic nextjs,tailwindcss,ai,ecology,kazakhstan >/dev/null || true

echo "✅ Готово: https://github.com/$REPO"
echo "▶️  Деплой на Vercel: npx vercel --prod   (или импорт репо на vercel.com/new)"
