import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getChampions() {
  let champions = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/champion.json"
  );
  let data = await champions.json();
  return data;
}



export default async function ChampionsPage() {
  const champions = await getChampions();
  const champList: champion[] = Object.values(champions.data);
  console.log(champions);
  return (
    <main className="w-full h-full flex flex-col items-center p-8">
      <div className="grid grid-cols-12 border-2 ">
        {champList.map((champion, index) => (
          <Link key={index} href={`/champions/${champion.id}`}>
            <div
              
              className="flex flex-col cursor-pointer transition-all hover:scale-110"
            >
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${champion.image.full}`}
              />
              <p className="w-full text-center">{champion.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
