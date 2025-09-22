import Image from "next/image";
import * as React from "react";

interface VideoCardProps {
  backgroundImage: string;
  title: string;
  overlayColor?: string;
}

export function VideoCard({
  backgroundImage,
  title,
  overlayColor = "bg-sky-500 bg-opacity-90",
}: VideoCardProps) {
  return (
    <div className="rounded-2xl flex relative flex-col items-start pt-96 pb-3.5 w-full text-2xl font-medium text-white aspect-[0.672] max-md:pt-24 max-md:pr-5">
      <Image
        fill
        src={backgroundImage}
        alt={title}
        className="object-cover absolute inset-0 size-full rounded-3xl"
      />
      <div
        className={`w-80 rounded-r-3xl flex relative flex-col justify-center px-5 py-7 ${overlayColor} max-md:px-5`}
      >
        <h3 className="">{title}</h3>
      </div>
    </div>
  );
}
