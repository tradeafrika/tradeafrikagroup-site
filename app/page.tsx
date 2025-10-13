import AfCFTASection from "@/components/pages/home/afctaSection";
import HeroSection from "@/components/pages/home/herosection";
import FourPillarsSection from "@/components/pages/home/pillarsSection";
import TradeReadySection from "@/components/pages/home/ready-section";
import OurStoryTimeline from "@/components/pages/home/storySection";
import OurTeamSection from "@/components/pages/home/teamsection";
import VisionMissionSection from "@/components/pages/home/visionMissionSection";
import Image from "next/image";

export default function Home() {
  return (
      <div>
          <HeroSection/>
          <VisionMissionSection/>
          <FourPillarsSection/>
          <OurStoryTimeline/>
          <OurTeamSection/>
          <AfCFTASection/>
          <TradeReadySection/>
      </div>
  );
}
