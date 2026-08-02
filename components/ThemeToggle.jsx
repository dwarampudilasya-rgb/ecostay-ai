"use client";

import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Theme Settings</h1>

      <button
        onClick={toggleTheme}
        className="px-6 py-3 bg-green-600 text-white rounded-lg"
      >
        {darkMode ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
      </button>
    </div>
  );
}