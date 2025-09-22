"use client";
import * as React from "react";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import Image from "next/image";

export function HybridLearningHero() {
  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-8 w-full bg-blend-luminosity min-h-[540px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/1a8f99cabcdacda4cb2facb43850e6c156a4f546?placeholderIfAbsent=true&apiKey=2f5d6cb3b06340e59a369aed650b519e"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative w-full max-w-[1132px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default HybridLearningHero;
