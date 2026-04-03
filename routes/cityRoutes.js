const router = require("express").Router();
const { getCityInfo } = require("../controllers/cityController");

router.get("/", getCityInfo);

module.exports = router;