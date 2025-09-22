"use client";
import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { AchievementCard } from "./AchievementCard";
import { SuccessStoryCard } from "./SuccessStoryCard";
import { VideoCard } from "./VideoCard";

export default function SuccessStories() {
  return (
    <section className="bg-white w-full py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1140px] mx-auto flex flex-col gap-10">
        <h2 className="text-4xl sm:text-5xl font-semibold text-teal-950 text-center">
          Success Stories
        </h2>

        {/* Columns container */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-6">
            <AchievementCard
              backgroundImage="/row1.png"
              title="HSA SOCIAL SCIENCE 1st Rank Holder"
              aspectRatio="aspect-[0.699]"
            />
            <TestimonialCard
              quote="Lorem Ipsum is simplsdsdy"
              description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
              userAvatar="/row4.png"
              userName="Aswani K"
              userTitle="Civil Excise Officer"
              isDark={true}
            />
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col gap-6">
            <TestimonialCard
              quote="Lorem Ipsum is simply"
              description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
              userAvatar="/row2.png"
              userName="Ashiq Usman K"
              userTitle="Civil Excise Officer"
              isDark={false}
            />
            <SuccessStoryCard
              imageSrc="/row5.png"
              title="HSA SOCIAL SCIENCE 1st Rank Holder"
              description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
              year="2025"
              backgroundColor="bg-pink-50"
            />
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex flex-col gap-6">
            <AchievementCard
              backgroundImage="/row3.png"
              title="ACE SUCCESS STORY | HSST RANK HOLDER"
              aspectRatio="aspect-[1.286]"
              overlayPosition="top"
              overlayContent={
                <div className="flex flex-col items-start py-6 pr-6 pl-4 bg-yellow-50 rounded-2xl">
                  <h3 className="text-base font-semibold text-neutral-600">
                    ACE SUCCESS STORY | HSST RANK HOLDER
                  </h3>
                  <span className="mt-2 text-sm font-medium bg-clip-text bg-gradient-to-b from-[#63C2CD] to-[#098B9F]">
                    2024
                  </span>
                </div>
              }
            />
            <VideoCard
              backgroundImage="/row6.png"
              title="&quot;എന്റെ റാങ്കിന് കാരണം ACE ആണ്&quot; അഭിൻ സംസാരിക്കുന്നുt"
              overlayColor="bg-sky-500 bg-opacity-90"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
