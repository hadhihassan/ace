import Image from "next/image";
import * as React from "react";

interface SuccessStoryCardProps {
  imageSrc: string;
  title: string;
  description: string;
  year: string;
  backgroundColor?: string;
}

export function SuccessStoryCard({
  imageSrc,
  title,
  description,
  year,
  backgroundColor = "bg-pink-50"
}: SuccessStoryCardProps) {
  return (
    <div className={`pb-9 text-sm ${backgroundColor} rounded-3xl`}>
      <img
        src={imageSrc}
        alt={title}
        className="object-contain w-full rounded-3xl aspect-[1.77]"
      />
      <div className="flex flex-col px-6 mt-7 w-full max-md:px-5">
        <h3 className="text-2xl font-semibold text-teal-950 max-md:mr-2.5">
          {title}
        </h3>
        <p className="mt-6 text-neutral-500">
          {description}
        </p>
        <div className="flex gap-3.5 justify-center items-center self-start mt-5 font-medium text-white whitespace-nowrap rounded-lg min-h-[21px]">
          <div className="self-stretch my-auto">
            {year}
          </div>
        </div>
      </div>
    </div>
  );
}
