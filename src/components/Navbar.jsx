import { useEffect } from "react";
import logo from "../assets/logo.jpeg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#ECCEC6] border-b border-white/10 shadow-lg">
      {/* Use max-w-7xl for centered content, w-full for edge-to-edge on mobile */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Hamburger menu (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
          type="button"
        >
          <span className="block w-7 h-0.5 bg-gray-800 mb-1 rounded"></span>
          <span className="block w-7 h-0.5 bg-gray-800 mb-1 rounded"></span>
          <span className="block w-7 h-0.5 bg-gray-800 rounded"></span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-800 hover:text-black transition-colors">Home</a>
          <a href="#about" className="text-gray-800 hover:text-black transition-colors">About</a>
          <a href="#projects" className="text-gray-800 hover:text-black transition-colors">Projects</a>
          <a href="#contact" className="text-gray-800 hover:text-black transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};