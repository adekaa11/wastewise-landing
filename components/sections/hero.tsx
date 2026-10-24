"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TextMorph } from "@/components/ui/text-morph";
import { PhoneMockup } from "./phone-mockup";

const THESES = ["7 видов отходов", "точность 85.7%", "60 эко-вопросов", "рейтинг школ"];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % THESES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden pb-24 pt-32">
      <Spotlight className="-left-10 -top-40 md:-left-32 md:-top-20" />
      <BackgroundBeams />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-leaf-400/30 bg-leaf-400/10 px-4 py-1.5 text-sm text-leaf-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-leaf-400" />
            AI · <TextMorph>{THESES[i]}</TextMorph>
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Сортируй мусор <AnimatedGradientText>с помощью ИИ.</AnimatedGradientText>
            <br />
            <span className="text-white/80">Соревнуйся школами и классом.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Сфотографируй отход — YOLO-модель определит тип и подскажет контейнер. Каждое правильное действие приносит баллы твоему классу.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button size="lg" asChild>
              <a href={LINKS.app} target="_blank" rel="noreferrer">
                Запустить WasteWise <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 pr-4">
              <div className="rounded-xl bg-white p-1.5">
                <QRCodeSVG value={LINKS.app} size={64} fgColor="#03120c" />
              </div>
              <p className="text-xs leading-tight text-white/60">Наведи камеру<br />и открой с телефона</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="animate-float">
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
