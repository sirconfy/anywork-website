"use client"

import CallToAction from "./component/CallToAction"
import CompetetiveEdge from "./component/CompetetiveEdge"
import HeroSection from "./component/HeroSection"
import MissionVision from "./component/MissionVission"
import Roadmap from "./component/RoadMap"
import WhyAnywork from "./component/WhyAnywork"

export default function page() {
  return (
    <>
      <HeroSection />
      <WhyAnywork  />
      <CompetetiveEdge />
      <MissionVision />
      <Roadmap />
      <CallToAction />
    </>
  )
}
