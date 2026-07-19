"use client";

import { useTheme } from "./ThemeContext";
import { useState } from "react";
import axios from "axios";

export default function Hero() {
  const { darkMode } = useTheme();
  const [prompt, setPrompt] = useState("");
const [reply, setReply] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const getRecommendation = async () => {
  try {
    setLoading(true);
    setError("");
    setReply("");

    const res = await axios.post(
      "http://localhost:5000/api/ai/recommend",
      {
        prompt,
      }
    );

    setReply(res.data.reply);
  } catch (err) {
    setError("Unable to generate recommendation.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      className={`py-24 px-6 text-center bg-[length:400%_400%] animate-gradient transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-green-900 to-blue-900 text-white"
          : "bg-gradient-to-r from-green-200 via-white to-blue-200 text-black"
      }`}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold">
        🌿 EcoStay AI
      </h1>

      <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
        Discover beautiful eco-friendly homestays across India using Artificial
        Intelligence. Travel smarter, stay greener, and experience nature like
        never before.
      </p>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        <button className="px-8 py-3 rounded-full bg-green-600 text-white font-semibold shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300">
          Explore Homestays
        </button>

        <button className="px-8 py-3 rounded-full border-2 border-green-600 font-semibold hover:bg-green-600 hover:text-white hover:scale-105 transition-all duration-300">
          Learn More
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">

        <div>
          <h2 className="text-4xl font-bold text-green-500">250+</h2>
          <p className="mt-2">Homestays</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-500">100%</h2>
          <p className="mt-2">Eco Friendly</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-500">4.8★</h2>
          <p className="mt-2">Rating</p>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">

        <div className="bg-white/80 text-black rounded-2xl shadow-xl p-8 hover:-translate-y-2 hover:scale-105 transition-all duration-300">
          <div className="text-5xl">🏡</div>
          <h3 className="text-2xl font-bold mt-4">Quality Stays</h3>
          <p className="mt-3">
            Comfortable, verified, and affordable homestays across India.
          </p>
        </div>

        <div className="bg-white/80 text-black rounded-2xl shadow-xl p-8 hover:-translate-y-2 hover:scale-105 transition-all duration-300">
          <div className="text-5xl">🤖</div>
          <h3 className="text-2xl font-bold mt-4">AI Assistant</h3>
          <p className="mt-3">
            Personalized travel recommendations powered by Google Gemini AI.
          </p>
        </div>

        <div className="bg-white/80 text-black rounded-2xl shadow-xl p-8 hover:-translate-y-2 hover:scale-105 transition-all duration-300">
          <div className="text-5xl">🌱</div>
          <h3 className="text-2xl font-bold mt-4">Eco Tourism</h3>
          <p className="mt-3">
            Supporting sustainable travel while protecting the environment.
          </p>
        </div>

      </div>
      <div className="mt-20 max-w-3xl mx-auto bg-white/80 rounded-2xl shadow-xl p-8 text-black">

  <h2 className="text-3xl font-bold mb-5">
    🤖 AI Travel Assistant
  </h2>

  <input
    type="text"
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    placeholder="Example: Suggest an eco-friendly homestay in Araku for a family"
    className="w-full border rounded-lg p-3"
  />

  <button
    onClick={getRecommendation}
    className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
  >
    Get AI Recommendation
  </button>

  {loading && (
    <p className="mt-4 text-blue-600">
      Generating recommendation...
    </p>
  )}

  {error && (
    <p className="mt-4 text-red-600">
      {error}
    </p>
  )}

  {reply && (
    <div className="mt-6 p-5 bg-green-50 rounded-lg">
      <h3 className="font-bold text-xl mb-3">
        Recommendation
      </h3>

      <p>{reply}</p>
    </div>
  )}

</div>
    </section>
  );
}