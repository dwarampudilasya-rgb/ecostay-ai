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
  const [name, setName] = useState("");
const [location, setLocation] = useState("");
const [price, setPrice] = useState("");
const [success, setSuccess] = useState("");
const [editingId, setEditingId] = useState("");
const [isEditing, setIsEditing] = useState(false);

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
  const addHomestay = async () => {
  if (!name || !location || !price) {
    setError("Please fill all fields.");
    return;
  }

  try {
    await axios.post("http://localhost:5000/api/homestays", {
      name,
      location,
      price: Number(price),
    });

    setSuccess("Homestay added successfully!");
    setError("");

    setName("");
    setLocation("");
    setPrice("");

    const response = await axios.get("http://localhost:5000/api/homestays");
    setHomestays(response.data);

  } catch (err) {
    setError("Failed to add homestay.");
  }
};
const deleteHomestay = async (id: string) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this homestay?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/homestays/${id}`
    );

    const response = await axios.get(
      "http://localhost:5000/api/homestays"
    );

    setHomestays(response.data);
  } catch (err) {
    setError("Failed to delete homestay.");
  }
};
const editHomestay = (stay: any) => {
  setEditingId(stay._id);
  setName(stay.name);
  setLocation(stay.location);
  setPrice(stay.price.toString());
  setIsEditing(true);
};
const updateHomestay = async () => {
  try {
    await axios.put(
      `http://localhost:5000/api/homestays/${editingId}`,
      {
        name,
        location,
        price: Number(price),
      }
    );

    const response = await axios.get(
      "http://localhost:5000/api/homestays"
    );

    setHomestays(response.data);

    setSuccess("Homestay updated successfully!");
    setError("");

    setName("");
    setLocation("");
    setPrice("");

    setEditingId("");
    setIsEditing(false);
  } catch (err) {
    setError("Failed to update homestay.");
  }
};
  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      <Hero />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
  <h2 className="text-2xl font-bold mb-5 text-center text-green-600">
  {isEditing ? "Edit Homestay" : "Add New Homestay"}
</h2>

  {success && (
    <p className="text-green-600 font-semibold mb-4">
      {success}
    </p>
  )}

  <div className="grid md:grid-cols-3 gap-4">
    <input
      type="text"
      placeholder="Homestay Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border rounded-lg p-3"
    />

    <input
      type="text"
      placeholder="Location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="border rounded-lg p-3"
    />

    <input
      type="number"
      placeholder="Price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      className="border rounded-lg p-3"
    />
  </div>

<button
  onClick={isEditing ? updateHomestay : addHomestay}
  className="mt-5 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
>
  {isEditing ? "Update Homestay" : "Add Homestay"}
</button>
</div>

      {error && (
        <p className="text-center text-red-500 font-semibold mt-4">
          {error}
        </p>
      )}

      {loading ? (
  <h2 className="text-center text-xl font-semibold mt-10">
    Loading homestays...
  </h2>
) : 
        homestays.length === 0 ? (
  <div className="text-center py-16">
    <h2 className="text-3xl font-bold text-gray-500">
      No Homestays Yet
    </h2>

    <p className="mt-3 text-gray-400">
      Add your first eco homestay using the form above.
    </p>
  </div>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
    {homestays.map((stay: any) => (
      <Card
        key={stay._id}
        title={stay.name}
        description={`${stay.location} • ₹${stay.price}/night`}
        onEdit={() => editHomestay(stay)}
        onDelete={() => deleteHomestay(stay._id)}
      />
    ))}
  </div>
)}
      

      <Footer />
    </main>
  );
}