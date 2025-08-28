import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import LaneGuidesList from "./lanesTemplate/laneGuidesList";

export default function LanesGuide() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className=" w-full xl:w-5xl flex flex-col">
        <h1 className="text-center p-8 ">LANES</h1>

        <div className="flex justify-between w-full p-8 ">
          <Tooltip>
            <TooltipTrigger asChild>
              <img src={"/images/lanes/topLane.png"} width={128} height={128} />
            </TooltipTrigger>
            <TooltipContent className="text-2xl">Top Lane</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <img src={"/images/lanes/jungle.png"} width={128} height={128} />
            </TooltipTrigger>
            <TooltipContent className="text-2xl">Jungle</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <img src={"/images/lanes/midLane.png"} width={128} height={128} />
            </TooltipTrigger>
            <TooltipContent className="text-2xl">Mid Lane</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <img src={"/images/lanes/botLane.png"} width={128} height={128} />
            </TooltipTrigger>
            <TooltipContent className="text-2xl">Bot(tom) Lane</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <img src={"/images/lanes/support.png"} width={128} height={128} />
            </TooltipTrigger>
            <TooltipContent className="text-2xl">Support</TooltipContent>
          </Tooltip>
        </div>
        <p className=" text-2xl leading-10 text-center text-muted-foreground tracking-tight cursor-default p-8 pb-0">
          In League of Legends each player in a team has a role to play, with
          each role having specific/expected playstyles, behaviour patterns and
          objectives. Hence, players are split up across the{" "}
          <span>
            {" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="border-b border-dotted">map</span>
              </TooltipTrigger>
              <TooltipContent className="text-2xl p-4">
                <img
                  src={"/images/summoners_rift.jpg"}
                  width={512}
                  height={512}
                  className="rounded-lg"
                />
              </TooltipContent>
            </Tooltip>
          </span>
        </p>
        <blockquote>
          The map is called <span>Summoner's Rift</span>
        </blockquote>
        <div>
          <img src={"/images/summonersRift_roles.png"} className="rounded-lg" />
          <p className="text-center italic p-2 text-base">
            Top Down View of Summoner's Rift with Roles and their Positions
            Represented
          </p>
        </div>
        <LaneGuidesList />
      </div>
    </section>
  );
}
