import { ScanLine, Sparkles } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card-3d";

/** Макет экрана сканера внутри 3D Card (Aceternity) + BorderBeam (Magic UI) */
export function PhoneMockup() {
  return (
    <CardContainer>
      <CardBody className="relative h-[560px] w-[280px] rounded-[2.75rem] border border-white/15 bg-forest-950 p-3 shadow-[0_40px_120px_-20px_rgba(94,234,154,0.35)]">
        <BorderBeam size={260} duration={10} />
        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-forest-800 to-forest-950">
          <div className="mx-auto mt-2 h-6 w-24 rounded-full bg-black" />
          <CardItem translateZ={30} className="px-5 pt-5">
            <p className="text-xs text-white/50">WasteWise · Сканер</p>
            <p className="text-lg font-semibold text-white">Наведи камеру на отход</p>
          </CardItem>

          <CardItem translateZ={60} className="mx-5 mt-4">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-2xl border border-leaf-400/40 bg-[radial-gradient(circle_at_50%_40%,#0f3f24,#03120c)]">
              <div className="absolute inset-0 grid place-items-center text-7xl">🧴</div>
              <div className="absolute left-[18%] top-[16%] h-[66%] w-[64%] rounded-lg border-2 border-lime-400">
                <span className="absolute -top-6 left-0 rounded bg-lime-400 px-1.5 py-0.5 text-[10px] font-bold text-forest-950">plastic · 0.91</span>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 animate-[scan_2.4s_ease-in-out_infinite] bg-leaf-400 shadow-[0_0_20px_4px_#5eea9a]" />
            </div>
          </CardItem>

          <CardItem translateZ={80} className="mx-5 mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-leaf-400">
              <ScanLine className="h-4 w-4" />
              <span className="text-sm font-semibold">Пластик → жёлтый контейнер</span>
            </div>
            <p className="mt-1 text-xs text-white/50">Сполосни и сплющи бутылку. +10 баллов твоему классу</p>
          </CardItem>

          <CardItem translateZ={40} className="mx-5 mt-3 flex items-center gap-2 rounded-2xl bg-leaf-400/10 p-3 text-xs text-leaf-300">
            <Sparkles className="h-4 w-4 shrink-0" />
            ИИ ошибся? Исправь — получи +15 баллов
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
