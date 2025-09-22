"use client";
import * as React from "react";

interface HeroImageProps {
  className?: string;
}

export function HeroImage({ className = "" }: HeroImageProps) {
  return (
    <div className={`ml-5 w-[38%] max-md:ml-0 max-md:w-full ${className}`}>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/2d49e9681c2d5e87874d42ec9d8d48aeae7acfdb?placeholderIfAbsent=true&apiKey=2f5d6cb3b06340e59a369aed650b519e"
        alt="Mobile app interface mockup"
        className="object-contain grow w-full aspect-[0.87] max-md:mt-7"
      />
    </div>
  );
}
