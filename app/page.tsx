"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-full ">
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="relative w-full h-full">
          <div className="z-50 absolute top-0 left-0 flex w-full p-4 text-primary-foreground items-center ">
            <img
              src={"/images/league.png"}
              width={64}
              height={64}
              className="mr-auto"
            />
            <div className="flex w-full justify-around text-3xl text-accent-foreground">
              <h2 style={{ fontFamily: "BeaufortLOL" }}>
                <a href="/learn">LEARN</a>
              </h2>
              <h2 style={{ fontFamily: "BeaufortLOL" }}>
                <a href="#">GUIDES</a>
              </h2>
              <h2 style={{ fontFamily: "BeaufortLOL" }}>
                <a href="/champions">CHAMPIONS</a>
              </h2>
              <h2 style={{ fontFamily: "BeaufortLOL" }}>
                <a href="#">ROLES</a>
              </h2>
              <h2 style={{ fontFamily: "BeaufortLOL" }}>
                <a href="#">ITEMS</a>
              </h2>
              <h2 style={{ fontFamily: "BeaufortLOL" }}>
                <a href="#">OBJECTIVES</a>
              </h2>
              <h2 style={{ fontFamily: "BeaufortLOL" }}>
                <a href="#">SLANGS</a>
              </h2>
            </div>
          </div>
          <video
            onContextMenu={(e) => e.preventDefault()}
            preload="auto"
            disablePictureInPicture
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            src="/videos/lol_trailer.mp4"
            className="brightness-40 select-none  w-full h-full object-fill"
          >
            Video Error
          </video>
          <div className="absolute top-1/2 left-1/2 p-4 transform -translate-x-1/2 -translate-y-1/2  text-center font-bold   w-fit h-fit flex flex-col gap-8 items-center">
            {/* <div className="bg-primary rounded-full p-4">

            <img
              src={"/images/league.png"}
              width={100}
              height={100}
            />
            </div> */}
            <h1 style={{ fontFamily: "BeaufortLOL" }} className="text-center text-8xl text-primary-foreground">
              THE NEW PLAYER'S GUIDE TO LEAGUE OF LEGENDS
            </h1>
            <a href="/learn">
            <Button
              variant={"secondary"}
              style={{ fontFamily: "BeaufortLOL" }}
              className="text-4xl p-8 w-fit"
            >
              LEARN LEAGUE <ArrowRight />
            </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
