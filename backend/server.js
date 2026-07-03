const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const Homestay = require("./models/Homestay");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 EcoStay Backend is Running!");
});

// GET all homestays
app.get("/api/homestays", async (req, res) => {
  try {
    const homestays = await Homestay.find();
    res.status(200).json(homestays);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single homestay
app.get("/api/homestays/:id", async (req, res) => {
  try {
    const homestay = await Homestay.findById(req.params.id);

    if (!homestay) {
      return res.status(404).json({ message: "Homestay not found" });
    }

    res.status(200).json(homestay);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE homestay
app.post("/api/homestays", async (req, res) => {
  try {
    const homestay = new Homestay({
      name: req.body.name,
      location: req.body.location,
      price: req.body.price,
    });

    const savedHomestay = await homestay.save();

    res.status(201).json(savedHomestay);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE homestay
app.put("/api/homestays/:id", async (req, res) => {
  try {
    const homestay = await Homestay.findById(req.params.id);

    if (!homestay) {
      return res.status(404).json({ message: "Homestay not found" });
    }

    homestay.name = req.body.name || homestay.name;
    homestay.location = req.body.location || homestay.location;
    homestay.price = req.body.price || homestay.price;

    const updatedHomestay = await homestay.save();

    res.status(200).json(updatedHomestay);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE homestay
app.delete("/api/homestays/:id", async (req, res) => {
  try {
    const homestay = await Homestay.findById(req.params.id);

    if (!homestay) {
      return res.status(404).json({ message: "Homestay not found" });
    }

    await homestay.deleteOne();

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// SEARCH by location
app.get("/api/homestays/search/:location", async (req, res) => {
  try {
    const homestays = await Homestay.find({
      location: {
        $regex: req.params.location,
        $options: "i",
      },
    });

    res.status(200).json(homestays);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Connect MongoDB
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });