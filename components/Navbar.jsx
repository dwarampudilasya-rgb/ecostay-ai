"use client";

import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 shadow-md transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <div className="text-xl font-bold">
        EcoStay
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-6">
        <a href="/" className="hover:text-blue-500">Home</a>
        <a href="/about" className="hover:text-blue-500">About</a>
        <a href="/dashboard" className="hover:text-blue-500">Dashboard</a>
        <a href="/login" className="hover:text-blue-500">Login</a>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}