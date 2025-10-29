"use client";

import { useState, useEffect, useRef } from "react";

export default function StatCard({ icon, number, label }) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set timeout to reset hover state after 1 second
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 400);
  };

  const handleMouseLeave = () => {
    // Clear timeout if mouse leaves before 1 second
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="text-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-20 h-20 mx-auto mb-4 border-4 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
          isHovered
            ? "border-blue-600 bg-blue-50 scale-110 rotate-6 shadow-xl"
            : "border-gray-800"
        }`}
      >
        <div
          className={`transition-transform duration-300 ${
            isHovered ? "scale-110" : ""
          }`}
        >
          {icon}
        </div>
      </div>
      <div
        className={`text-5xl font-bold mb-2 transition-all duration-300 ${
          isHovered ? "text-blue-700 scale-125" : "text-blue-600"
        }`}
      >
        {number}
      </div>
      <div
        className={`font-semibold text-lg transition-colors duration-300 ${
          isHovered ? "text-blue-700" : "text-gray-800"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
