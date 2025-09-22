import { Bell } from "lucide-react";
import Image from "next/image";
import React from "react";

function AboutUs() {
  const notifications = Array(6).fill({
    title: "PSC Exam Result",
    time: "10 Apr 2025 10:23pm",
    button: "View Result",
  });

  const stats = [
    { number: "20+", label: "Years of Excellence" },
    { number: "500+", label: "Success of Student" },
    { number: "100+", label: "Export Faculty" },
  ];

  const links = [
    { text: "PAC Corner", color: "text-green-500" },
    { text: "Exam & Results", color: "text-blue-500" },
    { text: "Exam & Ans Keys", color: "text-purple-500" },
    { text: "Rank Holder List", color: "text-red-500" },
    { text: "Online Admission", color: "text-yellow-600" },
    { text: "Publications", color: "text-pink-500" },
    { text: "Event Gallery", color: "text-indigo-500" },
  ];

  return (
    <>
      {/* Main About Us Section */}
      <section className="pt-24 px-6 md:px-[89px] flex flex-col lg:flex-row gap-10 transition-all duration-300">
        {/* Left: Logo + Notification */}
        <div className="relative flex-1 flex justify-center lg:justify-start">
          {/* Logo */}
          <div className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[571px]">
            <Image
              src="/heroIogo.png"
              alt="Logo"
              width={570}
              height={570}
              className="object-cover"
              priority
            />
          </div>

          {/* Notification Card */}
          <div
            className="absolute top-4 left-1/2 lg:left-20 transform -translate-x-1/2 lg:translate-x-0
                          bg-white opacity-90 rounded-lg drop-shadow-2xl h-[390px] w-[90%] max-w-[460px]
                          transition-all duration-300"
          >
            <ul>
              <li className="flex justify-between px-6 py-4 font-bold text-lg border-b border-gray-100 items-center">
                <p>Notifications</p>
                <Bell size={20} />
              </li>

              {notifications.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center px-6 py-2 border-b border-gray-100 transition-all duration-200 hover:bg-gray-50"
                >
                  <p className="flex flex-col text-sm">
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-[11px] text-gray-500">
                      {item.time}
                    </span>
                  </p>
                  <button className="px-2 py-1 text-xs font-medium rounded-md text-[#028ca1] bg-[#098B9F]/40 tracking-wider hover:bg-[#098B9F]/60 transition-all duration-200">
                    {item.button}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: About Content */}
        <div className="flex-1 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left pt-16 transition-all duration-300 sm:mt-0 mt-20 md:mt:0 lg:mt-0">
          <h2 className="text-[#022935] text-3xl sm:text-4xl lg:text-5xl font-semibold">
            About Us
          </h2>

          <p className="bg-gradient-to-r from-[#448eca] to-[#065ca8] bg-clip-text text-transparent font-semibold text-3xl sm:text-4xl lg:text-5xl">
            Ace Institutions
          </p>

          <p className="font-semibold text-[#353535] text-base sm:text-lg">
            Academy for Competitive Examination was established in the year 2003
            at Manjeri, Malappuram district of Kerala.
          </p>

          {/* Stats */}
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {stats.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center sm:items-start"
              >
                <span className="bg-gradient-to-r from-[#448eca] to-[#065ca8] bg-clip-text text-transparent text-2xl sm:text-3xl font-semibold">
                  {item.number}
                </span>
                <span className="text-xs text-[#4A4A4A] font-semibold">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <button className="px-7 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-[#1F67A5] to-[#3A89C9] hover:opacity-90 transition-all duration-300">
            Explore More
          </button>
        </div>
      </section>

      {/* PAC Links Section */}
      <section className="px-6 pt-8 md:px-[150px] flex justify-center pb-16 transition-all duration-300">
        <ul className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap justify-center gap-3 w-full max-w-[1200px]">
          {links.map((item, idx) => (
            <li
              key={idx}
              className={`rounded-xl shadow-lg text-center font-semibold px-4 py-2 hover:opacity-90 transition-all duration-300 ${item.color}`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default AboutUs;
