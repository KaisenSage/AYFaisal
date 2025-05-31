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

          {/* Hamburger Menu Icon (mobile only) */}
          <button
            className="w-10 h-10 flex flex-col justify-center items-center md:hidden z-50 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-0.5 bg-gray-800 mb-1.5 transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-gray-800 mb-1.5 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-gray-800 transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-black transition-colors">Home</a>
            <a href="#about" className="text-gray-800 hover:text-black transition-colors">About</a>
            <a href="#projects" className="text-gray-800 hover:text-black transition-colors">Projects</a>
            <a href="#contact" className="text-gray-800 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={`
          fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
          ${menuOpen ? "block md:hidden opacity-100" : "hidden opacity-0"}
        `}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`
          fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#ECCEC6] shadow-lg z-50 transition-transform duration-300
          flex flex-col pt-24 px-6 space-y-8
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <a href="#home" className="text-gray-800 text-xl font-semibold" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" className="text-gray-800 text-xl font-semibold" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" className="text-gray-800 text-xl font-semibold" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" className="text-gray-800 text-xl font-semibold" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};