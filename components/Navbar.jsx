"use client";

import { useTheme } from "./ThemeContext";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
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
     <div className="hidden md:flex gap-6 items-center">
  <a href="/" className="hover:text-blue-500">Home</a>
  <a href="/about" className="hover:text-blue-500">About</a>
  <a href="/dashboard" className="hover:text-blue-500">Dashboard</a>
  <a href="/login" className="hover:text-blue-500">Login</a>

  <button
    onClick={handleLogout}
    className="text-red-500 hover:text-red-700 font-semibold"
  >
    Logout
  </button>
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