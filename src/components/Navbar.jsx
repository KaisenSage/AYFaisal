import { useEffect } from "react";
import logo from "../assets/logo.jpeg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#ECCEC6] border-b border-white/10 shadow-lg">
      {/* Remove max-width constraint by using w-full and no mx-auto/max-w-* */}
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Hamburger menu button - make sure it's visible on mobile */}
          <button
            className="w-8 h-8 flex flex-col justify-center items-center md:hidden focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
            type="button"
          >
            <span className="block w-7 h-0.5 bg-gray-800 mb-1.5 rounded transition-all"></span>
            <span className="block w-7 h-0.5 bg-gray-800 mb-1.5 rounded transition-all"></span>
            <span className="block w-7 h-0.5 bg-gray-800 rounded transition-all"></span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-800 hover:text-black transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-800 hover:text-black transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};