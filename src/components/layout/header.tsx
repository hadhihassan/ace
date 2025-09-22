"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // hamburger & close icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Courses",
    "Learners portal",
    "Exam & result",
    "Highlights",
    "About",
    "Contact us",
  ];

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-[78px] md:pl-15">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/icon.png"
              alt="Ace Logo"
              width={144}
              height={52}
              priority
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6 text-gray-700 font-medium">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-600 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none"
            >
               {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="hover:text-blue-600 cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
