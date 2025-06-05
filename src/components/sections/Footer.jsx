import React from "react";

export const Footer = () => (
  <footer className="w-full bg-black">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 w-full max-w-none">
      <div className="text-[#eccec6] text-xs text-center sm:text-left sm:text-sm font-medium pl-3">
        © {new Date().getFullYear()} Sagecorp. All rights reserved.
      </div>
      <div className="text-[#eccec6] text-xs text-center sm:text-right sm:text-sm font-medium pr-3 mt-2 sm:mt-0">
        Designed &amp; built by Sagecorp Development Services
      </div>
    </div>
  </footer>
);