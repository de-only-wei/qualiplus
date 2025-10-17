import Link from "next/link";

export default function ProductCard({ title, description, tags, image, href }) {
  return (
    <Link href={href || "#"} className="block group">
      <div className="bg-white rounded-3xl p-8 border-4 border-blue-600 hover:border-blue-700 hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 group-hover:bg-blue-200 group-hover:border-blue-300 transition-all duration-300 transform group-hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {image && (
            <div className="w-40 h-40 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
