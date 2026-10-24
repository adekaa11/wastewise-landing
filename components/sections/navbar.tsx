import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/data";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 mx-auto flex w-[calc(100%-2rem)] max-w-5xl items-center justify-between rounded-full border border-white/10 bg-forest-950/70 px-5 py-2.5 backdrop-blur-xl">
      <a href="#" className="font-bold text-white">♻️ WasteWise</a>
      <nav className="hidden gap-6 text-sm text-white/60 md:flex">
        <a href="#solution" className="hover:text-white">Решение</a>
        <a href="#leaderboard" className="hover:text-white">Рейтинг</a>
        <a href="#offer" className="hover:text-white">Для школ</a>
        <a href="#faq" className="hover:text-white">FAQ</a>
      </nav>
      <Button size="sm" asChild>
        <a href={LINKS.app} target="_blank" rel="noreferrer">Запустить</a>
      </Button>
    </header>
  );
}
