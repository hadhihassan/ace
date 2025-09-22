"use client";

import React, { useState } from "react";
import Image from "next/image";

const coursesData = [
  {
    icon: <Image src='/gradIcons.png' width={32} height={32} priority  alt="grad"/>,
    title: "Kerala PSC",
    bgColor: 'bg-red-100',
    description: "Kerala Public Server Commission",
  },
  {
    icon: <Image src='/bankIcon.png' width={32} height={32} priority  alt="grad"/>,
    title: "SSC",
    bgColor: 'bg-blue-100',
    description: "Staff Selection Commission",
  },
  {
    icon: <Image src='/homeIcon.png' width={32} height={32} priority  alt="grad"/>,
    title: "BANK",
    bgColor: 'bg-cyan-100',
    description: "Banking Exam (Clerk / PO / Other Recruitment)",
  },
  {
    icon: <Image src='/trainIcon.png' width={32} height={32} priority  alt="grad"/>,
    title: "RRB",
    bgColor: 'bg-green-100',
    description: "Railway Recritment Board",
  },
  {
    icon: <Image src='/handIcon.png' width={32} height={32} priority  alt="grad"/>,
    title: "ETT",
    bgColor: 'bg-yellow-100',
    description: "ELIGIBILITY TEST",
  },
  {
    icon: <Image src='/painIcon.png' width={32} height={32} priority  alt="grad"/>,
    title: "MONTESSORI",
    bgColor: 'bg-rose-100',
    description: "Pre-Primary Teacher Training",
  },
  {
    icon: <Image src='/paperIcon.png' width={32} height={32} priority  alt="grad"/>,
    title: "KAS",
    bgColor: 'bg-purple-100',
    description: "Kerala Administrative Service",
  },
];

function Courses() {
  const [activeTab, setActiveTab] = useState("Online Courses");

  const tabs = ["Offline Courses", "Online Courses", "Scholarship Exams"];

  return (
    <section className="relative bg-[#FBFBFB] overflow-hidden px-6 md:px-[150px]">
      {/* Background Image with Opacity */}
      <div className="absolute pl-2 bottom-0 -top-24">
        <Image
          src="/heroIogo.png"
          alt="background"
          className="object-cover opacity-10  rotate-180"
          width={1135}
          height={1135}
          priority
        />
      </div>
      <div className="absolute h-80 -right-1/3">
        <Image
          src="/heroIogo.png"
          alt="background"
          className="object-cover opacity-10 rotate-1"
          width={1135}
          height={1135}
          priority
        />
      </div>
      <div className="absolute h-80 -left-[42%]">
        <Image
          src="/heroIogo.png"
          alt="background"
          className="object-cover opacity-10 rotate-1"
          width={1135}
          height={1135}
          priority
        />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 text-center mt-10">
        <h2 className="text-[#022935] text-2xl sm:text-3xl lg:text-4xl font-bold">
          Courses
        </h2>
      </div>

      {/* Tabs */}
      <div className="relative z-10 flex justify-center mt-8 gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-4 rounded-full  text-xl transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#487dac] to-[#3A89C9] text-white shadow-lg"
                : "bg-[#F8F7FF] text-[#022935]  hover:shadow-lg"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12 pb-20">
        {coursesData.map((course, idx) => (
          <div
            key={idx}
            className="flex py-8 px-8 flex-col items-start  rounded-4xl shadow-lg bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className={`text-[#1F67A5] mb-14 rounded-full ${course.bgColor} p-4`}>
              {course.icon}
            </div>
            <h3 className="text-[#022935]  text-2xl font-bold mb-2 text-start">
              {course.title}
            </h3>
            <p className="text-[#4A4A4A] text-sm text-start font-semibold">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
