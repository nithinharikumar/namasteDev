import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full border border-gray-100 rounded-2xl mb-5 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-8 py-6 font-semibold text-gray-800 text-lg hover:bg-gray-50/50 transition-colors duration-200"
      >
        <span className="tracking-tight">{title}</span>
        {/* <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
            open ? "transform rotate-180 text-orange-500" : ""
          }`}
        /> */}
      </button>

      {open && (
        <div className="px-8 pb-8 border-t border-gray-50 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}
