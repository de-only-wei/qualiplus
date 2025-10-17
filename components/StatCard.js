export default function StatCard({ icon, number, label }) {
  return (
    <div className="text-center group cursor-pointer">
      <div className="w-20 h-20 mx-auto mb-4 border-4 border-gray-800 rounded-full flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
        <div className="group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div className="text-5xl font-bold text-blue-600 mb-2 group-hover:scale-125 transition-all duration-300 group-hover:text-blue-700">
        {number}
      </div>
      <div className="text-gray-800 font-semibold text-lg group-hover:text-blue-700 transition-colors duration-300">
        {label}
      </div>
    </div>
  );
}
