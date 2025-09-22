import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
function Footer() {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];
  const links = [
    "Learners portal",
    "Exam &results",
    "Highlights",
    "About",
    "Contact us",
  ];
  return (
    <footer className="w-full bg-[#022935] text-white pt-10">
      <section className="px-6 md:px-[150px] ">
        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-3">
            Contact
            <span className="text-3xl font-semibold mb-4 bg-gradient-to-r to-[#3b8aca] from-[#015cac] bg-clip-text text-transparent"> Ace Institute</span >
          </h2>
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4" />
            <p className="text-xs">9995076789, 907267683, 904805888, 7593002222</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <p className="text-xs">  acemanjeri@gmail.com, info@aceinstitutions.com</p>
          </div>
        </section>

        {/* Social Media */}
        <section className="mb-10">
          <h3 className="text-base font-semibold mb-3">Social Media Links</h3>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, label, href }, idx) => (
              <a
                key={idx}
                href={href}
                aria-label={label}
                className="w-12 h-12 flex items-center justify-center text-black bg-white rounded-lg hover:scale-105 transition-transform"
              >
                <Icon className="w-5 h-5 text-teal-900" />
              </a>
            ))}
          </div>
        </section>
      </section>

      <div className="relative flex  items-end justify-end">
        {/* Quick Links */}
        <nav className="flex absolute right-[525px] bottom-12 flex-col flex-wrap gap-5 mb-8">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Footer bottom */}
      <div className="border-t px-6 md:px-[150px] pb-4 border-zinc-500 pt-4 flex flex-col md:flex-row justify-between items-center text-xs gap-2">
        <nav className="flex gap-4">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-gray-300">
            Terms and Conditions
          </a>
        </nav>
        <p>©2025 Ace Institute. All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
