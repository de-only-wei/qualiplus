"use client";

import Link from "next/link";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("dust");
  const products = Array(9).fill(null);

  return (
    <main className="min-h-screen pt-32 pb-20">
      <HeroSection
        highlightedText="Our Products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum pretium urna et euismod. Donec commodo sagittis molestie. Quisque sollicitudin dui id leo maximus rhoncus. Nulla facilisi. Morbi ac neque quis urna luctus luctus vitae nec mi."
        minHeight="py-24"
        showWave={false}
      />

      <Section background="gradient">
        <ScrollReveal animation="fadeInUp">
          <div className="max-w-4xl mx-auto mb-16">
            {/* Search Bar */}
            <div className="bg-white rounded-full shadow-2xl p-2 flex items-center gap-4 mb-8 border border-gray-200">
              <input
                type="text"
                placeholder="Search Keyword"
                className="flex-1 px-8 py-4 rounded-full focus:outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveFilter("dust")}
                className={`px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 ${
                  activeFilter === "dust"
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                    : "bg-white text-blue-700 hover:bg-blue-50 border-2 border-blue-200"
                }`}
              >
                Dust Filters
              </button>
              <button
                onClick={() => setActiveFilter("water")}
                className={`px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 ${
                  activeFilter === "water"
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                    : "bg-white text-blue-700 hover:bg-blue-50 border-2 border-blue-200"
                }`}
              >
                Water Filters
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((_, index) => (
            <ScrollReveal
              key={index}
              animation="scaleIn"
              delay={index * 0.05}
              threshold={0.2}
            >
              <Link
                href={index === 0 ? "/products/dust-cartridges" : "#"}
                className="group block"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-blue-600 hover:border-blue-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-full h-full flex items-center justify-center text-white relative z-10">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                        Product {index + 1}
                      </div>
                      <div className="text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
