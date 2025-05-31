import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.85)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center">
            {/* Replace with <img .../> if you prefer a logo instead of text */}
            <span className="font-mono text-xl font-bold text-white tracking-tight">
              AFFADOTT<span className="text-blue-500">.studios</span>
            </span>
          </a>

          {/* Hamburger menu for mobile */}
          <button
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="absolute block w-full h-0.5 bg-gray-200 rounded-sm transition-all duration-200 top-0 left-0"></span>
            <span className="absolute block w-full h-0.5 bg-gray-200 rounded-sm transition-all duration-200 top-2 left-0"></span>
            <span className="absolute block w-full h-0.5 bg-gray-200 rounded-sm transition-all duration-200 top-4 left-0"></span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white font-medium transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white font-medium transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white font-medium transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile slide-out menu */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${
          menuOpen ? "block md:hidden opacity-100" : "hidden opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[rgba(10,10,10,0.98)] backdrop-blur-lg shadow-lg z-50 transition-transform duration-300 flex flex-col pt-24 px-6 space-y-8 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <a href="#home" className="text-gray-200 text-xl font-semibold" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" className="text-gray-200 text-xl font-semibold" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" className="text-gray-200 text-xl font-semibold" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" className="text-gray-200 text-xl font-semibold" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};