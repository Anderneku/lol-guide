export default function ChampionsGuide() {
  return (
    <section className="flex flex-col items-center  min-h-screen  w-full p-8">
      <div className=" w-full xl:w-5xl flex flex-col ">
        <h1 className="text-center p-8 ">CHAMPIONS</h1>
        <p className=" text-2xl leading-10 text-center text-muted-foreground tracking-tight cursor-default pb-8">
          Champions are the playable characters in League of Legends. In League,
          there is no shortage of champions as there are over 160 different
          champions to choose from. Each Champion has:
        </p>
        <div className=" w-full flex justify-center">
          <ul className="list-disc text-2xl space-y-4">
            <li>A Basic Attack</li>
            <li>3 Unique Abilities</li>
            <li>An Ultimate Ability</li>
            <li>Strengths and Weaknesses</li>
            <li>A Role/Lane they Best Fit in</li>
          </ul>
        </div>
        <div className="pt-8">
          <h2>CLASSES</h2>
          <p className=" text-2xl leading-10 text-muted-foreground tracking-tight cursor-default py-4">
            Champions are grouped into 7 major classes based on their playstyle:
          </p>
          <div className=" w-full flex justify-center">
            <ol className="list-decimal text-2xl space-y-4">
              <li>
                <span className="text-accent-foreground">Fighter:</span> Mix of
                damage and durability.
              </li>
              <li>
                <span className="text-accent-foreground">Mage:</span> High magic
                damage, poke, and area control.
              </li>
              <li>
                <span className="text-accent-foreground">Assassin:</span> Burst
                damage, eliminate key targets
              </li>
              <li>
                <span className="text-accent-foreground">Marksman:</span> Ranged
                sustained damage, rely on items
              </li>
              <li>
                <span className="text-accent-foreground">Tank:</span> Soak
                damage and protect teammates.
              </li>
              <li>
                <span className="text-accent-foreground">Controller:</span>{" "}
                Assist allies with potent utility and keep enemies at bay with
                crowd control.
              </li>
              <li>
                <span className="text-accent-foreground">
                  Specialist (Unclassified)
                </span>
              </li>
            </ol>
          </div>
        </div>
          <blockquote>
            Note that there are other classes but they fall under sub-classes of
            the main ones!
          </blockquote>
        <div className="">
          <h2>CHAMPION PROGRESSION</h2>
          <p className=" text-2xl leading-10 text-muted-foreground tracking-tight cursor-default py-4">
            In-Game, there are{" "}
            <span className="accent-foreground">18 levels</span> for you to
            climb. Each level gives you the opportunity to unlock your abilities
            and upgrade them until eventually, all are maxed. With each level, your champion generally becomes stronger; this is what a 'Power Spike is'.
          </p>
        </div>
      </div>
    </section>
  );
}
