import { Marquee } from "@/components/ui/marquee";
import { PARTNERS } from "@/lib/data";

export function Partners() {
  return (
    <section className="border-y border-white/5 py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-white/40">Датасеты, технологии и программы</p>
      <Marquee>
        {PARTNERS.map((p) => (
          <span key={p} className="mx-4 whitespace-nowrap text-xl font-semibold text-white/40 transition-colors hover:text-leaf-400">
            {p}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
