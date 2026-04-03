const router = require("express").Router();
const {
  addComplaint,
  getComplaints
} = require("../controllers/complaintController");

router.post("/", addComplaint);
router.get("/", getComplaints);

module.exports = router;