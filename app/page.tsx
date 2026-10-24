import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Partners } from "@/components/sections/partners";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { EcoboxReveal } from "@/components/sections/ecobox-reveal";
import { Leaderboard } from "@/components/sections/leaderboard";
import { Offer } from "@/components/sections/offer";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <div className="mt-20"><Partners /></div>
      <ProblemSolution />
      <EcoboxReveal />
      <Leaderboard />
      <Offer />
      <Faq />
      <Footer />
    </main>
  );
}
