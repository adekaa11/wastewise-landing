export const LINKS = {
  app: "https://wastewise-kz.streamlit.app",
  github: "https://github.com/adekaa11/wastewise",
  telegram: "https://t.me/your_handle", // TODO: заменить
  email: "mailto:your@email.com", // TODO: заменить
};

export const WASTE_TYPES = [
  { name: "Пластик", emoji: "🧴", bin: "Жёлтый" },
  { name: "Бумага", emoji: "📦", bin: "Синий" },
  { name: "Стекло", emoji: "🍾", bin: "Зелёный" },
  { name: "Металл", emoji: "🥫", bin: "Жёлтый" },
  { name: "Органика", emoji: "🍌", bin: "Коричневый" },
  { name: "Батарейки", emoji: "🔋", bin: "Экобокс" },
  { name: "Смешанный", emoji: "🗑️", bin: "Серый" },
]; // TODO: сверить 7 классов с моделью YOLO

export const LEADERBOARD = [
  { school: "Школа A · 10 «Б»", city: "Астана", points: 12840, delta: 320 },
  { school: "Школа B · 9 «А»", city: "Астана", points: 11905, delta: 210 },
  { school: "Школа C · 11 «В»", city: "Астана", points: 10470, delta: 95 },
  { school: "Школа D · 8 «А»", city: "Астана", points: 9620, delta: 410 },
  { school: "Школа E · 10 «А»", city: "Астана", points: 8890, delta: 60 },
]; // DEMO: заменить на реальные данные из Supabase

export const PARTNERS = ["TrashNet", "RealWaste", "TACO", "Ultralytics YOLO", "OpenAI GPT-4o-mini", "Supabase", "Streamlit", "«Таза Қазақстан»"];
