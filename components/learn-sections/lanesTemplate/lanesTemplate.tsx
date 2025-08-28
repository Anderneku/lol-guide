import { Badge } from "@/components/ui/badge";

type laneGuide = {
  laneTitle: string;
  laneLocation: string;
  laneChamps: string[];
  laneRole: string;
  laneTip: string;
};

export default function LanesTemplate({
  laneTitle,
  laneLocation,
  laneChamps,
  laneRole,
  laneTip,
}: laneGuide) {
  return (
    <div className="flex flex-col py-4">
      <div className="flex items-center gap-4">
        <img src={"/images/lanes/topLane.png"} width={32} height={32} />
        <h2>{laneTitle}</h2>
      </div>
      <ul className=" text-2xl flex flex-col gap-2 py-4">
        <li>
          <span className="text-accent-foreground">Location:</span>{" "}
          {laneLocation}
        </li>
        <div className="flex gap-2">
          <li className="text-accent-foreground">Typical Champions:</li>
          {laneChamps.map((champType, index) => (
            <Badge key={index} variant={"secondary"}>
              {champType}
            </Badge>
          ))}
        </div>
        <li>
          <span className="text-accent-foreground">Role:</span> {laneRole}
        </li>
        <li>
          <span className="text-accent-foreground">Beginner Tip:</span>{" "}
          {laneTip}
        </li>
      </ul>
    </div>
  );
}
