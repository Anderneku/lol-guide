"use client";
import AbilityVideo from "@/components/abilityVideo";
import { useState } from "react";

export default function ChampionPageClient({
  spellsList,
  championKey,
}: {
  spellsList: [{ id: string }];
  championKey: string;
}) {
  const [ability, setAbility] = useState("Q");
  const abilities = ["Q", "W", "E", "R"];
  return (
    <>
      <div className="flex gap-4 pb-12">
        {spellsList.map((spell, index) => (
          <div
            onClick={() => {
              index === 0
                ? setAbility("Q")
                : index === 1
                ? setAbility("W")
                : index === 2
                ? setAbility("E")
                : setAbility("R");
            }}
            key={index}
            role="button"
            className="flex flex-col gap-2 transition-all hover:scale-125 cursor-pointer"
          >
            <div
              className={`relative ${
                abilities.indexOf(ability) === index ? "scale-125" : "scale-100"
              }`}
            >
              <img
                className={`${
                  abilities.indexOf(ability) === index
                    ? "brightness-100 border-2 border-secondary"
                    : "brightness-20"
                }  `}
                src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/spell/${spell.id}.png`}
          
              />
              <div className="w-full flex justify-center  absolute bottom-[-10] ">
                <div
                  className={`w-8 h-8 border-2 border-background bg-secondary text-secondary-foreground flex justify-center items-center rounded-full`}
                >
                  <p>
                    {index === 0
                      ? "Q"
                      : index === 1
                      ? "W"
                      : index === 2
                      ? "E"
                      : "R"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AbilityVideo championKey={championKey} ability={ability} />
    </>
  );
}
