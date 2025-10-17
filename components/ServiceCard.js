export default function ServiceCard({ title }) {
  return (
    <div className="bg-white rounded-3xl p-8 border-4 border-blue-600 hover:border-blue-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex items-center gap-4 relative z-10">
        <h3 className="text-2xl font-bold flex-1 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        <div className="w-14 h-14 border-4 border-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md group-hover:shadow-lg">
          <svg
            className="w-7 h-7 text-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
