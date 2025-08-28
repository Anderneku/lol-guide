import LanesTemplate from "./lanesTemplate";

export default function LaneGuidesList() {
    return (
        <>
        <LanesTemplate
          laneTitle="TOP LANE"
          laneChamps={["Tank", "Bruisers", "Juggernauts"]}
          laneLocation="Top side
              of the map."
          laneRole="Usually
              durable champions who can fight 1v1, hold their lane, and later
              become frontline or split-pushers."
          laneTip="Focus on surviving early, farming minions, and learning when to
              teleport to help your team."
        />
        <LanesTemplate
          laneTitle="JUNGLE"
          laneChamps={["Assassins", "Tank", "Engage"]}
          laneLocation="The
              spaces between lanes, farming monsters instead of minions."
          laneRole="Control
              objectives (Dragon, Baron, Rift Herald), support lanes with ganks,
              and provide vision."
          laneTip="Learn jungle routes and use the element of surprise—your enemies
              can’t see you coming!"
        />
        <LanesTemplate
          laneTitle="MID LANE"
          laneChamps={["Mages", "Assassins"]}
          laneLocation="Middle
              of the map."
          laneRole="Fast access
              to other lanes, high damage dealers, and often the team’s main
              carry."
          laneTip="Mid
              laners need to farm well and roam to help side lanes when
              possible."
        />
        <LanesTemplate
          laneTitle="BOT LANE (ADC/Attack Damage Carry)"
          laneChamps={["Marksman"]}
          laneLocation="Bottom
              of the map."
          laneRole="Main source
              of consistent damage, especially late game. Usually fragile and
              needs protection."
          laneTip="Focus on last-hitting minions and staying safe—your power spikes
              later in the game. Your basic attack deal the most damage in the game so early on focus on buying items to help you scale."
        />
        <LanesTemplate
          laneTitle="SUPPORT"
          laneChamps={["Enchanter", "Tank", "Mage"]}
          laneLocation="Bottom
              of the map alongside your ADC."
          laneRole="Protect the ADC until he scales, control vision with wards, and set up plays for the team."
          laneTip="Your job isn’t to get kills—it’s to make sure your team survives and thrives."
        />
        </>
    );
}