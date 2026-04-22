const express = require("express");
const router = express.Router();

const { createEvent, getEvents } = require("../controllers/eventController");
const authMiddleware = require("../middleware/authMiddleware");

// Public route
router.get("/", getEvents);

// Protected route
router.post("/", authMiddleware, createEvent);

module.exports = router;