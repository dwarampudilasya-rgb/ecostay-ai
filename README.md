# EcoStay AI – Smart Homestay & Eco-Tourism Booking Assistant

## Project Overview

EcoStay AI is a full-stack web application designed to help users discover and explore eco-friendly homestays. The platform promotes sustainable tourism by providing a simple interface for viewing, searching, creating, updating, and managing homestay listings. The backend uses MongoDB Atlas for persistent data storage and RESTful APIs for CRUD operations.

---

## Problem Statement

Travelers often struggle to find trustworthy eco-friendly accommodations with clear information and an easy booking experience. EcoStay AI addresses this challenge by providing a centralized platform for managing homestay listings while laying the foundation for future AI-powered recommendations.

---

## Features Implemented

### Frontend

* Responsive user interface
* Homestay listing display
* Integration with backend REST APIs

### Backend

* Express.js REST API
* Full CRUD functionality
* Search homestays by location
* MongoDB Atlas database integration using Mongoose
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

**Database Chosen:** MongoDB Atlas

### Why MongoDB?

* Flexible document-based database
* Easy integration with Node.js using Mongoose
* Free cloud hosting through MongoDB Atlas
* Suitable for storing homestay records with scalable document structures

---

## Database Schema

### Homestay

| Field    | Type   | Required |
| -------- | ------ | -------- |
| name     | String | Yes      |
| location | String | Yes      |
| price    | Number | Yes      |

**Schema Diagram**

> *(Insert the Week 5 Schema Diagram image here after creating it.)*

Example:

```text
+----------------------+
|      Homestay        |
+----------------------+
| _id                  |
| name                 |
| location             |
| price                |
+----------------------+
```

---

## Database Setup

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Whitelist your IP address.
4. Copy the MongoDB connection string.
5. Create a `.env` file inside the backend folder.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

6. Install dependencies.

```bash
npm install
```

7. Start the backend server.

```bash
npm run dev
```

---

## AI Integration

The project is designed to integrate Google Gemini API in future development.

Planned AI features include:

* Personalized homestay recommendations
* Intelligent travel assistant
* Natural language query support
* Smart travel suggestions

---

## Tech Stack

* Frontend: React.js
* Backend: Node.js
* Framework: Express.js
* Database: MongoDB Atlas
* ODM: Mongoose
* AI: Google Gemini API (Planned)

---

## Project Structure

```text
homestay-app/
│
├── app/
├── components/
├── backend/
│   ├── models/
│   │   └── Homestay.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── README.md
└── package.json
```

---

## Current Progress

* Frontend setup completed
* Express backend developed
* MongoDB Atlas integrated
* Mongoose model created
* Full CRUD APIs implemented
* Search endpoint implemented
* Data persistence verified
* GitHub repository updated

---

## Future Improvements

* User Authentication
* Booking System
* Payment Gateway Integration
* Review and Rating System
* AI-powered Personalized Recommendations
* Interactive Maps
* Smart Itinerary Planning
* Admin Dashboard
