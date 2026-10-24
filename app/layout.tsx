import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WasteWise — сортируй мусор с помощью ИИ",
  description: "ИИ-сканер отходов, эко-викторина и рейтинг школ Казахстана.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body>{children}</body>
    </html>
  );
}
