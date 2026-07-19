"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTheme } from "../../components/ThemeContext";
import AuthGuard from "../../components/AuthGuard";

export default function Dashboard() {
  const { darkMode } = useTheme();

  return (
  <AuthGuard>
    <main
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 via-white to-green-50 text-black"
      }`}
    >
      <Navbar />

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-5xl font-bold text-center text-green-600 mb-12">
          📊 Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl">🏡</div>
            <h2 className="font-bold mt-3">Homestays</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">3</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl">⭐</div>
            <h2 className="font-bold mt-3">Rating</h2>
            <p className="text-3xl font-bold text-yellow-500 mt-2">4.8</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl">🌿</div>
            <h2 className="font-bold mt-3">Eco Score</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">100%</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl">👥</div>
            <h2 className="font-bold mt-3">Visitors</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">250+</p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  </AuthGuard>
);
}