import { useEffect } from "react";
import logo from "../assets/logo.jpeg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[#ECCEC6] border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
             href="#home"
             className="text-gray-800 hover:text-black transition-colors"
             >
              {""}
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-800 hover:text-black transition-colors"
            >
               {""}
                About{""}
            </a>
            <a 
            href="#projects" 
            className="text-gray-800 hover:text-black transition-colors"
            >
              {""}
              Projects{""}
            </a>
            <a 
             href="#contact"
             className="text-gray-800 hover:text-black transition-colors"
            >
              {""}
              Contact{""}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
