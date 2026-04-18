# 🎟️ Event Booking API

## 📌 Description
A backend API for managing events and bookings.  
Users can register, login, view events, and book tickets.

---

## 🚀 Features
- User Authentication (JWT)
- Create, Update, Delete Events
- Book Events
- Protected Routes
- Role-based Access (Admin/User)

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## 📡 API Endpoints

### Auth
POST /api/auth/register  
POST /api/auth/login  

### Events
GET /api/events  
POST /api/events  
PUT /api/events/:id  
DELETE /api/events/:id  

### Bookings
POST /api/bookings  
GET /api/bookings  

---

## ⚙️ How to Run

```bash
git clone https://github.com/VandanaChauhan01/event-booking-api
cd event-booking-api
npm install
npm run dev
