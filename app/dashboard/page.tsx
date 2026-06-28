"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTheme } from "../../components/ThemeContext";

export default function Dashboard() {
  const { darkMode } = useTheme();

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      <h1 className="text-3xl font-bold text-center mt-10">
        Dashboard
      </h1>

      <p className="text-center mt-4">
        Welcome to the dashboard.
      </p>

      <Footer />
    </main>
  );
}