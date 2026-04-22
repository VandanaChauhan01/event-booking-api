const express = require("express");
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});