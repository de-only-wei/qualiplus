"use client";

import Image from "next/image";
import DustCartridgeFilter from "./filters/DustCartridgeFilter";

/**
 * ProductVisualization component
 * Renders either an SVG filter animation or a standard product image
 * based on the product's visualizationType
 */
export default function ProductVisualization({ product, className = "" }) {
  // If product has SVG filter visualization
  if (product.visualizationType === "svg-filter" && product.filterSvgId) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <DustCartridgeFilter />
      </div>
    );
  }

  // Default: Show product image or placeholder
  const primaryImage = product.images?.[0];
  const isPlaceholder = !primaryImage || primaryImage.includes("placeholder");

  if (isPlaceholder) {
    return (
      <div
        className={`${className} w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700`}
      >
        <div className="text-white text-center p-6">
          <div className="text-3xl font-bold mb-2">{product.name}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative w-full h-full`}>
      <Image
        src={primaryImage}
        alt={product.name}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
