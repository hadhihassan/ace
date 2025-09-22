import React from "react";

function Featues() {
  const onlineCourses = [
    "Question Paper Discussion",
    "Previous Year On Discussion",
    "SCERT & NCERT Based ",
    "Library Facilities",
    "Reading Facilities",
    "AceApp Plus",
    "Offline Mobile App",
    "Students Login",
    "Material Based Discussion",
    "Class Work",
    "Practice Exam",
    "OMR Machine Valuation",
    "Model Exams",
    "Basic Maths Classes",
    "Syllabus Focused Classes",
  ];
  const offlineCourses = [
    "Study Materials",
    "Syllabus focused Classes",
    "Current Affairs",
    "Day wise Classes",
    "Topic Exams",
    "Model Exams",
    "Video Classes",
  ];

  return (
    <section className=" px-6 md:px-20 lg:px-32 py-14">
      {/* Heading */}
      <div className="flex items-center justify-center">
        <h1 className="text-[#022935] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 relative inline-block">
          <span>Our </span>
          <span className="relative inline-block">
            Features
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

      <section>
        {/* Heading */}
        <h1 className="my-4 text-sm  lg:text-xl font-semibold bg-gradient-to-r to-[#3b8aca] from-[#015cac] bg-clip-text text-transparent">
          Offline Course
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {onlineCourses.map((item, idx) => (
            <div
              key={idx}
              className="py-3 px-7 shadow-xl rounded-2xl whitespace-nowrap text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12">
        {/* Heading */}
        <h1 className="my-4 text-sm  lg:text-xl font-semibold bg-gradient-to-r to-[#3b8aca] from-[#015cac] bg-clip-text text-transparent">
          Online Course
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {offlineCourses.map((item, idx) => (
            <div
              key={idx}
              className="py-3 px-7 shadow-xl rounded-2xl whitespace-nowrap text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Featues;
