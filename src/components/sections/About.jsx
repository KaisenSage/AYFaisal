

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-[#232323]"
    >
    
      <div className="w-full max-w-3xl mx-auto px-4">
        {/* BIO SECTION */}
        <div className="flex flex-col md:flex-row border-t border-gray-500 pt-8 pb-8">
          <div className="md:w-1/3 font-bold text-lg text-white mb-4 md:mb-0 md:pr-8">
            BIO
          </div>
          <div className="md:w-2/3 text-gray-100">
            I’m a passionate filmmaker and cinematographer with professional experience in both Nigeria and the U.S., having worked with Affadotstudios in Lagos and Amerifilms in Dayton, Ohio. My roles as director, camera operator, and cinematographer have allowed me to lead creative teams and bring compelling stories to life, both on set and behind the scenes.
          </div>
        </div>
        {/* WHAT I OFFER SECTION */}
        <div className="flex flex-col md:flex-row border-t border-gray-500 pt-8 pb-8">
          <div className="md:w-1/3 font-bold text-lg text-white mb-4 md:mb-0 md:pr-8">
            <span className="tracking-wide">WHAT I OFFER</span>
          </div>
          <div className="md:w-2/3 text-gray-100">
            As a filmmaker and cinematographer with cross-cultural experience in both Nigeria and the U.S., I approach every project with a strong visual sensibility and a deep commitment to storytelling. Whether I'm directing a scene, operating the camera, or overseeing cinematography, I prioritize authenticity, emotion, and clarity of vision. My time with Affadotstudios in Lagos and Amerifilms in Dayton, Ohio has shaped my ability to adapt to diverse creative environments, lead collaborative teams, and translate ideas into powerful visual narratives. I believe in the power of film to connect, inspire, and provoke thought—and I strive to bring that energy to every frame.
          </div>
        </div>
      </div>

      {/* EDUCATION SECTION - edge to edge background */}
      <div className="w-full bg-[#eccec6] mt-12 py-12">
        <div className="max-w-3xl mx-auto px-4">
          {/* Education Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Education
            </h2>
          </div>
          {/* Bachelor */}
          <div className="mb-8">
            <div className="font-bold text-lg text-gray-900 mb-1">Bachelor of Creative Arts</div>
            <div className="text-gray-800">Theatre Arts | University Of Lagos</div>
            <div className="text-gray-700">Graduation: Expected 2026</div>
          </div>
          <hr className="border-gray-400 mb-8" />
          {/* Associate's Degree */}
          <div className="mb-8">
            <div className="font-bold text-lg text-gray-900 mb-1">Associate’s Degree</div>
            <div className="text-gray-800">Sinclair College | Dayton, Ohio</div>
            <div className="text-gray-700">Film/Video Production | [2024 - 2025]</div>
          </div>
          <hr className="border-gray-400 mb-8" />
          {/* US Dept State */}
          <div className="mb-8">
            <div className="font-bold text-lg text-gray-900 mb-1">U.S Department of State</div>
            <div className="text-gray-800">Community College Initiative</div>
            <div className="text-gray-700">Program Awardee In Digital Media</div>
          </div>
          <hr className="border-gray-400 mb-8" />
          {/* Resume button */}
          <div>
            <a
              href="https://drive.google.com/file/d/1pqFDfGPr1yThle0-wRuKSvGtJtKQQcOc/view"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black py-3 px-6 rounded font-medium transition duration-300 transform hover:scale-105 hover:bg-black hover:text-[#ECCEC6]"
            >
              Full Resume here
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};