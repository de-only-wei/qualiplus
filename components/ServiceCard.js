"use client";

import { useState, useRef } from "react";

export default function ServiceCard({ title }) {
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Activate the hover effect
    setIsActive(true);

    // Reset after 400ms
    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
    }, 400);
  };

  return (
    <div
      className={`bg-white rounded-3xl p-8 border-4 overflow-hidden relative transition-all duration-300 ${
        isActive
          ? "border-blue-700 shadow-2xl -translate-y-2"
          : "border-blue-600 shadow-md"
      }`}
      onMouseEnter={handleMouseEnter}
    >
      {/* Animated background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="flex items-center gap-4 relative z-10">
        <h3
          className={`text-2xl font-bold flex-1 transition-colors duration-300 ${
            isActive ? "text-blue-700" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <div
          className={`w-14 h-14 border-4 border-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md ${
            isActive ? "bg-blue-600 scale-110 rotate-12 shadow-lg" : ""
          }`}
        >
          <svg
            className={`w-7 h-7 transition-all duration-300 transform ${
              isActive ? "text-white scale-110" : "text-blue-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
