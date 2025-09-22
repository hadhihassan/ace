import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative h-[614px] bg-[#00A0E3] overflow-hidden">
      {/* Left-side image/logo (only visible on large screens) */}
      <div className="h-full w-1/2 -ml-36 hidden lg:block">
        <div className="relative h-full w-full top-20 pr-20">
          <Image
            src="/heroIogo.png"
            alt="icon"
            width={900}
            height={900}
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div
        className="
          absolute z-50 flex flex-col
          lg:left-[315px] lg:top-[348px] lg:transform lg:-translate-y-1/2
          text-center lg:text-left
          items-center lg:items-start
          justify-center
          h-full w-full px-6
        "
      >
        <h3 className="text-white font-medium text-3xl lg:text-4xl tracking-wide">
          Prepare Yourself for IT Era
        </h3>
        <h4 className="text-white text-2xl font-light mb-4 tracking-wide">
          Get Yourself Renovated
        </h4>
        <p className="text-white font-normal  md:text-lg lg:text-lg leading-6 max-w-xl tracking-wide">
          Software Development, Web Designing & Development <br className="hidden md:block" />
          Multimedia & Animation, Graphic Designing, Accounting Packages <br className="hidden lg:block" />
          PSC Approved Packages
        </p>
        <div className="pt-6 md:pt-10  text-sm md:text-xl lg:text-xl">
          <button className="py-3 px-8 md:w-52 text-gray-800 bg-white rounded-md">
            Explore Now
          </button>
        </div>
      </div>

      {/* Right side hero image on desktop, full background on mobile */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-1/2">
        <div className="relative h-full w-full">
          <Image
            src="/hero.jpg"
            alt="hero"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient - stronger on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#00A0E3] via-[#00A0E3]/50 to-transparent"></div>
        </div>
      </div>

      {/* Dots at bottom center */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex gap-3 z-50">
        <span className="w-2 h-2 rounded-full bg-white "></span>
        <span className="w-2 h-2 rounded-full bg-white "></span>
        <span className="w-2 h-2 rounded-full bg-white "></span>
      </div>
    </div>
  );
}

export default Hero;
