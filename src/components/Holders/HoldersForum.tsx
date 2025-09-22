import Image from "next/image";
import React from "react";

function HoldersForum() {
  return (
    <section className="relative bg-[#098B9F]/10 pl-6 py-5 sm:py-0 md:pl-[150px] flex flex-col lg:flex-row items-center lg:items-between">
      {/* Left Content */}
      <div className="flex-1 z-20 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-[#022935] font-bold text-xl sm:text-2xl lg:text-5xl mb-6 leading-tight">
          Rank Holders Forum
        </h1>
        <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-4xl font-semibold leading-5">
          A special platform to recognize and celebrate the achievements of our
          outstanding rank holders. This forum provides an opportunity to
          connect, share experiences, and inspire upcoming students towards
          excellence.
        </p>
        <button className="px-9 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-[#1F67A5] to-[#49acfd] hover:opacity-90 transition-all duration-300">
          Apply Now
        </button>
      </div>

      {/* Right Image */}
      <div className="hidden absolute top-0 right-10 h-full lg:static lg:flex lg:flex-1 lg:justify-end lg:items-end">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
          <Image
            src="/Group70.png"
            alt="Forum Illustration"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
      
    </section>
  );
}

export default HoldersForum;
