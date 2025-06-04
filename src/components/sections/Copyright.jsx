import React from "react";

export const Copyright = () => (
  <footer className="w-full bg-[#232323] py-6 mt-12">
    <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      <span className="text-[#eccec6] text-center text-sm sm:text-base font-medium">
        © {new Date().getFullYear()} Sagecorp Development Services. All rights reserved.
      </span>
      <span className="text-[#eccec6] text-center text-xs sm:text-sm">
        Designed &amp; built by Sagecorp Development Services
      </span>
    </div>
  </footer>
);