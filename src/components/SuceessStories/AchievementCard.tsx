import Image from "next/image";
import * as React from "react";

interface AchievementCardProps {
  backgroundImage: string;
  title: string;
  year?: string;
  overlayContent?: React.ReactNode;
  aspectRatio?: string;
  overlayPosition?: "bottom" | "top";
  overlayStyle?: string;
}

export function AchievementCard({
  backgroundImage,
  title,
  overlayContent,
  aspectRatio = "aspect-[0.699]",
  overlayPosition = "bottom",
  overlayStyle = "bg-white rounded-2xl"
}: AchievementCardProps) {
  const containerClasses = `flex relative flex-col w-full text-2xl font-semibold rounded-3xl text-teal-950 max-md:px-5 ${aspectRatio}`;
  const paddingClasses = overlayPosition === "bottom" ? "px-7 pt-96 pb-5 max-md:pt-24" : "pt-48 max-md:pt-24";

  return (
    <div className={`${containerClasses} ${paddingClasses} rounded-md`}>
      <img
        src={backgroundImage}
        alt={title}
        className="object-cover absolute inset-0 size-full rounded-3xl"
      />
      {overlayContent || (
        <div className={`flex relative gap-3.5 justify-center items-center ${overlayStyle} min-h-[92px]`}>
          <h3 className="self-stretch my-auto rotate-[0.010553133838635105rad] w-[276px]">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
}
