import Link from "next/link";
import Image from "next/image";

export default function ProductListCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-blue-600 hover:border-blue-400 h-full flex flex-col">
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
          {product.images[0] && !product.images[0].includes("placeholder") ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {product.name}
                </div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Product Info */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4 flex-1 line-clamp-2">
            {product.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.slice(0, 2).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
            View Details
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
