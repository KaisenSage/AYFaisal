import React from "react";

export const Footer = () => (
  <footer className="w-full bg-black">
    <div className="flex flex-col items-center px-3 py-4 w-full
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