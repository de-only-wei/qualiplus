import ScrollReveal from "@/components/ScrollReveal";
import Section from "@/components/Section";

export default function DustCartridgesPage() {
  const relatedProducts = Array(3).fill(null);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <ScrollReveal animation="fadeInLeft">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200">
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <div className="text-center">
                    <div className="w-64 h-64 mx-auto bg-white rounded-full shadow-inner mb-6 flex items-center justify-center">
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full animate-pulse-subtle"></div>
                    </div>
                    <p className="text-gray-400 font-medium">
                      Dust Cartridge Image
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  feugiat lorem quis tortor aliquam, et accumsan arcu mollis.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Product Info */}
          <ScrollReveal animation="fadeInRight">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
                DUST <span className="text-blue-600">CARTRIDGES</span>
              </h1>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Tags/ Keywords", "Tags/ Keywords", "Tags/ Keywords"].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold border-2 border-blue-200 hover:bg-blue-200 hover:scale-105 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <p className="text-gray-700 leading-relaxed mb-12 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                feugiat lorem quis tortor aliquam, et accumsan arcu mollis.
              </p>

              <ScrollReveal animation="scaleIn" delay={0.2}>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-6 text-gray-900">
                        Technical Specifications
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi feugiat lorem quis tortor aliquam, et accumsan
                        arcu mollis. Curabitur rutrum enim in congue vehicula.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
                      <div className="relative h-96 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-64 h-64 mx-auto border-4 border-gray-400 rounded-lg relative animate-pulse-subtle">
                            <div className="absolute inset-2 border-2 border-gray-300"></div>
                            <div className="absolute inset-4 border-2 border-gray-300"></div>
                          </div>
                          <div className="flex justify-around text-sm font-semibold text-gray-600">
                            <span>gauze</span>
                            <span>gabodine</span>
                            <span>solid concrete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section
        title="Other Related"
        titleHighlight="Products"
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((_, index) => (
            <ScrollReveal key={index} animation="scaleIn" delay={index * 0.15}>
              <div className="group aspect-square bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-4 border-blue-600 hover:border-blue-400 relative overflow-hidden">
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
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
