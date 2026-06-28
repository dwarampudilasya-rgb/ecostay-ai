"use client";

import { useTheme } from "./ThemeContext";

export default function Hero() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`text-center py-20 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-5xl font-bold">
        Find Your Perfect Homestay
      </h1>

      <p className="mt-4 text-lg">
        Comfortable, affordable, and eco-friendly stays.
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
        Explore Now
      </button>
    </section>
  );
}