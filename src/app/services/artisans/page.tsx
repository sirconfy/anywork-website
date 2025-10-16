"use client";

import { FaQ } from "react-icons/fa6";
import HeroSection from "./component.tsx/HeroSection";
import Requirements from "./component.tsx/Requirements";
import WhyArtisansLoveAnyWork from "./component.tsx/WhyArtisansLoveAnyWork";
import FAQ from "@/app/components/home/FAQ";
import CallToAction from "./component.tsx/CallToAction";

export default function page() {
  return (
    <>
      <HeroSection />
      <WhyArtisansLoveAnyWork />
      <Requirements />
      <FAQ />
      <CallToAction  />
    </>
  );
}
