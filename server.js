const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json());

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

app.get("/", (req, res) => {
  res.send("Digital Twin City Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));

module.exports = app;