"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[720px] px-4">
      <nav className="bg-white/95 backdrop-blur-sm rounded-full shadow-xl px-8 py-4 border border-gray-100">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-md group-hover:shadow-lg transition-all flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-sm transform rotate-45"></div>
            </div>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-all relative ${
                isActive("/")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>
            <Link
              href="/products"
              className={`text-sm font-semibold transition-all relative ${
                isActive("/products") || pathname.startsWith("/products/")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Products
              {(isActive("/products") || pathname.startsWith("/products/")) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>
            <Link
              href="/about"
              className={`text-sm font-semibold transition-all relative ${
                isActive("/about")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              About Us
              {isActive("/about") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-semibold transition-all relative ${
                isActive("/contact")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
