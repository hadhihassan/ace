"use client";
import Image from "next/image";
import React from "react";

interface NewsCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link?: string;
}

const newsCards: NewsCardProps[] = [
  {
    imageSrc: "/card1.png",
    title: "New Computer Lab Inauguration",
    description:
      "Our institute proudly opened a state-of-the-art computer lab equipped with 50",
    link: "#",
  },
  {
    imageSrc: "/card2.png",
    title: "Cultural Fest 2025 Announced",
    description:
      "The annual cultural fest will be held in March 2025 featuring music, dance, art",
    link: "#",
  },
  {
    imageSrc: "/card1.png",
    title: "Placement Drive 2025 Success",
    description:
      "Over 150 students got placed in top companies during the placement drive org",
    link: "#",
  },
];

function News() {
  return (
    <section className="bg-[#098B9F]/10 px-6 md:px-20 lg:px-40 py-14">
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h1 className="text-[#022935] text-2xl sm:text-3xl lg:text-4xl font-bold text-center relative inline-block">
          <span>Latest </span>
          <span className="relative inline-block">
            News
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
          </span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <a href={card.link}>
              <div className="relative w-full h-40 md:h-44 lg:h-52">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover rounded-t-xl"
                  priority={idx === 0} // prioritize first image
                />
              </div>
            </a>
            <div className="py-5 px-5">
              <a href={card.link}>
                <h5 className="mb-1 text-xl sm:text-xl font-bold text-gray-800">
                  {card.title}
                </h5>
              </a>
              <p className="text-gray-700 text-xs">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
