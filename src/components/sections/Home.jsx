import React from "react";
import portrait from "../../assets/portrait.jpeg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center  bg-[#ECCEC6] overflow-hidden"
    >
      {/* Left Half - Image */}
      <div className="w-full md:w-1/2 h-[400px] md:h-auto">
        <img
          src={portrait}
          alt="Faisal Abdulkarim"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Half - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 py-10 md:py-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black font-[Major_Mono_Display] leading-tight text-center md:text-left">
          ABDULKARIM <br /> YUSUF <br /> FAISAL
        </h1>
        <h2
          className="text-xl md:text-2xl font-bold text-black mb-6 text-center md:text-left"
          style={{ fontFamily: "'Red Hat Display', sans-serif" }}
        >
          FILM MAKER <br /> CINEMATOGRAPHER
        </h2>

        <div className="flex space-x-4">
          <a
            href="#projects"
            className="border border-black text-black py-3 px-6 rounded font-medium transition duration-300 transform hover:scale-105 hover:bg-black hover:text-[#ECCEC6]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-black text-black py-3 px-6 rounded font-medium transition duration-300 transform hover:scale-105 hover:bg-black hover:text-[#ECCEC6]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
