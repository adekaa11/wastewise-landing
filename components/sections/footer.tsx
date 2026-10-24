import { Github, Mail, Send } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-forest-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[2fr_1fr_1fr_auto]">
        <div>
          <p className="text-2xl font-bold text-white">♻️ WasteWise</p>
          <p className="mt-3 max-w-sm text-sm text-white/50">ИИ-платформа для сортировки отходов и экологического воспитания школьников Казахстана.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Продукт</p>
          <ul className="mt-4 space-y-2 text-sm text-white/50">
            <li><a href="#solution" className="hover:text-leaf-400">Возможности</a></li>
            <li><a href="#leaderboard" className="hover:text-leaf-400">Рейтинг</a></li>
            <li><a href="#offer" className="hover:text-leaf-400">Для школ и ЖК</a></li>
            <li><a href="#faq" className="hover:text-leaf-400">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Автор</p>
          <p className="mt-4 text-sm text-white/70">Адильжан Кадыргажы</p>
          <div className="mt-4 flex gap-3">
            {[
              { href: LINKS.github, Icon: Github, label: "GitHub" },
              { href: LINKS.telegram, Icon: Send, label: "Telegram" },
              { href: LINKS.email, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 hover:border-leaf-400/50 hover:text-leaf-400">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="rounded-2xl bg-white p-2">
            <QRCodeSVG value={LINKS.app} size={96} fgColor="#03120c" />
          </div>
          <p className="text-xs text-white/40">Открыть WasteWise</p>
        </div>
      </div>
      <p className="border-t border-white/5 py-6 text-center text-xs text-white/30">© 2026 WasteWise · Сделано в Казахстане 🇰🇿</p>
    </footer>
  );
}
