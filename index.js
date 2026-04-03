const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// Connect database
connectDB();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/weather", require("./routes/weatherRoutes"));
app.use("/api/aqi", require("./routes/aqiRoutes"));
app.use("/api/traffic", require("./routes/trafficRoutes"));
app.use("/api/city", require("./routes/cityRoutes"));
app.use("/api/news", require("./routes/newsRoutes"));
app.use("/api/complaints", require("./routes/complaintRoutes"));
app.use("/api/analytics", require("./routes/analyticsRoutes"));
app.use("/api/alerts", require("./routes/alertRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));

// Root route
app.get("/", (req, res) => {
  res.send("Digital Twin City Backend Running 🚀");
});

// IMPORTANT for Vercel
module.exports = app;