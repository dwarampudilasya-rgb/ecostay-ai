"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTheme } from "../../components/ThemeContext";
import AuthGuard from "../../components/AuthGuard";
export default function About() {
  const { darkMode } = useTheme();

return (
  <AuthGuard>
    <main
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-green-50 via-white to-blue-50 text-black"
      }`}
    >
      <Navbar />

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-5xl font-bold text-center text-green-600">
          🌿 About EcoStay AI
        </h1>

        <p className="text-center mt-6 text-lg max-w-3xl mx-auto">
          EcoStay AI is a smart homestay booking platform that combines modern
          web technologies with Artificial Intelligence to help travelers find
          sustainable, eco-friendly accommodations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl">🏡</div>
            <h2 className="text-2xl font-bold mt-4 text-green-700">
              Homestays
            </h2>
            <p className="mt-3 text-gray-600">
              Explore comfortable and eco-friendly stays across India.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl">🤖</div>
            <h2 className="text-2xl font-bold mt-4 text-blue-700">
              AI Powered
            </h2>
            <p className="mt-3 text-gray-600">
              Intelligent recommendations using Google Gemini AI.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl">🌱</div>
            <h2 className="text-2xl font-bold mt-4 text-green-700">
              Sustainable
            </h2>
            <p className="mt-3 text-gray-600">
              Supporting responsible tourism for a greener future.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  </AuthGuard>
);
}