"use client";

import { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ products, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Update current index based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0]?.offsetWidth || 0;
      const gap = 32;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));

      if (
        newIndex !== currentIndex &&
        newIndex >= 0 &&
        newIndex < products.length
      ) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentIndex, products.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 0;
      const gap = 32;
      const scrollPosition = index * (cardWidth + gap);

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="relative px-2 md:px-4">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth touch-pan-x py-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl snap-center px-4"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Left fade-out gradient */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 md:w-48 pointer-events-none z-20 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to right, rgb(243, 244, 246) 0%, rgba(243, 244, 246, 0) 100%)",
            opacity: currentIndex > 0 ? 1 : 0,
          }}
        />

        {/* Right fade-out gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 md:w-48 pointer-events-none z-20 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to left, rgba(249, 250, 251, 1) 0%, rgba(249, 250, 251, 0) 100%)",
            opacity: currentIndex < products.length - 1 ? 1 : 0,
          }}
        />
      </div>

      {/* Navigation Arrows - Hidden on mobile, shown on tablet+ */}
      <NavigationButton
        direction="previous"
        onClick={handlePrevious}
        className="left-4"
      />

      <NavigationButton
        direction="next"
        onClick={handleNext}
        className="right-4"
      />

      {/* Dots Indicator */}
      <DotsIndicator
        products={products}
        currentIndex={currentIndex}
        onDotClick={scrollToIndex}
      />

      {/* Touch hint for mobile */}
      <div className="md:hidden text-center mt-4 text-sm text-gray-500">
        <p>← Swipe to browse products →</p>
      </div>
    </div>
  );
}

// Navigation Button Component
function NavigationButton({ direction, onClick, className }) {
  const isPrevious = direction === "previous";

  return (
    <button
      onClick={onClick}
      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-blue-600 rounded-full p-3 lg:p-4 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl items-center justify-center ${className}`}
      aria-label={`${isPrevious ? "Previous" : "Next"} product`}
    >
      <svg
        className="w-6 h-6 lg:w-8 lg:h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isPrevious ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}

// Dots Indicator Component
function DotsIndicator({ products, currentIndex, onDotClick }) {
  return (
    <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
      {products.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`transition-all duration-300 rounded-full ${
            index === currentIndex
              ? "w-8 md:w-12 h-2 md:h-3 bg-blue-600"
              : "w-2 md:w-3 h-2 md:h-3 bg-blue-200 hover:bg-blue-400"
          }`}
          aria-label={`Go to product ${index + 1}`}
        />
      ))}
    </div>
  );
}
