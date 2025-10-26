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
    // Pass through visualization type and filter SVG ID for animated filters
    visualizationType: product.visualizationType,
    filterSvgId: product.filterSvgId,
    name: product.name,
    shortDescription: product.shortDescription,
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
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[140%]"
                  viewBox="0 0 160 68"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M71.9911 63.0738C89.2911 61.8748 108.532 59.4394 127.282 53.9774C133.147 52.4202 138.81 50.1626 144.151 47.2518C146.561 45.8991 148.829 44.3001 150.919 42.4796C152.436 41.0895 153.688 39.428 154.613 37.5777C156.803 33.2295 155.935 28.9122 152.144 25.9277C149.874 24.1824 147.403 22.7249 144.787 21.5877C137.233 18.3453 129.351 15.9608 121.284 14.4775C114.616 13.2804 107.857 12.6804 101.087 12.6847C100.292 12.7534 99.492 12.6841 98.72 12.4798C98.1576 12.251 97.3784 11.4886 97.4243 11.0363C97.5028 10.6721 97.654 10.3283 97.8687 10.0262C98.0834 9.72405 98.3569 9.47001 98.6724 9.2798C99.3378 9.02878 100.05 8.932 100.758 8.99654C111.731 8.38731 122.437 10.1178 132.923 13.2515C138.04 14.798 143.068 16.6357 147.983 18.7558C150.589 19.915 153.006 21.4702 155.152 23.3679C159.672 27.2785 160.813 32.8063 158.605 38.3954C157.441 41.2492 155.627 43.781 153.312 45.7835C149.251 49.4283 144.497 51.8565 139.535 53.9121C129.928 57.8727 119.902 60.3493 109.751 62.2965C97.669 64.6129 85.4548 66.1563 73.1803 66.9176C58.4673 67.8356 43.8081 67.7488 29.2584 64.9644C23.4577 63.9352 17.8438 62.0151 12.6095 59.2702C9.16614 57.5425 6.1023 55.124 3.60308 52.1609C-0.389144 47.1811 -1.01767 41.7231 1.48824 35.8908C2.96473 32.6851 5.02338 29.7918 7.5563 27.3626C14.0804 20.7415 21.918 16.1322 30.2719 12.3824C41.1644 7.48752 52.6158 4.55434 64.3269 2.535C79.2921 0.0905322 94.4876 -0.589146 109.611 0.509483C122.701 1.3738 135.652 3.20437 148.192 7.36427C149.797 7.89317 151.35 8.57733 152.918 9.22681C154.009 9.686 154.738 10.4422 154.339 11.7518C154.042 12.7338 153.021 13.0698 151.615 12.4978C143.7 9.28773 135.358 7.86417 127.009 6.48338C117.237 4.95316 107.371 4.1404 97.486 4.05141C80.0023 3.69246 62.5688 6.00738 45.7706 10.9185C36.6688 13.4961 27.9758 17.3757 19.9524 22.4407C15.7591 25.0267 11.9759 28.2429 8.73116 31.98C7.51631 33.4118 6.45347 34.9699 5.56024 36.6284C2.83111 41.7915 3.51837 46.7117 7.69078 50.7063C9.85301 52.7104 12.243 54.4448 14.8099 55.8728C20.4915 59.0587 26.7316 60.5794 33.099 61.6016C45.2619 63.5705 57.5606 63.7749 71.9911 63.0738Z"
                    fill="url(#paint0_linear_home)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_home"
                      x1="24.5225"
                      y1="69.2068"
                      x2="135.694"
                      y2="-0.572154"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0FAFFF" />
                      <stop offset="1" stopColor="#849DFF" />
                    </linearGradient>
                  </defs>
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
