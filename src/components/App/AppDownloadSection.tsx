"use client";
import * as React from "react";

interface AppDownloadSectionProps {
  className?: string;
}

export function AppDownloadSection({ className = "" }: AppDownloadSectionProps) {
  return (
    <section className={`flex flex-col mt-7 max-w-full w-[316px] ${className}`}>
      <h3 className="self-start text-lg font-medium text-stone-900">
        Download The App Now
      </h3>
      <div className="flex gap-4 items-center mt-2.5">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9f2333deedc4b14f58bff7d7fac18a4ee8e54ccc?placeholderIfAbsent=true&apiKey=2f5d6cb3b06340e59a369aed650b519e"
          alt="Download on App Store"
          className="object-contain shrink-0 self-stretch my-auto aspect-[3.33] w-[150px]"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/51534423fcd058e583c1b88f06d0d47d90a4ceee?placeholderIfAbsent=true&apiKey=2f5d6cb3b06340e59a369aed650b519e"
          alt="Get it on Google Play"
          className="object-contain shrink-0 self-stretch my-auto aspect-[3.33] w-[150px]"
        />
      </div>
    </section>
  );
}
