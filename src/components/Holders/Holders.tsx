import Image from "next/image";
import React from "react";

const holdersData = [
  {
    name: "Hashir Shan K",
    role: "Ambulance Assistance",
    rank: 1,
    photo: "/person1.png",
  },
  {
    name: "Ayesha Noor",
    role: "Emergency Support",
    rank: 2,
    photo: "/person3.png",
  },
  {
    name: "Rahul Mehta",
    role: "Medical Aid",
    rank: 3,
    photo: "/person4.png",
  },
  {
    name: "Sophia Ali",
    role: "First Aid Trainer",
    rank: 4,
    photo: "/person2.png",
  },
];

function Holders() {
  return (
    <section className="px-6 md:px-[150px] py-14 ">
      {/* Heading */}
      <div className="flex items-center justify-center">
        <h1 className="text-[#022935] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 relative inline-block">
          <span className="relative inline-block">
            Rank
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
          Holders
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 justify-items-center">
        {holdersData.map((holder, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl w-60 max-w-sm h-[276px] bg-white shadow-2xl overflow-hidden flex flex-col items-center"
          >
            {/* Background image (clipped) */}
            <div className="absolute scale-125 opacity-40 -left-14 top-3">
              <Image
                src="/heroIogo.png"
                alt="background"
                width={250}
                height={250}
                priority
              />
            </div>

            {/* Profile circle with badge */}
            <div className="relative mt-8">
              <div className="h-48 w-48 flex items-center justify-center z-10 relative overflow-hidden">
                {holder.photo ? (
                  <Image
                    src={holder.photo}
                    alt={holder.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-sm text-gray-500">Photo</span>
                )}
              </div>

              {/* Badge */}
              <div className="absolute z-50 left-0 bottom-2 h-12 w-12 rounded-full bg-white flex flex-col items-center justify-center text-xs font-bold shadow-lg">
                <span className="text-[#022935]">{holder.rank}</span>
                <span className="text-[#00A0E3]">Rank</span>
              </div>
            </div>

            {/* Bottom white section */}
            <div className="absolute bottom-0 w-full bg-white py-2 text-center">
              <p className="text-[#022935] ">{holder.name}</p>
              <p className=" text-xs text-[#00A0E3]">
                {holder.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Holders;
