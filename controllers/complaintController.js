const Complaint = require("../models/complaintModel");
const sendEmail = require("../services/emailService");

exports.addComplaint = async (req, res) => {
  await Complaint.create(req.body);

  if (req.body.email) {
    await sendEmail(req.body.email);
  }

  res.json("Complaint submitted successfully");
};

exports.getComplaints = async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
};