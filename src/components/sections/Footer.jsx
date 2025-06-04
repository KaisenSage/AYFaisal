import React from "react";

export const Footer = () => (
  <footer className=" bottom-0 left-0 w-full z-50 bg-black">
    <div className="flex flex-col items-center px-3 py-2 w-full
      sm:flex-row sm:justify-between sm:items-center">
      <span className="text-[#eccec6] text-xs text-center sm:text-left sm:text-sm font-medium">
        © {new Date().getFullYear()} Sagecorp. All rights reserved.
      </span>
      <span className="text-[#eccec6] text-xs text-center sm:text-right sm:text-sm">
        Designed &amp; built by Sagecorp Development Services
      </span>
    </div>
  </footer>
);
