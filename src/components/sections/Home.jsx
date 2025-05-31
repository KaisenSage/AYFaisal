import React from "react";
import portrait from "../../assets/portrait.jpeg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row bg-[#ECCEC6] overflow-hidden"
    >
      {/* Left Half - Image */}
      <div className="w-full md:w-1/2 h-64 xs:h-80 sm:h-96 md:h-auto flex-shrink-0">
        <img
          src={portrait}
          alt="Faisal Abdulkarim"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      {/* Right Half - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 sm:px-8 py-10 md:py-0">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black font-[Major_Mono_Display] leading-tight text-center md:text-left break-words">
          ABDULKARIM <br /> YUSUF <br /> FAISAL
        </h1>
        <h2
          className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-black mb-6 text-center md:text-left"
          style={{ fontFamily: "'Red Hat Display', sans-serif" }}
        >
          FILM MAKER <br /> CINEMATOGRAPHER
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none items-center md:items-start">
          <a
            href="#projects"
            className="w-full sm:w-auto border border-black text-black py-3 px-6 rounded font-medium transition duration-300 transform hover:scale-105 hover:bg-black hover:text-[#ECCEC6] text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-black text-black py-3 px-6 rounded font-medium transition duration-300 transform hover:scale-105 hover:bg-black hover:text-[#ECCEC6] text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};