"use client";
export default function AbilityVideo({
  championKey,
  ability,
}: {
  championKey: string;
  ability: string;
}) {
  return (
    <div className="w-[892px] h-[608px]  overflow-hidden ">
      <video
        onContextMenu={(e) => e.preventDefault()}
        preload="auto"
        disablePictureInPicture
        autoPlay={true}
        loop={true}
        playsInline={true}
        onError={() =>
          console.error("Video failed to load:", championKey, ability)
        }
        src={`https://lol.dyn.riotcdn.net/x/videos/champion-abilities/${championKey}/ability_${championKey}_${ability}1.mp4`}
        className="select-none  w-full h-full object-cover rounded-lg border-2"
      />
    </div>
  );
}
