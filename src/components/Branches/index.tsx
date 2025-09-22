import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

function Branches() {
  return (
    <section className="bg-[#098B9F]/10 px-6 md:px-20 lg:px-40 py-14">
      {/* Heading */}
      <div className="flex items-center justify-center">
        <h1 className="text-[#022935] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 relative inline-block">
          <span className="relative inline-block">
            Branches
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
          </span>{" "}
        </h1>
      </div>

      {/* Grid */}
      <section className="flex gap-10">
        <div className="w-1/3 flex flex-col gap-3">
          <div className=" flex bg-gradient-to-r from-[#1F67A5] to-[#00A0E3] py-3 px-3 rounded-xl text-white gap-2 items-center">
            <MapPin className="font-semibold text-lg" />
            <span>Calicute</span>
          </div>
          <div className="flex bg-gradient-to-r py-3 px-3 rounded-xl bg-white gap-2 items-center">
            <MapPin className="text-[#1F67A5] font-semibold text-lg" />
            <span className="text-gray-800 font-semibold text-lg">
              Calicute
            </span>
          </div>
          <div className="flex bg-gradient-to-r py-3 px-3 rounded-xl bg-white gap-2 items-center">
            <MapPin className="text-[#1F67A5]" />
            <span className="text-gray-800 font-semibold text-lg">
              Calicute
            </span>
          </div>
          <div className="flex bg-gradient-to-r py-3 px-3 rounded-xl bg-white gap-2 items-center">
            <MapPin className="text-[#1F67A5]" />
            <span className="text-gray-800 font-semibold text-lg">
              Calicute
            </span>
          </div>
          <div className="flex bg-gradient-to-r py-3 px-3 rounded-xl bg-white gap-2 items-center">
            <MapPin className="text-[#1F67A5]" />
            <span className="text-gray-800 font-semibold text-lg">
              Calicute
            </span>
          </div>
          <div className="flex bg-gradient-to-r py-3 px-3 rounded-xl bg-white gap-2 items-center">
            <MapPin className="text-[#1F67A5]" />
            <span className="text-gray-800 font-semibold text-lg">
              Calicute
            </span>
          </div>
          <div className="flex bg-gradient-to-r py-3 px-3 rounded-xl bg-white gap-2 items-center">
            <MapPin className="text-[#1F67A5]" />
            <span className="text-gray-800 font-semibold text-lg">
              Calicute
            </span>
          </div>
          <div className="flex bg-gradient-to-r py-3 px-3 rounded-xl bg-white gap-2 items-center">
            <MapPin className="text-[#1F67A5]" />
            <span className="text-gray-800 font-semibold text-lg">
              Calicute
            </span>
          </div>
          <div className="flex bg-gradient-to-r py-3 px-3 rounded-xl bg-white gap-2 items-center">
            <MapPin className="text-[#1F67A5]" />
            <span className="text-gray-800 font-semibold text-lg">
              Calicute
            </span>
          </div>
        </div>
        <div className="w-2/3 bg-white rounded-3xl h-auto p-8">
          <h1 className="text-gray-700 font-semibold text-xl my-1">Calicut</h1>
          <p className="text-gray-700 text-xs my-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p className="text-gray-700 text-xs mt-2 flex items-center gap-2">
            <Phone size={12} className="text-[#1F67A5]" />
            +91 1234 567 980
          </p>

          {/* Small Images */}
          <div className="mt-3">
            <div className="flex gap-2">
              <Image src="/image 10.png" width={80} height={80} alt="image10" />
              <Image src="/image 11.png" width={80} height={80} alt="image11" />
              <Image src="/image 12.png" width={80} height={80} alt="image12" />
              <Image src="/image 13.png" width={80} height={80} alt="image13" />
            </div>
          </div>

          {/* Map fills parent */}
          <div className="mt-3 relative w-full h-60 md:h-80 lg:h-72">
            <Image
              src="/map.png"
              alt="map"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Branches;
