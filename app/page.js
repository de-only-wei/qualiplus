import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import ProductCarousel from "@/components/ProductCarousel";
import StatsSection from "@/components/StatsSection";
import { getAllProducts } from "@/lib/products";

export default function Home() {
  const allProducts = getAllProducts();

  // Transform products data for the carousel
  // Show mix of dust and water filters
  const products = allProducts.map((product) => ({
    title: product.name.toUpperCase(),
    description: product.shortDescription,
    tags: product.tags,
    href: `/products/${product.slug}`,
    image: product.images[0],
    imageExploded: product.images[1] || product.images[0],
    // Add annotations for dust cartridges
    ...(product.slug === "dust-cartridges" && {
      annotations: [
        {
          label: "gauze",
          top: "-5%",
          left: "-20%",
          arrowPath: "M10,35 Q25,25 45,28",
          arrowheadPath: "M43,25 L48,28 L43,31",
          arrowWidth: "55px",
          arrowHeight: "40px",
          arrowTop: "-5px",
          arrowLeft: "5px",
        },
        {
          label: "solid concrete",
          bottom: "10%",
          right: "-30%",
          arrowPath: "M70,15 Q50,30 40,50",
          arrowheadPath: "M42,48 L40,54 L37,48",
          arrowWidth: "80px",
          arrowHeight: "60px",
          arrowTop: "-10px",
          arrowLeft: "-30px",
        },
        {
          label: "gabodine",
          bottom: "20%",
          left: "-18%",
          arrowPath: "M15,50 Q30,40 50,38",
          arrowheadPath: "M48,35 L52,38 L48,41",
          arrowWidth: "60px",
          arrowHeight: "55px",
          arrowTop: "5px",
          arrowLeft: "0px",
        },
      ],
    }),
  }));

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Because every breath"
        highlightedText="deserves to be protected"
        description="At Qualiplus, we specialize in manufacturing premium filtration solutions that safeguard both air and water quality. With decades of expertise in industrial-grade dust filters and advanced water purification systems, we deliver reliable protection for your most critical environments."
      />

      <Section
        title="What we do here at"
        titleHighlight="Qualiplus"
        subtitle="We engineer and manufacture high-performance filtration systems for industrial and commercial applications. From dust cartridges that protect manufacturing facilities to advanced water purification systems for clean, safe water, our products combine innovative design with proven reliability. Every filter we produce is built to meet the highest standards of efficiency, durability, and performance."
        background="transparent"
      >
        {/* Products Section with Rounded Background */}
        <div className="bg-gradient-to-br from-gray-100 via-gray-50 to-white rounded-[3rem] p-8 md:p-12 lg:p-16 mb-24 shadow-xl border border-gray-200">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Line of{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Products</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 15"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <ellipse
                    cx="100"
                    cy="7"
                    rx="95"
                    ry="6"
                    stroke="#60A5FA"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <ProductCarousel products={products} />
        </div>

        <StatsSection />
      </Section>
    </main>
  );
}
