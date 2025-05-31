import React from "react";
import portrait from "../../assets/portrait.jpeg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row bg-[#ECCEC6] pt-16 md:pt-0 transition-colors"
      // pt-16 = height of navbar (h-16), so content starts just below nav
    >
      {/* Image on top for mobile, left for desktop */}
      <div className="w-full md:w-1/2 flex-shrink-0 h-64 xs:h-80 sm:h-96 md:h-auto">
        <img
          src={portrait}
          alt="Faisal Abdulkarim"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>
      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 sm:px-8 py-10 md:py-0">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-black leading-tight text-center md:text-left font-[Major_Mono_Display]">
          ABDULKARIM <br /> YUSUF <br /> FAISAL
        </h1>
        <h2
          className="text-lg xs:text-xl md:text-2xl font-semibold text-black mb-8 text-center md:text-left tracking-wide"
          style={{ fontFamily: "'Red Hat Display', sans-serif" }}
        >
          FILM MAKER <br /> CINEMATOGRAPHER
        </h2>
        <div className="flex flex-col xs:flex-row gap-4 w-full max-w-xs xs:max-w-none items-center md:items-start">
          <a
            href="#projects"
            className="w-full xs:w-auto bg-black text-[#ECCEC6] font-semibold py-3 px-6 rounded-lg transition hover:bg-[#232323] hover:text-white text-center shadow-md"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full xs:w-auto border-2 border-black text-black font-semibold py-3 px-6 rounded-lg transition hover:bg-black hover:text-[#ECCEC6] text-center shadow-md"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};