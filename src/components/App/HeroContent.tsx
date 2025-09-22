"use client";
import * as React from "react";
import { AppDownloadSection } from "./AppDownloadSection";

interface HeroContentProps {
  className?: string;
}

export function HeroContent({ className = "" }: HeroContentProps) {
  return (
    <div className={`w-[62%] max-md:ml-0 max-md:w-full ${className} flex items-center justify-center`}>
      <header className="flex relative flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
        <h1 className="self-stretch text-5xl font-medium text-teal-950 max-md:max-w-full max-md:text-4xl">
          Hybrid Learning Programme
        </h1>
        <p className="mt-2 text-2xl w-[560px] max-md:max-w-full">
          The Learning App For Online & Offline Students
        </p>
        <AppDownloadSection />
      </header>
    </div>
  );
}
