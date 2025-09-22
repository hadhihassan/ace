import * as React from "react";
import { UserProfile } from "./UserProfile";

interface TestimonialCardProps {
  quote: string;
  description: string;
  userAvatar: string;
  userName: string;
  userTitle: string;
  isDark?: boolean;
}

export function TestimonialCard({
  quote,
  description,
  userAvatar,
  userName,
  userTitle,
}: TestimonialCardProps) {
  return (
    <div
      className={`flex flex-col w-full rounded-3xl p-6 ${
        userName === "Ashiq Usman K" ? "bg-cyan-100" : "bg-[#022935]"
      }`}
    >
      {/* Quote Section */}
      <div className="relative flex flex-col pl-[15%]">
        {/* Opening Quote */}
        <span className="absolute -top-1 left-0 text-cyan-400 text-[6rem] sm:text-[8rem] font-bold leading-none select-none">
          “
        </span>

        {/* Quote Text */}
        <h3 className={`mt-20 text-xl sm:text-2xl font-semibold ${ userName === "Ashiq Usman K" ?  'text-teal-950' : 'text-white'}`}>
          {quote}
        </h3>

        {/* Description */}
        <p className={`mt-4 text-sm text-neutral-500 ${ userName === "Ashiq Usman K" ?  'text-neutral-500' : 'text-white'}`}>
          {description}
        </p>

        {/* Read More */}
        <div className="self-end mt-2.5 text-sm font-medium text-sky-500">
          Read More
        </div>
      </div>

      {/* User Info */}
      <div
        className={`flex gap-2 self-start mt-6`}
      >
        <UserProfile
          avatarSrc={userAvatar}
          name={userName}
          title={userTitle}
          nameColor="text-teal-950"
          titleColor="text-sky-500"
        />
      </div>
    </div>
  );
}
