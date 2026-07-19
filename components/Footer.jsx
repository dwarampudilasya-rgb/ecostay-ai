"use client";

import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`mt-16 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-gray-200 border-t border-gray-700"
          : "bg-gradient-to-r from-green-50 via-white to-blue-50 text-gray-700 border-t border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-green-600">
              🌿 EcoStay AI
            </h2>

            <p className="mt-4">
              Smart homestay booking platform powered by AI, helping travelers
              discover sustainable accommodations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li><a href="/">🏠 Home</a></li>
              <li><a href="/about">ℹ️ About</a></li>
              <li><a href="/dashboard">📊 Dashboard</a></li>
              <li><a href="/login">🔐 Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p>📍 India</p>
            <p className="mt-2">📧 support@ecostay.ai</p>
            <p className="mt-2">📞 +91 98765 43210</p>
          </div>

        </div>

        <div
          className={`text-center mt-10 pt-6 border-t ${
            darkMode
              ? "border-gray-700 text-gray-400"
              : "border-gray-300 text-gray-500"
          }`}
        >
          © 2026 EcoStay AI • Smart • Sustainable • AI Powered 🌿
        </div>

      </div>
    </footer>
  );
}