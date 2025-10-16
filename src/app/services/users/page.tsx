"use client"

import FAQ from "@/app/components/home/FAQ"
import CommonNeeds from "./component/CommonNeeds"
import Convinient from "./component/Convinient"
import GetStarted from "./component/GetStarted"
import HeroSection from "./component/HeroSection"
import PopularSearches from "./component/PopularSearch"
import CallToAction from "./component/CallToAction"

export default function page() {
  return (
    <>
      <HeroSection />

      < CommonNeeds />
      <Convinient />
      <GetStarted  /> 
      <PopularSearches />
      <FAQ />
      <CallToAction />
    </>
  )
}
