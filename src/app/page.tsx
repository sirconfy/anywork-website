import ActiveWorkForm from "./components/home/ActiveWorkForm";
import CustomersSay from "./components/home/CustomersSay";
import FAQ from "./components/home/FAQ";
import HeroSection from "./components/home/HeroSection";
import HowItWorks from "./components/home/HowItWorks";
import Newsletter from "./components/home/NewsLetter";
import WhyChooseAnyWork from "./components/home/WhyChooseAnyWork";

export default function Home() {
  return (
    <>
      <HeroSection />

      <ActiveWorkForm />

      <HowItWorks />

      <WhyChooseAnyWork />

      <CustomersSay />

      <FAQ />

      <Newsletter />
    </>
  );
}
