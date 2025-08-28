import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";

export default function GeneralOverview() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen  w-full p-8">
        <div className=" w-full xl:w-5xl flex flex-col items-center">
          <h1 className="text-center p-8">
            WHAT IS <span className="text-primary">LEAGUE OF LEGENDS</span>?
          </h1>
          <p className=" text-2xl leading-10 text-center text-muted-foreground tracking-tight cursor-default">
            <span className="border-b border-dotted">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>League of Legends</span>
                </TooltipTrigger>
                <TooltipContent className="text-2xl">
                  League of Legends is a{" "}
                  <span>
                    <a
                      target="_blank"
                      style={{
                        textDecoration: "underline",
                        textAlign: "center",
                      }}
                      href="https://www.google.com/search?q=what+is+a+moba"
                      className="flex"
                    >
                      MOBA <ArrowUpRight />
                    </a>
                  </span>
                </TooltipContent>
              </Tooltip>
            </span>{" "}
            is a team-based strategy game where{" "}
            <span>2 teams of 5 powerful champions</span> face off to destroy the
            other’s base. You can choose from over 160 champions to make epic
            plays, secure kills, and take down towers as you battle your way to
            victory.
          </p>
          <blockquote>
            {" "}
            A player is referred to as a <span>Summoner</span>, who
            plays/summons a<span> Champion</span>.
          </blockquote>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <video
            onContextMenu={(e) => e.preventDefault()}
            preload="auto"
            disablePictureInPicture
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            src="/videos/clips/lol_clip1.mp4"
            className=" select-none object-cover rounded-full w-[50%] h-[50%] border-4 border-accent-foreground"
          >
            Video Error
          </video>
        </div>
      </section>
    );
}