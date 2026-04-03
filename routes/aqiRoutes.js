const router = require("express").Router();
const { getAQI } = require("../controllers/aqiController");

router.get("/", getAQI);

module.exports = router;