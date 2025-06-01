import React from "react";
import portrait from "../../assets/portrait.jpeg";

export const Home = () => {
  return (
    <section
      id="home"
      // Remove any max-width constraints, use w-full, and boost font/image size
      className="min-h-screen pt-16 w-full flex flex-col md:flex-row bg-[#ECCEC6] overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Left Half - Image */}
      <div className="w-full md:w-1/2 h-[400px] md:h-screen flex items-center justify-center bg-[#ECCEC6]">
        <img
          src={portrait}
          alt="Faisal Abdulkarim"
          className="w-full h-full object-cover object-center"
          style={{ maxHeight: "90vh" }}
        />
      </div>

      {/* Right Half - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-8 py-16 md:py-0 bg-[#ECCEC6]">
        <h1 className="text-4xl md:text-7xl font-bold mb-8 text-black font-[Major_Mono_Display] leading-tight text-center md:text-left">
          ABDULKARIM <br /> YUSUF <br /> FAISAL
        </h1>
        <h2
          className="text-2xl md:text-4xl font-bold text-black mb-10 text-center md:text-left"
          style={{ fontFamily: "'Red Hat Display', sans-serif" }}
        >
          FILM MAKER <br /> CINEMATOGRAPHER
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg items-center md:items-start">
          <a
            href="#projects"
            className="w-full sm:w-auto border border-black text-black py-4 px-10 rounded font-semibold text-lg md:text-xl transition duration-300 transform hover:scale-105 hover:bg-black hover:text-[#ECCEC6] text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-black text-black py-4 px-10 rounded font-semibold text-lg md:text-xl transition duration-300 transform hover:scale-105 hover:bg-black hover:text-[#ECCEC6] text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};