# 🌆 Digital Twin City Dashboard – Backend

## 📌 Project Overview

The **Digital Twin City Dashboard Backend** is a Node.js + Express.js server that provides location-based smart city insights.

This backend powers a dashboard where users enter a city name and receive:

* 🌡 Temperature
* 🌦 Weather conditions
* 🌫 Air Quality Index (AQI)
* 🚦 Traffic information
* 🗺 Map data support
* 📰 City news updates
* 🏛 City history and description
* 🚨 Emergency alerts
* 📊 Analytics data for charts
* 🧾 Citizen complaint submission
* 🔐 Secure login & signup authentication

This project simulates a **Digital Twin City system** without real-time sensors or 3D rendering, making it suitable for academic implementation.

---

# 🧠 System Architecture

```
Frontend Dashboard
        ↓
Node.js + Express Backend
        ↓
External APIs
(OpenWeather, AQI, NewsAPI, Wikipedia)
        ↓
MongoDB Database
(User accounts + complaints)
```

---

# 🚀 Features

### Authentication

* User Signup
* User Login
* Password encryption using bcrypt
* JWT-based authentication

### Smart City Modules

The backend provides APIs for:

* Weather details
* Air quality index
* Traffic information
* Pollution data
* Emergency alerts
* City history
* News updates
* Map integration support
* Complaint submission system
* Analytics-ready datasets

---

# 🏗 Project Folder Structure

```
project-backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── weatherController.js
│   ├── aqiController.js
│   ├── trafficController.js
│   ├── cityController.js
│   ├── newsController.js
│   └── complaintController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── userModel.js
│   └── complaintModel.js
│
├── routes
│   ├── authRoutes.js
│   ├── weatherRoutes.js
│   ├── aqiRoutes.js
│   ├── trafficRoutes.js
│   ├── cityRoutes.js
│   ├── newsRoutes.js
│   └── complaintRoutes.js
│
├── services
│   └── apiService.js
│
├── utils
│   └── analyticsHelper.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation Guide

### Step 1: Clone Repository

```
git clone https://github.com/your-username/project-backend.git
```

### Step 2: Move into Project Directory

```
cd project-backend
```

### Step 3: Install Dependencies

```
npm install
```

### Step 4: Create Environment Variables

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

WEATHER_API_KEY=your_key
AQI_API_KEY=your_key
NEWS_API_KEY=your_key
TRAFFIC_API_KEY=your_key
```

### Step 5: Start Server

Development mode:

```
npm run dev
```

Production mode:

```
npm start
```

Server runs at:

```
http://localhost:5000
```

---

# 🔐 Authentication APIs

### Register User

```
POST /api/auth/signup
```

Body:

```
{
  "name": "User",
  "email": "user@email.com",
  "password": "123456"
}
```

---

### Login User

```
POST /api/auth/login
```

Returns JWT token for protected routes.

---

# 🌦 Weather API

Fetch temperature and weather conditions:

```
GET /api/weather?city=Hyderabad
```

Returns:

```
temperature
humidity
windSpeed
weatherCondition
```

---

# 🌫 Air Quality API

Fetch AQI information:

```
GET /api/aqi?city=Hyderabad
```

Returns:

```
aqiLevel
pollutionStatus
pm25
pm10
```

---

# 🚦 Traffic API

Fetch congestion information:

```
GET /api/traffic?city=Hyderabad
```

Returns:

```
trafficLevel
roadCondition
congestionIndex
```

---

# 🏛 City Information API

Fetch city overview and history:

```
GET /api/city?city=Hyderabad
```

Returns:

```
cityDescription
population
timezone
country
historySummary
```

Data fetched using Wikipedia API.

---

# 📰 News API

Fetch latest city-related news:

```
GET /api/news?city=Hyderabad
```

Returns:

```
headline
source
publishedDate
url
```

---

# 🚨 Emergency Alerts API

Fetch safety alerts:

```
GET /api/alerts?city=Hyderabad
```

Uses static JSON alerts dataset for academic simulation.

---

# 🧾 Citizen Complaint API

Submit complaint:

```
POST /api/complaints
```

Example:

```
{
  "title": "Water leakage",
  "description": "Leakage near main road",
  "city": "Hyderabad"
}
```

Fetch complaints:

```
GET /api/complaints
```

Stored inside MongoDB.

---

# 📊 Analytics Data API

Provides structured datasets for charts:

```
GET /api/analytics?city=Hyderabad
```

Used to generate:

* temperature trends
* AQI comparison
* complaint statistics
* pollution charts

Frontend integrates Chart.js for visualization.

---

# 🗺 Maps Integration Support

Backend returns coordinates for map rendering:

```
GET /api/location?city=Hyderabad
```

Frontend uses Google Maps or Leaflet to display map layers.

---

# 🧰 Technologies Used

Backend Framework:

* Node.js
* Express.js

Database:

* MongoDB

Authentication:

* JWT
* bcrypt

External APIs:

* OpenWeather API
* WAQI API
* NewsAPI
* Wikipedia API

Utilities:

* dotenv
* axios
* mongoose

---

# 📈 Future Enhancements

Possible upgrades:

* Role-based admin dashboard
* Real-time alerts integration
* IoT sensor simulation
* Smart traffic prediction
* Historical analytics storage
* Live pollution heatmaps

---

# 👨‍💻 Project Purpose

This backend simulates a **Digital Twin City Dashboard system** that provides centralized monitoring of urban indicators using API-based datasets.

Designed as an academic smart-city analytics platform demonstrating integration of multiple real-world services into a unified dashboard environment.
