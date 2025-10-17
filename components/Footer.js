export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Security
            </a>
            <span className="text-blue-300">•</span>
            <a
              href="#"
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Privacy
            </a>
            <span className="text-blue-300">•</span>
            <a
              href="#"
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Terms
            </a>
          </div>

          <p className="text-center text-blue-50 font-medium">
            Because every breath deserves to be protected.
          </p>

          <p className="font-semibold text-blue-50">©QUALIPLUS 2025</p>
        </div>
      </div>
    </footer>
  );
}
