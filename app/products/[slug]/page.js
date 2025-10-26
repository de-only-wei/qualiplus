import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Section from "@/components/Section";
import ProductVisualization from "@/components/ProductVisualization";
import {
  getProductBySlug,
  getRelatedProducts,
  getAllProducts,
} from "@/lib/products";

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = getRelatedProducts(product.id);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Image or SVG Visualization */}
          <ScrollReveal animation="fadeInLeft">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200">
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl relative overflow-hidden">
                  <ProductVisualization
                    product={product}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Additional Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {product.images.slice(1).map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200"
                    >
                      <div className="aspect-square relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                        {!img.includes("placeholder") ? (
                          <Image
                            src={img}
                            alt={`${product.name} view ${idx + 2}`}
                            fill
                            className="object-contain p-2"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.shortDescription}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Product Info */}
          <ScrollReveal animation="fadeInRight">
            <div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 group"
              >
                <svg
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Products
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
                {product.name.split(" ")[0]}{" "}
                <span className="text-blue-600">
                  {product.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <div className="flex flex-wrap gap-3 mb-10">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold border-2 border-blue-200 hover:bg-blue-200 hover:scale-105 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-12 text-lg">
                {product.fullDescription}
              </p>

              <ScrollReveal animation="scaleIn" delay={0.2}>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-6 text-gray-900">
                        {product.specifications.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {product.specifications.description}
                      </p>
                    </div>

                    {product.specifications.layers &&
                      product.specifications.layers.length > 0 && (
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
                          <div className="relative min-h-96 flex items-center justify-center">
                            {product.visualizationType === "svg-filter" &&
                            product.filterSvgId ? (
                              <div className="w-full max-w-lg mx-auto p-4">
                                <ProductVisualization product={product} />
                                <div className="flex justify-around text-sm font-semibold text-gray-600 mt-6">
                                  {product.specifications.layers.map(
                                    (layer, index) => (
                                      <span key={index} className="px-2">
                                        {layer}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="text-center space-y-4">
                                <div className="w-64 h-64 mx-auto border-4 border-gray-400 rounded-lg relative animate-pulse-subtle">
                                  <div className="absolute inset-2 border-2 border-gray-300"></div>
                                  <div className="absolute inset-4 border-2 border-gray-300"></div>
                                </div>
                                <div className="flex justify-around text-sm font-semibold text-gray-600">
                                  {product.specifications.layers.map(
                                    (layer, index) => (
                                      <span key={index}>{layer}</span>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                    {/* Features List */}
                    {product.specifications.features &&
                      product.specifications.features.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          {product.specifications.features.map(
                            (feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                              >
                                <svg
                                  className="w-6 h-6 text-blue-600 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-gray-700 font-medium">
                                  {feature}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {relatedProducts.length > 0 && (
        <Section
          title="Other Related"
          titleHighlight="Products"
          background="white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <ScrollReveal
                key={relatedProduct.id}
                animation="scaleIn"
                delay={index * 0.15}
              >
                <Link
                  href={`/products/${relatedProduct.slug}`}
                  className="group block aspect-square bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-4 border-blue-600 hover:border-blue-400 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-full h-full flex items-center justify-center text-white relative z-10">
                    <div className="text-center p-6">
                      <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                        {relatedProduct.name}
                      </div>
                      <p className="text-blue-100 text-sm mb-4 opacity-80">
                        {relatedProduct.shortDescription.slice(0, 60)}...
                      </p>
                      <div className="text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                        View Details →
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}
