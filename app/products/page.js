"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import ProductListCard from "@/components/ProductListCard";
import { getAllProducts } from "@/lib/products";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("dust");
  const [searchQuery, setSearchQuery] = useState("");

  const allProducts = getAllProducts();

  // Filter products based on category and search query
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = product.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-32 pb-20">
      <HeroSection
        highlightedText="Our Products"
        description="Explore our comprehensive range of industrial filtration solutions. From high-efficiency dust cartridges and pleated filters for air purification to activated carbon and reverse osmosis systems for water treatment, each product is engineered for superior performance and long-lasting reliability in demanding applications."
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ScrollReveal
                key={product.id}
                animation="scaleIn"
                delay={index * 0.05}
                threshold={0.2}
              >
                <ProductListCard product={product} />
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-xl">
                No products found matching your search.
              </p>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}
