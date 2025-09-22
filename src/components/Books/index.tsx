import Image from "next/image";
import React from "react";

function Books() {
  return (
    <section className="px-6 md:px-[150px] py-14 ">
      {/* Heading */}
      <div className="flex items-center justify-center">
        <h1 className="text-[#022935] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 relative inline-block">
          <span className="relative inline-block">
            Publications 
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
          or Book
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 justify-items-center">
        <div className="relative rounded-2xl max-w-sm w-[250px] h-[398px] border border-gray-300 bg-white overflow-hidden flex flex-col items-center">
          <div className="relative w-2/3 h-[263px] bg-gradient-to-b from-[#63C2CD] to-[#098B9F] mt-7 rounded-2xl ">
            <p className="font-bold text-sm text-white text-center mt-10 px-4">
              HIGH SCHOOL TEACHER MATHEMATICS
            </p>
            <div className="absolute bottom-0 w-full h-8 bg-white py-2 text-center rounded-b-2xl shadow-2xl"></div>
          </div>
          <div className="text-gray-800 text-center mt-4 font-semibold">
            <p>HIGH SCHOOL TEACHER MATHEMATICS</p>
            <p className="font-bold text-lg">₹580.00</p>
          </div>
        </div>
        <div className="relative rounded-2xl max-w-sm w-[250px] h-[398px] border border-gray-300 bg-white  overflow-hidden flex flex-col items-center">
          <div className="relative w-2/3 h-[270px] mt-7 rounded-2xl ">
            <Image src={'/image2.png'} alt="sdf" fill priority className="object-fill"/>
          </div>
          <div className="text-gray-800 text-center mt-4 font-semibold">
            <p>HIGH SCHOOL TEACHER MATHEMATICS</p>
            <p className="font-bold text-lg">₹160.00</p>
          </div>
        </div>
        <div className="relative rounded-2xl max-w-sm w-[250px] h-[398px] border border-gray-300 bg-white  overflow-hidden flex flex-col items-center">
          <div className="relative w-2/3 h-[263px] bg-gradient-to-b from-[#63C2CD] to-[#098B9F] mt-7 rounded-2xl ">
            <p className="font-bold text-sm text-white text-center mt-10 px-4">
              HIGH SCHOOL TEACHER MATHEMATICS
            </p>
            <div className="absolute bottom-0 w-full h-8 bg-white py-2 text-center rounded-b-2xl shadow-2xl"></div>
          </div>
          <div className="text-gray-800 text-center mt-4 font-semibold">
            <p>HIGH SCHOOL TEACHER MATHEMATICS</p>
            <p className="font-bold text-lg">₹1180.00</p>
          </div>
        </div>
        <div className="relative rounded-2xl max-w-sm w-[250px] h-[398px] border border-gray-300 bg-white  overflow-hidden flex flex-col items-center">
          <div className="relative w-2/3 h-[263px] bg-gradient-to-b from-[#63C2CD] to-[#098B9F] mt-7 rounded-2xl ">
            <p className="font-bold text-sm text-white text-center mt-10 px-4">
              HIGH SCHOOL TEACHER MATHEMATICS
            </p>
            <div className="absolute bottom-0 w-full h-8 bg-white py-2 text-center rounded-b-2xl shadow-2xl"></div>
          </div>
          <div className="text-gray-800 text-center mt-4 font-semibold">
            <p>HIGH SCHOOL TEACHER MATHEMATICS</p>
            <p className="font-bold text-lg">₹580.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Books;
