import React from "react";
import portrait from "../../assets/portrait.jpeg";

export const Home = () => {
  return (
    <section
      id="home"
      className="w-screen max-w-screen overflow-x-hidden relative min-h-screen w-screen flex flex-col md:flex-row bg-[#ECCEC6] pt-16"
      style={{ minHeight: "100vh" }}
    >
      {/* Left - Image, fills half the screen on desktop, full on mobile */}
      <div className="relative w-full md:w-1/2 h-[320px] md:h-auto md:min-h-screen flex-shrink-0">
        <img
          src={portrait}
          alt="Faisal Abdulkarim"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Right - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:px-16 py-10 md:py-0 bg-[#ECCEC6]">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-black font-[Major_Mono_Display] leading-tight text-center md:text-left">
          ABDULKARIM <br /> YUSUF <br /> FAISAL
        </h1>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10 text-center md:text-left"
          style={{ fontFamily: "'Red Hat Display', sans-serif" }}
        >
          FILM MAKER <br /> CINEMATOGRAPHER
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md items-center md:items-start">
          <a
            href="#projects"
            className="w-full sm:w-auto border border-black text-black py-4 px-8 rounded font-semibold text-lg transition duration-300 transform hover:scale-105 hover:bg-black hover:text-[#ECCEC6] text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-black text-black py-4 px-8 rounded font-semibold text-lg transition duration-300 transform hover:scale-105 hover:bg-black hover:text-[#ECCEC6] text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};