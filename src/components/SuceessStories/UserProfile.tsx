import Image from "next/image";
import * as React from "react";

interface UserProfileProps {
  avatarSrc: string;
  name: string;
  title: string;
  nameColor?: string;
  titleColor?: string;
}

export function UserProfile({
  avatarSrc,
  name,
  title,
  titleColor = "text-sky-500"
}: UserProfileProps) {
  return (
    <div className="flex gap-2">
      <img
        src={avatarSrc}
        alt={`${name} avatar`}
        className="object-contain shrink-0 w-11 rounded-full aspect-square"
      />
      <div className="flex flex-col my-auto">
        <div className={`text-sm font-semibold ${name === "Ashiq Usman K" ? "text-teal-950" : 'text-white'}`}>
          {name}
        </div>
        <div className={`mt-1.5 text-xs font-medium ${titleColor}`}>
          {title}
        </div>
      </div>
    </div>
  );
}
