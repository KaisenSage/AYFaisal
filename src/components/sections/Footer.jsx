import React from "react";

export const Footer = () => (
  <footer className="w-full overflow-x-hidden bg-black">
    <div className="flex flex-col px-0 py-2 w-full
      sm:flex-row sm:justify-between sm:items-center">
      <div className="text-[#eccec6] text-xs text-center sm:text-left sm:text-sm font-medium flex-1 px-3">
        © {new Date().getFullYear()} Sagecorp. All rights reserved.
      </div>
      <div className="text-[#eccec6] text-xs text-center sm:text-right sm:text-sm font-medium flex-1 px-3 mt-2 sm:mt-0">
        Designed &amp; built by Sagecorp Development Services
      </div>
    </div>
  </footer>
);