# EcoStay AI – Smart Homestay & Eco-Tourism Booking Assistant

## Project Overview

EcoStay AI is a full-stack web application designed to help users discover and explore eco-friendly homestays. The platform promotes sustainable tourism by providing an intuitive interface for viewing, searching, creating, updating, and managing homestay listings. The application uses MongoDB Atlas for persistent data storage, Express.js REST APIs for backend services, and a modern Next.js frontend deployed on Vercel.

---

# 🌐 Live Deployment

**Frontend (Vercel)**
https://ecostay-ai-ten.vercel.app/

**Backend (Render)**
https://ecostay-backend-k5zj.onrender.com

---

## Problem Statement

Travelers often struggle to find trustworthy eco-friendly accommodations with clear information and an easy booking experience. EcoStay AI addresses this challenge by providing a centralized platform for managing homestay listings while laying the foundation for AI-powered travel recommendations.

---

## Features Implemented

### Frontend

* Responsive user interface
* Dark/Light theme support
* Homestay listing display
* Add, Edit, Update, and Delete homestays
* Dashboard page
* Login page
* AI Recommendation interface
* Integration with backend REST APIs

### Backend

* Express.js REST API
* Complete CRUD operations
* Search homestays by location
* MongoDB Atlas integration using Mongoose
* JWT-based authentication support
* Environment variable configuration using `.env`

---

## REST API Endpoints

| Method | Endpoint                          | Description                  |
| ------ | --------------------------------- | ---------------------------- |
| GET    | `/api/homestays`                  | Get all homestays            |
| GET    | `/api/homestays/:id`              | Get a homestay by ID         |
| POST   | `/api/homestays`                  | Create a new homestay        |
| PUT    | `/api/homestays/:id`              | Update a homestay            |
| DELETE | `/api/homestays/:id`              | Delete a homestay            |
| GET    | `/api/homestays/search/:location` | Search homestays by location |

---

## Database

**Database:** MongoDB Atlas

### Why MongoDB Atlas?

* Flexible document-oriented database
* Cloud-hosted and scalable
* Easy integration with Node.js using Mongoose
* Suitable for storing homestay information efficiently

---

## Database Schema

### Homestay

| Field    | Type   | Required |
| -------- | ------ | -------- |
| name     | String | Yes      |
| location | String | Yes      |
| price    | Number | Yes      |

---

## Database Setup

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Add the required IP access.
4. Obtain the MongoDB connection string.
5. Create a `.env` file inside the backend folder.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
HF_API_KEY=your_api_key
```

Install dependencies:

```bash
npm install
```

Run the backend:

```bash
npm start
```

---

## AI Integration

EcoStay AI includes an AI-powered travel recommendation feature that assists users in discovering eco-friendly travel destinations and homestays using natural language prompts.

---

## Tech Stack

### Frontend

* Next.js
* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* Mongoose
* JWT Authentication

### Database

* MongoDB Atlas

### AI

* Google Gemini API

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Project Structure

```text
ecostay-ai/
│
├── app/
├── components/
├── public/
├── backend/
│   ├── models/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
├── package.json
└── next.config.js
```

---

## Current Progress

* ✅ Responsive frontend completed
* ✅ Backend REST API completed
* ✅ MongoDB Atlas integrated
* ✅ Full CRUD functionality implemented
* ✅ Dashboard implemented
* ✅ Authentication module integrated
* ✅ AI Recommendation feature implemented
* ✅ Frontend deployed on Vercel
* ✅ Backend deployed on Render
* ✅ Public application accessible online

---

## Known Limitations (Free Tier)

* Render free instances automatically spin down after periods of inactivity.
* The first backend request after inactivity may take **30–60 seconds** while the service wakes up.
* Performance may be slower than paid hosting during peak usage.

---

## Future Improvements

* Booking system
* Payment gateway integration
* Review and rating system
* Advanced AI-based personalized recommendations
* Interactive maps
* Smart itinerary planning
* Admin dashboard
* Email notifications
* Mobile application support

---

## Author

**Lasya Dwarampudi**

**Intern ID:** 26100882
