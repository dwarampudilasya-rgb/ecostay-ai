const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// In-memory data
let homestays = [
  {
    id: 1,
    name: "Eco Cottage",
    location: "Araku",
    price: 2500,
  },
  {
    id: 2,
    name: "Mountain View Stay",
    location: "Ooty",
    price: 3200,
  },
  {
    id: 3,
    name: "Forest Retreat",
    location: "Coorg",
    price: 2800,
  },
];
// Test Route
app.get("/", (req, res) => {
  res.send("🚀 EcoStay Backend is Running!");
});
app.get("/api/homestays", (req, res) => {
  res.status(200).json(homestays);
});
app.get("/api/homestays/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const homestay = homestays.find((h) => h.id === id);

  if (!homestay) {
    return res.status(404).json({ message: "Homestay not found" });
  }

  res.status(200).json(homestay);
});
app.post("/api/homestays", (req, res) => {
  const { name, location, price } = req.body;

  const newHomestay = {
    id: homestays.length + 1,
    name,
    location,
    price,
  };

  homestays.push(newHomestay);

  res.status(201).json(newHomestay);
});
app.put("/api/homestays/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const homestay = homestays.find((h) => h.id === id);

  if (!homestay) {
    return res.status(404).json({ message: "Homestay not found" });
  }

  homestay.name = req.body.name || homestay.name;
  homestay.location = req.body.location || homestay.location;
  homestay.price = req.body.price || homestay.price;

  res.status(200).json(homestay);
});
app.delete("/api/homestays/:id", (req, res) => {
  const id = parseInt(req.params.id);

  homestays = homestays.filter((h) => h.id !== id);

  res.status(204).send();
});

app.get("/api/homestays/search/:location", (req, res) => {
  const location = req.params.location.toLowerCase();

  const result = homestays.filter((h) =>
    h.location.toLowerCase().includes(location)
  );

  res.status(200).json(result);
});
// Port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});