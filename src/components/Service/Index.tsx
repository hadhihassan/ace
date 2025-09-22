import { ArrowBigLeft, ArrowBigRight, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Service() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-14">
      <div className="flex justify-start py-8 mb-5">
        <h1 className="text-[#022935] text-2xl sm:text-3xl lg:text-4xl font-bold text-center relative inline-block">
          <span>Social </span>
          <span className="relative inline-block">
            Service
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
          <span> Programme</span>
        </h1>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          <button className="px-7 py-6 flex flex-row items-center justify-between gap-24 shadow-xl  rounded-3xl ">
            <p className="text-xl text-start text-gray-800">
              Career Guidance <br /> Programme{" "}
            </p>
            <MoveRight />
          </button>
          <button className="px-7 py-6 flex flex-row items-center justify-between gap-24 shadow-xl  rounded-3xl  bg-gradient-to-r to-[#1F67A5] from-[#00A0E3]">
            <p className="text-xl text-start text-white">
              Pre marital <br /> Counselling{" "}
            </p>
            <MoveRight />
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <button className="px-7 py-6 flex flex-row items-center justify-between gap-24 shadow-xl  rounded-3xl ">
            <p className="text-xl text-start text-gray-800">
              Effective parantal <br /> training
            </p>
            <MoveRight />
          </button>
          <button className="px-7 py-6 flex flex-row items-center justify-between gap-36 shadow-xl  rounded-3xl  ">
            <p className="text-xl text-start text-gray-800">
              Anti Drugs Programme <br /> Financial improvement <br /> Programme{" "}
            </p>
            <MoveRight />
          </button>
        </div>

        <div className="relative w-full h-[500px] flex items-center justify-center">
          {/* Top-left logo */}
          <div className="absolute top-0 left-5">
            <Image
              src="/heroIogo.png"
              alt="Top Left Logo"
              width={270}
              height={270}
              className="object-contain rotate-180"
              priority
            />
          </div>

          {/* Bottom-right logo */}
          <div className="absolute -right-20">
            <Image
              src="/heroIogo.png"
              alt="Bottom Right Logo"
              width={270}
              height={270}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
