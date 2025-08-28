import AbilityVideo from "@/components/abilityVideo";
import ChampionPageClient from "./championPageClient";

async function getChampions() {
  let champions = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/champion.json"
  );
  let data = await champions.json();
  return data;
}

async function getIndividualChampionData(id: string) {
  let individualChampion = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/champion/${id}.json`
  );
  let data = await individualChampion.json();
  return data.data;
}
export default async function ChampionPage({
  params,
}: {
  params: { championId: string };
}) {
  const { championId } = await params;

  const champions = await getChampions();

  const champList: champion[] = Object.values(champions.data);
  const currentChampion = champList.filter(
    (champion) => champion.id === championId
  );
  const currentChampionKey = currentChampion[0].key.padStart(4, "0");

  const individualChampionDataRaw = await getIndividualChampionData(championId);
  const individualChampionData = Object.values(
    individualChampionDataRaw
  )[0] as championData;
  const championSpells = individualChampionData.spells;
  // console.log(championSpells)

  return (
    <main className="w-full h-full flex flex-col items-center p-8">
      <div className="flex items-center gap-4 w-fit pb-8">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${currentChampion[0].image.full}`}
          className="border-2 border-primary"
        />
        <div className="flex flex-col w-full h-full justisfy-center">
          <h1>
            {currentChampion[0].name} ~{" "}
            <span className="text-muted-foreground italic">
              {currentChampion[0].title}
            </span>
          </h1>
          <div className="flex gap-2">
            {championSpells.map((spell, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="relative">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/spell/${spell.id}.png`}
                     className="border-2 border-primary"
                  />
                  <div className="w-full flex justify-center  absolute bottom-[-10] ">
                    <div className="w-8 h-8 border-2 border-background bg-secondary text-secondary-foreground flex justify-center items-center rounded-full">
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
        </div>
      </div>
      <div className="pb-8 ">

      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentChampion[0].id}_0.jpg`}
        className="rounded-lg border-2 border-accent-foreground"
      />
      </div>
      <h1 className="pb-8">Abilites</h1>
      <ChampionPageClient
        championKey={currentChampionKey}
        spellsList={championSpells}
      />
    </main>
  );
}
