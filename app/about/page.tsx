import AfCFTASection from "@/components/pages/about-2/afctaSection";
import HeroSection from "@/components/pages/about-2/herosection";
import FourPillarsSection from "@/components/pages/about-2/pillarsSection";
import TradeReadySection from "@/components/pages/about-2/ready-section";
import OurStoryTimeline from "@/components/pages/about-2/storySection";
import OurTeamSection from "@/components/pages/about-2/teamsection";
import StoryTake from "@/components/pages/about-2/timeline";
import VisionMissionSection from "@/components/pages/about-2/visionMissionSection";
import Image from "next/image";

export default function Home() {
  return (
      <div>
          <HeroSection/>
          <VisionMissionSection/>
          <FourPillarsSection/>
          <StoryTake/>
          {/* <OurTeamSection/> */}
          <AfCFTASection/>
          <TradeReadySection/>
      </div>
  );
}
