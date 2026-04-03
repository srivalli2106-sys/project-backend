const router = require("express").Router();
const { getTraffic } = require("../controllers/trafficController");

router.get("/", getTraffic);

module.exports = router;