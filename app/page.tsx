"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

type Homestay = {
  id: number;
  name: string;
  location: string;
  price: number;
};

export default function Home() {
  const { darkMode } = useTheme();

  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<Homestay[]>("http://localhost:5000/api/homestays")
      .then((response) => {
        setHomestays(response.data);
        setLoading(false);
      })
      .catch((error) => {
  console.error(error);
  setError("Unable to load homestays.");
  setLoading(false);
});
  }, []);

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      <Hero />

      {error && (
        <p className="text-center text-red-500 font-semibold mt-4">
          {error}
        </p>
      )}

      {loading ? (
        <h2 className="text-center text-xl font-semibold mt-10">
          Loading homestays...
        </h2>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 p-8">
          {homestays.map((stay) => (
            <Card
              key={stay.id}
              title={stay.name}
              description={`${stay.location} • ₹${stay.price}/night`}
            />
          ))}
        </div>
      )}

      <Footer />
    </main>
  );
}