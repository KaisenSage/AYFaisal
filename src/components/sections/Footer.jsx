import React from "react";

export const Footer = () => (
  <footer className="fixed bottom-0 left-0 w-full z-50 bg-black ">
    <div className="flex flex-col items-center justify-center px-2 py-3 w-full
      sm:flex-row sm:justify-between">
      <span className="text-[#eccec6] text-xs text-center sm:text-left sm:text-sm font-medium">
        © {new Date().getFullYear()} Sagecorp Development Services. All rights reserved.
      </span>
      <span className="text-[#eccec6] text-xs text-center sm:text-right sm:text-sm">
        Designed &amp; built by Sagecorp Development Services
      </span>
    </div>
  </footer>
);