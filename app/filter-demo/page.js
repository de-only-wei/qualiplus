import DustCartridgeFilter from "@/components/filters/DustCartridgeFilter";

export default function FilterDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Animated Dust Filter
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Hover over the filter to see the animation
        </p>

        <div className="bg-white rounded-2xl shadow-2xl p-12 inline-block">
          <DustCartridgeFilter />
        </div>

        <div className="mt-12 text-left bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            How it works
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                The filter layers transform and rotate when you hover over them
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Each layer animates with a staggered timing for a natural effect
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Decorative elements float and rotate to add dynamic motion
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Smooth transitions using cubic-bezier easing for professional
                feel
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
