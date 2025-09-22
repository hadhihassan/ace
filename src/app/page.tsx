import AboutUs from "@/components/About";
import HybridLearningHero from "@/components/App/HybridLearningHero";
import Books from "@/components/Books";
import Branches from "@/components/Branches";
import Courses from "@/components/Courses";
import Featues from "@/components/Features";
import Hero from "@/components/Hero";
import HoldersIndex from "@/components/Holders/Index";
import News from "@/components/News";
import Service from "@/components/Service/Index";
import Shorts from "@/components/Shorts/Index";
import SuccessStories from "@/components/SuceessStories/SuccessStories";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Courses />
      <HoldersIndex />
      <SuccessStories/>
      <Books/>
      <HybridLearningHero/>
      <Shorts/>
      <News />
      <Service/>
      <Branches/>
      <Featues/>
    </>
  );
}
