const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const rateLimit = require("express-rate-limit");
const Homestay = require("./models/Homestay");
const User = require("./models/User");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
// ================= RATE LIMITER =================
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    message: "Too many login/register attempts. Please try again after 15 minutes."
  }
});
// ================= REGISTER USER =================
app.post(
  "/api/auth/register",
  authLimiter,
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if email already exists
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          message: "Email already registered",
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const user = new User({
        email,
        password: hashedPassword,
      });

      await user.save();

      res.status(201).json({
        message: "User registered successfully",
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);
// Test Route
app.get("/", (req, res) => {
  res.send("🚀 EcoStay Backend is Running!");
});
// ================= LOGIN USER =================
app.post(
  "/api/auth/login",
  authLimiter,
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      // Find user
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      // Generate JWT
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.status(200).json({
        message: "Login successful",
        token,
      });

    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);
// ================= JWT AUTH MIDDLEWARE =================
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Access denied. No token provided.",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Invalid token format.",
   
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
}

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
// ================= AI TRAVEL ASSISTANT =================

app.post("/api/ai/recommend", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: "Prompt is required.",
      });
    }

    const response = await axios.post(
      "https://router.huggingface.co/v1/chat/completions",
      {
        model: "Qwen/Qwen2.5-7B-Instruct",
        messages: [
          {
            role: "system",
            content:
              "You are EcoStay AI, a travel assistant that recommends eco-friendly homestays in a friendly and helpful way.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 200,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      reply: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.error(
      error.response?.data || error.message
    );

    res.status(500).json({
      message: "Failed to generate AI response.",
    });
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