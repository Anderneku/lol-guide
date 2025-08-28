"use client";
import ChampionsGuide from "@/components/learn-sections/championsGuide";
import LanesGuide from "@/components/learn-sections/lanesGuide";
import GeneralOverview from "@/components/learn-sections/whatIsLeague";

export default function LearnPage() {
  return (
    <main className="w-full h-full flex flex-col items-center p-8">
      <GeneralOverview/>
      <LanesGuide/>
      <ChampionsGuide/>
    
    </main>
  );
}
