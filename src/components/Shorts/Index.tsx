import React from "react";
import ImageGallery from "./Images";

function Shorts() {
  return (
    <section className="px-6 md:px-[150px] py-14 ">
      {/* Heading */}
      <div className="flex items-center justify-center">
        <h1 className="text-[#022935] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 relative inline-block">
          <span>Ace </span>
          <span className="relative inline-block">
            Shorts
            <svg
              className="absolute -bottom-2 left-0 w-full h-2"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q25 0 50 5 T100 5"
                stroke="#00A0E3"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
          </span>{" "}
        </h1>
      </div>

      {/* Grid */}
      <ImageGallery/>
    </section>
  );
}

export default Shorts;
